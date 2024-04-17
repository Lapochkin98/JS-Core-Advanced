function exampleFunction() {
    var varVariable = 'I am var';
    let letVariable = 'I am let';
    const constVariable = 'I am const';

    {
        console.log(varVariable); // Выведет 'I am var'
        console.log(letVariable); // Выведет 'I am let'
        console.log(constVariable); // Выведет 'I am const'

        var innerVarVariable = 'I am inner var';
        let innerLetVariable = 'I am inner let';
        const innerConstVariable = 'I am inner const';
    }

    console.log(innerVarVariable); // Выведет 'I am inner var'
    // Ошибка: innerLetVariable is not defined
    // console.log(innerLetVariable);
    // Ошибка: innerConstVariable is not defined
    // console.log(innerConstVariable);
}

exampleFunction();

// Ошибка: varVariable is not defined
// console.log(varVariable);
// Ошибка: letVariable is not defined
// console.log(letVariable);
// Ошибка: constVariable is not defined
// console.log(constVariable);
