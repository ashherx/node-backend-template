const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const BACKEND_SERVER_PATH = process.env.BACKEND_SERVER_PATH;

module.exports = {
  PORT,
  BACKEND_SERVER_PATH,
};
