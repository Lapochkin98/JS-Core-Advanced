function validateInteger(number) {
    // Проверяем, является ли число целым
    if (!Number.isInteger(number)) {
        // Если число не целое, создаем и выбрасываем пользовательскую ошибку
        throw new Error("The number must be an integer.");
    }
}

// Пример использования:
try {
    validateInteger(5); // Проверяем целое число
    console.log("Valid integer.");
    validateInteger(3.14); // Проверяем нецелое число
    console.log("Valid integer.");
} catch (error) {
    console.error(error.message); // Выводим сообщение об ошибке, если произошла ошибка
}
