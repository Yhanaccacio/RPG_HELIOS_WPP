module.exports = {
  name: 'ping',
  execute: async (msg) => {
    await msg.reply('pong');
  }
};