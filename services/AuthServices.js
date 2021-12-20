const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const hashPassword = password => bcrypt.hashSync(password, 10)

const comparePassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)

const SECRET_KEY = process.env.JWT_SECRET_KEY

const generateToken = payload => jwt.sign(payload, SECRET_KEY)

const cekToken = token => jwt.verify(token, SECRET_KEY)

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  cekToken
}