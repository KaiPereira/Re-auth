"use strict";
exports.id = 374;
exports.ids = [374];
exports.modules = {

/***/ 4817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64660);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48379);
/* harmony import */ var _use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76320);






const CopyText = ({ className, text })=>{
    const copyHandler = ()=>{
        (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .copyText */ .z)(text);
        (0,_use_toast__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .Am)({
            title: "Successfully copied text!",
            description: `${text} has been successfully copied to the clipboard!`,
            variant: "default"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex cursor-pointer justify-between h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm ring-offset-background", className),
        onClick: copyHandler,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Copy */ .CKM, {
                className: "w-4"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyText);


/***/ }),

/***/ 7066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GG: () => (/* binding */ DialogClose),
/* harmony export */   GR: () => (/* binding */ DialogRoot),
/* harmony export */   SL: () => (/* binding */ DialogMain),
/* harmony export */   cZ: () => (/* binding */ DialogContent),
/* harmony export */   hG: () => (/* binding */ DialogButtons),
/* harmony export */   hg: () => (/* binding */ DialogTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40228);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64660);




const DialogRoot = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const DialogTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const DialogClose = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8;
const DialogMain = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, title, description })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .aV, {
                className: "bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
                className: "shadow-modal data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, {
                        className: "text-mauve12 m-0 text-[17px] font-medium",
                        children: title
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk, {
                        className: "text-mauve11 mt-4 text-[15px] leading-normal",
                        children: description
                    }),
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8, {
                        asChild: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.X, {
                                className: "w-4"
                            })
                        })
                    })
                ]
            })
        ]
    }));
const DialogButtons = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex gap-2 mt-5",
        children: children
    });
};
const DialogContent = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pt-5",
        children: children
    });
};



/***/ }),

/***/ 8570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ji: () => (/* binding */ TableRoot),
/* harmony export */   Px: () => (/* binding */ TableButton),
/* harmony export */   SC: () => (/* binding */ TableRow),
/* harmony export */   Wk: () => (/* binding */ TableElement),
/* harmony export */   xD: () => (/* binding */ TableHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48379);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96940);



const TableRoot = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
        className: "border-spacing-y-3 w-full border-separate",
        children: children
    });
};
const TableHeader = ({ headers })=>{
    const headerElements = headers.map((header, index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "w-full",
            children: header
        }, index);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
            className: "border bg-background rounded-md py-1 px-3 flex text-xs font-medium text-muted-foreground bg-secondary",
            children: headerElements
        })
    });
};
const TableRow = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
            className: "relative w-full rounded-md border bg-background h-11 items-center px-3 text-sm font-medium text-secondary-foreground flex",
            children: children
        })
    });
};
const TableElement = ({ children, className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("w-full", className),
        children: children
    });
};
const TableButton = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)((0,_button__WEBPACK_IMPORTED_MODULE_2__/* .buttonVariants */ .d)({
            variant: "secondary",
            size: "sm"
        }), "absolute right-2 h-7 text-muted-foreground"),
        children: children
    });
};



/***/ }),

/***/ 98357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P2: () => (/* binding */ deleteApp),
/* harmony export */   Qd: () => (/* binding */ createApiKey),
/* harmony export */   _N: () => (/* binding */ getSpecificApp),
/* harmony export */   df: () => (/* binding */ deleteApiKey),
/* harmony export */   ri: () => (/* binding */ createApp)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);
// Our libraries

// Our files
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const createApp = async (appName, srvString)=>{
    try {
        const apiKey = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`${apiUrl}/apps/create-app`, {
            appName: appName,
            srvString: srvString
        }, {
            withCredentials: true
        });
        return apiKey;
    } catch (err) {
        throw err;
    }
};
const getSpecificApp = async (appId)=>{
    try {
        const specificApp = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`${apiUrl}/apps/get-app`, {
            id: appId
        }, {
            withCredentials: true
        });
        return specificApp.data;
    } catch (err) {
        throw err;
    }
};
const deleteApiKey = async (apiKey)=>{
    try {
        const deletedKey = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`${apiUrl}/apps/delete-key`, {
            hashedKey: apiKey
        }, {
            withCredentials: true
        });
        return deletedKey;
    } catch (err) {
        throw err;
    }
};
const createApiKey = async (appName)=>{
    try {
        const createdKey = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`${apiUrl}/apps/create-key`, {
            appName: appName
        }, {
            withCredentials: true
        });
        return createdKey.data;
    } catch (err) {
        throw err;
    }
};
const deleteApp = async (appId)=>{
    try {
        const deletedApp = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`${apiUrl}/apps/delete-app`, {
            appId: appId
        }, {
            withCredentials: true
        });
        return deletedApp;
    } catch (err) {
        throw err;
    }
};


/***/ })

};
;