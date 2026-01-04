const express = require('express');
const app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors({
<<<<<<< HEAD
  origin: "*", 
=======
  origin: "https://fan-page-frontend-alpha.vercel.app",
>>>>>>> 43069ce (version_2)
  methods: ["GET", "POST", "PUT", "DELETE"],
}));



<<<<<<< HEAD
const path = require('path');
// serve static files first
app.use(express.static(path.join(__dirname, "../Frontend/public")));

// catch-all (must be last)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/public", "index.html"));
});
=======
// const path = require('path');
// // serve static files first
// app.use(express.static(path.join(__dirname, "../Frontend")));

// // catch-all (must be last)
// app.get(/.*/, (req, res) => {
//   res.sendFile(path.join(__dirname, "../Frontend", "index.html"));
// });
>>>>>>> 43069ce (version_2)




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
