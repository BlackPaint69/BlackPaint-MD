const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    // Generar y escanear el código QR
    console.log('Escanea este código QR con tu teléfono para iniciar sesión en WhatsApp');
});

client.on('ready', () => {
    console.log('Cliente de WhatsApp está listo');
});

client.on('message', async (message) => {
    if (message.body === 'Hola') {
        await message.reply('¡Hola! ¿En qué puedo ayudarte?');
    }
});

client.initialize();
