import prisma from "../db";


const getOneUpdate = async (req, res) => {
    const update = await prisma.update.findUnique({
        
    })
    res.json({data: "message"})
}

const getUpdates = async (req, res) => {}
const createUpdate = async (req, res) => {}
const updateUpdate = async (req, res) => {}
const deleteUpdate = async (req, res) => {}

module.exports = {
    getOneUpdate
}