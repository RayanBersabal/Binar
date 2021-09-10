function rendam() {
    setTimeout(function() { 
      console.log("Mulai rendam. Setelah ini kucek")
      kucek()
    }, 3000);
  }
  
  function kucek() {
    setTimeout(function() {
      console.log("Sedang kucek. Setelah ini bilas")
      bilas()
    }, 2000);
  }
  
  function bilas() {
    setTimeout(function() {
      console.log("Sedang bilas. Setelah ini jemur")
      jemur()
    }, 1000);
  }
  
  function jemur() {
    setTimeout(function() {
      console.log("Sedang jemur. Setelah ini setrika")
      setrika()
    }, 5000);
  }
  
  function setrika() {
    setTimeout(function() {
      console.log("Sedang setrika. Setelah ini selesai")
    }, 4000);
  }
  
  rendam();