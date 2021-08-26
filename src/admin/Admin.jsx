import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Leftbar from "./components/Leftbar";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

const Admin = () => {

  return(<React.Fragment>
    <Header/>
    <Leftbar/>
    <Footer/>
    <div id="wrapper"> 
       <div id="page-wrapper">
          <div id="page-inner">
          <div className="row">
              <div className="col-md-12">
                  <h2>Chào mừng bạn đến với trang quản trị!</h2>
              </div>
          </div>
          {/* <!-- /. ROW  --> */}
          <hr />
          <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                  <div className="panel panel-back noti-box">
                      <span className="icon-box bg-color-red set-icon">
                      <i className="fa fa-list-alt"></i>
                  </span>
                      <div className="text-box">
                          <p className="main-text"><Link to="/product">Quản lý sản phẩm</Link></p>
                        {/* <!--  <p className="text-muted">Có 5 danh mục</p> --> */}
                      </div>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4">
                  <div className="panel panel-back noti-box">
                      <span className="icon-box bg-color-blue set-icon">
                      <i className="fa fa-bell-o"></i>
                  </span>
                      <div className="text-box">
                      <p className="main-text"><Link to="/order">Quản lý đơn hàng</Link></p>
                        
                      </div>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4">
                  <div className="panel panel-back noti-box">
                      <span className="icon-box bg-color-yellow color-yellow set-icon">
                    <i className="fa fa-users fa fa-2x"></i>
                  </span>
                      <div className="text-box">
                      <p className="main-text"><Link to="/user">Quản lý người dùng</Link></p>
                        {/* <!--  <p className="text-muted">Có 15 người dùng</p> --> */}
                      </div>
                  </div>
              </div>
          </div>

          </div>

          <script>
          document.getElementById("index").classList.add('active-menu');
          </script>
          {/* <!-- /. PAGE WRAPPER  --> */}
      </div>
    </div>
</React.Fragment>)
};

export default Admin;
