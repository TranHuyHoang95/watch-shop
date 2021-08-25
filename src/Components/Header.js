import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUser, removeUserSession} from '../Utils/Common'

function Header (){
    const history = useHistory();
    const user = getUser();
    function handleLogout(){
        removeUserSession();
        history.push("/login");
    }
    return (
        <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{marginBottom: '0'}}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to='/' className="navbar-brand">Watch Shop</Link>
            </div>
            {console.log("username",user)}
            <div style={{color: 'white',paddingTop: 5, paddingRight: 5, paddingLeft: 5, paddingBottom: 15,fontSize: 16}}> 
                Xin chào, <b>{user}</b> &nbsp;
                <input type="button" className="btn btn-danger square-btn-adjust" onClick={handleLogout} value="Đăng xuất" />
            </div>
        </nav>
        )
}
export default Header