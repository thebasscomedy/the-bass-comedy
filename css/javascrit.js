self.addEventListener("message", go);

function go(message) {
    var iterations = message.data.iterations;
    var multiplier = message.data.multiplier;
    primes = calculatePrimes(iterations, multiplier);

    self.postMessage({
        "command": "done",
        "primes": primes
    });
}

function calculatePrimes(iterations, multiplier) {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
        var candidate = i * (multiplier * Math.random());
        var isPrime = true;
        for (var c = 2; c <= Math.sqrt(candidate); ++c) {
            if (candidate % c === 0) {
                // not prime
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(candidate);
        }
    }
    return primes;
}
const iterations = 50;
const multiplier = 1000000000;

var worker = new Worker("js/calculate.js");

function doPointlessComputationsInWorker() {

    function handleWorkerCompletion(message) {
        if (message.data.command == "done") {
            pointlessComputationsButton.disabled = false;
            console.log(message.data.primes);
            worker.removeEventListener("message", handleWorkerCompletion);
        }
    }

    worker.addEventListener("message", handleWorkerCompletion, false);

    worker.postMessage({
        "multiplier": multiplier,
        "iterations": iterations
    });
}

function doPointlessComputationsWithRequestAnimationFrame() {

    function testCandidate(index) {
        // finishing condition
        if (index == iterations) {
            console.log(primes);
            pointlessComputationsButton.disabled = false;
            return;
        }
        // test this number
        var candidate = index * (multiplier * Math.random());
        var isPrime = true;
        for (var c = 2; c <= Math.sqrt(candidate); ++c) {
            if (candidate % c === 0) {
                // not prime
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(candidate);
        }
        // schedule the next
        var testFunction = testCandidate.bind(this, index + 1);
        window.requestAnimationFrame(testFunction);
    }

    var primes = [];
    var testFunction = testCandidate.bind(this, 0);
    window.requestAnimationFrame(testFunction);
}