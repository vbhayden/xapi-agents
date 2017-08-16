"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testValues_1 = require("../../../../utils/testValues");
var supertest_1 = require("../../utils/supertest");
exports.default = function (agent) {
    var profileId = testValues_1.TEST_PROFILE_ID;
    return supertest_1.default
        .delete('/xAPI/activities/profile')
        .query({ agent: JSON.stringify(agent), profileId: profileId });
};
//# sourceMappingURL=deleteProfile.js.map