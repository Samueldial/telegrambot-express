import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import { Mensagem } from '../Models/Mensagem';


const token = '2015539712:AAE5YskluiQ0-QolUbJGegBibsm1DQsD1Uo';
const bot = new TelegramBot(token, {polling: true});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/mensagem', (req, res) => {
    console.log("chegou aqui");
    bot.on('message', (msg) => {
        const Hi: string = "hi";
        if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
            bot.sendMessage(msg.chat.id,"Hello world 2");
        } 
    })
        res.status(200).send("Deu certo");
   
});

app.get('/imagem', (req, res) => {
    bot.onText(/\/sendpic/, (msg) => {

        bot.sendPhoto(msg.chat.id,
            "https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/65473.jpg",
            {caption : "Here we go ! \nThis is just a caption "} );
        });
        res.status(200).send("Deu certo");
   
});

app.get('/teclado', (req, res) => {
    bot.onText(/\/start/, (msg) => {

        bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
            }
        });
        
        });
        res.status(200).send("teclado");
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
