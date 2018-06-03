// let a= 1,b= 2, c= 3;
// console.log(a,b,c)

// let [a, b, c]= [1, 2, 3];
// console.log(a, b, c)
// console.log(a)
// console.log(b)
// console.log(c)

// let [foo, [[bar], baz]]= [1, [[22], 3]]
// console.log(foo, bar, baz)

// let [, , third]= ['one', 'two', 'three'];
// console.log(third)	//three

// let [x, , y]= [1, 2, 3];
// console.log(x, y)

// let [head, ...detail]= [1, 2, 3, 4];
// console.log(head)	//1
// console.log(detail)	//[2, 3, 4]
// let [x, y, ...z]= ['a']
// console.log(x) 
// console.log(y) 
// console.log(z) 

// let [foo]= [];
// let [bar, foo]= [1]
// console.log(foo) 
// console.log(bar) 

// let [x, y]= [1, 2, 3]
// console.log(x)
// console.log(y)

// let [a, [b], d]= [1, [2, 3], 4];
// console.log(a)
// console.log(b)
// console.log(d)  

// let [foo]= 1;
// console.log(foo)

// let [foo]= false;
// console.log(foo)     

// let [foo]= NaN;
// console.log(foo) 

// let [foo]= undefined;
// console.log(foo)

// let [foo]= null;
// console.log(foo)

// let [foo]= {};
// console.log(foo)   

// let [x, y, z]= new Set(['a', 'b', 'c']);
// console.log(x, y, z)

// function *fibs(){
// 	let a= 0;
// 	let b= 1;
// 	while(true){
// 		yield a;
// 		[a, b]= [b, a+ b]
// 	}
// }
// let [first, second, third, fourth, fifth, sixth]= fibs();
// console.log(sixth)

// let [foo= true]= [];
// console.log(foo)

// let [x= 1]= [null]
// console.log(x) 

// function f(){
// 	console.log('aaa')
// }
// let [x= f()]= [1]
// console.log(x)

// let x;
// if([1][0]===undefined){
// 	x= f();
// 	console.log(x)
// }else{
// 	x= [10][0]
// 	console.log(x)
// }

// let [x= 1, y= x]= [];
// console.log(y)

// let [x= 1, y= x]= [2]
// console.log(y)

// let [x= 1, y= x]= [2, 2]
// console.log(x, y)

// let [x= y, y= 1]= [];
// console.log(y)

// let {foo, bar}= { foo: 'foo', bar: 'bar' }
// console.log(foo, bar)

// let {bar, foo}= { foo: 'foo', bar: 'bar' }
// console.log(foo, bar)

// let { foo, bar }= { bar: 'bar', foo: 'foo' }
// console.log(foo, bar)

// let { baz }= { foo: 'aa', bar: 'bb' };
// console.log(baz)

// var { foo: baz }= { foo: 'aa', bar: 'bb' };
// console.log(baz)

// let obj= { first: 'aa', second: 'bb' }
// let {first: f, second: l  }= obj;
// 	f= 10;
// 	l= 11;
// console.log(f, l)

// let { foo: foo, bar: bar }= { foo: 'aaa', bar: 'bbb' }
// console.log(foo, bar)

// let { foo: baz }= { foo: 'aaa', baz: 'bbb' }
// // console.log(baz)
// console.log(foo)

// let obj= {
// 	p: [
// 		'hello',
// 		{ y: 'world' }
// 	]
// }
// let { p, p: [x, {y}] }= obj;
// console.log(x, y, p)

// var node = {
// 	loc: {
// 		start: {
// 			line: 1,
// 			column: 5
// 		}
// 	}
// }
// var { loc, loc: { start }, loc: { start: {line} } }= node;
// console.log(line)

// let foo= {};
// let arr= [];
// ( { n: foo.prop, m: arr[0] } = { n: 123, m: true });
// console.log(foo, arr)

// var { x= 3}= {}
// console.log(x)

// var {x, y= 5}= {x: 1}
// console.log(x, y)

// var {x: y= 3}= {};
// console.log(y)
// var { x: y= 3 }= {x: 5}
// console.log(y)

// var { message: msg= 'message is here' } = {};
// console.log(msg)
// console.log(message)

// var {x= 3}= { x: undefined }
// console.log(x)

// var { x= 3 }= {x: null}
// console.log(x)

// let { foo } = { bar: 'baz' }
// console.log(foo)

 // let { foo: {bar} }= { bar: 'bar' }

 // let x;
 // {x}= {x: 1}
 // let x;
 // ({x}= {x: 1});
 // console.log(x)

// ({}= [true, false])
//  console.log({})

// let { log, sin, cos }= Math;
// console.log(log, sin, cos)
console.log(Math)