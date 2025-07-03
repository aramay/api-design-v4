import { Router } from "express"

const router = Router()

/**
 * Product
 */

router.get("/products", (req, res) => {
    res.json({message: "hello"})
})
router.get("/product/:id", () => {})
router.post("/product", () => {})
router.put("/product/:id", () => {})
// patch only updates fields
// router.patch("/product/:id", () => {}) 
router.delete("/product/:id", () => {})

/**
 * Updates
 */

router.get("/updates", () => {})
router.get("/update/:id", () => {})
router.post("/update", () => {})
router.put("/update/:id", () => {})
router.delete("/update/:id", () => {})

/**
 * Updates Points
 */

router.get("/updatespoints", () => {})
router.get("/updatepoint/:id", () => {})
router.post("/updatepoint", () => {})
router.put("/updatepoint/:id", () => {})
router.delete("/updatepoint/:id", () => {})

export default router;