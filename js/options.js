module.exports = {

againOptions:{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'2004 🔥',callback_data:'/pack2004'},{text:'ДОМ 🌊',callback_data:'/dspy'}],
                [{text:'УРОБОРОС 🍥',callback_data:'/uroboros'},{text:'УЛИЦА36 🍷',callback_data:'/ulica36'}],
                [{text:'THE GENETIC CODE 🧬 ',callback_data:'/thegeneticcode'}]        
            ]
        })
    
    },
    remixOptions:{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'AESTHETIC REMIX',callback_data:'/hardremix'}],
                   
            ]
        })
    
    },
    lofiOptions:{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'LO-FI',callback_data:'/lofipack'}],
                   
            ]
        })
    
    }
}
