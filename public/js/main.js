const tableBody = document.getElementById('table_body');


async function getAllExpenses(){
    try {
        const res = await axios.get("http://localhost:4000/getExpense");

        res.data.forEach((expenses) => {
            const description = expenses.description;
            const category = expenses.category;
            const amount = expenses.amount;
            const id = expenses.id;

            const tr = document.createElement('tr');

            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const idInput = document.createElement('input');

            idInput.type = 'hidden';
            idInput.value = id;

            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            editBtn.className = "edit";
            deleteBtn.className = "delete";

            editBtn.innerHTML = "Edit";
            deleteBtn.innerHTML = "Delete"

            td4.appendChild(editBtn);
            td4.appendChild(deleteBtn);

            td1.appendChild(document.createTextNode(description));
            td2.appendChild(document.createTextNode(category));
            td3.appendChild(document.createTextNode(amount));

            tr.appendChild(idInput);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            tableBody.appendChild(tr);
        })
    } catch (error) {
        console.log(error);
    }
}

async function deleteExpense(e){
    try {
        if(e.target.classList.contains("delete")){
            const expenseId = e.target.parentNode.parentNode.firstChild.value;
            await axios.get(`http://localhost:4000/deleteExpense/${expenseId}`);
            window.location.reload();
        }
    } catch (error) {
        console.log(error);   
    }
}

document.addEventListener("DOMContentLoaded" , getAllExpenses);

tableBody.addEventListener("click", (e) => deleteExpense(e));