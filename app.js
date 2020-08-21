const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const urlencodedParser = bodyparser.urlencoded({ extended: false });

app.use(bodyparser.json());
app.use(cookieParser());

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use('/', urlencodedParser, require('./routes/homerout'));

app.use('/logout', urlencodedParser, require('./routes/logoutrout'));

app.use('/delete', urlencodedParser, require('./routes/deleterout'));

app.use('/cities', urlencodedParser, require('./routes/citiesrout'));

app.use('/favourites', urlencodedParser, require('./routes/favouritesrout'));

app.use('/favourites/', urlencodedParser, require('./routes/cityPagerout'));

app.use('/registration', urlencodedParser, require('./routes/registrationrout'));

app.use('/login', urlencodedParser, require('./routes/loginrout'));

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});