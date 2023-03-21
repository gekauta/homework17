const str= prompt('Введите строку','' );
const i=prompt('Введите длинну строки в символах',);
const symbol= prompt('Введите символ в кодировке');
const par=prompt('Где должен находиться символ? \n 0 - слева\n 1 - справа ','1');
// padString(str,i,symbol,par);

        function padString(str, i, symbol, par){
            let  message = '';
            let text='';
            let j= 0;
            if (par==="0" && str.length<=i){
                // for (let j=0; (i-str.lenght)>=1; j++) { let  u = symbol }
                // console(u);
            return  message = symbol + str.substring(0,i) }
            else if (par==="1" && str.length<i) {
                while ((i-str.length)>j) { text += symbol;
                j++}
               return  message = str.substring(0,i) + text }

            else{
                alert('err')
        }
            return message

}
console.log(i);
// let s= "sdfas";
// let text='';
// for (i=0; i<7; i++){ text = text + s };
// console.log(text)


function control(str, i, symbol, par){
    str===null ? alert('Вы не ввели строку!'):true;
    i===null  || !str== +str && str ? alert('Вы не ввели длинну строки!'):true  ;
    symbol===null || symbol.length>1  ? alert('Вы не указали символ!'):true  ;
    par===null || par==="0" || par==="1" ? true:alert('Вы не указали местополежния символа!')  ;

}



control(str, i, symbol, par);
alert(padString(str,i,symbol,par))

