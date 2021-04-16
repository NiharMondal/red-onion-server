const Food = require('../models/foodModels');

exports.getAllFood = (req, res) => {
   Food.find()
      .then(foods => {
         res.json(foods)
      })
      .catch(e => {
         console.log(e)
         res.json({
            message: "Error Occured"
         })
      })
   
}