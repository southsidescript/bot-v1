const TelegramApi = require('node-telegram-bot-api');

const {lofiOptions,againOptions,remixOptions} =require('./js/options')

const token = '6026951899:AAFFELKN2vX0slyWglqUnOGqZddcDgSUnVc';

const bot = new TelegramApi(token,{polling:true});

const chats = {};

 




const start = () =>{
    bot.setMyCommands([
        {command: '/start',description:'Перезапустить бота'},
        {command: '/info',description:'Информация'},
        {command:'/lofipack',description:'Lofi'},
        {command:'/remixpack',description:'Remixpack'},
        {command:'/musica36',description:'Musica36'},
        {command:'/support',description:'Связь с разработчиком'}
    ])

  
    
    bot.on('message', async function(msg){
        const text  = msg.text;
        const chatId = msg.chat.id;
        console.log(msg);

        if(text ==='/start'){
           await  bot.sendAnimation(chatId,'stickers/AnimatedSticker.tgs')
           await bot.sendMessage(688804750,`${chatId} = ${msg.from.first_name}      Message: ${msg.text} `);
           return  bot.sendMessage(chatId,`Hi sweetie , welcome 🔥.
About /info`); 
          }
          if(text ==='/info'){
            await bot.sendAnimation(chatId,'stickers/comands.tgs')
            return bot.sendMessage(chatId,`Scriptix готов к вашим командам госпожа ${msg.from.first_name}.
            ⚠️После выбора альбома ОБЯЗАТЕЛЬНО дождитесь окончания загрузки альбома.Завершение загрузки альбома - ✅.
    - Команда /lofipack LO-FI набор из 7 lofi style music  треков исполнителя скриптонит 🔥.
    также:
    - Команда /remixpack : Самые популярные ремиксы из всего World Wide Web 🔞     
    - Команда /musica36  для любителей оригинального творчества артиста.
    - Также можете оставить отзыв воспользуясь командой /support ☎️.`
            ); 
           }
           if(text === '/musica36'){
            return bot.sendMessage(chatId,'Выберите альбом пожалуйста 🎧',againOptions)  
           }
           if(text === '/remixpack'){
            await bot.sendAnimation(chatId,'stickers/remix.tgs')
           return bot.sendMessage(chatId,'Are you ready ?',remixOptions)
           }
           if(text === '/lofipack'){
            await bot.sendAnimation(chatId,'stickers/lofi.tgs')
            return bot.sendMessage(chatId,'Приятного прослушивания :3',lofiOptions)
           }
           if(text === '/support'){
            await bot.sendAnimation(chatId,'stickers/kiss.tgs')
            return bot.sendMessage(chatId,'Обратная связь с разработчиком @southsidescrip')
            }
            
        
            
            

          await   bot.sendMessage(688804750,`${chatId} = ${msg.from.first_name}      Message: ${msg.text} `);
              

         return bot.sendMessage(chatId,`Я к сожалению не понимаю ваши команды госпожа ${msg.from.first_name} :( Ознакомтесь с командами /info`)
        
    })

      bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if (data ==='/pack2004'){
            await bot.sendPhoto(chatId,'img/2004.jpg');
            await bot.sendMessage(chatId,'2004 — пятый студийный альбом казахстанского музыканта Скриптонита, выпущенный 24 декабря 2019 года на лейбле Musica36. Сначала альбом появился эксклюзивно на Apple Music, на других площадках был издан 28 января 2020 года.');
            await bot.sendAudio(chatId,"audio/Як2.mp3")
            await bot.sendAudio(chatId,"audio/Як3.mp3")
            await bot.sendAudio(chatId,"audio/ТыЭтоСерьезно.mp3")
            await bot.sendAudio(chatId,"audio/Привычка.mp3")
            await bot.sendAudio(chatId,"audio/Ха-ха-ха.mp3")
            await bot.sendAudio(chatId,"audio/Ок-ок.mp3")
            await bot.sendAudio(chatId,"audio/Колёса.mp3")  
            await bot.sendAudio(chatId,"audio/МоскваЛюбит.mp3")
            return bot.sendMessage(chatId,'Загрузка завершена 8/8 ✅')
        }
        if( data === '/uroboros'){
            await bot.sendPhoto(chatId,'img/uroboros.jpg');
            await bot.sendMessage(chatId,'Первоначально Скриптонит планировал выпустить альбом в один день с альбомом «Дом с нормальными явлениями», в 2015 году, который назывался в то время 3P, а затем «Отель „Эверест“», но работа над ним затянулась на два года. Пластинка претерпела множество изменений: от трэпа звучание перелилось в рэп, трэп, соул и рок. По словам Скриптонита, изначально планировалось издать релиз из около двадцати песен, но они его не устраивали, не дотягивали до уровня самой слабой на «Уроборосе», поэтому постоянно отсеивались.');
            await bot.sendAudio(chatId,"audio/Мистер718.mp3")
            await bot.sendAudio(chatId,"audio/Мистер718_2.mp3")
            await bot.sendAudio(chatId,"audio/ТыЭтоСерьезно.mp3")
            await bot.sendAudio(chatId,"audio/ТратаВремени.mp3")
            await bot.sendAudio(chatId,"audio/Положение.mp3")
            await bot.sendAudio(chatId,"audio/СливочноеМасло.mp3")
            return bot.sendMessage(chatId,'Загрузка завершена 6/6 ✅')
        }
        if( data === '/thegeneticcode'){
          await bot.sendPhoto(chatId,'img/thegeneticcode.jpg');
            await bot.sendMessage(chatId,'The Genetic Code – первый англоязычный альбом Скриптонита.О планах Скриптонита записать лонгплей для зарубежной аудитории сообщалось еще в мае.Он состоит из 14 треков и концептуально делится на две половины: одна вдохновлена современным звучанием, другая — олдскулом.Обложка отсылается к легендарному пятому студийному альбому «Speakerboxxx/The Love Below» американского хип-хоп дуэта');
            await bot.sendAudio(chatId,"audio/2STEP.mp3")
            await bot.sendAudio(chatId,"audio/7_DAYS.mp3")
            await bot.sendAudio(chatId,"audio/BOTH.mp3")
            await bot.sendAudio(chatId,"audio/GIMME_THE_LOOP.mp3")
            await bot.sendAudio(chatId,"audio/PARANOID.mp3")
            return bot.sendMessage(chatId,'Загрузка завершена 5/5 ✅')
        }
        if( data === '/dspy'){
          await bot.sendPhoto(chatId,'img/dspy.jpg');
            await bot.sendMessage(chatId,'Заголовок альбома, возможно, является аллюзией на название фильма «Дом с паранормальными явлениями». В альбоме чувствуется влияние объединения Top Dawg Entertainment из Лос-Анджелеса и американского рэпера Трэвиса Скотта. После выхода «Дом…» занял вторую строчку в альбомном чарте iTunes, обогнав альбом «Горгород» российского рэпера Oxxxymiron и уступив новому альбому британской певицы Адель. Обозреватель издания Газета.Ru Ярослав Забалуев отметил, что «за час с небольшим Жалелов предлагает не просто концептуальную, атмосферную работу, но и изрядное жанровое разнообразие — от трэпа и нью-йоркского хип-хопа до почти что госпела»');
            await bot.sendAudio(chatId,"audio/Вечеринка.mp3")
            await bot.sendAudio(chatId,"audio/Коньяк.mp3")
            await bot.sendAudio(chatId,"audio/ТанцуйСама.mp3")
            await bot.sendAudio(chatId,"audio/ЯНеУлыбаюсь.mp3")
            await bot.sendAudio(chatId,"audio/ЭтоЛюбовь.mp3")
            await bot.sendAudio(chatId,"audio/Притон.mp3")
            return bot.sendMessage(chatId,'Загрузка завершена 6/6 ✅')
        }
        if( data === '/ulica36'){
          await bot.sendPhoto(chatId,'img/ulica36.jpg');
            await bot.sendMessage(chatId,'«Праздник на улице 36» — второй студийный альбом казахстанского рэп-исполнителя Скриптонита, выпущенный 24 мая 2017 года на лейбле Gazgolder. Приквел альбома «Уроборос: Улица 36 / Зеркала».');
            await bot.sendAudio(chatId,"audio/ulica36/АгаНу.mp3")
            await bot.sendAudio(chatId,"audio/ulica36/КаплиВнизПоБедрам.mp3")
            await bot.sendAudio(chatId,"audio/ulica36/НеЗабирайМеняСПати.mp3")
            await bot.sendAudio(chatId,"audio/ulica36/Темно.mp3")
            await bot.sendAudio(chatId,"audio/ulica36/Цепи.mp3")
            return bot.sendMessage(chatId,'Загрузка завершена 5/5 ✅')
        }
        if(data === '/hardremix'){
        await bot.sendAudio(chatId,'audio/remix/MuslimMagomaevRemix_byScrip1.mp3')
        await bot.sendAudio(chatId,'audio/remix/Этобарбарбардвелесбухиremix_byScrip2.mp3')
        await bot.sendAudio(chatId,'audio/remix/поворот50Cent_byScrip3.mp3')
        await bot.sendAudio(chatId,'audio/remix/RaydaScripLowBassRemix_byScrip4.mp3')
        await bot.sendAudio(chatId,'audio/remix/GachiRemix_byScrip5.mp3')
        await bot.sendAudio(chatId,'audio/remix/Polozenieremix_byScrip6.mp3')
        await bot.sendAudio(chatId,'audio/remix/Талияfeat.TruwerРайда_byScrip7.mp3')
        await bot.sendAudio(chatId,'audio/remix/ТемноRemix_byScrip8.mp3')
        await bot.sendAudio(chatId,'audio/remix/UnknownStillЖивотные_byScrip9.mp3')
        await bot.sendAudio(chatId,'audio/remix/LambadaRemix_byScrip10.mp3')
        return bot.sendMessage(chatId,'Загрузка завершена 10/10 ✅')
        }
        if(data=== '/lofipack'){
          await bot.sendAudio(chatId,'audio/lofi/Lo-fi_byScrip1.mp3')
          await bot.sendAudio(chatId,'audio/lofi/Lo-fi_byScrip2.mp3')
          await bot.sendAudio(chatId,'audio/lofi/Lo-fi_byScrip3.mp3')
          await bot.sendAudio(chatId,'audio/lofi/Lo-fi_byScrip4.mp3')
          await bot.sendAudio(chatId,'audio/lofi/Lo-fi_byScrip5.mp3')
          await bot.sendAudio(chatId,'audio/lofi/Lo-fi_byScrip6.mp3')
          await bot.sendAudio(chatId,'audio/lofi/Lo-fi_byScrip7.mp3')
          return bot.sendMessage(chatId,'Загрузка завершена 7/7 ✅')
        }
        
      })
   
}

start();