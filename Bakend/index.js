const express = require('express');
const app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors({
  origin: "http://localhost:3000",   // or "*" to allow all origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



const path = require('path');
app.use(express.static(path.join(__dirname, 'Frontend/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend/build', 'index.html'));
});




require('dotenv').config();
const PORT = process.env.PORT || 5000;

const fanwallCardRoutes = require('./routes/fanwallCard');
app.use('/api/v1',fanwallCardRoutes);


const dbConnect = require('./config/database');
dbConnect();


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
});




app.get("/",(req,res)=>{
    res.send("Live Server")
})
