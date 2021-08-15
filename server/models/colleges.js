import mongoose from 'mongoose';

const collegesSchema = mongoose.Schema({
    collegeId:  Number,
    collegeName: String,
    founded: Number,
    city: String,
    state: String,
    country: String,
    noOfStudents: Number,
});

const Colleges = mongoose.model('Colleges',collegesSchema);
export default Colleges;

