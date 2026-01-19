/**
 * give me the average of the even numbers in the array
 */

function evenAverage(nums){
    const evens = [];
    for(num of nums){
        if(num % 2 === 0){
            evens.push(num);
        }
    }
    console.log(evens);
    let sum = 0;
    for(num of evens){
        sum += num;
    }
    console.log(sum);

    const count = evens.length;
    console.log(count, sum);
    
    const avg = sum / count;
    return avg;
    

}

const nums = [42, 13, 58, 65, 81, 96, 7];
const avg = evenAverage(nums);
console.log('average of odd numbers is: ', +avg.toFixed(2));