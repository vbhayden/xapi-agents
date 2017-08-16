"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testValues_1 = require("../../../../utils/testValues");
var supertest_1 = require("../../utils/supertest");
exports.default = function (content, contentType) {
    return supertest_1.default
        .post('/xAPI/activities/profile')
        .set('Content-Type', contentType)
        .query({
        agent: testValues_1.TEST_MBOX_AGENT,
        profileId: testValues_1.TEST_PROFILE_ID,
    })
        .send(content);
};
//# sourceMappingURL=patchContent.js.map