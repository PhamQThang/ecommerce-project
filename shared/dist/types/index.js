"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEnum = void 0;
// Thêm enum Role (vì trong database không có enum, bạn cần định nghĩa thủ công)
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["ADMIN"] = "admin";
    RoleEnum["EMPLOYEE"] = "employee";
    RoleEnum["CUSTOMER"] = "customer";
})(RoleEnum || (exports.RoleEnum = RoleEnum = {}));
