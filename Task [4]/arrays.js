function increaseNumbers(array) {
    // Создаем новый массив для хранения увеличенных значений
    const increasedArray = [];

    // Проходим по каждому элементу входного массива
    for (let number of array) {
        // Увеличиваем текущее число на 10 процентов и добавляем его в новый массив
        increasedArray.push(number * 1.1);
    }

    return increasedArray;
}

// Пример использования:
const numbers = [10, 20, 30, 40];
const increasedNumbers = increaseNumbers(numbers);
console.log(increasedNumbers); // Выведет [11, 22, 33, 44]
