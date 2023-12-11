const mongoose =require('mongoose');
const BookingSchema = new mongoose.Schema({

    movie:{
        type:mongoose.Types.ObjectId,
        ref:"Movies",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    seatNumber:{
        type:Number,
        required:trye
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const Booking = mongoose.model('Booking', BookingSchema)
module.exports = Booking;