let laptops =[
    "hp",
    "lenovo",
    "dell"
]
let [h,...other] = laptops
console.log(h,other)
//*****************with object********* */
const laptop ={
    "name" : "dell",
    "prize" : "40000",
"storege":"2gb",
"color":"black",
"size":"40inch"
}
let {name,...others} =laptop
console.log(name,others)
const laptop1 ={
    "name1" : "hp",
    "prize1" : "30000",
"storege1":"1gb",
"color1":"black",
"size1":"30inch"
}
let {name1,...others1} =laptop1
console.log(name1,others1)
//********syngronous *********** */
console.log("first")
console.log("second")
console.log("third")//syngronous

//***************asyngronous*********** */
console.log("first")
console.log("second")
setTimeout(()=>{
    console.log("asyngronus")
},5000)
console.log("third")


