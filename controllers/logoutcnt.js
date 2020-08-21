class LogOutController{

    async getLogOut(req, res) {
        
        res.clearCookie('userId');

        res.redirect('/');
        
    };

}

module.exports = new LogOutController();