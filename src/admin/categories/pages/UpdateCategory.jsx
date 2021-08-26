
import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { getOne} from "../actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Leftbar from "../../components/Leftbar";
import { useFormik } from "formik";
import { updateCategory } from "../actions";



const UpdateCategory = () => {
  
  const urlParams = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOne());
  }, []);
  
  const stated = useSelector((state) => (console.log(state)));
  const item = useSelector((state) => (state.brandAdmin.item));
  const handleSubmitUpdate = (payload) => {
      dispatch(updateCategory(payload));
  };
  const formik = useFormik({
    initialValues: {
        name: item?.name,
    },
    onSubmit: values => {
        handleSubmitUpdate({...values, _id: item?.id});  
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
                    <h2>Sửa danh mục</h2>
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
                                    <label htmlFor="name">Tên danh mục</label>
                                    <input type="text" id="name" value={formik.values.name} name="name" className="form-control" onChange={formik.handleChange} />
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
        </div>
     </div> 
  </React.Fragment>
  );
};

export default UpdateCategory;
