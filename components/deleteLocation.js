const deleteLocation = () =>{
    var LocalStorage = require('node-localstorage').LocalStorage;
    let localStorage = new LocalStorage('./scratch');
    localStorage._deleteLocation();
}

module.exports = deleteLocation;