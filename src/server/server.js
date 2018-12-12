const express = require('express');
const os = require('os');
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeController = require('./controllers/sequelizeController.js')

const sequelize = new Sequelize('postgres://twssmlqn:jlPGPWeVGUUGFGvH2bZWl_cC45Y5yroo@pellefant.db.elephantsql.com:5432/twssmlqn');

const playerRouter = express.Router();
const invitationRouter = express.Router();
const gameRouter = express.Router();
const moveRouter = express.Router();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


////MODELS/////
const app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.set({'Content-Type': 'application/json'})
    res.sendFile(path.join(__dirname, './public/index.html'));
})

////Player Routes//////
app.use('/players', playerRouter)
playerRouter.get('/', sequelizeController.retrieveAllPlayers)
playerRouter.post('/', sequelizeController.createPlayer)


app.use('/invitations', invitationRouter)
invitationRouter.post('/', sequelizeController.createInvite)
invitationRouter.delete('/', sequelizeController.deleteInvite)
// invitationRouter.get()

app.use('/games', gameRouter)
// gameRouter.post()
// gameRouter.get()
// gameRouter.delete()

app.use('/moves', moveRouter)
// moveRouter.post()
// invitationRouter.get()
// invitationRouter.delete()
// invitationRouter.update()



app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
