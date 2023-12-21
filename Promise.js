//****************simple-promise****** */
let getpromise = new Promise(function (resolve,reject){
    resolve('Promise resolve')
});
console.log(getpromise)
getpromise.then((result) =>{
    console.log(result)
}
).finally(()=>{
    console.log("finally")
})

//****************methods************** */
let data = Promise.race([
    new Promise((resolve,reject) => {
setTimeout(()=>{
    resolve(" resolve 5 seconds")
}, 5000)
    }),
    new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(" resolve 10 seconds")
        },10000)
    }),

    new Promise((resolve,reject)=> {
        setTimeout(()=> {
            reject(" reject 15 seconds")
        },15000)
    }),
]
)
data.then((item)=> {
    console.log("then block",item)
}).catch((err)=>{
    console.log("catch",err)
})