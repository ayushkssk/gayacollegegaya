   // server.js
   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const dotenv = require('dotenv');

   dotenv.config();

   const app = express();
   app.use(cors());
   app.use(express.json());

   const PORT = process.env.PORT || 5001;

   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB connected'))
     .catch(err => console.log(err));

   const authRoutes = require('./routes/auth');

   app.use('/api/auth', authRoutes);

   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));