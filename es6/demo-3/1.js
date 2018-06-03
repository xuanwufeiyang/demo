// var p =  new Promise(
// 	function(resolve, reject){
// 		setTimeout(resolve("Hello es6"),3000);
// 	}
// );
// p.then(function(msg){
// 	return "After 2 seconds "+ msg;
// }).then(function(msg){
// 	console.log(msg);
// });
// var obj= {key:"这是我的第一个对象值"};
// 	var newObj = Object.assign({}, obj);
// 	console.log(newObj);

/*
function log(x ,y){
	 y = y || "world";
	 console.log(x, y)
}
log("hello", "world");
log("hello");
log("","language");
*/

// function log(x, y = "world"){
// 	console.log(x, y);
// }
// log("hello");
// log("hello", "china");
// log("", "world");
//
// function point(x= 0, y=0){
// 	this.x= 0;
// 	this.y= 0;
// }
// let p = new point();
// 	console.log(p.x = "hello", p.y = "woroldw")

// function foo(x= 5){
// 	let x= 1;
// 	//const x= 2;
// 	console.log(x)
// }
// foo();

// let x= 99;
// function foo(p= x+1){
// 	console.log(p)
// }
//foo();
//x= 100;
//foo()

// function foo({x, y= 5}){
// 	console.log(x, y);
// }
// foo({});
// foo({x:1})
// foo({x:1,y:2})
// foo();

// function fetch(url, { body= "", method= "get", headers= {} }){
// 	console.log(method)
// }
// fetch("https://www.baidu.com", {});
// // fetch("")



function fetch(url, { method = "get" }= {}){
	console.log(method);
}
// fetch("https://www.baidu.com");
fetch();