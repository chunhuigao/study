import React, { useState } from 'react'
import { Menu, Button, Drawer } from 'antd'
import LeftMenu from './LeftMenu'
import './indexStyle.css'
export default () => {
  const [visible, setVisible] = useState(true)
  const [collapsed, setCollapsed] = useState(true)
  const onClose = () => {
    setVisible(false)
  }
  const toggleCollapsed = () => {}
  return (
    <div className="continer">
      <div className="leftBox">
        <LeftMenu />
      </div>
    </div>
  )
}
