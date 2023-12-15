function beanCalculate() {
   formField = () => {
    const resetForm = document.getElementById('form_id');
    resetForm.reset();
   };
    const addDate = document.getElementById('date').value;
    const cup = document.getElementById('size').value;
    const shots = document.getElementById('espresso').value;
    const total = document.getElementById('daily').value;
    if (cup == 6 && total >= 1) {
        const askUser = prompt("Please enter your name");
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("bean_math_cupSize").innerHTML = `${cup}.oz = 47mg`;
        document.getElementById("bean_math_total").innerHTML = shots * 1 + `${shots}`;
        document.getElementById("bean_math_total").innerHTML = `${total} cup(s) `;
        document.getElementById("total_mg").innerHTML = 47 * total;
    } else if (cup == 8 && total >= 1) {
        const askUser = prompt("Please enter your name");
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("bean_math_cupSize").innerHTML = `${cup}.oz = 75mg`;
        document.getElementById("bean_math_total").innerHTML = `${total} cup(s) `;
        document.getElementById("total_mg").innerHTML = 75 * total;
    } else if (cup == 12 && total >= 1) {
        const askUser = prompt("Please enter your name");
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("bean_math_cupSize").innerHTML = `${cup}.oz = 150mgs`;
        document.getElementById("bean_math_total").innerHTML = `${total} cup(s) `;
        document.getElementById("total_mg").innerHTML = 150 * total;
    } else if (cup == 16 && total >= 1) {
        const askUser = prompt("Please enter your name");
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("bean_math_cupSize").innerHTML = `${cup}.oz = 225mgs`;
        document.getElementById("bean_math_total").innerHTML = `${total} cup(s) `;
        document.getElementById("total_mg").innerHTML = 225 * total;
    } else if (cup == 20 && total >= 1 && total <= 20) {
        const askUser = prompt("Please enter your name");
        document.getElementById("date_result").textContent = `DATE: ${addDate}`;
        document.getElementById("username_result").textContent = `Welcome, ${askUser}!`;
        document.getElementById("bean_math_cupSize").innerHTML = `${cup}.oz = 300mgs`;
        document.getElementById("bean_math_total").innerHTML = `${total} cup(s) `;
        document.getElementById("total_mg").innerHTML = 300 * total;
    } else if (cup !== 'size' || addDate !== 'date' || total !== 'daily') {
        setTimeout( () => {
            alert("Please provide the correct value to continue, thank-you!");
        }, 1000);
    }
};
beanCalculate();



/*<table>
    id = "bean_math_cupSize"; (size)
    id = "espresso_result"; (espresso)
    id = "total_mg"; (total mgs)
</table>
<form>
    id = "size"; (size)
    id = "espresso"; (espresso)
    id = "daily"; (total)
</form>*/

/*HTMLInputElement */


//date_result, size, username, daily, total_mg, bean_match_cupSize
/*document.body.append(addDate);
document.body.append(date_result);
document.body.append(username);
document.body.append(daily);
document.body.append(size);
document.body.append(total_mg);
document.body.append(bean_match_cupSize);*/

/*  else {
        document.getElementById("date_result").innerHTML = "set value";
        document.getElementById("username_result").innerHTML = "set value";
        document.getElementById("bean_math_cupSize").innerHTML = "set value";
        document.getElementById("bean_math_total").innerHTML = "set value";
        document.getElementById("total_mg").innerHTML = "set value";
    }*/


    /*setTimeout( () => {
        alert("Please enter the correct value to continue, thank-you!");
        localStorage.setItem('alreadyDisplayed', 'true');
       }, 1000);
       document.cookie = "cookie=yes; path=/";*/
