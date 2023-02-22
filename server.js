const express=require('express');
const app = express();
const dbConfig=require('./db');
const roomsRoute=require('./route/roomsRoute');
const usersRoute=require('./route/usersRoute');
const bookingRoute=require('./route/bookingRoute');
const BASE_PORT= process.env.BASE_PORT
app.use(express.json())

app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)
app.use('/api/bookings',bookingRoute)
app.listen(BASE_PORT,()=> console.log(`server run successfully in ${BASE_PORT} 🔥`));
