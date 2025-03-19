document.getElementById('addExpenseForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const method = document.getElementById('method').value;
    const description = document.getElementById('description').value;
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

    if (!amount || !category || !method || !description) {
        alert("Please fill in all fields!");
        return;
    }

    firebase.database().ref('transactions/').push({
        amount: amount,
        category: category,
        payment_method: method,
        description: description,
        date: date
    }).then(() => {
        alert("Expense Added!");
        window.location.href = "../html/index.html";
    }).catch(error => {
        console.error("Error adding expense:", error);
    });
});
