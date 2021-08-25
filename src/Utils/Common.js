export const getUser = () => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) return JSON.stringify(userStr);
    else return null;
}

export const loggedIn = ()=>{
    const userStr = sessionStorage.getItem("user");
    const tokenStr = sessionStorage.getItem("token");
    if (userStr && tokenStr)
        return true;
    else return false;
}
export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}

export const setUserSession = (token,user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", user);
}

export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}