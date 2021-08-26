import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { sendPostLogin } from '../actions/authAdminAction';
import LoginForm from '../components/LoginForm';
import logo from "../../../assets/images/commons/logo.png";

export default function LoginPage() {
  let history = useHistory();
  const token = useSelector((state) => state.authAdmin.token);
  const isRoot = useSelector((state) => state.authAdmin.isRoot);
  // const infor = useSelector((state) => state.inforStaff.infor);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      if (isRoot) 
        history.push("/admin/")
    }
  }, [token]);

  const handleSubmitForm = (payload) => {
    dispatch(sendPostLogin(payload))
  }

  return (
    <div className="page-content container">
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="login-wrapper">
                    <div className="box">
                      <div className="content-wrap">
                        <img width="100px" height="100px" className="img-circle" src="" />
                        <h6>Đăng nhập</h6>
                        <LoginForm handleSubmitForm={handleSubmitForm} />
                      </div>
                    </div>
                    <div className="already">
                    </div>
                  </div>
                </div>
              </div>
          </div>
  );
}