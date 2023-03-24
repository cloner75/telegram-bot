import { Schema, model } from 'mongoose';

interface City {
  name: String;
}

const citySchema = new Schema<City>({
  name: { type: String, required: true },
});

const city = model('cities', citySchema);

export default city;