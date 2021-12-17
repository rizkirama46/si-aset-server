const bcrypt = require("bcrypt")

const hashPassword = password => {
  const hash = bcrypt.hashSync(password, 10)
  return hash
}

module.exports = {
  hashPassword
}