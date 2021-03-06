"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (storedAgent, agent) {
    if (agent.mbox !== undefined) {
        return storedAgent.mbox === agent.mbox;
    }
    if (agent.mbox_sha1sum !== undefined) {
        return storedAgent.mbox_sha1sum === agent.mbox_sha1sum;
    }
    if (agent.openid !== undefined) {
        return storedAgent.openid === agent.openid;
    }
    if (agent.account !== undefined) {
        return (storedAgent.account !== undefined &&
            storedAgent.account.homePage === agent.account.homePage &&
            storedAgent.account.name === agent.account.name);
    }
    /* istanbul ignore next */
    throw new Error('Invalid agent IFI');
});
//# sourceMappingURL=isMatchingAgent.js.map