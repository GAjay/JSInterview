// const array = [
//   { name: 'a', country: 'in' }, 
//   { name: 'b', country: 'uk' }, 
//   { name: 'c', country: 'in' }, 
//   { name: 'd', country: 'us' }, 
// ];

// const groupBy=(arr,key)=>{
//    let obj={}
//   let newArr= arr.map((item,i)=>{
//       return obj[item[key]]=(obj[item[key]])?[{...item},...obj[item[key]]]:[{...item}]
//   })
//   console.log("output",obj)
//   return obj
// }
// groupBy(array, 'country');

// const output = {
//   in: [{ name: 'a', country: 'in' }, { name: 'c', country: 'in' }],
//   uk: [{ name: 'b', country: 'uk' }],
//   us: [{ name: 'd', country: 'us' }]
// };

// const array = [[3, [6, [7, 8, 9, [10, 11], [12, 13]]]]] ;
// const flatten=(array)=>{
//   return array.reduce(function (flat,toFlat){
//     return flat.concat(Array.isArray(toFlat)?flatten(toFlat):toFlat)
//   },[])
// }
// console.log("map",flatten(array));

// prototypes

// function A() {
//   this.count = this.count + 1;
//   A.prototype.count = this.count;
// }

// A.prototype.count = 0;
// const objA = new A();
// const objB = new A();
// const objC = new A();

// console.log(objA.count); // 1
// console.log(objB.count); // 2
// console.log(objC.count); // 3


// function A(...args) {
//   console.log(this, args);
// }

// //bind call apply
// A.apply("value")
// A.call("value")
// A.bind("value")

// let sou= function (name){
//   console.log(name)
// }

// sou.bind("name", "asdsd")()


// function A() {
//   const [count, setCount] = useState(1);
  
//   function onClick() =React.useMemo(()=>{setCount(1);},[count])
  
//   return (
//     <div>{count}</div>
//     <button onClick={onClick}/>
//   )
// }



