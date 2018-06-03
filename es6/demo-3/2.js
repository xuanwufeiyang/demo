// let a = 10;
// console.log(a);
// for(let i of 'foo'){
//     console.log(i);
// }
 let s = "Hello world";
    //console.log(s.startsWith("e")); //false
    //console.log(s.endsWith("d"))    //true
    //console.log(s.includes("H",0)) //true
let str = "myfirst world";
    //console.log(str.repeat(3))  // 重复输出3次
// console.log(str.repeat(0))      //清空
//console.log('x'.padStart(5, 'ab'))
// let abc = '';
// let n = 10;
//    abc = `this is my first es6,
    
  //  I'am ${n} years old`;

// console.log(abc)

// let str2 = `\`You\` are my friend`;
// console.log(str2)
let a = 1;
let b = 2;
// console.log(` ${a} + ${b} = ${a+b} `);

let obj = { x:1, y: 2 };
 // console.log(`${obj.x + obj.y}`)

 function fn(){
     return "hello world";
 }
// console.log( `foo ${fn()} bar`);

//console.log( `hello ${world}` );    //报错

console.log( `hello ${'world'}` );
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
 const data = [
     { first: "<Jane>", last: "Bond" },
     { first: "Lars", last: "<Corft>"},
 ];
 console.log(tmpl(data))

 let tmpleate = mdatas =>`
    <table>
        <thead>
            <tr>
                <td>FirstName</td>
                <td>LastName</td>
            </tr>
        </thead>
        <tbody>
        ${mdatas.map(data =>`
            <tr>
                <td>${data.first}</td>
                <td>${data.last}</td>
            </tr>
        `).join('')}
            
        </tbody>
    </table>`;
 let _data = [
      { first: "万超", last: "wan" },
      { first: "岩岩", last: "yanyan"},
 ];
    console.log(tmpleate(_data))