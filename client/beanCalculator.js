function beanCalculate() {
   formField = () => {
    const resetForm = document.getElementById('form_id');
    resetForm.reset();
   };
    const addDate = document.getElementById('date').value;
    const cup = document.getElementById('size').value;
    const espresso = document.getElementById('espresso').value;
    const total = document.getElementById('daily').value;

    if (cup == 8 && cup == 'size' || total >= 1 || espresso >= 1) {
        const askUser = prompt("Please enter your name");
        document.getElementById('id_index').textContent = `01:`;
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("add_cupSize").textContent = `${cup}.oz 75mgs`;//_cupSize.cup[8];
        document.getElementById("total_cups").textContent = `${total} cup(s) `;
        document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
        document.getElementById("total_mg").textContent = (75 * espresso) + (75 * total);
    } if (cup == 12 && cup == 'size' || total >= 1 || espresso >= 1) {
        document.getElementById('id_index').textContent = `02:`;
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("add_cupSize").textContent = `${cup}.oz 150mgs`;//_cupSize.cup[12];
        document.getElementById("total_cups").textContent = `${total} cup(s) `;
        document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
        document.getElementById("total_mg").textContent = (75 * espresso) + (150 * total);
    } if (cup == 16 || cup == 'size' || total >= 1 || espresso >= 1) {
        document.getElementById('id_index').textContent = `03:`;
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("add_cupSize").textContent = `${cup}.oz 225mgs`;//_cupSize.cup[16];
        document.getElementById("total_cups").textContent = `${total} cup(s) `;
        document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
        document.getElementById("total_mg").textContent = (75 * espresso) + (225 * total);
    } if (cup == 20 && cup == 'size' || total >= 1 || espresso >= 1) {
        document.getElementById('id_index').textContent = `04:`;
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("add_cupSize").textContent = `${cup}.oz 300mgs`;//_cupSize.cup[20];
        document.getElementById("total_cups").textContent = `${total} cup(s) `;
        document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
        document.getElementById("total_mg").textContent = (75 * espresso) + (300 * total);
    } if (cup !== 'size' || cup != 8 || cup != 16 || cup != 20 || addDate !== 'date' || total !== 'daily') {
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






