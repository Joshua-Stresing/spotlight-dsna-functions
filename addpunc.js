const addPunc = punc => string => string + punc;

const addExcitement = addPunc('!!!');
console.log(addExcitement('Hello World'));

console.log(addExcitement('Pokemon, catch em all'));
// Pokemon, catch em all!!!

const addUnsure = addPunc('?!?');
console.log(addUnsure('Hello World'));
// Hello World?!?
console.log(addUnsure('Pokemon, catch em all'));
// Pokemon, catch em all?!?