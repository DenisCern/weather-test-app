const crypto = require('crypto');

const decodedata = (data) => {
    var idkey = crypto.createDecipher('aes-128-cbc', 'mypassword');
    var id = idkey.update(String(data), 'hex', 'utf8')
    id += idkey.final('utf8');

    return id;
};

module.exports = decodedata;