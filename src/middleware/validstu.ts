import { check } from "express-validator";

export const stuvalidation = () => {
    return [
        check("studentname").notEmpty().withMessage("name req..."),
        check("id").notEmpty().withMessage("id req...").matches(/[A-Z]{1}\d{5}$/).withMessage("invalid format!"),
        check("email").isEmail().withMessage("email req..."),
        check("password").notEmpty().withMessage("password req...")
    ]
}