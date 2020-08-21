const checkString = (city, data) => {

    for (let index = 0; index < data.length; index++) {
        const element = data[index].name;
      
        if (element === city) {
            return true;
        };
    };

};

module.exports = checkString;