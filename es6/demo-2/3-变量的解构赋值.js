// let a = 1;
// let b = 2;
// let c = 3;
// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c)
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo, bar, baz)
// let [, ,third]= ["foo", "bar", "baz"];
// console.log(third)
// let [x, ,y]= [1, 2, 3];
// console.log(x, y)
// let [head, ...tail]= [1, 2, 3, 4, 5];
// console.log(head, tail)
// let [x, y, ...z]= ['a'];
// console.log(x, y, z)
// let [foo]= [];
// console.log(foo)
// let [bar, foo]= [1,1];
// console.log(bar);
// let [x, y] = [1, 2, 3];
// console.log(x, y);
// let [a, [b], d] = [1, [2, 3], 4];
// console.log(a, b, d);

// let [foo]= false;
// console.log(foo);

// let [foo]= 1;
// console.log(foo);

// let [foo]= NaN;
// console.log(foo);

// let [foo]= undefined;
// console.log(foo);

// let [foo]= null;
// console.log(foo);

// let [foo]= {};
// console.log(foo);

// let [x, y, z]= new Set(['a', 'b', 'c']);
// console.log(x); //a

// function* fibs(){
// 	let a= 0;
// 	let b= 1;
// 	while(true){
// 		yield a;
// 		[a, b]= [b, a + b];
// 	}
// }
// let [first, second, third, fourth]= fibs();
// console.log(fourth);

// let [foo= true]= [];
// console.log(foo);
// let [x, y= 'b']= ['a'];
// console.log(x, y)
// let [x, y= 'b']= ['a', 'b2'];
// console.log(x, y);

// let [x]= [undefined];
// console.log(x)
// let [x= 1]= [null];
// console.log(x)

// function f(){
// 	console.log('aaa');
// }
// // let [x= f()]= [1];
// // console.log(x)

// let x;
// if([1][0] === undefined){
// 	x= f();
// 	console.log(x)
// }else{
// 	x= [10][0];
// 	console.log(x)
// }
// console.log([1][0] === undefined)	//false


// let [x= 1, y= x]= [];
// console.log(x, y)	// 1 1
// let [x= 1, y= x]= [2];
// console.log(x, y);	//2 2

// let [x= 1, y= x]= [1, 2];
// console.log(x, y)

// let [x= y, y= 1]= [];
// console.log(x, y)

// let {foo, bar}= {foo: "aaa", bar: "bbb"};
// console.log(foo, bar) // aaa bbb

// let {bar, foo}= {foo:"aaa", bar: "bbb"};
// console.log(foo, bar)

// let {baz}= {foo: "aaa", bar: "bbb"};
// console.log(baz) //undefined

// var { foo: baz}= { foo: "aaa", baz: "bbb"};
// console.log(baz) //aaa

// let obj= { first: 'hello', last: 'world' };
// let { first: f, last: l }= obj;
// console.log(f, l)

// let { foo: baz}= { foo: "aaa", bar: "bbb" };
//  console.log(baz)
// console.log(foo)

// let foo;
// let {foo}= {foo: 1};
// console.log(foo)

// let baz;
// let {bar: baz}= {bar: 1};
// console.log(baz)

// let foo;
// ({ foo }= { foo: 1 });
// console.log(foo)

// let baz;
// ({ bar: baz }= { bar: 12 });
// console.log(baz)  //12

// let obj= {
// 	p: [
// 		'hello',
// 		{
// 			y: 'world'
// 		}
// 	]
// }
// let { p: [ x, { y } ] }= obj;
// console.log(x, y)



var node= {
	loc: {
		start: {
			line: 1,
			col: 5
		}
	}
};
var { loc: { start: { line } } }= node;
// console.log(line)
// console.log(loc)
var obj= {};
var arr= [];
({ foo: obj.prop, bar: arr[0] }= { foo: 123, bar: true })；
// console.log(arr);
// console.log(obj.prop)
// var {x= 3}= {};
// console.log(x)

// var {x, y= 5}= {x: 1}
// console.log(x)
// var { x: y= 13 }= {};
// console.log(y);
var { x:y= 5}= { x:15 }
console.log(y)