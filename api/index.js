import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import cocoaBagRoute from './routes/cocoaBag.route.js';
import supplierRoute from './routes/supplierRoute.js';


dotenv.config();

const app = express();
const PORT = 3000;

app.use (express.json());
app.use(cookieParser());

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Set up your routes and middleware here

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);
  app.use('/api/cocoabag', cocoaBagRoute);
  app.use('/api/supplier', supplierRoute);


app.use((err, req, res, next)=>{
  const statusCode =err.statusCode||500;
  const message= err.message ||"Internal Server Error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });
});
