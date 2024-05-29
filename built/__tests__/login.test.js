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
var vitest_1 = require("vitest");
var react_1 = require("@testing-library/react");
var user_event_1 = require("@testing-library/user-event");
var login_1 = require("../app/login");
(0, vitest_1.test)("Allows correct login flow", function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, loginButton, emailInput, passwordInput, loginButton2, backButton, loginButton3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = user_event_1.default.setup();
                (0, react_1.render)(<login_1.default />);
                return [4 /*yield*/, react_1.screen.findByRole("login-button")];
            case 1:
                loginButton = _a.sent();
                return [4 /*yield*/, (0, react_1.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            user.click(loginButton);
                            return [2 /*return*/];
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, react_1.screen.findByRole("email-input")];
            case 3:
                emailInput = _a.sent();
                return [4 /*yield*/, react_1.screen.findByRole("password-input")];
            case 4:
                passwordInput = _a.sent();
                (0, vitest_1.expect)(emailInput).toBeDefined();
                (0, vitest_1.expect)(passwordInput).toBeDefined();
                loginButton2 = react_1.screen.queryByRole("login-button");
                (0, vitest_1.expect)(loginButton2).toBeNull();
                return [4 /*yield*/, react_1.screen.findByRole("auth-forms-back-button")];
            case 5:
                backButton = _a.sent();
                return [4 /*yield*/, (0, react_1.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            user.click(backButton);
                            return [2 /*return*/];
                        });
                    }); })];
            case 6:
                _a.sent();
                return [4 /*yield*/, react_1.screen.findByRole("login-button")];
            case 7:
                loginButton3 = _a.sent();
                (0, vitest_1.expect)(loginButton3).toBeDefined();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("Allows correct signup flow", function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, signupButton, emailInput, passwordInput, signupButton2, backButton, signupButton3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = user_event_1.default.setup();
                (0, react_1.render)(<login_1.default />);
                return [4 /*yield*/, react_1.screen.findByRole("signup-button")];
            case 1:
                signupButton = _a.sent();
                return [4 /*yield*/, (0, react_1.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            user.click(signupButton);
                            return [2 /*return*/];
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, react_1.screen.findByRole("email-input")];
            case 3:
                emailInput = _a.sent();
                return [4 /*yield*/, react_1.screen.findByRole("password-input")];
            case 4:
                passwordInput = _a.sent();
                (0, vitest_1.expect)(emailInput).toBeDefined();
                (0, vitest_1.expect)(passwordInput).toBeDefined();
                signupButton2 = react_1.screen.queryByRole("signup-button");
                (0, vitest_1.expect)(signupButton2).toBeNull();
                return [4 /*yield*/, react_1.screen.findByRole("auth-forms-back-button")];
            case 5:
                backButton = _a.sent();
                return [4 /*yield*/, (0, react_1.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            user.click(backButton);
                            return [2 /*return*/];
                        });
                    }); })];
            case 6:
                _a.sent();
                return [4 /*yield*/, react_1.screen.findByRole("signup-button")];
            case 7:
                signupButton3 = _a.sent();
                (0, vitest_1.expect)(signupButton3).toBeDefined();
                return [2 /*return*/];
        }
    });
}); });