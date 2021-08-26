import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import {  postProduct} from "../actions";
import { getAlbert, getBranch, getClockwork, getColor } from "../../categories/actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Leftbar from "../../components/Leftbar";
import { useFormik } from "formik";


const AddProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBranch());
    dispatch(getAlbert());
    dispatch(getClockwork());
    dispatch(getColor());
  }, []);
  const brand = useSelector((state) => (state.brandAdmin.brand));
  const clockwork = useSelector((state) => (state.brandAdmin.clockwork));
  const color = useSelector((state) => (state.brandAdmin.color));
  const albert = useSelector((state) => (state.brandAdmin.albert));
  
  const handleSubmitAdd = (payload) => {
      dispatch(postProduct(payload));
  };
  const formik = useFormik({
    initialValues: {
        name: "",
        price: null,
        image: "",
        amount: null,
        sex: null,
        size: "",
        id_brand: null,
        id_color: null,
        id_albert: null,
        id_clockwork: null,
        id_color_albert: null
    },
    onSubmit: values => {
        handleSubmitAdd({...values});  
      }
  });
 
  
  return (<React.Fragment>
    <Header/>
    <Leftbar/>
    <Footer/>
    <div id='wrapper'>
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                <div className="col-md-12">
                    <h2>Thêm sản phẩm</h2>
                </div>
                </div>
                <hr />
                <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default"> 
                    <div className="panel-body">
                        <div className="row">
                        <div className="col-md-12">
                            <form  id="form" onSubmit={formik.handleSubmit} >
                                <div className="form-group">
                                    <label htmlFor="name">Tên sản phẩm</label>
                                    <input type="text" id="name" value={formik.values.name} name="name" className="form-control" onChange={formik.handleChange} />
                                </div>
                                 <div className="form-group">
                                    <label htmlFor="category">Danh mục </label>
                                    <select id="id_brand"  value={formik.values.id_brand} name="id_brand" className="form-control" onChange={formik.handleChange} >
                                        {
                                            brand?.map((data, index) => (
                                                <option value={data.id} key={index}>{data.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="picture">Giá</label>
                                    <input type="text" name="price" value={formik.values.price} className="form-control" onChange={formik.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">Màu sắc </label>
                                    <select id="id_color"  value={formik.values.id_color} name="id_color" className="form-control" onChange={formik.handleChange}>
                                        {
                                            color?.map((data, index) => (
                                                <option value={data.id} key={index}>{data.color}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">Loại máy</label>
                                    <select id="id_clockwork"  value={formik.values.id_clockwork} name="id_clockwork" className="form-control" onChange={formik.handleChange} >
                                        {
                                            clockwork?.map((data, index) => (
                                                <option value={data.id} key={index}>{data.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">Kiểu dây</label>
                                    <select id="id_albert"  value={formik.values.id_albert} name="id_albert" className="form-control" onChange={formik.handleChange}>
                                        {
                                            albert?.map((data, index) => (
                                                <option value={data.id} key={index}>{data.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">Màu dây</label>
                                    <select id="id_color_albert"  value={formik.values.id_color_albert} name="id_color_albert" className="form-control" onChange={formik.handleChange}>
                                        {
                                            color?.map((data, index) => (
                                                <option value={data.id} key={index}>{data.color}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                

                                <div className="form-group">
                                    <label htmlFor="category">Hình ảnh</label>
                                    <input type="text" name="image" value={formik.values.image} className="form-control" onChange={formik.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="preview">Mô tả</label>
                                    <textarea id="preview" className="form-control" rows={3} name="preview" />
                                </div>

                                <button  name="submit" className="btn btn-success btn-md" >Thêm</button>
                            </form>
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

export default AddProduct;
