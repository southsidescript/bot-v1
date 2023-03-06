const TelegramApi = require('node-telegram-bot-api');

const {gameOptions, againOptions, musicOptions} =require('./js/options')

const token = '6026951899:AAFFELKN2vX0slyWglqUnOGqZddcDgSUnVc';

const bot = new TelegramApi(token,{polling:true});

const chats = {};










const startGame = async(chatId) =>{ 
    await  bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/8d1/8c0/8d18c03b-2e7d-35ec-8acd-e6711664fad6/192/15.webp')
    await  bot.sendMessage(chatId,`Сейчас я загадаю цифру от 0-9 а вы должны отгадать ее ,отгадаете можете сесть Sxriptix-у на лицо`)
    const randomNumber = Math.floor(Math.random() * 10)
    chats[chatId] = randomNumber;
    await  bot.sendMessage(chatId,'Отгадывайте:',gameOptions);
}



const start = () =>{
    bot.setMyCommands([
        {command: '/start',description:'Начальное приветствие'},
        {command: '/info',description:'Информация'},
        {command: '/acquaintance',description:'Знакомство'},
        {command:'/music',description:'scriptonite'},
        {command:'/game',description:'Грязные игры'},
        
    ])
    
    bot.on('message', async msg=>{
        const text  = msg.text;
        const chatId = msg.chat.id;
        console.log(msg);
        if(text ==='/start'){
           await  bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/8d1/8c0/8d18c03b-2e7d-35ec-8acd-e6711664fad6/192/14.webp')
           return  bot.sendMessage(chatId,'Hi sweetie ,welcome to bot by @southsidescrip'); 
          }
          if(text ==='/info'){
            await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/8d1/8c0/8d18c03b-2e7d-35ec-8acd-e6711664fad6/192/34.webp')
            return bot.sendMessage(chatId,`Меня зовут сэр Scriptix 🤖.Я первый экземпляр Мистера @southsidescrip.Скоро у меня появится функция бомбочки 💣.Из команд могу включить музыку исполнителя Скриптонит 
и сыграть с вами в игру.Scriptix в вашем распоряжении госпожа ${msg.from.first_name}`); 
           }
         if(text === '/acquaintance'){
           return bot.sendMessage(chatId,`Вас зовут ${msg.from.first_name} господин/госпожа?`)
         }
         if(text ==='Госпожа'){
          return bot.sendMessage(chatId,`Слушаю ваш запрос ,Госпожа ${msg.from.first_name}`); 
         }
         if(text ==='Господин'){
           return bot.sendMessage(chatId,`Слушаю ваш запрос ,Господин ${msg.from.first_name}`);
         }
         if(text === '/music'){
           await bot.sendAudio(chatId,'./audio/ДвеЛесбухи.mp3',);
           await bot.sendAudio(chatId,'./audio/НеЗабирайМеняСпать.mp3',);
           await bot.sendAudio(chatId,'./audio/МоскваЛюбит.mp3',);
           await bot.sendAudio(chatId,'./audio/Чистый.mp3',);
           return bot.sendAudio(chatId,'./audio/ЭтоЛюбовь.mp3',);
         }
         if(text === '/game'){
      
            return startGame(chatId);
          }
          
         return bot.sendMessage(chatId,`Я к сожалению не понимаю ваши команды госпожа ${msg.from.first_name} :( Ознакомтесь с командами`)
        
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
        } else{
            return bot.sendMessage(chatId,`К сожалению вы госпожа ${msg.from.first_name} сегодня без ничего.Scriptix загадал число ${chats[chatId]}`,againOptions);
        }
        

    
      })
   
}

start();