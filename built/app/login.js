"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var auth_helpers_nextjs_1 = require("@supabase/auth-helpers-nextjs");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
function Login() {
    var _this = this;
    var _a = (0, react_1.useState)(true), showLoginButtons = _a[0], setShowLoginButtons = _a[1];
    var _b = (0, react_1.useState)(true), showSignup = _b[0], setShowSignup = _b[1];
    var _c = (0, react_1.useState)(""), email = _c[0], setEmail = _c[1];
    var _d = (0, react_1.useState)(""), password = _d[0], setPassword = _d[1];
    var _e = (0, react_1.useState)(""), username = _e[0], setUsername = _e[1];
    var router = (0, navigation_1.useRouter)();
    var supabase = (0, auth_helpers_nextjs_1.createClientComponentClient)();
    function displayForm(e) {
        if (e.target.dataset["form"] === "signup") {
            setShowSignup(true);
        }
        if (e.target.dataset["form"] === "login") {
            setShowSignup(false);
        }
        setShowLoginButtons(false);
    }
    function formDisplay() {
        if (showSignup) {
            return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("form", { children: [emailAndPasswordFields(), (0, jsx_runtime_1.jsx)("label", { htmlFor: "username", children: "Username: " }), (0, jsx_runtime_1.jsx)("input", { name: "username", id: "username", onChange: function (e) { return setUsername(e.target.value); }, value: username, role: "username-input" }), (0, jsx_runtime_1.jsx)("button", { className: "auth-submit-button", onClick: handleSignUp, children: "Sign up" })] }) }));
        }
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("form", { children: [emailAndPasswordFields(), (0, jsx_runtime_1.jsx)("button", { className: "auth-submit-button", onClick: handleSignIn, children: "Sign in" })] }) }));
    }
    function emailAndPasswordFields() {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email: " }), (0, jsx_runtime_1.jsx)("input", { name: "email", id: "email", onChange: function (e) { return setEmail(e.target.value); }, value: email, role: "email-input" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password: " }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", role: "password-input", onChange: function (e) { return setPassword(e.target.value); }, value: password })] }));
    }
    var handleSignUp = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var _a, data, error, error_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, supabase.auth.signUp({
                            email: email,
                            password: password,
                            options: {
                                emailRedirectTo: "".concat(location.origin),
                                data: {
                                    username: username,
                                },
                            },
                        })];
                case 1:
                    _a = _c.sent(), data = _a.data, error = _a.error;
                    if (error) {
                        displayError(error.message);
                    }
                    if (data.user) {
                        if (((_b = data.user.identities) === null || _b === void 0 ? void 0 : _b.length) === 0) {
                            error_1 = "An account with this email already exists. Please sign in with your existing account";
                            displayError(error_1);
                        }
                        else {
                            alert("Please check your email for a confirmation link");
                            setShowLoginButtons(true);
                        }
                    }
                    router.refresh();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSignIn = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var _a, data, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, supabase.auth.signInWithPassword({
                            email: email,
                            password: password,
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error) {
                        displayError(error.message);
                    }
                    if (data.error) {
                        displayError(data.error.message);
                    }
                    router.refresh();
                    return [2 /*return*/];
            }
        });
    }); };
    function displayError(error) {
        var errorContainer = document.querySelector(".error-container");
        errorContainer.innerHTML = error;
    }
    if (showLoginButtons) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "auth-button-display", children: [(0, jsx_runtime_1.jsx)("button", { className: "auth-button navbar-button", "data-form": "login", onClick: function (e) { return displayForm(e); }, role: "login-button", children: "Login" }), (0, jsx_runtime_1.jsx)("p", { children: "OR" }), (0, jsx_runtime_1.jsx)("button", { className: "signup-button auth-button navbar-button", "data-form": "signup", onClick: function (e) { return displayForm(e); }, role: "signup-button", children: "Sign Up" })] }));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "auth-form-display", children: [(0, jsx_runtime_1.jsx)("button", { className: "back-button", role: "auth-forms-back-button", onClick: function () { return setShowLoginButtons(true); }, children: "\u2190" }), formDisplay(), (0, jsx_runtime_1.jsx)("span", { className: "error-container" })] }));
    }
}
exports.default = Login;
