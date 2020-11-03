import styles from "./index.module.css";
import { useEffect } from "react";
import { Loading } from "../../components";
import { useCountDown } from "../../hooks";
import { Link } from "react-router-dom";
import { PATH_LOGIN } from "../../common/routes";

/**
 * 首页
 */
export default function Home() {
  const [count, status, startCount] = useCountDown(5);
  useEffect(() => {
    startCount();
  }, []);

  if (status === 2) {
    return (
      <div>
        <Link to={PATH_LOGIN}>登录</Link>
      </div>
    );
  }
  return (
    <div>
      <p>{count}</p>
      <Loading />
    </div>
  );
}
