const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();

require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())