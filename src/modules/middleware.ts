import { validationResult } from "express-validator";

export const handleInputErrors = (req, res, next) => {

    const errors = validationResult(req)

    console.log("errors ", errors)

    if(!errors.isEmpty()) {
        res.status(400);
        return res.json({errors: errors.array()})
    } else {
        next()
    }
}
