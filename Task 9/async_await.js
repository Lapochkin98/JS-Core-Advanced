async function fetchData() {
    try {
        // Выполняем запрос к удаленному серверу
        const response = await fetch('https://api.example.com/data');
        
        // Проверяем статус ответа
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        // Получаем данные в формате JSON
        const data = await response.json();
        
        // Возвращаем полученные данные
        return data;
    } catch (error) {
        // Ловим и обрабатываем ошибку, если она произошла
        console.error('Error fetching data:', error);
        throw error; // Перевыбрасываем ошибку, чтобы её можно было обработать в другом месте
    }
}

// Пример использования:
(async () => {
    try {
        const result = await fetchData();
        console.log('Data fetched successfully:', result);
    } catch (error) {
        console.error('Error:', error);
    }
})();
