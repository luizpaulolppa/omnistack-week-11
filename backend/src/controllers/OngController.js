const connection = require("../database/connection");
const generateIniqueId = require("../utils/generateIniqueId");

module.exports = {
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = generateIniqueId();

        await connection("ongs").insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return res.json({ id });
    },

    async index(req, res) {
        const ongs = await connection("ongs").select("*");

        return res.json(ongs);
    }
}