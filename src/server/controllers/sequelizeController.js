const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://twssmlqn:jlPGPWeVGUUGFGvH2bZWl_cC45Y5yroo@pellefant.db.elephantsql.com:5432/twssmlqn');

/////MODELS////////

let Player = sequelize.define('players', {
  id: {
    type: Sequelize.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING
  }
})

let Invitation = sequelize.define('invitations', {
  id: {
    type: Sequelize.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
  },
  invited: {
    type: Sequelize.INTEGER,
    mode: 'players',
    key: 'id'
  },
  invited_by: {
    type: Sequelize.INTEGER,
    mode: 'player',
    key: 'id'
  }
})

Invitation.hasMany(Player)

// let Games = sequelize.define('games',)


//////FUNCTIONS/////////

const sequelizeController = {};
sequelizeController.createPlayer = createPlayer
sequelizeController.retrieveAllPlayers = retrieveAllPlayers
sequelizeController.createInvite = createInvite

function createPlayer(req,res,next) {
  Player.sync({force: false}).then(() => {
      Player.create({
          username: 'a'
      })
  })
}

function retrieveAllPlayers(req,res,next) {
  Player.findAll({attributes: ['id','username']}).then((result)=>
    console.log(JSON.stringify(result))
  )
}

function createInvite(req,res,next) {
  Invitation.sync({force: false}).then(() => {
    Invitation.create({
      invited: req.body.target_id,
      invited_by: req.body.player_id,
      accepted: false,
    })
})
}

function deleteInvite(req,res,next) {
  Invitation.
}


module.exports = sequelizeController