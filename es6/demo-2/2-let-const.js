{
	let a= 10;
	var b= 1;
}
// console.log(b);	// 1
// console.log(a);	// a undefined

for(let a1= 0; a1<10;a1++ )
{}
// console.log(a1)	// a1 undefined

var	arr1= [];
for(var a2= 0; a2<10; a2++){
	arr1[a2]= function(){
		console.log(a2)
	}
}
// arr1[6]()	// 10   因为每次循环的时候a2被赋值 覆盖
var arr2= [];
for(let a3= 0; a3< 10; a3++){
	arr2[a3]= function(){
		console.log(a3)
	}
}
// arr2[6]();	// 6	局部作用域。块级作用域

for(let a4= 0; a4< 10; a4++){
	let str1= 'abc';
	// console.log(str1);
}

// console.log(str2);		// 不存在变量的提升
// var str2= 1;	// undefined

// console.log(str3);	//报错
let str3= 1;	//不存在变量提升

// if(true){
// 	strtmp = 'abc';
// 	console.log(strtmp);

// 	let strtmp;
// 	console.log(strtmp);	//undefined

// 	strtmp = 123;
// console.log(strtmp);	
// }

// console.log(typeof str4);	//报错
// let str4;

// console.log(typeof undeclared_variable)	//undefined

function bar(x= y, y= 2){
	return [x, y];
}
// bar();//报错
function bar2(x= 2, y= x){
	return [x, y];
}
// console.log(bar2());	//2, 2

var str5= str5;
// console.log(str5)
// let str6= str6;
// console.log(str6)

// function(){
// 	var a= 10;
// 	var
// }
// function(){
// 	let a= 10;
// 	let a= 1;
// }

// function fun1(arg){
// 	let arg= 10;
// 	console.log(arg)
// }
// function fun2(arg){
// 	{
// 		let arg= 10;
// 		console.log(arg)
// 	}
// }
// fun2(20)
// var str7= new Date();
// function fun3(){
// 	console.log(str7)
// 	if(false){
// 		var str7= 'hello world';
// 	}
// }
// fun3();
// var str8= "hello";
// for(var a5= 0;a5< str8.length; a5++){
// 	console.log(str8[a5])
// }
// function fun3(){
// 	let str9= 5;
// 	if(true){
// 		let str9= 10;
// 	}
// 	console.log(str9);
// }
// fun3();
// {{ let str10= "hello" }}
// console.log(str10)
// {{ let str11= "hello";{let str11= "world"}console.log(str11) }}
// (function(){
// 	var str12= 10;
// 	console.log(str12)
// }())
// {
// 	let str12= 100;
// 	console.log(str12)
// }
// if(true){
// 	function fun4(){
// 		console.log(11)
// 	}
// 	fun4();
// }
// try{
// 	function fun5(){
// 		console.log(12)
// 	}
// 	fun5();
// }catch(e){
// 	console.log(e)
// }
// function fun6(){
// 	console.log('I\'m outside!');
// }
// (function(){
// 	if(false){
// 		function fun6(){
// 			console.log('I\'m inside');
// 		}
// 	}
// 	fun6();
// }())
// function fun7(){
// 	console.log('I\'m outside!');
// }
// (function(){
// 		function fun7(){
// 			console.log('I\'m inside');
// 		}
// 	if(false){
// 	}
// 	fun7();
// }())
// function fun8(){
// 	console.log('I\'m outside!');
// }
// (function(){
// 	var fun8= undefined;
// 	if(false){
// 		function fun8(){
// 			console.log('I\'m inside');
// 		}
// 	}
// 	fun8();
// }())
// {
// 	let str14= 'secret';
// 	function fun9(){
// 		return str14;
// 	}
// 	console.log(fun9())
// }
// {
// 	let str15= 'secret2';
// 	let fun9= function(){
// 		return str15;
// 	}
// 	console.log(fun9())
// }
// 'use strict';
// if(true){
// 	function fun10(){
// 		console.log(1000)
// 	}
// 	fun10();	//不报错	
// }
// 'use strict';
// if (true)
//   function f() {console.log(12121)}f()
// const PI = 3.1415926;
// console.log(PI);
// PI= 4;
// if(true){
// 	const MAX= 5;
// }
// console.log(MAX)
// var message= "hello";
// let age = 25;
// const message= "hello2";
// const age= 35;

// const str16= {};
// str16.prop= 123;
// console.log(str16.prop)
// str16= {};
// conso1e.log(str16);
// const str17= [];
// str17.push('hello');
// str17.length= 0;
// str17= ['aaa'];
// var constantize = (obj) =>{
// 	Object.freeze(obj);
// 	Object.keys(obj).forEach((key, i)=>{
// 		if(typeof obj[key] ==='object'){
// 			constantize(obj[key]);
// 		}
// 	})
// }
// window.str18= 1;
// console.log(str18)
// str19="helo";
// (window.str19)
// let str20= "world";
// console.log(window.str20)
// (typeof window !== 'undefined'
//    ? window
//    : (typeof process === 'object' &&
//       typeof require === 'function' &&
//       typeof global === 'object')
//      ? global
//      : this);

// // 方法二
// var getGlobal = function () {
//   if (typeof self !== 'undefined') { return self; }
//   if (typeof window !== 'undefined') { return window; }
//   if (typeof global !== 'undefined') { return global; }
//   throw new Error('unable to locate global object');
// };