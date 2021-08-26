import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
});

export default function LoginFrom(props) {
  const { handleSubmitForm } = props;

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      isRemember: false,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmitForm(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="hidden" name="redirectId" defaultValue="${param.redirectId}" />
      <div className="form-group">
        <label className="text-left pull-left" htmlFor="username">Tên đăng nhập</label> 
        <input name="username" className="form-control" type="text" placeholder="Username" value={formik.values.username} onChange={formik.handleChange}/>
      </div>
      <div className="form-group">
        <label className="text-left pull-left" htmlFor="password">Mật
          khẩu</label> <input name="password" className="form-control" type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange}/>
      </div>
      <div className="action">
        <button type="submit" className="btn btn-primary signup btn-block">Login</button>
      </div>
    </form>
  );
}
