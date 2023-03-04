//https://api.telegram.org/bot6026951899:AAFFELKN2vX0slyWglqUnOGqZddcDgSUnVc/getUpdates
//https://api.telegram.org/bot6026951899:AAFFELKN2vX0slyWglqUnOGqZddcDgSUnVc/sendMessage?chat_id=844827260&text=hi_sweetie

//DATABase
//"id":844827260,"first_name":"Polli
//"id":835326775,"first_name":"PACYUK



document.querySelector('button').onclick = function(){

    let message = document.querySelector('#message').value;
    let xhttp = new XMLHttpRequest();
    let victim = '835326775'
    const token = '6026951899:AAFFELKN2vX0slyWglqUnOGqZddcDgSUnVc';
    let url ='https://api.telegram.org/bot'+ token +'/sendMessage?chat_id='+ victim +'&text=';

    xhttp.open('GET', url +  message, true);
    xhttp.send();
}