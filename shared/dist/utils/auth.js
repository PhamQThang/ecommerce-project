"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictTo = void 0;
const restrictTo = (roles) => (user) => {
    if (!user) {
        throw new Error('Not authenticated');
    }
    if (!roles.includes(user.role)) {
        throw new Error('Not authorized');
    }
};
exports.restrictTo = restrictTo;
