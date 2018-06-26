"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchProfileIdentifier_1 = require("./matchProfileIdentifier");
exports.default = (function (_a) {
    var client = _a.client, agent = _a.agent, profile = _a.profile, profileId = _a.profileId;
    return (matchProfileIdentifier_1.default({ client: client, agent: agent, profile: profile }) &&
        profile.profileId === profileId);
});
//# sourceMappingURL=matchUniqueProfile.js.map