function rendam() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("Mulai rendam. Setelah ini kucek")
            let err = false
            if (err == false) {
                resolve()
            }else{
                reject('salah urutan')
            }
        }, 3000)
    })
}
function kucek() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("Sedang kucek. Setelah ini bilas")
            let err = false
            if (err == false) {
                resolve()
            }else{
                reject('salah urutan')
            }
        }, 2000)
    })
}
function bilas() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("Sedang bilas. Setelah ini jemur")
            let err = false
            if (err == false) {
                resolve()
            }else{
                reject('salah urutan')
            }
        }, 1000)
    })
}
function jemur() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("Sedang jemur. Setelah ini setrika")
            let err = false
            if (err == false) {
                resolve()
            }else{
                reject('salah urutan')
            }
        }, 5000)
    })
}
function setrika() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("Sedang setrika. Setelah ini selesai")
            let err = false
            if (err == false) {
                resolve()
            }else{
                reject('salah urutan')
            }
        }, 4000)
    })
}
rendam()
.then(kucek)
.then(bilas)
.then(jemur)
.then(setrika)
.catch(err=>{console.log(err)});