const router = require('express').Router();
const {
   getAllFood
} = require('../controllers/foodController')
router.get('/', getAllFood)

module.exports = router;