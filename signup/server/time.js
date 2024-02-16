const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://sachin:sachin@cluster0.gz16nee.mongodb.net/'; 

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    console.log('Could not connect to the database!');
  }
};

connectToDatabase();

const timeTableSchema = new mongoose.Schema({
  classNumber: String,
  day: String,
  sub1: String,
  sub2: String,
  sub3: String,
  sub4: String,
  break: String,
  sub5: String,
  sub6: String,
  sub7: String,
});

const TimeTable = mongoose.model('TimeTable', timeTableSchema);

app.post('/api/getSchedule', async (req, res) => {
    console.log('Received request:', req.body);
    const { selectedClass, selectedDay } = req.body;
  
    try {
      const schedule = await TimeTable.findOne({ classNumber: selectedClass, day: selectedDay });
      console.log('Retrieved Schedule:', schedule);
      res.json(schedule);
    } catch (error) {
      console.error('Error retrieving schedule:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
