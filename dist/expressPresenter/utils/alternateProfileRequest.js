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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var InvalidContentType_1 = require("../../errors/InvalidContentType");
var InvalidMethod_1 = require("../../errors/InvalidMethod");
var getAgent_1 = require("./getAgent");
var getAlternateProfileWriteOpts_1 = require("./getAlternateProfileWriteOpts");
var getClient_1 = require("./getClient");
var getProfileFromService_1 = require("./getProfileFromService");
var getProfileId_1 = require("./getProfileId");
var getProfilesFromService_1 = require("./getProfilesFromService");
exports.default = function (_a) {
    var config = _a.config, method = _a.method, req = _a.req, res = _a.res;
    return __awaiter(_this, void 0, void 0, function () {
        var _a, opts, client, agent, profileId, opts, client, ifMatch, profileId, agent;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (req.header('Content-Type') !== 'application/x-www-form-urlencoded') {
                        throw new InvalidContentType_1.default(req.header('Content-Type'));
                    }
                    _a = method.toUpperCase();
                    switch (_a) {
                        case 'POST': return [3 /*break*/, 1];
                        case 'GET': return [3 /*break*/, 4];
                        case 'PUT': return [3 /*break*/, 9];
                        case 'DELETE': return [3 /*break*/, 12];
                    }
                    return [3 /*break*/, 15];
                case 1: return [4 /*yield*/, getAlternateProfileWriteOpts_1.default(config, req)];
                case 2:
                    opts = _b.sent();
                    return [4 /*yield*/, config.service.patchProfile(opts)];
                case 3:
                    _b.sent();
                    res.status(204).send();
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, getClient_1.default(config, req.body.Authorization)];
                case 5:
                    client = _b.sent();
                    agent = getAgent_1.default(req.body.agent);
                    if (!(req.body.profileId === undefined)) return [3 /*break*/, 7];
                    return [4 /*yield*/, getProfilesFromService_1.default({ config: config, res: res, agent: agent, client: client })];
                case 6:
                    _b.sent();
                    return [2 /*return*/];
                case 7:
                    profileId = req.body.profileId;
                    return [4 /*yield*/, getProfileFromService_1.default({ config: config, res: res, agent: agent, client: client, profileId: profileId })];
                case 8:
                    _b.sent();
                    return [2 /*return*/];
                case 9: return [4 /*yield*/, getAlternateProfileWriteOpts_1.default(config, req)];
                case 10:
                    opts = _b.sent();
                    return [4 /*yield*/, config.service.overwriteProfile(opts)];
                case 11:
                    _b.sent();
                    res.status(204).send();
                    return [2 /*return*/];
                case 12: return [4 /*yield*/, getClient_1.default(config, req.body.Authorization)];
                case 13:
                    client = _b.sent();
                    ifMatch = req.body['If-Match'];
                    profileId = getProfileId_1.default(req.body.profileId);
                    agent = getAgent_1.default(req.body.agent);
                    return [4 /*yield*/, config.service.deleteProfile({ agent: agent, client: client, profileId: profileId, ifMatch: ifMatch })];
                case 14:
                    _b.sent();
                    res.status(204).send();
                    return [2 /*return*/];
                case 15:
                    {
                        throw new InvalidMethod_1.default(method);
                    }
                    _b.label = 16;
                case 16: return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=alternateProfileRequest.js.map