const User = require("../models/user");
const { getNextLocation } = require("./locationService");

const ERRORS = Object.freeze({
    "USER_NOT_EXISTENT": 1,
    "SAME_LOCATION_MOVE": 2,
    "COULDNT_GET_USER": 3,
});

const getUser = async (userId) => {
    try{
        return await User.findOne({userId});
    }
    catch(err){
        console.log(err);
        throw ERRORS.COULDNT_GET_USER;
    }
};

exports.goToInnerCity = async (userId) => {
    const user = await getUser(userId);
    if(!user){
        throw ERRORS.USER_NOT_EXISTENT;
    }
    if(isAtInnerCity(user)){
        throw ERRORS.SAME_LOCATION_MOVE;
    }
    user.location = await getNextLocation(user.location);
    return true;
}

exports.goToOutpost = async (userId) => {
    const user = await getUser(userId);
    if(!user){
        throw ERRORS.USER_NOT_EXISTENT;
    }
    if(isAtOutpost(user)){
        throw ERRORS.SAME_LOCATION_MOVE;
    }
    user.location = await getNextLocation(user.location);
    return true;
}

exports.getInnerCityCommands = async () => {
    return [
        "``return`` (the further you are from the city, the lesser are your chances to leave the city without encountering a zed)",
        "``explore``",
        "``items``",
        "``barricade``"
    ];
}