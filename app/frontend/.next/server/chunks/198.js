"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 78880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ hooks_useAuth)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(40248);
;// CONCATENATED MODULE: ./lib/auth.ts
// Our libraries

// Our files
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const signup = async (email, password)=>{
    try {
        const newUser = await axios/* default */.Z.post(`${apiUrl}/auth/register`, {
            email: email,
            password: password
        }, {
            withCredentials: true
        });
        return newUser;
    } catch (err) {
        throw err;
    }
};
const signin = async (email, password)=>{
    try {
        const user = await axios/* default */.Z.post(`${apiUrl}/auth/login`, {
            email: email,
            password: password
        }, {
            withCredentials: true
        });
        return user;
    } catch (err) {
        throw err;
    }
};
const logout = async ()=>{
    try {
        const logout = await axios/* default */.Z.post(`${apiUrl}/auth/logout`, {}, {
            withCredentials: true
        });
        // Reload the page to change the page
        window.location.href = "/";
        return logout;
    } catch (err) {
        throw err;
    }
};
const verifyEmail = async (userId, token)=>{
    try {
        const verify = await axios/* default */.Z.get(`${apiUrl}/auth/verify/${userId}/${token}`);
        return verify.data;
    } catch (err) {
        throw err;
    }
};

// EXTERNAL MODULE: ./lib/user.ts
var user = __webpack_require__(14606);
;// CONCATENATED MODULE: ./hooks/useAuth.tsx



const useAuth = ()=>{
    const [error, setError] = (0,react_.useState)("");
    const [response, setResponse] = (0,react_.useState)("");
    const handleSignup = (email, password)=>{
        signup(email, password).then((res)=>{
            setResponse("An email was sent to your inbox");
        }).catch((err)=>{
            setError(err.response.data);
        });
    };
    const handleLogin = (email, password)=>{
        signin(email, password).then((res)=>{
            setResponse("Successfully logged-in!");
        }).catch((err)=>{
            setError(err.response.data);
        });
    };
    const handleLogout = ()=>{
        logout();
    };
    const isSignedIn = async ()=>{
        const data = await (0,user/* fetchProfileDetails */.u)();
        const profileDetails = data.data;
        return profileDetails;
    };
    const handleVerification = (userId, authToken)=>{
        verifyEmail(userId, authToken).then((res)=>{
            setResponse("Successfully verified your email, please login now!");
        }).catch((err)=>{
            setError(err.response.data);
        });
    };
    return {
        handleLogin,
        handleLogout,
        handleSignup,
        isSignedIn,
        error,
        response,
        handleVerification
    };
};
/* harmony default export */ const hooks_useAuth = (useAuth);


/***/ }),

/***/ 61740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ useListenForError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76320);


const useListenForError = ({ error, success })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (error) {
            (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                title: "Something went wrong.",
                description: error,
                variant: "destructive"
            });
        } else if (success) {
            (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                title: "Success!",
                description: success,
                variant: "default"
            });
        }
    }, [
        success,
        error
    ]);
};


/***/ }),

/***/ 14606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ changePassword),
/* harmony export */   u: () => (/* binding */ fetchProfileDetails)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);
// Our files
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
// Libraries

const fetchProfileDetails = async ()=>{
    try {
        const userProfile = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`${apiUrl}/user/online`, {}, {
            withCredentials: true
        });
        return userProfile;
    } catch (err) {
        throw err;
    }
};
const changePassword = async (oldPassword, newPassword)=>{
    try {
        const updatedPasswordRes = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`${apiUrl}/user/change-password`, {
            oldPassword: oldPassword,
            newPassword: newPassword
        }, {
            withCredentials: true
        });
        return updatedPasswordRes.data;
    } catch (err) {
        throw err;
    }
};


/***/ })

};
;