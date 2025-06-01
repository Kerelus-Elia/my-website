"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stuvalidation = void 0;
const express_validator_1 = require("express-validator");
const stuvalidation = () => {
    return [
        (0, express_validator_1.check)("studentname").notEmpty().withMessage("name req..."),
        (0, express_validator_1.check)("id").notEmpty().withMessage("id req...").matches(/[A-Z]{1}\d{5}$/).withMessage("invalid format!"),
        (0, express_validator_1.check)("email").isEmail().withMessage("email req..."),
        (0, express_validator_1.check)("password").notEmpty().withMessage("password req...")
    ];
};
exports.stuvalidation = stuvalidation;
