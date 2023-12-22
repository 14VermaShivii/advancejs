//_______________________________mapping--------------------
// const arr =[2,4,6,8,10]
// const multiply = arr.map(item=>item*2)
// console.log(multiply)
// console.log("arr",arr)

//***************************filter******************* */

// let arr = [1,2,3,4]
// let evenvalues = arr.filter(item=>item % 2==0)
// console.log(evenvalues)
// console.log(arr,'original')
//*****************************************88 */
// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let bigvalue =arr.filter(item=>item<=5)
// console.log(bigvalue)
// console.log(arr1,'big')
///////*************************************** */
 let Std =[
    {name:"shivii",
    percent:"90"
},
{
    name:"payu",
    percent:"80"
},
{
    name:"niyu",
    percent:"70"
}
]
let Student = Std.filter(Student => Student.percent>=80)
console.log(Student)
// console.log(Student1)

//*********************reduce***************** */
let arr =[2,4,6]
let Sum= arr.reduce((a,b)=>{
    console.log(a,b)
    return a+b
})
console.log(Sum)
console.log(arr)


