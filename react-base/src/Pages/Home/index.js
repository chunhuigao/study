import React, { useState } from 'react'
import { Menu, Button, Drawer } from 'antd'

export default () => {
  const [visible, setVisible] = useState(true)
  const [collapsed, setCollapsed] = useState(true)
  const onClose = () => {
    setVisible(false)
  }
  const toggleCollapsed = () => {}
  return (
    <div>
      <h2>我是home页面</h2>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p onClick={onClose}>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}
