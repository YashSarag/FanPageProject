const fanwallCardObject = require('../models/fanwallCard');

async function getFanwallCards(req,res){
    try{
        const cards = await fanwallCardObject.find({});
        res.status(200).json({
            success: true,
            data: cards,
            message: "Data fetched successfully",
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        })
    }
}

module.exports = getFanwallCards;