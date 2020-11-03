import { useEffect, useReducer, useState } from "react";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "../common/action";

/**
 * http Reducer
 * @param {*} state
 * @param {*} action
 */
const httpReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        status: 1,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        status: 2,
        data: action.payload,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        status: 2,
        error: action.payload || "出错了",
      };
    default:
      throw new Error();
  }
};

/**
 * http 请求
 * @param {*} fn
 * @param {*} initOptions
 * @param {*} initData
 */
export const useHttp = (fn, initOptions = {}, initData = null) => {
  const [options, setOptions] = useState();
  const [state, dispatch] = useReducer(httpReducer, {
    status: 0, // 0初始状态，1请求中，2请求结束
    error: null,
    data: initData,
  });

  useEffect(() => {
    if (!options || !fn) return;
    (async () => {
      dispatch({ type: FETCH_INIT });
      const [res, err] = await fn(options);
      if (err) {
        let msg = "抱歉，出错了";
        if (err.response && err.response.data && err.response.data.message) {
          msg = err.response.data.message;
        } else if (err.message) {
          msg = err.message;
        }
        dispatch({ type: FETCH_FAILURE, payload: msg });
        return;
      }
      if (res.code !== 0) {
        dispatch({
          type: FETCH_FAILURE,
          payload: res.message,
        });
      } else {
        dispatch({
          type: FETCH_SUCCESS,
          payload: res.data,
        });
      }
    })();
  }, [options, fn]);

  const fetchData = (newOPtions = {}) => {
    if (state.status === 1) return;
    setOptions({ ...initOptions, ...newOPtions });
  };

  return [state, fetchData];
};

/**
 * 列表数据
 * @param {*} fn
 * @param {*} initOptions
 */
export const useHttpList = (fn, initOptions = {}) => {
  const [listData, setListData] = useState({ rows: [] });
  const [hasMore, setHasMore] = useState(true);
  const [{ data: newData, status, error }, fetchData] = useHttp(
    fn,
    initOptions
  );

  useEffect(() => {
    if (status !== 2 || error || !newData) {
      return;
    }
    setHasMore(newData.page !== newData.totalPage);
    if (newData.page === 1) {
      setListData({ ...newData });
      return;
    }
    const newRows = [...listData.rows, ...newData.rows];
    setListData({ ...newData, rows: newRows });
  }, [newData, status, error]);

  const fetchMore = () => {
    if (!hasMore || status === 1) {
      return;
    }
    const nextPage = listData.page ? listData.page + 1 : 1;
    fetchData({ ...initOptions, page: nextPage });
  };

  return [listData, { hasMore, fetchMore, status, error }];
};

/**
 * 分页数据
 * @param {*} fn
 * @param {*} initOptions
 */
export const useHttpPagin = (fn, initOptions = {}) => {
  const [listData, setListData] = useState({ rows: [] });
  const [hasNext, setHasNext] = useState(true);
  const [hasLast, setHasLast] = useState(false);
  const [{ data: newData, status, error }, fetchData] = useHttp(
    fn,
    initOptions
  );

  useEffect(() => {
    if (status !== 2 || error || !newData) {
      return;
    }
    setHasNext(newData.page !== newData.totalPage);
    setHasLast(newData.page > 1);
    setListData(newData);
  }, [newData, status, error]);

  const fetchNext = () => {
    if (!hasNext || status === 1) {
      return;
    }
    const nextPage = listData.page ? listData.page + 1 : 1;
    fetchData({ ...initOptions, page: nextPage });
  };

  const fetchLast = () => {
    if (!hasLast || status === 1) {
      return;
    }
    const lastPage = listData.page - 1;
    fetchData({ ...initOptions, page: lastPage });
  };

  return [listData, { hasNext, hasLast, fetchNext, fetchLast, status, error }];
};
