const express=require('express');
const app = express();
const dbConfig=require('./db');
const roomsRoute=require('./route/roomsRoute');
const usersRoute=require('./route/usersRoute');
const bookingRoute=require('./route/bookingRoute');
const BOO='https://zinrooms-bookings.onrender.com'
const port=process.env.BOO || process.env.PORT
app.use(express.json())

app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)
app.use('/api/bookings',bookingRoute)
app.listen(port,()=> console.log(`server run successfully in ${port} 🔥`));
