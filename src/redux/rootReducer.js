import { combineReducers } from "redux";
import productAdminReducer from "../admin/products/reducers/productAdminReducer";
import authAdminReducer from "../admin/login/reducers/authAdminReducer";
import orderAdminReducer from "../admin/orders/reducers/orderAdminReducer";
import userAdminReducer from "../admin/users/reducers/userAdminReducer";
// import authReducer from "./reducer/auth";
// import cartReducer from "./reducer/cart";
// import drinkReducer from "./reducer/drink";
// import salaryReducer from "./reducer/salary";
// import shiftReducer from "./reducer/shift";
// import orderReducer from "./reducer/order";
// import inforStaffReducer from "./reducer/inforStaff";
// import eventReducer from "./reducer/event";

const rootReducer = combineReducers({
  // auth: authReducer,
  // drink: drinkReducer,
  // cart: cartReducer,
  // order: orderReducer,
  // event: eventReducer,
  productAdmin: productAdminReducer,
  userAdmin: userAdminReducer,
  orderAdmin: orderAdminReducer,
 
  // cart: cartReducer,
  // salary: salaryReducer,
  // shift: shiftReducer,
  authAdmin: authAdminReducer,
  // inforStaff: inforStaffReducer,
});

export default rootReducer;
