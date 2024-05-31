const { Sequelize, Model } = require('sequelize')
const bcrypt = require("bcrypt")

class Plans extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                qtd_dependents:Sequelize.STRING,
                has_lexa:Sequelize.STRING,
                extra_life:Sequelize.STRING,
                price:Sequelize.STRING,
                descount:Sequelize.STRING,  
                
            },
            {
                sequelize,
            }
        )

        this.addHook('beforeBulkUpdate', (options) => {
            if (options.fields.includes('id'))
                throw new Error('Requisição inválida');
        })
    }

}

module.exports = Plans