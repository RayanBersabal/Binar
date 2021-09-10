const promise1 = Promise.resolve('Hello')
const promise2 = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('World')
    }, 3000);
})
const promise3 = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('And')
    }, 2000);
})
const promise4 = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('Welcome')
    }, 1000);
})
const promise5 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject(new Error('Not Found'))
    }, 1000);
})
Promise.all([promise1, promise2, promise3, promise4, promise5]
.map(p => p.catch(e => e)))
.then(values => console.log(values))