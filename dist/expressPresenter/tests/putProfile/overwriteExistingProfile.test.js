"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var assertImmutableProfile_1 = require("../../../utils/assertImmutableProfile");
var assertProfile_1 = require("../../../utils/assertProfile");
var createImmutableProfile_1 = require("../../../utils/createImmutableProfile");
var createTextProfile_1 = require("../../../utils/createTextProfile");
var testValues_1 = require("../../../utils/testValues");
var setup_1 = require("../utils/setup");
var overwriteExistingProfile_1 = require("./utils/overwriteExistingProfile");
describe('expressPresenter.putProfile with existing model', function () {
    setup_1.default();
    it('should overwrite model when overwriting an existing model', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, overwriteExistingProfile_1.default(testValues_1.TEST_MBOX_AGENT, testValues_1.TEST_IMMUTABLE_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertProfile_1.default(testValues_1.TEST_IMMUTABLE_CONTENT)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not overwrite non-matched models', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, createImmutableProfile_1.default()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, overwriteExistingProfile_1.default(testValues_1.TEST_MBOX_AGENT)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, assertImmutableProfile_1.default()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should overwrite model when overwriting with mbox', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default({ agent: testValues_1.TEST_MBOX_AGENT })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, overwriteExistingProfile_1.default(testValues_1.TEST_MBOX_AGENT, testValues_1.TEST_IMMUTABLE_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertProfile_1.default(testValues_1.TEST_IMMUTABLE_CONTENT, { agent: testValues_1.TEST_MBOX_AGENT })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should overwrite model when overwriting with mbox_sha1sum', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default({ agent: testValues_1.TEST_MBOXSHA1_AGENT })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, overwriteExistingProfile_1.default(testValues_1.TEST_MBOXSHA1_AGENT, testValues_1.TEST_IMMUTABLE_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertProfile_1.default(testValues_1.TEST_IMMUTABLE_CONTENT, { agent: testValues_1.TEST_MBOXSHA1_AGENT })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should overwrite model when overwriting with openid', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default({ agent: testValues_1.TEST_OPENID_AGENT })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, overwriteExistingProfile_1.default(testValues_1.TEST_OPENID_AGENT, testValues_1.TEST_IMMUTABLE_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertProfile_1.default(testValues_1.TEST_IMMUTABLE_CONTENT, { agent: testValues_1.TEST_OPENID_AGENT })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should overwrite model when overwriting with account', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default({ agent: testValues_1.TEST_ACCOUNT_AGENT })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, overwriteExistingProfile_1.default(testValues_1.TEST_ACCOUNT_AGENT, testValues_1.TEST_IMMUTABLE_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertProfile_1.default(testValues_1.TEST_IMMUTABLE_CONTENT, { agent: testValues_1.TEST_ACCOUNT_AGENT })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=overwriteExistingProfile.test.js.map