/*1、判断一个字符串是否为IP

C接口 IsIP(char *str);
return, true/false

样例：
a、123.11.108.17  返回true
b、1.2.3.888 返回false
语言，C， C++, JAVA, JS，PYTHON, GO 都可以*/
/*
function IsIP(str) {
    var reg=/^(\d+).(\d+).(\d+).(\d+)$/;
    if(reg.test(str)&&(reg.exec(str)[1]<256)&&(reg.exec(str)[2]<256)&&reg.exec(str)[3]<256&&reg.exec(str)[4]<256){
        // console.log(reg.test(str));
        console.log("true");
    }else {
        // console.log(reg.test(str));
        console.log("false");
    }
}
IsIP('123.11.108.87')
IsIP('1.2.3.888')
*/
function ReverseWord(str){
    // var reg=/ +/g;
    // str=str.replace(/ /g," ");
    var ary=str.split(/\s+/);
    var a='';
    ary.forEach(function (item, index) {
        console.log(item.split('').reverse().join(''))
        a+=item.split('').reverse().join('');
    })
    console.log(a)
}
var str="abc defg    gh";
ReverseWord(str);
