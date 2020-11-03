import styles from "./User.module.css";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks";
import api from "../../api";
import { useEffect } from "react";
import { Loading } from "../../components";

/**
 * 用户详情页
 */
export default function User() {
  const { id } = useParams();
  const [{ data, status, error }, getUserDetail] = useHttp(api.getUserDetail, {
    id,
  });
  useEffect(() => {
    getUserDetail();
  }, []);

  if (status !== 2) {
    return <Loading />;
  }
  if (error) {
    return <div>出错了: {error}</div>;
  }
  return (
    <div>
      <p>id: {id}</p>
      <p>nickname: {data.nickname}</p>
    </div>
  );
}
