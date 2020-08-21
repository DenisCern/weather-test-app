const User = require('../models/registrationmdl');

const getUser = async (id) => {
    
        try {
            const user = await User.findAll({ where:{id: id}});
            const name = user[0].dataValues.name;
            return name;
        } catch (error) {};

}

module.exports = getUser;