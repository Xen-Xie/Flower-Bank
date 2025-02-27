const sidebar = document.querySelector("#bar");
        const openSidebar = document.querySelector("#sidebars");
        const closeSidebar = document.querySelector("#closeSidebar");

        // Open Sidebar
        openSidebar.addEventListener("click", (e) => {
          e.preventDefault();
          sidebar.classList.remove("translate-x-full"); // Slide in
        });

        // Close Sidebar
        closeSidebar.addEventListener("click", (e) => {
            e.preventDefault();
            sidebar.classList.add("translate-x-full"); // Slide out
          });
          //Sidebar Modal logic
        const menuButton = document.getElementById("menu-button");
        const asideBar = document.getElementById("asideBar");
        const closeButton = document.getElementById("closeAside");
    
        // Open Sidebar
        menuButton.addEventListener("click", (e) => {
            e.preventDefault();
            asideBar.classList.toggle("-translate-x-full"); // Toggle sidebar visibility
        });
    
        // Close Sidebar
        closeButton.addEventListener("click", (e) => {
            e.preventDefault();
            asideBar.classList.add("-translate-x-full"); // Hide sidebar
        });

        // Add Money Modal Logic

    document.addEventListener('DOMContentLoaded', function () {
    loadData(); // Load saved data
    updateUI(); // Update UI with stored values

    document.getElementById('addMoneyBtn').addEventListener('click', addMoney);
    document.getElementById('withdrawMoneyBtn').addEventListener('click', withdrawMoney);
    document.getElementById('showTransactionsBtn').addEventListener('click', showTransactions);
});

    function loadData() {
        let storedBalance = localStorage.getItem('balance');
        let storedTransactions = localStorage.getItem('transactions');

        if (storedBalance !== null) {
        balance = parseFloat(storedBalance);
        }

        if (storedTransactions !== null) {
        transactions = JSON.parse(storedTransactions);
        }
    }

    let balance = 0;
    let transactions = [];

    function addMoney() {
        let amount = parseFloat(document.getElementById('amount').value);
        if (amount > 0) {
            balance += amount;
            transactions.push({ type: 'Add', amount: amount, date: new Date().toLocaleString() });

        saveData(); // Save updated balance & transactions
        updateUI();
    } else {
        alert('Please enter a valid amount');
    }
}
  //Withdraw Function

    function withdrawMoney() {
        let amount = parseFloat(document.getElementById('withdrawAmount').value);
        if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
        }

        if (amount > balance) {
        alert('Insufficient funds');
        return;
    }

// Process withdrawal
balance -= amount;
    transactions.push({ type: 'Withdraw', amount: amount, date: new Date().toLocaleString() });

    saveData(); // Save updated balance & transactions
    updateUI();
}
function saveData() {
    localStorage.setItem('balance', balance);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function updateUI() {
    document.getElementById('balance').innerText = balance;
    document.getElementById('amount').value = '';
    document.getElementById('withdrawAmount').value = '';
}

function showTransactions() {
    let transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';
    transactions.forEach(trx => {
        let li = document.createElement('li');
        li.textContent = `${trx.date} - ${trx.type}: $${trx.amount}`;
        transactionList.appendChild(li);
    });
    document.getElementById('transactions').classList.remove('hidden');
}