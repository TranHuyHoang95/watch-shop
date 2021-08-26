import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getProduct, postProduct } from "../actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Leftbar from "../../components/Leftbar";
import { declareExportAllDeclaration } from "@babel/types";


const ProductPage = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const list = useSelector((state) => (state.productAdmin.list));
 
  const handleSubmit = (payload) => {
    dispatch(postProduct(payload));
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (<React.Fragment>
    <Header/>
    <Leftbar/>
    <Footer/>
     <div id="wrapper">
         <div id="page-wrapper">
              <div id="page-inner">
                  <div className="row">
                      <div className="col-md-12">
                          <h2>Quản lý sản phẩm</h2>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <div className="panel panel-default">
                              <div className="panel-body">
                                  <div className="table-responsive">
                                      <div className="row">
                                          <div className="col-sm-6">
                                              <Link to='/product/add' className="btn btn-success btn-md"> Thêm </Link>
                                          </div>
                                          <div className="col-sm-6" style={{textAlign: 'right'}}>
                                              <form method="post" action="">
                                                  <input type="submit" name="search" value="Tìm kiếm" className="btn btn-warning btn-sm" style={{float: 'right'}} />
                                                  <input type="search" className="form-control input-sm" placeholder="Nhập tên sản phẩm" style={{float:'right',width: '300px'}} />
                                                  <div style={{clear: 'both'}}></div>
                                              </form><br />
                                          </div>
                                      </div>

                                      <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                          <thead>
                                              <tr>
                                                  <th>ID</th>
                                                  <th>Tên sản phẩm</th>
                                                  <th>Danh mục</th>
                                                  <th>Giá</th>
                                                  <th>Mô tả</th>
                                                  <th>Hình ảnh</th>
                                                  <th width="160px">Tác vụ</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {console.log("oke")}
                                              {list.map((data,index) => 
                                                    <tr key={data.id}>
                                                        <td className="center">{data.id}</td>
                                                        <td className="center">{data.name}</td>
                                                        <td className="center">{data.brand.name}</td>
                                                        <td className="center">{data.price}</td>
                                                        <td></td>
                                                        <td className="center">
                                                            <img width="200px" height="200px" src={data.image} alt="Đổi thay"/>
                                                        </td>
                                                        <td className="center">
                                                            <Link to={`/product/update?id=${data.id}`}  className="btn btn-primary"><i className="fa fa-edit "></i> Sửa</Link>
                                                            <button  title="" className="btn btn-danger"><i className="fa fa-pencil"></i> Xóa</button>
                                                        </td>
                                                    </tr>
                                                )}
                                              {console.log("oke3")}
                                          </tbody>
                                      </table>
                                      <div className="row">
                                          <div className="col-sm-6">
                                              <div className="dataTables_info" id="dataTables-example_info" style={{marginTop:'27px'}}>Hiển thị từ 1 đến 5 của 24 truyện</div>
                                          </div>
                                          <div className="col-sm-6" style={{textalign: 'right'}}>
                                              <div className="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                                                  <ul className="pagination">
                                                      <li className="paginate_button previous disabled" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_previous"><a href="#">Trang trước</a></li>
                                                      <li className="paginate_button active" aria-controls="dataTables-example" tabindex="0"><a href="">1</a></li>
                                                      <li className="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">2</a></li>
                                                      <li className="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">3</a></li>
                                                      <li className="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">4</a></li>
                                                      <li className="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">5</a></li>
                                                      <li className="paginate_button next" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_next"><a href="#">Trang tiếp</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
     </div> 
  </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(ProductPage);
