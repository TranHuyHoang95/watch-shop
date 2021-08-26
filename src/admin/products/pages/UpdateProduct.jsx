
import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { updateProduct, getProduct, postProduct, getOne} from "../actions";
import { getAlbert, getBranch, getClockwork, getColor } from "../../categories/actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Leftbar from "../../components/Leftbar";
import { useFormik } from "formik";



const UpdateProduct = () => {
  
  const [open, setOpen] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOne());
    dispatch(getBranch());
    dispatch(getAlbert());
    dispatch(getClockwork());
    dispatch(getColor());
  }, []);
  const stated = useSelector((state) => console.log(state));
  const item = useSelector((state) => (state.productAdmin.item));
  const brand = useSelector((state) => (state.brandAdmin.brand));
  const clockwork = useSelector((state) => (state.brandAdmin.clockwork));
  const color = useSelector((state) => (state.brandAdmin.color));
  const albert = useSelector((state) => (state.brandAdmin.albert));
  
  const handleSubmitUpdate = (payload) => {
      dispatch(updateProduct(payload));
  };
  const formik = useFormik({
    initialValues: {
        name: item?.name,
        price: item?.price,
        image: item?.image,
        amount: item?.amount,
        sex: item?.sex,
        size: item?.size,
        id_brand: item?.brand&&item?.brand.id,
        id_color: item?.color&&item?.color.id,
        id_albert: item?.albertType&&item?.albertType.id,
        id_clockwork: item?.clockwork&&item?.clockwork.id,
        id_color_albert: item?.colortAlbert&&item?.colortAlbert.id
    },
    onSubmit: values => {
        handleSubmitUpdate({...values, _id: item?.id});  
      }
  });
  const handleClose = () => {
    setOpen(false);
  };
  
  return (<React.Fragment>
    <Header/>
    <Leftbar/>
    <Footer/>
    <div id='wrapper'>
        <div id="page-wrapper">
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
                                    <label htmlFor="picture">Hình ảnh</label>
                                    <input type="text" name="image" value={formik.values.image} className="form-control" onChange={formik.handleChange}/>
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
        </div>
     </div> 
  </React.Fragment>
  );
};

export default UpdateProduct;
