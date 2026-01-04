const mongoose = require("mongoose");

const fanwallCardSchema = new mongoose.Schema(
    {
        user:{
            type: String,
            required: true,
            maxLength: 50,
        },

        body:{
            type: String,
            required: true,
            maxLength: 500,
        },

        city:{
            type: String,
            required: true,
        },

        color:{
            type: String,
            required: true,
        },
        
        createdDate:{
            type: Date,
            required: true,
            default: new Date(),
        }
    }
);

module.exports = mongoose.model("fanwallcard",fanwallCardSchema);