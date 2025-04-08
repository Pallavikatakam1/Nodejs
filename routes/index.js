var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pallavi' });
});
  router.post('/', (req, res) => {
    const { Sequelize } = require('sequelize');
    
    const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/Support',{
        dialect: 'postgres',
        logging: false, // Set to true for logging SQL queries
      });
       
      async function testConnection() {
        try {
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
        } catch (error) {
          console.error('Unable to connect to the database:', error);
        }
      }
       
      testConnection();
    
    res.json({ user: req.body.username}

    )})


module.exports = router;
