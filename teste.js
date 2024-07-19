function createCounter (a) {
    let number = a;
    function increment() {
        number++;
        console.log(number);
        return number;
        
    }
    
    function reset() {
        console.log(a);
        return a;
    }

    function decrement() {
        number--;
        console.log(number);
        return number;
    }
    return {increment, decrement, reset};  
}
const counter = createCounter(5);

counter.increment();
counter.decrement();
counter.decrement();
counter.reset();