import { Router } from "express"
import { body, oneOf } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router()

/**
 * Product
 */

router.get("/products", (req, res) => {
    res.json({message: "hello"})
})
router.get("/product/:id", () => {})
router.post("/product", [body("name").isString(), handleInputErrors], (req, res) => {})

router.put("/product/:id", body("name").isString(), handleInputErrors, (req, res) => {
    
    return res.json({message: "validation complete"})
})
// patch only updates fields
// router.patch("/product/:id", () => {}) 
router.delete("/product/:id", () => {})

/**
 * Updates
 */

router.get("/updates", () => {})
router.get("/update/:id", () => {})

router.post("/update", [
    body("title").exists(),
    body("body").exists(),
], (req, res) => {})

router.put("/update/:id", [
    body("title").optional(),
    body("body").optional(),
    body("version").optional(),
    oneOf([
        body("status").equals('IN_PROGRESS'),
        body("status").equals('SHIPPED'),
        body("status").equals('DEPRECATED')
    ]),
    handleInputErrors], () => {})

router.delete("/update/:id", () => {})

/**
 * Updates Points
 */

router.get("/updatespoints", () => {})
router.get("/updatepoint/:id", () => {})
router.post("/updatepoint", () => {})

router.put("/updatepoint/:id", [
    body("name").optional(),
    body("description").optional(),
    body("updatedId").exists().isString()
], (req, res) => {})

router.delete("/updatepoint/:id", () => {})

export default router;