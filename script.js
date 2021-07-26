'use strict';

let data = 
    {"columns":[
        {
            "code":"Острів",
            "name":"Острів",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"Text"
        },
        {
            "code":"Локація",
            "name":"Локація",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"Text"
        },
        {
            "code":"Текст",
            "name":"Текст",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"Text"
        },
        {
            "code":"Дата",
            "name":"Дата",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"DateTime"
        },{
            "code":"Коментар",
            "name":"Коментар",
            "viewState":0,
            "isFileContent":false,
            "isFileName":false,
            "isPrintable":true,
            "hint":"",
            "dataType":"Text"
        }],
    "rows":[
        {
            "values":["Труханов","Київ"," столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.","2020-12-12T00:00:00","Тестове"]}]}


for(let i = 0; i < data.columns.length; i++) {
    let createElement = function(elem) {
        return document.createElement(elem);
    };
    let container = document.querySelector('.container');

    let div = createElement('div');
    div.className = 'box';
    container.append(div);

    let header = createElement('h1');
    header.className = 'header';
    div.append(header);
    header.innerHTML = data.columns[i].name;

    let descr = createElement('p');
    descr.className = 'descr';
    div.append(descr);

    if(data.columns[i].dataType == "DateTime") {
        let date = new Date();
        descr.innerHTML = date.toLocaleDateString();
    } else{
        descr.innerHTML = data.rows[0].values[i];
    }
}




