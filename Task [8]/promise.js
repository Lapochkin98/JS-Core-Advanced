function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async operation 1 completed");
            resolve();
        }, 1000);
    });
}

function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async operation 2 completed");
            resolve();
        }, 1500);
    });
}

function asyncOperation3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async operation 3 completed");
            resolve();
        }, 2000);
    });
}

function executeAsyncOperationsSequentially() {
    asyncOperation1()
        .then(() => asyncOperation2())
        .then(() => asyncOperation3())
        .then(() => {
            console.log("All async operations completed successfully.");
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
}

// Пример использования:
executeAsyncOperationsSequentially();
