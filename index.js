const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const readline = require('readline');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lastSender = null;  

client.on('message', async message => {
    console.log(`\n[${message.from}] ${message.body}`);
    lastSender = message.from; 

    rl.question('Type your reply: ', async (userReply) => {
        if (lastSender) {
            await client.sendMessage(lastSender, userReply);
            console.log('Reply sent!');
        } else {
            console.log('No sender found.');
        }
    });
});

client.initialize();
