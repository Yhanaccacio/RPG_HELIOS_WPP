const qrcode = require('qrcode-terminal');
const { PREFIX } = require('../config/config');
const commands = require('../commands');

function registerEvents(client) {

  client.on('qr', (qr) => {
    console.log('Escaneie o QR Code abaixo:');
    qrcode.generate(qr, { small: true });
  });

  client.on('ready', () => {
    console.log('Bot está online.');
  });

  client.on('message_create', async (msg) => {
    const text = msg.body.trim();

    if (!text.startsWith(PREFIX)) return;

    const content = text.slice(PREFIX.length).trim().toLowerCase();

    const args = content.split(' ');
    const command = args.shift();

    if (commands[command]) {
      await commands[command].execute(msg, args);
    }
  });
}

module.exports = registerEvents;