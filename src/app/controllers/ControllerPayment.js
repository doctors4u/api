
const asaasSDK = require("asaas-sdk")
const moment = require("moment")

class ControllerPayment {

    async storage(req, res) {

        try {
         
            
        const type = req.body.type
        const id = req.body.id
        const user_id = req.body.user_id
        const provider_id = req.body.provider_id
        const startDate = req.body.startDate
        const endDate = req.body.endDate
        const startTime = req.body.startTime
        const endTime = req.body.endTime
        const cep = req.body.cep
        const street = req.body.street
        const complement = req.body.complement
        const obeservations = req.body.obeservations
        const service_name = req.body.service_name
        
    


        /* CREATE PAYMENT */
        asaasSDK.config({ environment: asaasSDK.SANDBOX, apiKey: process.env.API_SANDBOX });

        let cliente = {
            "name": req.body.name,
            "email": req.body.email,
            "cpfCnpj": req.body.cpfCnpj,
            "postalCode": req.body.zipCode,
            "address": req.body.address,
            "addressNumber": req.body.addressNumber,
            "complement": req.body.complement,
            "notificationDisabled": false,
        };

        const findalDate = moment().format("DD/MM/YYYY");

        console.log(findalDate.split('/').reverse().join('-'))


        asaasSDK.customers.post(cliente).then((client) => {
            let payment = {
                "customer": client.data.id,
                "billingType": type == 1 ? "CREDIT_CARD" : "PIX",
                "dueDate": `${findalDate.split('/').reverse().join('-')}`,
                "installmentValue": priceService,
                "installmentCount": 1,
                "externalReference": "",
                "postalService": false
            }


            asaasSDK.payments.post(payment).then(async (data) => {

                
                /* LOGICA PARA INSERIR  */


                if(data){
                    return res.status(200).json({ message: "Pagamento criado com sucesso!",url:data.data.invoiceUrl})
                }

            }).catch((err) => {
                return res.status(500).json({ message: "Opss... algo deu errado!", data: err })
            })

        })

    



            
        } catch (error) {
            return res.status(500).json({message:"Opss... algo deu errado!"})
        }

    }

    async get(req,res){

        try {

            const {id} = req.body.payment

          

            
        } catch (error) {

            return res.status(500).json({message:"Opss.. algo deu errado!"})
            
        }

    }
}

module.exports = new ControllerPayment()