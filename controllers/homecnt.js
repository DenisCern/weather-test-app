const deleteLocation = require('../components/deleteLocation');
const getUser = require('../components/getUserName');
const decodedata = require('../components/decodeData');

class HomePageController {
    async getHomePage(req, res) {
        deleteLocation();
        if(req.cookies.userId !== undefined){
        const result = decodedata(req.cookies.userId);
        const userName =  await getUser(result);
        res.render('home',{
            userName: userName,
            isLoggined: true
        });
    }else {
        res.render('home',{
            isLoggined: false
        });
    };
        
    };
 
}

module.exports = new HomePageController();