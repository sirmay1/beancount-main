function beanCalculate() {
   formField = () => {
    const resetForm = document.getElementById('resetForm');
    resetForm.reset();
   };
    const username = document.getElementById('username').value;
    const addDate = document.getElementById('date').value;
    const espresso = document.getElementById('espresso').value;
    const total = document.getElementById('daily').value;
    const size = document.getElementById('size').value;

   /*const cupSize = new Map([
    [8, {'8.oz': 75}],
    [12, {'12.oz': 150}],
    [16, {'16.oz': 225}],
    [20, {'20.oz': 300}],
   ]);*/
   const userCupSize = [8, 12, 16, 20, 0];
   const cupSize = [8, 12, 16, 20, 0];

    if (userCupSize.includes(size) == cupSize.slice(0, 1) || total >= 1 || espresso >= 1) {
        //const askUser = prompt("Please enter your name");
        document.getElementById('id_index').textContent = `01:`;
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${username}!`;
        document.getElementById("add_cupSize").textContent = `8.oz, 75mgs`; 
        document.getElementById("total_cups").textContent = `${total} serving`;
        document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
        document.getElementById("total_mg").textContent = (75 * espresso) + (75 * total);
    } if (userCupSize.copyWithin(size.valueOf()) === cupSize.slice(1, 2) || total >= 1 || espresso >= 1) {
        document.getElementById('id_index').textContent = `02:`;
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${username}!`;
        document.getElementById("add_cupSize").textContent = `12.oz 150mgs`;
        document.getElementById("total_cups").textContent = `${total} serving`;
        document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
        document.getElementById("total_mg").textContent = (75 * espresso) + (150 * total);
    } if (userCupSize.copyWithin(size.valueOf()) === cupSize.slice(2, 3) || total >= 1 || espresso >= 1) {
        document.getElementById('id_index').textContent = `03:`;
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${username}!`;
        document.getElementById("add_cupSize").textContent = `16.oz 225mgs`;
        document.getElementById("total_cups").textContent = `${total} serving`;
        document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
        document.getElementById("total_mg").textContent = (75 * espresso) + (225 * total);
    } if (userCupSize.copyWithin(size.valueOf()) === cupSize.slice(3, 4) || total >= 1 || espresso >= 1) {
        document.getElementById('id_index').textContent = `04:`;
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${username}!`;
        document.getElementById("add_cupSize").textContent = `20.oz 300mgs`;
        document.getElementById("total_cups").textContent = `${total} serving`;
        document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
        document.getElementById("total_mg").textContent = (75 * espresso) + (300 * total);
    } if (size !== 'size' || size != 8 || size != 16 || size != 20 || addDate !== 'date' || total !== 'daily' || username !== 'username') {
        setTimeout( () => {
            alert("Please provide the correct value to continue, thank-you!");
        }, 1000);
    }
};
beanCalculate();


    /*const addDate = document.getElementById('date').value;
    addDate.forEach( e => {
        const date = new Date(e.dataset.date);
        return date.getDate();
    });*/


  //const inputField  = document.getElementById('myInput');
    //let inputValue = inputField.value;
    //let table = document.getElementById("myTable");


     //let row = table.insertRow(-1);
        //let cell = row.insertCell(3);
        //let cell1 = row.insertCell()
        //cell.textContent = inputField.id;




