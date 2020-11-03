import React from "react";
import { useLocation } from "react-router-dom";

/**
 * 404页面
 */
export default function NoMatch() {
  const location = useLocation();
  return (
    <div style={{ textAlign: "center" }}>
      <p>页面不存在</p>
      <p>
        <code>{location.pathname}</code>
      </p>
    </div>
  );
}
