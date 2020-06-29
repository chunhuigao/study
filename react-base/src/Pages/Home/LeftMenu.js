/**
 * @ Author: Your name
 * @ Create Time: 2020-06-29 22:37:20
 * @ Modified by: Your name
 * @ Modified time: 2020-06-29 22:47:17
 * @ Description:左侧菜单栏
 */
import React, { Component, useState } from 'react'
import { Menu, Switch } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import './indexStyle.css'
const { SubMenu } = Menu
const LeftMenu = () => {
  const [theme, setTheme] = useState('dark')
  const [current, setCurrent] = useState('1')
  const handleClick = () => {}
  return (
    <div className="continer">
      <Menu
        theme={theme}
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4" danger>
            Option 4
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}
export default LeftMenu
