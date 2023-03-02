/*
 * Author  hailie.pan
 * Date  2022-12-11 22:37:54
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-02 21:54:16
 * Description  file content
 */
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import routes from "@/router/routes";
import styles from "./index.module.less";

const { Header, Content, Footer } = Layout;
export default function Index() {
  console.log("routes", routes);

  const arr = routes[1].children.map((item) => ({
    label: item.label,
    path: item.path,
    key: item.path,
  }));
  const navigate = useNavigate();
  // 点击左侧菜单 —— 1.页眉改变 2.页面改变
  const handleSelectMenu = (menuItem) => {
    // 跳转页面
    navigate(menuItem?.key);
  };
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={arr}
          onSelect={handleSelectMenu}
        />
      </Header>
      <Content className={styles.content}>
        <div
          style={{
            background: "#fff",
            height: "100%",
            border: "1px solid red",
            overflow: "scroll",
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
}
