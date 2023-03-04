const TelegramApi = require('node-telegram-bot-api');

const {gameOptions, againOptions} =require('./js/options')

const token = '6026951899:AAFFELKN2vX0slyWglqUnOGqZddcDgSUnVc';

const bot = new TelegramApi(token,{polling:true});

const chats = {};










const startGame = async(chatId) =>{ 
    await  bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/93c/dca/93cdcaef-8ca5-3f2c-b41f-b9ae857ba159/192/49.webp')
    await  bot.sendMessage(chatId,`Сейчас я загадаю цифру от 0-9 а вы должны отгадать ее ,отгадаете можете сесть боту на лицо`)
    const randomNumber = Math.floor(Math.random() * 10)
    chats[chatId] = randomNumber;
    await  bot.sendMessage(chatId,'Отгадывайте госпожа:',gameOptions);
}



const start = () =>{
    bot.setMyCommands([
        {command: '/start',description:'Начальное приветствие'},
        {command: '/info',description:'Информация'},
        {command:'/game',description:'Грязные игры'},
        
    ])
    
    bot.on('message', async msg=>{
        const text  = msg.text;
        const chatId = msg.chat.id;
        console.log(msg);
        if(text ==='/start'){
           await  bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/9d0/488/9d04880c-c454-31d4-984a-106b020cad15/7.webp')
           return  bot.sendMessage(chatId,'Hi sweetie ,welcome to bot by @southsidescrip'); 
          }
         if(text === '/info'){
           return bot.sendMessage(chatId,`Вас зовут ${msg.from.first_name} ${msg.from.last_name} господин/госпожа?`)
         }
         
         if(text === '/game'){
      
            return startGame(chatId);
          }
          
         return bot.sendMessage(chatId,`Я к сожалению не понимаю ваши команды госпожа ${msg.from.first_name}:( Ознакомтесь с командами`)
        
    })
   
      bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if (data==='/again'){
            return startGame(chatId);
        }
        if(data===chats[chatId]){
               await   bot.sendMessage(chatId,`Поздравляю вы отгадали цифру ${chats[chatId]} лицо бота к вашим услугам`)
               return  bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/1.webp')
        }else{
            return bot.sendMessage(chatId,`К сожалению вы госпожа ${msg.from.first_name} сегодня без ничего.Бот загадал число ${chats[chatId]}`,againOptions);
        }
        

    
      })
   
}

start();