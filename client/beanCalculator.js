function beanCalculate() {

    const btn = document.getElementById('btn');
    btn.addEventListener('click', (beanCalculate) => {
        const username = document.getElementById('username').value;
        const date = document.getElementById('date').value;
        const size = document.getElementById('size').value;
        if (size.toString() == '8') {
            document.getElementById('add_username').textContent = `${username}`;
            document.getElementById('date_result').textContent = `${date}`;
            document.getElementById('add_cupSize').textContent = `${size.toString()}.oz size: 75mgs`;
        } else if (size.toString() == '12') {
            document.getElementById('add_username').textContent = `${username}`;
            document.getElementById('date_result').textContent = `${date}`;
            document.getElementById('add_cupSize').textContent = `${size.toString()}.oz size: 150mgs`;
        } else if (size.toString() == '16') {
            document.getElementById('add_username').textContent = `${username}`;
            document.getElementById('date_result').textContent = `${date}`;
            document.getElementById('add_cupSize').textContent = `${size.toString()}.oz size: 225mgs`;
        } else if (size.toString() == '20') {
            document.getElementById('add_username').textContent = `${username}`;
            document.getElementById('date_result').textContent = `${date}`;
            document.getElementById('add_cupSize').textContent = `${size.toString()}.oz size: 300mgs`;
        } else {
            document.getElementById('add_cupSize').textContent = "error : error";
        }
        return beanCalculate;
    });//btn addEvent.....
    formField = () => {
        const resetForm = document.getElementById('myForm');
        resetForm.reset();
       };//end of formField...

 };//end of beanCalculator...
 beanCalculate();



 /*function beanCalculate() {
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
    /*const userCupSize = [8, 12, 16, 20, 0];
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
 beanCalculate();*/






/*function beanCalculate() {
    formField = () => {
     const resetForm = document.getElementById('form_id');
     resetForm.reset();
    };
     const username = document.getElementById('username').value;
     const addDate = document.getElementById('date').value;
     const espresso = document.getElementById('espresso').value;
     const total = document.getElementById('daily').value;


     const _sizes = [8, 12, 16, 20];


     //sizes.slice(0, 1)    `${askSize}.oz 75mgs`;


     if (size  == 8 || total >= 1 || espresso >= 1) {
         document.getElementById('id_index').textContent = `01:`;
         document.getElementById("date_result").textContent = `DATE: ${addDate}`;
         document.getElementById("username_result").textContent = `Welcome, ${username}!`;
         document.getElementById("total_cups").textContent = "8.oz 75mgs";
         document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
         document.getElementById("total_mg").textContent = (75 * espresso) + (75 * total);
     } if (size == 12 || total >= 1 || espresso >= 1) {
         document.getElementById('id_index').textContent = `02:`;
         document.getElementById("date_result").textContent = `DATE: ${addDate}`;
         document.getElementById("username_result").textContent = `Welcome, ${username}!`;
         document.getElementById("add_cupSize").textContent = "12.oz 150mgs";
         document.getElementById("total_cups").textContent = `${total} cup(s)`;
         document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
         document.getElementById("total_mg").textContent = (75 * espresso) + (150 * total);
     } if (size == 16 || total >= 1 || espresso >= 1) {
         document.getElementById('id_index').textContent = `03:`;
         document.getElementById("date_result").textContent = `DATE: ${addDate}`;
         document.getElementById("username_result").textContent = `Welcome, ${username}!`;
         document.getElementById("add_cupSize").textContent = "16.oz 225mgs";
         document.getElementById("total_cups").textContent = "16.oz 75mgs Caffeine";
         document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
         document.getElementById("total_mg").textContent = (75 * espresso) + (225 * total);
     } if (size == 20 || total >= 1 || espresso >= 1) {
         document.getElementById('id_index').textContent = `04:`;
         document.getElementById("date_result").textContent = `DATE: ${addDate}`;
         document.getElementById("username_result").textContent = `Welcome, ${username}!`;
         document.getElementById("add_cupSize").textContent = "20.oz 300mgs";
         document.getElementById("total_cups").textContent = `${total} cup(s) `;
         document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
         document.getElementById("total_mg").textContent = (75 * espresso) + (300 * total);
     }
 };
 beanCalculate();*/

/*if (size !== 'size' || size != 8 || size != 16 || size != 20 || addDate !== 'date' || total !== 'daily') {
         setTimeout( () => {
             alert("Please provide the correct value to continue, thank-you!");
         }, 1000);
     }*/

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



        /*const size = document.getElementById('size').value;
        for (let i = 0; i < size.length; i++) {
            size[i].innerHTML = "8.oz 75mgs";
        }*/






     /*const askSize = prompt("Please cup-size: 8, 12, 16, 20...");
const cup = askSize;

/*switch (askSize) {
  case '8':
    console.log("Your cup size is 8.oz with 75mgs of caffeine");
    break;
  case '12':
    console.log("Your cup size is 12.oz with 150 mgs of caffeine");
    break;
  case '16':
    console.log("Your cup size is 16.oz with 225 mgs of caffeine");
    break;
  case '20':
    console.log("Your cup size is 20.oz with 300 mgs of caffeine");
    break;
  default:
    console.log("Please submit the correct values, thank-you!");
}*/










