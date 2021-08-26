import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { postCategory } from "../../categories/actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Leftbar from "../../components/Leftbar";
import { useFormik } from "formik";


const AddCategory = () => {

  const dispatch = useDispatch();
 
  const handleSubmitAdd = (payload) => {
      dispatch(postCategory(payload));
  };
  const formik = useFormik({
    initialValues: {
        name: "",
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
                    <h2>Thêm danh mục</h2>
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

export default AddCategory;
