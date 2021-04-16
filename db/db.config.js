const mongoose = require('mongoose');

const connectDB = async () => {
   try {
      await mongoose.connect("mongodb+srv://red_onion:2mnsHcTXxfqWYhJb@cluster1.slvnc.mongodb.net/redOnion?retryWrites=true&w=majority", {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify:true
      })
      console.log("mongodb connected");
   } catch (err){
      console.error(err);
      process.exit(1)
   }
}
module.exports = connectDB;