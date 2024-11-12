import mongoose from 'mongoose';

const therapistSchema = new mongoose.Schema({
  image: String,
  name: String,
  education: String,
  availableDays: [String],
  mobileNo: String,
});

const Therapist = mongoose.model('Therapist', therapistSchema);

export default Therapist;