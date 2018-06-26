"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("jscommons/dist/expressPresenter/mixins/cors");
var helmet_1 = require("jscommons/dist/expressPresenter/mixins/helmet");
var morgan_1 = require("jscommons/dist/expressPresenter/mixins/morgan");
var deleteProfile_1 = require("./deleteProfile");
var getFullAgent_1 = require("./getFullAgent");
var getProfiles_1 = require("./getProfiles");
var postProfile_1 = require("./postProfile");
var putProfile_1 = require("./putProfile");
exports.default = (function (config) {
    var router = express_1.Router();
    router.use(cors_1.default());
    router.use(helmet_1.default());
    router.use(morgan_1.default(config.morganDirectory));
    router.delete('/profile', deleteProfile_1.default(config));
    router.get('/profile', getProfiles_1.default(config));
    router.put('/profile', putProfile_1.default(config));
    router.post('/profile', postProfile_1.default(config));
    router.get('', getFullAgent_1.default(config));
    return router;
});
//# sourceMappingURL=index.js.map