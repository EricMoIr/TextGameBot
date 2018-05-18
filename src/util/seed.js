const Location = require("../models/location");
const Zombie = require("../models/zombie");

module.exports = async () => {
    const locations = [
        new Location({
            name: "Nastya's Holdout"
        }),
        new Location({
            name: "Dogg's Stockade"
        }),
        new Location({
            name: "Fort Pastor"
        }),
    ];
    const zombies = [
        new Zombie({
            name: "Fat Female Zombie",
        })
    ];
    locations.forEach(async location => {
        const exists = await Location.findOne({"name": location.name});
        if(!exists){
            try{
                await location.save();
            }
            catch(error){
                console.error("There was an error while seeding");
                console.error(error);
            }
        }
    });
}