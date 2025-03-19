document.addEventListener('DOMContentLoaded', function () {
    const transactionList = document.getElementById('transactionList');
    const categoryTotals = {}; // Object to store category-wise total spending

    firebase.database().ref('transactions/').on('value', snapshot => {
        transactionList.innerHTML = "";
        categoryTotals["Food"] = 0;
        categoryTotals["Transport"] = 0;
        categoryTotals["Rent"] = 0;
        categoryTotals["Shopping"] = 0;
        categoryTotals["Entertainment"] = 0;
        categoryTotals["Other"] = 0;

        snapshot.forEach(childSnapshot => {
            const key = childSnapshot.key;
            const data = childSnapshot.val();
            const amount = parseFloat(data.amount);

            // Add to category totals
            if (data.category in categoryTotals) {
                categoryTotals[data.category] += amount;
            } else {
                categoryTotals[data.category] = amount;
            }

            const div = document.createElement('div');
            div.innerHTML = `
                <p><strong>₹${data.amount}</strong> - ${data.category} (${data.payment_method})</p>
                <p>${data.description} | 📅 ${data.date}</p>
                <button onclick="editExpense('${key}', '${data.amount}', '${data.category}', '${data.payment_method}', '${data.description}')">✏️ Edit</button>
                <button onclick="deleteExpense('${key}')">❌ Delete</button>
                <hr>
            `;
            transactionList.appendChild(div);
        });

        // Update Chart after fetching data
        updateSpendingChart(categoryTotals);
        checkBudgetWarnings(categoryTotals);
    });
});

// Function to Update Chart
function updateSpendingChart(categoryTotals) {
    const ctx = document.getElementById('spendingChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'pie', // Pie Chart
        data: {
            labels: Object.keys(categoryTotals),
            datasets: [{
                label: 'Total Spending',
                data: Object.values(categoryTotals),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
}
// Function to Check Budget Warnings & Give AI Recommendations
function checkBudgetWarnings(categoryTotals) {
    let warnings = "";

    if (categoryTotals["Food"] > 5000) {
        warnings += "🛑 You’re overspending on food! Reduce by ₹1000 next month.\n";
    }
    if (categoryTotals["Entertainment"] > 3000) {
        warnings += "📉 Cut down entertainment expenses to save more!\n";
    }
    if (categoryTotals["Shopping"] > 4000) {
        warnings += "🛒 Try reducing shopping expenses by ₹500 next month.\n";
    }

    if (warnings !== "") {
        alert("⚠️ Smart Budget AI Suggestions:\n" + warnings);
    }
}
