function compareObjects(obj1, obj2) {
    // Получаем ключи (свойства) объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Проверяем, имеют ли объекты одинаковое количество свойств
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Проверяем, эквивалентны ли значения свойств
    for (let key of keys1) {
        // Проверяем, существует ли такое свойство в obj2 и сравниваем значения
        if (!(key in obj2) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // Если все свойства эквивалентны, возвращаем true
    return true;
}

// Пример использования:
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {a: 1, b: 2, c: 3};
const obj3 = {a: 1, b: 2, c: 4};

console.log(compareObjects(obj1, obj2)); // Выведет true
console.log(compareObjects(obj1, obj3)); // Выведет false
