const { Schema,model } = require('mongoose');

const foodSchema = new Schema({
   title: String,
   subtitle: String,
   description: String,
   img: String,
   categories: String,
   price: Number
})
const Food = model("Food", foodSchema);
module.exports = Food;