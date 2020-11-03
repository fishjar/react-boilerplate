import styles from "./Login.module.css";
import { useHttp } from "../../hooks";
import { useState, useEffect } from "react";
import { PATH_USERS } from "../../common/routes";
import { useHistory } from "react-router-dom";
import utils from "../../utils";
import api from "../../api";

/**
 * 登录页
 */
export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{ data, error, status }, userLogin] = useHttp(api.userLogin);

  useEffect(() => {
    console.log("data", data);
    if (status === 2 && !error) {
      console.log("登录成功");
      utils.setToken(data.accessToken);
      history.push(PATH_USERS);
    }
  }, [status, error, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 1) return;
    userLogin({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          帐号：
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          密码：
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
