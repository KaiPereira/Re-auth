exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 672:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95457, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 48324))

/***/ }),

/***/ 13259:
/***/ (() => {



/***/ }),

/***/ 48324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAuthForm: () => (/* binding */ UserAuthForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48379);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96940);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67623);
/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3792);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66414);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78880);
/* harmony import */ var _hooks_useListenForError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61740);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_9__);
/* __next_internal_client_entry_do_not_use__ UserAuthForm auto */ 










function UserAuthForm({ className, type, ...props }) {
    const { values, resetForm, handleChange } = (0,_hooks_useForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        email: "",
        password: ""
    });
    const { error, handleLogin, handleSignup, response, isSignedIn } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    (0,_hooks_useListenForError__WEBPACK_IMPORTED_MODULE_8__/* .useListenForError */ .q)({
        error: error,
        success: response
    });
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const handleAuth = (e)=>{
        e.preventDefault();
        type == "login" ? handleLogin(values.email, values.password) : handleSignup(values.email, values.password);
        resetForm();
    };
    // Just to see if the user is logged in
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        isSignedIn().then((res)=>{
            res && router.push("/dashboard");
        }).catch((err)=>{
            console.log(err);
        });
    }, [
        isSignedIn
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("grid gap-6", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: handleAuth,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__/* .Label */ ._, {
                                className: "sr-only",
                                htmlFor: "email",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                id: "email",
                                placeholder: "name@example.com",
                                type: "email",
                                autoCapitalize: "none",
                                autoComplete: "email",
                                autoCorrect: "off",
                                value: values.email,
                                onChange: handleChange,
                                name: "email",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__/* .Label */ ._, {
                                className: "sr-only",
                                htmlFor: "password",
                                children: "Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                id: "password",
                                placeholder: "************",
                                type: "password",
                                name: "password",
                                autoCapitalize: "none",
                                autoComplete: "password",
                                autoCorrect: "off",
                                value: values.password,
                                onChange: handleChange,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .buttonVariants */ .d)()),
                        children: "Sign In Now!"
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 59857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function AuthLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen",
        children: children
    });
}


/***/ }),

/***/ 55754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\keira\Documents\VSCode Projects\Currently Working On\sentinel\app\frontend\components\user-auth-form.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["UserAuthForm"];


/***/ })

};
;