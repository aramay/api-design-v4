import { param } from "express-validator";
import prisma from "../db";

/**
 * Get all products for this User
 */

export const getProducts = async (req, res) => {

    // console.log("req ", req.params)
    // console.log("userid ", userid)
    // const { userid } = req.params
    console.log("req ", req.user)
    
    const { id } = req.user
   
    const user = prisma.user.findUnique({
        where: {
        id: id
       },
       include: {
        products: true
       }
    })
    res.json({ data: user.products })
}

export const getOneProduct = async (req, res) => {

    const { id } = req.params

    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsTo: req.user.id
        }
    })
    res.json({data: product})
}

export const createProduct = async (req, res) => {
    const { name } = req.body
    const { id } = req.user

    const product = await prisma.product.create({
        data: {
            name: name,
            belongsToId: id
        }
    })
    res.json({data: product})
}

export const updateProduct = async (req, res) => {
    const { productId } = req.params
    const { name } = req.body
    const { userId } = req.user

    const updated = await prisma.product.update({
        where: {
            id: productId,
            belongsTo: userId
        },
        data: {
            name: name
        }
    })
    res.json({data: updated})
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    const deleted = await prisma.product.delete({
        where: {
            id: id,
            belongsTo: id
        }
    })
    return res.json({data: "Product Deleted"})
}

