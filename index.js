require('dotenv').config();

const client = require('./bot/client');
const registerEvents = require('./bot/events');

registerEvents(client);

client.initialize();