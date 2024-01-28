console.log('Start');

setTimeout(function() {
    console.log('Timeout Callback');
}, 2000);

setInterval(() => {
    console.log('Interval Callback');
}, 100);

console.log('End');