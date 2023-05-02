// Calculating Prime Numbers
Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}


const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e5) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


// Fibonnaci

// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
console.log(rFib(20));
// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
console.log(iFib(20));

//the first version should be faster (?)


// Reversing a String
const story = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Provident culpa nihil repellat nulla laboriosam maxime, 
    quia aliquam ipsam reprehenderit delectus reiciendis 
    molestias assumenda aut fugit tempore laudantium tempora 
    aspernatur? Repellendus consequatur expedita doloribus soluta 
    cupiditate quae fugit! Aliquid, repellat animi, illum molestias 
    maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!`;
const reversed1 = story.split("").reverse().join("");

const reversed2 = () => {
    let revStr = "";
    for(let i = story.length; i >= 0; i--) {
        revStr += story[i];
    }
    return revStr;
}

console.log(reversed2())