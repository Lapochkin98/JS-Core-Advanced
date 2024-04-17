function repeatOperation(operation, interval, repetitions) {
    let count = 0; // Инициализируем счетчик повторений
    // Устанавливаем интервал выполнения операции
    const intervalId = setInterval(() => {
        operation(); // Выполняем операцию
        count++; // Увеличиваем счетчик повторений
        // Проверяем, достигнуто ли указанное количество повторений
        if (count === repetitions) {
            clearInterval(intervalId); // Если да, останавливаем интервал
        }
    }, interval); // Указываем интервал выполнения операции
}

// Пример использования:
function printMessage() {
    console.log("Hello, world!");
}

repeatOperation(printMessage, 1000, 5); // Вызываем функцию repeatOperation
