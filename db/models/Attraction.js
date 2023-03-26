import mongoose from 'mongoose'
const { Schema } = mongoose;
const attractionSchema = new Schema({
  name: String,
  location: String,
  image: String,
  mapURL: String,
  description: String
});

const Attraction = mongoose.models.Attraction || mongoose.model('Attraction', attractionSchema);
export default Attraction;
