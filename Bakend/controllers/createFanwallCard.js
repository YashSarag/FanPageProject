const fanwallCardObject = require('../models/fanwallCard');

async function createFanwallCard(req,res){
    try{
        const {user,body,city,color} = req.body;
        const card = new fanwallCardObject(
            {user,body,color,city}
        );

        const savedCard = await card.save();

        res.status(200).json({
            success: true,
            data: savedCard,
            message: "Card added to databse."
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

module.exports = createFanwallCard;