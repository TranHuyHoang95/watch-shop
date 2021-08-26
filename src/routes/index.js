import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../admin/Admin";
import AdminLoginPage from "../admin/login/pages/Login";
import UserPage from "../admin/users/pages/UserPage";
import CategoryPage from "../admin/categories/pages/CategoryPage";
import UpdateProduct from "../admin/products/pages/UpdateProduct";
import NotFound from "../components/NotFound";

import { PrivateRoute } from "./PrivateRoute";
import ProductPage from "../admin/products/pages/ProductPage";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} exact />
      {/* <Route path="/login" component={LoginPage} /> */}
      {/* <PrivateRoute path="/order" component={ConfirmOrderPage} />
      <PrivateRoute exact path="/user/detail" component={UserDetailPage} /> */}
      {/* <PrivateRoute exact path="/user/change-password" component={UserChangePasswordPage} />
      <PrivateRoute exact path="/user/history-order" component={UserHistoryOrder} />
       */}
      <Route path="/admin/login" component={AdminLoginPage} exact />
      <Route path="/admin" component={HomePage} exact/>
      <Route path="/product" component={ProductPage} exact/>
      <Route path="/product/update" component={UpdateProduct}/>
      {/* <Redirect exact from="/admin" to="/admin/summary" /> */}
      {/* <PrivateRoute path="/admin/summary" component={Admin} />
      <PrivateRoute path="/admin/menu" component={AdminMenuPage} />
      <PrivateRoute path="/admin/employees" component={EmployeePage} />
      <PrivateRoute path="/admin/users" component={UserPage} />
      <PrivateRoute path="/admin/salary" component={SalaryPage} />
      <PrivateRoute path="/admin/schedule" component={SchedulePage} />
     
      <PrivateRoute path="/admin/feedbacks" component={FeedbackPage} />
      <PrivateRoute path="/admin/events" component={EventPage} />
      <PrivateRoute path="/admin/orders" component={OrderPage} />
      <PrivateRoute path="/admin/roles" component={RolePage} /> */}
       {/* <PrivateRoute path="/admin/categories" component={CategoryPage} /> */}
      {/* <PrivateRoute path="/employee/:employeeId/account/detail" component={InformationStaff} />
      <PrivateRoute path="/employee/:employeeId/account/change-password" component={ChangePasswordStaffPage} />
      <PrivateRoute path="/employee/:employeeId/salary" component={Salary} />
      <PrivateRoute path="/employee/:employeeId/calendar" component={Calendar} /> */}
      
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
