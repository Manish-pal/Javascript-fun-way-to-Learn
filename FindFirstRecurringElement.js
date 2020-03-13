//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringElement(input) {

const keysToCountMap = new Map();
console.log(input);
console.log(keysToCountMap);

if(input.length === 0 ){

  return undefined;
}
else {

for(let i = 0 ; i <input.length; i++) {

      if(!keysToCountMap.has(input[i])) {

          keysToCountMap.set(input[i],1);
          console.log(keysToCountMap);

      }
      else {

        console.log('This element Already exists ' + input[i]);
        
      }
}
return undefined;
}
  
}

firstRecurringElement([1,2,3,4,5,1]);
firstRecurringElement([5,2,3,4,5,1]);

firstRecurringElement([-1,2,3,4,5,-1]);
firstRecurringElement([]);
