function rendam(){
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("Mulai rendam. Setelah ini kucek");
        resolve();
      }, 3000);
   });
}

function kucek(){
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("Sedang kucek. Setelah ini bilas");
        resolve();
      }, 2000);
   });
}

function bilas(){
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("Sedang bilas. Setelah ini jemur");
        resolve();
      }, 1000);
   });
}

function jemur(){
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("Sedang jemur. Setelah ini setrika");
        resolve();
      }, 5000);
   });
}

function setrika(){
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("Sedang setrika. Setelah ini selesai");
        resolve();
      }, 4000);
   });
}

async function main(){
    await rendam();
    await kucek();
    await bilas();
    await jemur();
    await setrika();
}
main();
