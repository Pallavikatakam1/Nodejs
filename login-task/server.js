const express = require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/users');

app.use(express.json());
app.use('/api/users', userRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
