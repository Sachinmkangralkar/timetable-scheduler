const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://sachin:sachin@cluster0.gz16nee.mongodb.net/");
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
