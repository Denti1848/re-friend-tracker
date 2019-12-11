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
var LocationRestService = /** @class */ (function (_super) {
    __extends(LocationRestService, _super);
    function LocationRestService(app, database) {
        return _super.call(this, app, database) || this;
    }
    return LocationRestService;
}(abstract_rest_service_1.AbstractRestService));
exports.LocationRestService = LocationRestService;
//# sourceMappingURL=location-rest-service.js.map