const countValue = document.querySelector('#countValue')

let count = 0

function increaseCount(){
    count++;
    countValue.textContent = count;
}

function decreaseCount(){
    if(count>0){
        count--;
        countValue.textContent = count;
    }
}

function resetCounter(){
    count=0;
    countValue.textContent = count;
}


