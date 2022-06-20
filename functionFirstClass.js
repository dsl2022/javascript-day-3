function greeting(name) {
  return "Hello " + name;
}

function inspect(name) {
  return "thank you" + name + "for your inspection";
}

function serveDinner(name) {
  return "Welcome to our restaurant " + name;
}

// functions array
const agenda = [greeting, inspect, serveDinner];

for (let step of agenda) {
  console.log(step("John"));
}

// functions in object
const agendaWithSteps = {
  step1: greeting,
  step2: inspect,
  step3: serveDinner,
};

console.log(agendaWithSteps.step1("John"));
console.log(agendaWithSteps.step2("John"));
console.log(agendaWithSteps.step3("David"));

// function
function something() {
  console.log("something");
}
// ()=>{} anonymous function

// function expression
const somethingElse = () => {
  console.log("something else");
};

const doSomething = something;
doSomething();
somethingElse();
