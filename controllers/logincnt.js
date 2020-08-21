const UserModel = require('../models/registrationmdl');
const codedata = require('../components/codeData');

class LogInController {

    async getLogInPage(req, res) {

        res.render('login', {
            isLoggined: req.cookies.isLoggined
        });

    };

    async checkUser(req, res) {

        if (!req.body) return res.sendStatus(400);

        const email = req.body.email;
        const password = req.body.password;

        UserModel.findOne({
            where: {
                email: email,
                password: password
            },
            raw: true
        })
            .then(data => {
                if (data === null) {
                    res.render('login', {
                        error: true
                    });
                } else {
                    
                    const result = codedata(String(data.id));
                    res.cookie('userId', result);

                    res.redirect('cities');
                }
            })
            .catch(err => console.log(err));
    }

}

module.exports = new LogInController();