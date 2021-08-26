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
import { updateProduct, getProduct, postProduct, getOne} from "../actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Leftbar from "../../components/Leftbar";
import { CodeSharp } from "@material-ui/icons";



const UpdateProduct = () => {
  const [open, setOpen] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOne());
  }, []);

  const item = useSelector((state) => (state.productAdmin.item));
  console.log("list1", item);
//   const item = list.first;
//   console.log(item.name);
console.log(typeof(item));
  const handleSubmit = (payload) => {
    dispatch(updateProduct(payload));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (<React.Fragment>
    <Header/>
    <Leftbar/>
    <Footer/>
    <div id='wrapper'>
        {/* <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                <div className="col-md-12">
                    <h2>Sửa sản phẩm</h2>
                </div>
                </div>
                <hr />
                <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default"> 
                    <div className="panel-body">
                        <div className="row">
                        <div className="col-md-12">
                            <form  id="form" >
                                <div className="form-group">
                                    <label htmlFor="name">Tên sản phẩm</label>
                                    <input type="text" id="name" value={item.name} name="name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Danh mục </label>
                                    <select id="brand"  value={item.brand.name} name="brand" className="form-control">
                                                <option value="Movado" >Movado</option>
                                                <option value="Hublot" >Hublot</option>
                                                <option value="Orient" >Orient</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Giá</label>
                                    <input type="text" id="price" value={item.price} name="price" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="picture">Hình ảnh</label>
                                    <input type="text" name="image" value={item.image}/>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="picture">Hình ảnh</label>
                                    <input type="text" name="image" value={item.image}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="picture">Hình ảnh</label>
                                    <input type="text" name="image" value={item.image}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="picture">Hình ảnh</label>
                                    <input type="text" name="image" value={item.image}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="preview">Mô tả</label>
                                    <textarea id="preview" className="form-control" rows={3} name="preview" />
                                </div>

                                <button  name="submit" className="btn btn-success btn-md" >Sửa</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div> */}
     </div> 
  </React.Fragment>
  );
};

export default UpdateProduct;
