// js higher order function

function main (){
    repeat(logger, 5);
}

function logger () {
    console.log('try me');
}

function repeat (operation, num) {
    if (num === 0) {
        return;
    }
    else {
        operation();
        repeat(operation, num - 1);
    }
}

main ();

module.exports = repeat;