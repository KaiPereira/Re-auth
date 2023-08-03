exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 98145:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17962))

/***/ }),

/***/ 17962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarketingLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97938);
/* harmony import */ var _components_user_detail_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60478);
/* __next_internal_client_entry_do_not_use__ default auto */ 


async function MarketingLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_detail_provider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: children
        })
    });
}


/***/ }),

/***/ 97938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   x: () => (/* binding */ DashboardHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17811);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48379);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64660);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96940);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9211);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78880);
/* harmony import */ var _hooks_useUserDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33025);
/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57357);
/* __next_internal_client_entry_do_not_use__ DashboardHeader,default auto */ 













const SidebarLink = ({ href, header, icon })=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const isActiveLink = pathname === href;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: href,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("hover:bg-secondary px-2 rounded-md flex gap-2 items-center h-8", isActiveLink && "bg-secondary"),
            children: [
                icon,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-sm font-medium text-secondary-foreground",
                    children: header
                })
            ]
        })
    });
};
const DashboardHeader = ({ header, children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-between w-full mb-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold",
                children: header
            }),
            children
        ]
    });
};
const DashboardLayout = ({ children })=>{
    const { handleLogout, isSignedIn } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const userDetails = (0,_hooks_useUserDetails__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const changePage = (href)=>{
        router.push(href);
    };
    const menuHandler = ()=>{
        setMenu(!menu);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "relative w-64 h-screen flex-none hidden md:block",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-5 border-r border-slate-6 h-full fixed flex flex-col w-64 h-screen",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-semibold text-lg",
                            children: _config_site__WEBPACK_IMPORTED_MODULE_1__/* .siteConfig */ .J.name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-10 flex flex-col justify-between w-full h-full",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarLink, {
                                            href: "/dashboard",
                                            header: "Applications",
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__/* .AppWindow */ .PLz, {
                                                className: "w-4"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarLink, {
                                            href: "/dashboard/settings",
                                            header: "Settings",
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__/* .Settings */ .Zrf, {
                                                className: "w-4"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenu */ .h_, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuTrigger */ .$F, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "cursor-pointer flex justify-between gap-4 items-center py-1 px-2 hover:bg-secondary rounded-md",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/rainbow gradient.png",
                                                        alt: "Profile Image",
                                                        className: "w-8 h-8 rounded-full"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-ellipsis overflow-hidden whitespace-nowrap text-sm font-medium text-secondary-foreground",
                                                        children: userDetails.email
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__/* .MoreHorizontal */ .yFf, {})
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuContent */ .AW, {
                                            align: "start",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                    onClick: ()=>changePage("/"),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__/* .LayoutTemplate */ .bMn, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Homepage"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                    onClick: ()=>changePage("/dashboard/settings"),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__/* .User */ .sLt, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Profile"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                    onClick: ()=>handleLogout(),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__/* .LogOut */ .d6Z, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Log out"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "justify-end pr-5 gap-5 items-center h-16 py-6 border-b border-slate-6 w-full hidden md:flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/help",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm font-medium text-muted-foreground hover:text-secondary-foreground",
                                    children: "Help"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "/docs",
                                target: "_blank",
                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)((0,_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .buttonVariants */ .d)({
                                    variant: "secondary",
                                    size: "sm"
                                }), "px-4 flex gap-2"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm font-medium text-muted-foreground",
                                        children: "Docs"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__/* .ExternalLink */ .dLw, {
                                        className: "w-4"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "items-center h-16 px-6 border-b border-slate-6 w-full flex md:hidden justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-semibold text-lg",
                                children: _config_site__WEBPACK_IMPORTED_MODULE_1__/* .siteConfig */ .J.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: menuHandler,
                                children: menu ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__.X, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_11__/* .AlignRightIcon */ .mhm, {})
                            })
                        ]
                    }),
                    menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_nav__WEBPACK_IMPORTED_MODULE_10__/* .MobileNav */ .z, {
                        items: [
                            {
                                title: "Applications",
                                href: "/dashboard"
                            },
                            {
                                title: "Settings",
                                href: "/dashboard/settings"
                            },
                            {
                                title: "Docs",
                                href: "/docs"
                            },
                            {
                                title: "Homepage",
                                href: "/"
                            },
                            {
                                title: "Profile",
                                href: "/dashboard/settings"
                            }
                        ],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)((0,_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .buttonVariants */ .d)({
                                variant: "secondary",
                                size: "sm"
                            })),
                            onClick: handleLogout,
                            children: "Logout"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-28 flex justify-center px-6 py-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full max-w-5xl",
                            children: children
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardLayout);


/***/ }),

/***/ 60478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t: () => (/* binding */ UserDetailsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14606);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const UserDetailsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
const UserDetailsProvider = ({ children })=>{
    const [userDetails, setUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (0,_lib_user__WEBPACK_IMPORTED_MODULE_1__/* .fetchProfileDetails */ .u)().then((res)=>{
            setUserDetails(res.data);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
            router.push("/");
            setLoading(false);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserDetailsContext.Provider, {
        value: {
            userDetails
        },
        children: !loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDetailsProvider);


/***/ }),

/***/ 33025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_user_detail_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60478);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useUserDetails = ()=>{
    const { userDetails } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_user_detail_provider__WEBPACK_IMPORTED_MODULE_0__/* .UserDetailsContext */ .t);
    return userDetails;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserDetails);


/***/ }),

/***/ 62697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\keira\Documents\VSCode Projects\Currently Working On\sentinel\app\frontend\app\(protected)\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;