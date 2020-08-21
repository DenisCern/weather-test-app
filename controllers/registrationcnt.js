const UserModel = require('../models/registrationmdl');
const codedata = require('../components/codeData');

class RegistrationController {

    async getUser(req, res) {

        res.render('registration', {
            isLoggined: req.cookies.isLoggined
        });

    };

    async postUser(req, res) {

        if (!req.body) return res.sendStatus(400);

        const name = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        if(!req.body.username || !req.body.email || !req.body.password){
            return res.render('registration',{
                emptyField: true
            });
        }

        UserModel.sync({ alter: true }).then(() => {

            UserModel.create({ name: name, email: email, password: password, favourites: ''}).then((data) => {

                const result = codedata(String(data.dataValues.id));
                res.cookie('userId', result);

                res.redirect("/cities");
                
            }).catch(err => {
                console.log(err);
                if(err.original.errno === 1062){
                    res.render('registration',{
                    error: true
                    });
                }else console.log(err);
            });
        }).catch(err => console.log(err));

    };

}

module.exports = new RegistrationController();



