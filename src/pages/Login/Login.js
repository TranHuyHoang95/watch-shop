import React,{Component, useState} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import axios from 'axios'
import { setUserSession } from '../../Utils/Common'
import { Link } from 'react-router-dom';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleLogin(){

      axios.post("https://shopwatchdut.herokuapp.com/api/user/login",{
        username: username,
        password: password
      }).then(response =>{
        console.log("token", response.data.token);
        console.log("username", response.data.data.username);
        setUserSession(response.data.token, response.data.data.username);
      }).catch(error => {
        console.log("status", error.response.status);
        if(error.response.status === 401 || error.response.status === 400){
          setError(error.response.data.meta.message);
        }
        else{
          setError("Something went wrong. Please try again!");
        }
        console.log("error", error);
      })
    }
    return (
        <div>
          <div className="page-content container">
            <form >
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="login-wrapper">
                    <div className="box">
                      <div className="content-wrap">
                        <img width="100px" height="100px" className="img-circle" src="" />
                        <h6>Đăng nhập</h6>
                        {error && <div className="error"> {error}</div>}
                        <input type="hidden" name="redirectId" defaultValue="${param.redirectId}" />
                        <div className="form-group">
                          <label className="text-left pull-left" htmlFor="username">Tên đăng nhập</label> 
                          <input name="username" className="form-control" type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group">
                          <label className="text-left pull-left" htmlFor="password">Mật
                            khẩu</label> <input name="password" className="form-control" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="action">
                          <input type="button" className="btn btn-primary signup btn-block" defaultValue="Login" onClick={handleLogin} />
                        </div>
                      </div>
                    </div>
                    <div className="already">
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
}
export default Login;
