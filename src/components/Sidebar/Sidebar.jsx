import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets.js';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar-admin'>
<div className="sidebar-options-admin">
    <NavLink to='/add' className="sidebar-option-admin">
        <img src={assets.add_icon} alt=""/>
        <p>Add Products</p>
    </NavLink>
    <NavLink to='/list' className="sidebar-option-admin">
        <img src={assets.order_icon} alt=""/>
        <p>List Items</p>
    </NavLink>
    <NavLink to='/order' className="sidebar-option-admin">
        <img src={assets.order_icon} alt=""/>
        <p>List of Orders</p>
    </NavLink>
</div>

    </div>
  )
}

export default Sidebar;