"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_rest_service_1 = require("./abstract-rest-service");
var GroupRestService = /** @class */ (function (_super) {
    __extends(GroupRestService, _super);
    function GroupRestService(app, database) {
        var _this = _super.call(this, app, database) || this;
        _this.database = database;
        return _this;
    }
    return GroupRestService;
}(abstract_rest_service_1.AbstractRestService));
exports.GroupRestService = GroupRestService;
//# sourceMappingURL=group-rest-service.js.map