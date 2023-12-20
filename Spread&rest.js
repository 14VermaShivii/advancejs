//rest............
// function age(age1,age2,age3,...otherages) {
//     console.log(age1,age2,age3)
//     console.log(...otherages)
// }
// age(20,30,40,50,60)

//spread.........
// let  arr =[10,20,30]
// let  arr1=[...arr,40,50]
// console.log(arr1)
// console.log(arr)

//********objects */
//     const laptop1 ={
//     "name1" :"Dell" ,
//     "amount" : "50,000" ,
//     "varrenty" :"1 year"

//   }
//   console.log(laptop)
// const varrenty ={
//     "origin" :"america",
//     "charger battery":"2",
//     "backup":"2 year"
// }
// console.log(laptop,laptop1)
// console.log(laptop,...laptop1)
// let laptop3={...laptop1,...varrenty}
// console.log(laptop3)

// *******************easy console********************
const basic = {
    Firstname: "shivii"
}
const Company = {
    Companyname: "cording"
}
const Qualification = {
    standard: "bsc"
}
const pi = {
    age: 10
}
// console.log(basic.Firstname)
// console.log(Company.Company)
// console.log(Qualification.standard)
// console.log(pi.age)
// const profile = { ...basic, ...Company, ...Qualification, ...pi }
// console.log(profile.Firstname)


// let arr = [1, 2, 3]
// let arr1 = [...arr]
// arr1.push(4)
// console.log(arr)
// console.log(arr1)
// *******************************
// arr = [10, 20, 30]
// arr1 =[10,20,30]
// console.log(...arr, ...arr1)

//******************************** */
// const str =['my','name','is','shivii']
// console.log(...str)

// const abc=['10','20']
// console.log(...abc)

//**************************string to array***************** */
let arr ='learning js'
a=[...arr]
console.log(a)

//**********************without parameter********* */
 function names() {
    const arg =[...arguments]
console.log(arg) 
}
names('shivii','verma')

