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
var abstract_database_1 = require("./abstract-database");
var GroupDatabase = /** @class */ (function (_super) {
    __extends(GroupDatabase, _super);
    function GroupDatabase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupDatabase.prototype.getEntityName = function () {
        return "group";
    };
    GroupDatabase.prototype.getSort = function () {
        return ["name"];
    };
    GroupDatabase.prototype.createPathListEntry = function (entry, entity) {
        entry.name = entity.name;
        return _super.prototype.createPathListEntry.call(this, entry, entity);
    };
    return GroupDatabase;
}(abstract_database_1.AbstractDatabase));
exports.GroupDatabase = GroupDatabase;
//# sourceMappingURL=group-database.js.map