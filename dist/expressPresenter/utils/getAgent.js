"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var parseJson_1 = require("../../utils/parseJson");
var PATH = ['query', 'agent'];
exports.default = function (agentParam) {
    if (agentParam === undefined) {
        var warnings = [rulr_1.createRequiredWarning(agentParam, PATH)];
        throw new rulr_1.Warnings({}, ['query'], warnings);
    }
    return parseJson_1.default(agentParam, PATH);
};
//# sourceMappingURL=getAgent.js.map