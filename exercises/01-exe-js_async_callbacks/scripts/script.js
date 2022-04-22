//Exercise 1: What is the expected output? And why?

/*function print() {
    console.log(1);
    setTimeout(() => console.log(3),1 * 1000);
    setTimeout(() => console.log(4),  2000);
    console.log(2);
  }
  
  print(); 
  */
  // ------------------------------------------------------------------------
  
  
  //Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second 
  // - For every number divisible by 3 it prints BOOM!!
  // - For every number divisible by 5 it prints a BANG!!
  // - Forevery number divisible for 3 and 5 it prints BOOM BANG!! 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  function blast(arr){
    let i = 0;
   /* if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
      return 'BOOM BANG!!'
    }else if(arr[i] % 3 === 0){
      return 'BOOM!!'
    }else(arr[i] % 5 === 0);{
      return 'BANG!!'
    };*/
    const myInterval = setInterval(() =>{ console.log(arr[i])
    i++
  if(i >= arr.length) clearInterval(myInterval)
  }
   , 1000);
    }

  
  blast(numbers);
  
