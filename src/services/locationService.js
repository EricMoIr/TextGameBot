const Location = require("../models/location");

const ERRORS = Object.freeze({
    "USER_NOT_EXISTENT": 1,
    "SAME_LOCATION_MOVE": 2,
    "COULDNT_GET_NEXT_LOCATION": 3,
});

exports.ERRORS = ERRORS;

exports.getNextLocation = async (locationId) => {
    try{
        const location = await Location.findById(locationId).populate("next");
        return location.next;
    }
    catch(err){
        console.log(err);
        throw ERRORS.COULDNT_GET_NEXT_LOCATION;
    }
}