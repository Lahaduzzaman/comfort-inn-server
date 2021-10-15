const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    maxcount: {
        type: Number,
        required: true

    }

})