
// define a function
function trial() {
    console.log(this);
    return this;
}

function add(a, b) {
    console.log(this);

    return a + b;
}

function add1 (a, b) {
    console.log(this);
    return function () {
        return this.a + this.b;
    }
}

// example of call
const trialCall1 = trial.call({'callKey1':"callValue1"});

const trialCall2 = trial.call({'callKey2':"callValue2"});

// // example of apply
const trialApply1 = trial.apply({'callKey1':"callValue1"});

const trialApply2 = trial.apply({'callKey2':"callValue2"});

const trialApply3 = trial.apply(null, {'key': 5});

const addApply4 = add.apply(null, [5, 6]);
console.log(addApply4);


// example of bind

const trialBind1 = trial.bind({'callKey1':"callValue1"});
console.log(trialBind1);

const trialBind2 = add1.bind({a:5, b:6});
console.log(trialBind2().bind({a:10, b: 30})());

const trialBind3 = add1.bind({a:100, b:200});
console.log(trialBind2().bind({a:1, b: 3})());