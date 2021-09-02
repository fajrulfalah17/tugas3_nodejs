const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: String,
    gender : {
        type: String,
        required: true
    },
    hobby: String,
    create_date: {
        type: Date,
        default: Date.now
    }
})

// export model student
const Student = module.exports = mongoose.model('student', StudentSchema);
module.exports.get = function(callback, limit){
    Student.find(callback).limit(limit);
}