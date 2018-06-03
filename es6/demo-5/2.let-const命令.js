// 'use strict';
// {
// 	let a= 10;
// 	var b= 1;
// }
// // console.log(a)	//报错
// // console.log(b)
// for(let i= 0;i< 10;i ++){
// 	// console.log(i)	//输出0-9
// }
// var arr1= [];
// for(var j= 0;j< 10;j ++){
// 	arr1[j] = function(){
// 		console.log(j)
// 	}
// }
// // arr1[5]();		// 始终输出10

// for(let i1= 0; i1< 10; i1 ++){
// 	arr1[i1]= function(){
// 		console.log(i1)
// 	}
// }
// // arr1[4]();	//4

// for(let i2= 0; i2< 3; i2 ++){
// 	let i2= 'abcd';
// 	// console.log(i2)
// }
// // console.log(i3) 	//undefined
// var i3 = 2;

// console.log(i4)
// let i4 = 10;

// var i5 = 123;
// if(true){
// 	i5= 'abc'
// 	let i5;
// 	console.log(i5)
// }
// if (true) {
//   // TDZ开始
//   tmp = 'abc'; // ReferenceError
//   console.log(tmp); // ReferenceError

//   let tmp; // TDZ结束
//   console.log(tmp); // undefined

//   tmp = 123;
//   console.log(tmp); // 123
// }

// console.log(typeof x);
// console.log(i6)
// let i6= 10;
// console.log(typeof undeclared_variable)	//undefined

// function bar(x= y, y= 2){
// 	return [x, y];
// }
// console.log(bar());

// function bar2(x= 2, y= x){
// 	return [x, y]
// }
// console.log(bar2())	2 ,2
// var i7= i7;
// console.log(i7)

// let i7= i7;
// console.log(i7)	

// function(){
// 	let i8= 10;
// 	var i8= 1;
// }
// function(){
// 	let i9= 10;
// 	let i9 = 1;
// }

// function func(arg){
// 	let arg;
// }	//报错

// function func(arg){
// 	{
// 		let arg;	//不报错
// 	}
// }

// var temp1= new Date();
// function f(){
// 	console.log(temp1)	//undefined
// 	if(false){
// 		var temp1= 'helloworld';
// 	}
// }
// f();
// var temp2= 'hello';
// for(var tempi= 0;tempi< temp2.length; tempi++){
// 	console.log(temp2[tempi])
// }
// console.log(tempi)

// function f1(){
// 	let n= 5;
// 	if(true){
// 		let n= 10;
// 		console.log(n)
// 	}
// 	console.log(n)
// }
// f1();
// {{ let inname= 'hello' }}
// console.log(inname)	//undefined

// {{{ let iname= 'hello' }console.log(inname)}}

// (function(){
// 	var temp = 'hello'
// 	console.log(temp)
// })()

// {
// 	let temp= 'hello'
// 	console.log(temp)
// }

// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// // }());
// function f(){
// 	console.log('I am outside!');
// }

// (function () {
// 	function f() { console.log('I am inside!'); }
  
//   if (false) {
//     // 重复声明一次函数f
//   }
//   f()
// }())
// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());
// function f() { console.log('I am outside!'); }
// (function () {
//   var f = undefined;
//   if (false) {
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());
// {

// 	let i10= 'secret';
// 	function f(){
// 		console.log(i10)
// 	}
// 	f();
// }
	// {
	// 	let i11= 'secret';
	// 	var f= function(){
	// 		console.log(i11);
	// 	}
	// 	f();
	// }

// if(true)
// {
// 	function f(){}

// }	// 'use strict'不报错
// if(true)
// function  f(){}	// 'use strict' 报错

// const PI= 23.2323;
// console.log(PI)
// PI= 122;
// console.log(PI)	//常量一旦声明赋值 无法再次重新赋值

// const foo;
// console.log(foo)	//常量声明必须有值
// if(true){
// 	const MAX= 5;
// }
// console.log(MAX)	//not defined

// if(true){
// 	console.log(MAX);	//undefined
// 	const MAX= 10;
// // }
// var message= 'helo';
// const age= 23;

// const message= 'good';	//报错
// const age= 12;		//报错

// const foo= {};
// foo.prop= 124;
// console.log(foo.prop)	//不报错

// foo= {};	//重新指向另一个对象就会报错

// const a= [];
// a.push('hello')
// a.length= 0;
// a= ['dave']	//报错
//console.log(a)

// const foo= Object.freeze({})
// foo.prop= 124;
// console.log(foo)

// var constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach( (key, i) => {
//     if ( typeof obj[key] === 'object' ) {
//       constantize( obj[key] );
//     }
//   });
// };

// window.a= 1;
// console.log(a)
// a= 2;
// console.log(window.a)

// var a= 10;
// console.log(window.a)

// let b= 10;
// console.log(window.b)
