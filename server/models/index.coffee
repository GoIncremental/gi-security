module.exports = (mongoose) ->
  users: require('./users')(mongoose)
  roles: require('./roles')(mongoose)
  accounts: require('./accounts')(mongoose)