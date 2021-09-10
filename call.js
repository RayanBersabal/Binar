function nyuci(){

    let step;

    function rendam(){
        console.log('Mulai rendam. Setelah ini kucek');
        step = setTimeout(kucek, 3000);
    }

    function kucek(){
        console.log('Sedang kucek. Setelah ini bilas');
        step = setTimeout(bilas, 2000);
    }
    function bilas(){
        console.log('Sedang bilas. Setelah ini jemur');
        step = setTimeout(jemur, 1000);
    }
    function jemur(){
        onsole.log('Sedang jemur. Setelah ini setrika');
        step = setTimeout(setrika, 5000);
    }
    function setrika(){
        console.log('Sedang setrika. Setelah ini selesai');
    }

   return step = setTimeout(rendam, 4000);

}
nyuci()