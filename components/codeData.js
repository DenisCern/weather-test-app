const crypto = require('crypto');

const codedata = (id) => {

    var idkey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var id = idkey.update(id, 'utf8', 'hex')
    id += idkey.final('hex');

    return id;

};

module.exports = codedata;