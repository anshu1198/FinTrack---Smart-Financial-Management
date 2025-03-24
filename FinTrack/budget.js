let budget = 0;
let expenses = [];

// DOM Elements
const budgetAmountInput = document.getElementById('budgetAmount');
const setBudgetBtn = document.getElementById('setBudget');
const totalBudgetDisplay = document.getElementById('totalBudget');
const totalSpentDisplay = document.getElementById('totalSpent');
const remainingDisplay = document.getElementById('remaining');
const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById('expenseAmount');
const expenseCategoryInput = document.getElementById('expenseCategory');
const expenseDateInput = document.getElementById('expenseDate');
const addExpenseBtn = document.getElementById('addExpense');
const expensesList = document.getElementById('expensesList');
const categoryFilter = document.getElementById('categoryFilter');

// Set today's date as the default date
expenseDateInput.valueAsDate = new Date();

// Format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
};

// Update summary displays
const updateSummary = () => {
    const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0);
    const remaining = budget - totalSpent;

    totalBudgetDisplay.textContent = formatCurrency(budget);
    totalSpentDisplay.textContent = formatCurrency(totalSpent);
    remainingDisplay.textContent = formatCurrency(remaining);

    // Update colors based on remaining amount
    if (remaining < 0) {
        remainingDisplay.style.color = 'red';  // Using a color directly for simplicity
    } else {
        remainingDisplay.style.color = '#4A4A4A';  // Default color
    }
};

// Set budget
setBudgetBtn.addEventListener('click', () => {
    const amount = parseFloat(budgetAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid budget amount');
        return;
    }
    budget = amount;
    updateSummary();
    budgetAmountInput.value = '';
});

// Add expense
addExpenseBtn.addEventListener('click', () => {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;
    const date = expenseDateInput.value;

    if (!name || isNaN(amount) || amount <= 0 || !date) {
        alert('Please fill in all fields with valid values');
        return;
    }

    const expense = {
        id: Date.now(),
        name,
        amount,
        category,
        date
    };

    expenses.push(expense);
    updateSummary();
    renderExpenses();
    
    // Clear inputs
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    expenseCategoryInput.value = 'food';
    expenseDateInput.valueAsDate = new Date();
});

// Render expenses
const renderExpenses = () => {
    const selectedCategory = categoryFilter.value;
    const filteredExpenses = selectedCategory === 'all' 
        ? expenses 
        : expenses.filter(expense => expense.category === selectedCategory);

    expensesList.innerHTML = filteredExpenses
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(expense => `
            <tr>
                <td>${expense.name}</td>
                <td>${formatCurrency(expense.amount)}</td>
                <td>${expense.category}</td>
                <td>${new Date(expense.date).toLocaleDateString()}</td>
                <td>
                    <button class="delete-expense" onclick="deleteExpense(${expense.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
};

// Delete expense
const deleteExpense = (id) => {
    if (confirm('Are you sure you want to delete this expense?')) {
        expenses = expenses.filter(expense => expense.id !== id);
        updateSummary();
        renderExpenses();
    }
};

// Filter expenses by category
categoryFilter.addEventListener('change', renderExpenses);

// Initialize
updateSummary();
renderExpenses();
