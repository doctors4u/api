
const Plans = require("../models/Plans")

class ControllerPlans{
    
    async storage(req,res){

        try {


            const plan = await Plans.create(req.body)
            if(plan){
                return res.status(200).json({message:"Sucess"})
            }
            return res.status(400).json()
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Opss.. algo deu errado :("})

        }

    }

    async getAll(req,res){
        try {

            const plan = await Plans.findAll()

            if(plan.length > 0){
                return res.status(200).json(plan.map(item => item))
            }

            return res.status(404).json({message:"Nenhum plano foi encontrado :("})
            
        } catch (error) {

            return res.status(500).json({message:"Opss... algo deu errado! :("})
            
        }
    }

}

module.exports = new ControllerPlans()