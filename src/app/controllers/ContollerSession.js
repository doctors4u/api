const StoragePanel = require('../models/UsersPanel')
const Users = require('../models/Users')

const jwt = require('jsonwebtoken')

class ContollerSession {

    async storagePanel(req, res) {
        try {
            const { mail, password } = req.body

            if (!mail || !password)
                return res.status(400).json({ error: "Formato de requisição inválido!" })

            const user = await StoragePanel.findOne({ where: { mail } })

            if (!user.name || !user.id)
                return res.status(401).json({ error: "Usuário não existe!" })

            if (!(await user.checkPassword(password)))
                return res.status(401).json({ error: "Usuário não existe!" })

            const token = jwt.sign({ id: user.id }, process.env.PANEL_TOKEN, {
                expiresIn: '7d'
            })

            res.setHeader('Authorization', `Bearer ${token}`);
            return res.status(200).json({
                user: {
                    id: user.id,
                    name: user.name,
                },
                token,
            })
        } catch (error) {
            return res.status(500).json({ message: "Opss algo deu errado!" })
        }
    }
    async storageApp(req,res){
        try {
            const { mail, password } = req.body

            if (!mail || !password)
                return res.status(400).json({ error: "Formato de requisição inválido!" })

            const user = await Users.findOne({ where: { mail } })

            if(!user){
            
                return res.status(401).json({message:"Usuário não existe"})
            }
            if (!user.mail || !user.id)
                return res.status(401).json({ error: "Usuário não existe!" })

            if (!(await user.checkPassword(password)))
                return res.status(401).json({ error: "Usuário não existe!" })

            const token = jwt.sign({ id: user.id }, process.env.CLIENT_TOKEN, {
                expiresIn: '7d'
            })

            res.setHeader('Authorization', `Bearer ${token}`);
            return res.status(200).json({
                user: {
                    id: user.id,
                    name: user.name,
                    mail:user.mail,
                },
                token,
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Opss algo deu errado!" })
        }
    }

}

module.exports = new ContollerSession()
