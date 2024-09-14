const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

require('dotenv').config();

const dbMain = process.env.MONGODB_CONNECTION_STRING;
console.log(dbMain);
const connectDbMain = async () => {
  console.log(dbMain,"DDD");
    mongoose
    .connect(dbMain)
    .then(() => console.log('database connection success!'))
    .catch((error) => console.log(error.message, 'catch block of DB'));
};

module.exports = {connectDbMain};
