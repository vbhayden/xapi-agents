"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testValues_1 = require("../../../../utils/testValues");
var supertest_1 = require("../../utils/supertest");
exports.default = function (agent) {
    if (agent === void 0) { agent = testValues_1.TEST_MBOX_AGENT; }
    return supertest_1.default
        .get('/xAPI/agents')
        .query({
        agent: JSON.stringify(agent),
    });
};
//# sourceMappingURL=getFullAgent.js.map