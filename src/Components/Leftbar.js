import React from 'react';
import { Link } from 'react-router-dom';

function Leftbar(){
        return(
           
            <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="main-menu">
                    <li className="text-center">
                        <img src="/assets/img/Logo2.png" className="user-image img-responsive" alt="" />
                    </li>
                    <li >
                        <Link to='/' id="index" ><i className="fa fa-home fa-3x"></i> Trang chủ</Link>
                    </li>
                   
                    <li>
                        <Link to='/cat' id="category"><i className="fa fa-list fa-3x"></i> Quản lý danh mục</Link>
                    </li>
                     <li>
                        <Link to='/product' id="song" ><i className="fa fa-clock-o fa-3x"></i> Quản lý sản phẩm</Link>
                    </li>
                    <li>
                        <Link to='/order' id="song" ><i className="fa fa-shopping-cart fa-3x"></i> Quản lý đơn hàng</Link>
                    </li>
                    <li>
                        <Link to='/user' id="user" ><i className="fa fa-users fa-3x"></i> Quản lý người dùng</Link>
                    </li>
                
                </ul>
            </div>
            
        </nav> 
       
        )
}
export default Leftbar