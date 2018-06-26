"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
exports.default = (function (config, opts) {
    var profile = {
        agent: opts.agent,
        content: opts.content,
        contentType: opts.contentType,
        etag: opts.etag,
        extension: opts.extension,
        id: uuid_1.v4(),
        lrs: opts.client.lrs_id,
        organisation: opts.client.organisation,
        profileId: opts.profileId,
        updatedAt: new Date(),
    };
    config.state.agentProfiles = config.state.agentProfiles.concat([
        profile,
    ]);
    return profile;
});
//# sourceMappingURL=createProfile.js.map