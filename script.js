const inputVal = document.getElementById("display");
inputVal.value=0;
const btns = document.getElementsByTagName('button');

console.log(inputVal, btns.length)


let displayArray = [];

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => {

        let displayValue = event.target.value;
        displayArray.push(displayValue);
        if (displayArray[0]==='+' ||displayArray[0]==='/'||displayArray[0]==='*'||displayArray[0]==='%' || displayArray[0]==='-') {
            displayArray.splice(-1);
        }
                   
        // console.log(displayValue, displayArray)

        let lastchar = displayArray[displayArray.length-1];
        let indexOfLastChar = displayArray.indexOf(lastchar);

        console.log(displayArray.slice(-2))
        if (displayValue === 'all-clear') {
            inputVal.value = '0';
            displayArray = [];
        } else if (displayValue === 'DEL') {
            displayArray.splice(displayArray.indexOf('DEL') - 1, 1);
            displayArray.pop();
            inputVal.value = displayArray.join('');

            console.log(displayArray)
        } else if (displayValue === '=') {
            displayArray.pop();
            let ans = eval(displayArray.join(''));
            displayArray = [];
            displayArray.push(ans);
            console.log(displayArray);
        } else if ( displayArray.slice(-2).join('') === '++' || displayArray.slice(-2).join('') === '--' || displayArray.slice(-2).join('') === '**' || displayArray.slice(-2).join('') === '**' || displayArray.slice(-2).join('') === '//' || displayArray.slice(-2).join('') === '%%' || displayArray.slice(-2).join('') === '') {
            console.log('dublicate')
            displayArray.splice(-1)
        }  
        
       
        inputVal.value = displayArray.join('');
    })
}