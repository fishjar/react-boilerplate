import styles from "./Users.module.css";
import { useHttpList, useHttpPagin } from "../../hooks";
import { useEffect } from "react";
import { PATH_USERS } from "../../common/routes";
import { Link } from "react-router-dom";
import api from "../../api";

/**
 * 用户列表页
 */
export default function Users() {
  const [{ rows }, { hasMore, fetchMore }] = useHttpList(api.getUserList, {
    page: 1,
    size: 2,
  });
  const [
    { rows: paginRows },
    { hasNext, hasLast, fetchNext, fetchLast },
  ] = useHttpPagin(api.getUserList, {
    page: 1,
    size: 2,
  });
  useEffect(() => {
    fetchMore();
    fetchNext();
  }, []);

  return (
    <div>
      <button
        disabled={!hasMore}
        onClick={() => {
          fetchMore();
        }}
      >
        更多
      </button>
      <ul>
        {rows.map((item) => (
          <li key={item.id}>
            <Link to={`${PATH_USERS}/${item.id}`}>{item.nickname}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <button
        disabled={!hasLast}
        onClick={() => {
          fetchLast();
        }}
      >
        上一页
      </button>
      <button
        disabled={!hasNext}
        onClick={() => {
          fetchNext();
        }}
      >
        下一页
      </button>
      <ul>
        {paginRows.map((item) => (
          <li key={item.id}>
            <Link to={`${PATH_USERS}/${item.id}`}>{item.nickname}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
