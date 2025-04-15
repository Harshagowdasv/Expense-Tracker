let totalSalary = document.getElementById("salary");
let expanses = document.getElementById("expanses");
let Description = document.getElementById("description");
let resl = document.getElementById("result");

let expenselist = [];

document.getElementById("add").addEventListener("click", () => {
    let totalSal = Number(totalSalary.value);
    let totalexp = Number(expanses.value);
    let Desc = Description.value;

    if (!totalSal || !totalexp || Desc.trim() === "") {
        alert("Please enter all fields correctly!");
        return;
    }

    expenselist.push({ totalexp, Desc });

    let totalspent = expenselist.reduce((sum, item) => sum + item.totalexp, 0);
    let balance = totalSal - totalspent;

    if(balance==0){
        alert("you don't have money");
    }

    let output = `<h3>Expenses:</h3><ul class="resul">`;
    expenselist.forEach((item, index) => {
        output += `<li>${index + 1}) ${item.Desc} - ₹${item.totalexp}</li>`;
    });
    output += `</ul>`;
    output += `<p><strong>Total Spent:</strong> ₹${totalspent}</p>`;
    output += `<p><strong>Remaining Balance:</strong> ₹${balance}</p>`;

    resl.innerHTML = output;
});