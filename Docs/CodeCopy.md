december 26th, 2023.

function beanCalculate() {
    formField = () => {
     const resetForm = document.getElementById('myForm');
     resetForm.reset();
    };
     const btn = document.getElementById('btn');
     btn.addEventListener('click', () => beanCalculate);
     const username = document.getElementById('username').value;
     const addDate = document.getElementById('date').value;
     const espresso = document.getElementById('espresso').value;
     const total = document.getElementById('daily').value;
     const size = document.getElementById('size').value;

        document.body.append(size).value = askSize(size);
        const askSize = prompt("Please enter cup size: 8, 12, 16, or 20...");

        switch (askSize) {
            case 'small':
                document.getElementById("add_cupSize").textContent = "8.oz with 75mgs of Caffeine";
              break;
            case 'tall':
                document.getElementById("add_cupSize").textContent = "8.oz with 75mgs of Caffeine";
              break;
            case 'grande':
                document.getElementById("add_cupSize").textContent = "8.oz with 75mgs of Caffeine";
              break;
            case 'venti':
                document.getElementById("add_cupSize").textContent = "8.oz with 75mgs of Caffeine";
              break;
            default:
                document.getElementById("add_cupSize").textContent = "error...Unknown value";
          };


     if (total >= 1 || espresso >= 1) {
         document.getElementById('id_index').textContent = `01:`;
         document.getElementById("date_result").textContent = `DATE: ${addDate}`;
         document.getElementById("username_result").textContent = `Welcome, ${username}!`;
         document.getElementById("total_cups").textContent = "8.oz 75mgs";
         document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
         document.getElementById("total_mg").textContent = (75 * espresso) + (75 * total);
     } if (total >= 1 || espresso >= 1) {
         document.getElementById('id_index').textContent = `02:`;
         document.getElementById("date_result").textContent = `DATE: ${addDate}`;
         document.getElementById("username_result").textContent = `Welcome, ${username}!`;
         document.getElementById("add_cupSize").textContent = "12.oz 150mgs";
         document.getElementById("total_cups").textContent = `${total} cup(s)`;
         document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
         document.getElementById("total_mg").textContent = (75 * espresso) + (150 * total);
     } if (total >= 1 || espresso >= 1) {
         document.getElementById('id_index').textContent = `03:`;
         document.getElementById("date_result").textContent = `DATE: ${addDate}`;
         document.getElementById("username_result").textContent = `Welcome, ${username}!`;
         document.getElementById("add_cupSize").textContent = "16.oz 225mgs";
         document.getElementById("total_cups").textContent = "16.oz 75mgs Caffeine";
         document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
         document.getElementById("total_mg").textContent = (75 * espresso) + (225 * total);
     } if (total >= 1 || espresso >= 1) {
         document.getElementById('id_index').textContent = `04:`;
         document.getElementById("date_result").textContent = `DATE: ${addDate}`;
         document.getElementById("username_result").textContent = `Welcome, ${username}!`;
         document.getElementById("add_cupSize").textContent = "20.oz 300mgs";
         document.getElementById("total_cups").textContent = `${total} cup(s) `;
         document.getElementById('espresso_results').textContent = `${espresso} shot(s)`;
         document.getElementById("total_mg").textContent = (75 * espresso) + (300 * total);
     } if (size !== 'size' || size != 8 || size != 16 || size != 20 || addDate !== 'date' || total !== 'daily') {
         setTimeout( () => {
             alert("Please provide the correct value to continue, thank-you!");
         }, 1000);
     }
 };
 beanCalculate();







function beanCalculate() {
   formField = () => {
    const resetForm = document.getElementById('form_id');
    resetForm.reset();
   };
    const username = document.getElementById('username').value;
    const addDate = document.getElementById('date').value;
    const espresso = document.getElementById('espresso').value;
    const total = document.getElementById('daily').value;
    const size = document.getElementById('size').value;

    //const _sizes = [8, 12, 16, 20];    sizes.slice(0, 1)    `${askSize}.oz 75mgs`;

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
    } if (size !== 'size' || size != 8 || size != 16 || size != 20 || addDate !== 'date' || total !== 'daily') {
        setTimeout( () => {
            alert("Please provide the correct value to continue, thank-you!");
        }, 1000);
    }
};
beanCalculate();



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



<!---/*Link for background image: (11/11/2023)
<!----<img src="/images/CoffeeDisplay1.jpeg" alt="Background Coffee Image for main page layout" srcset="">*/
Path:
"C:\Users\Willi\OneDrive\Desktop\BeanCount"

Hyperlink for CSS and background images:
https://www.freecodecamp.org/news/css-full-page-background-image-tutorial/

                <label for="use">New User Name</label><br/>
                <input type="text" name="newUser" id="newUser" class="newUser"><br/>
                <label for="first_name">First Name</label><br/>
                <input type="text" name="first_name" id="first_name" class="first_name"><br/>
                <label for="last_name">Last Name</label><br/>
                <input type="text" name="last_name" id="last_name" class="last_name"><br/>
                <button type="submit" id="button" class="button"><?php echo"submit-form";?></button>




 //const _espresso = [75, 150, 225, 300, 375, 450, 525, 600, 675, 750]; //espresso, 8 shot max.

 //const _cupSize = [75, 150, 225, 300]; //cup size, small, tall, grande, venti
    //const _sizes = [8, 12, 16, 20]; //sizes per numeric value

   /*const _cupSize = {
    cup: [8, 12, 16, 20],
    mgs: [75, 150, 225, 300, 375, 450, 525, 600, 675, 750],
   };*/

   /*const _cupSize = {
    cup: {
        8: '75mgs of Caffeine',
        12: '150mgs of Caffeine',
        16: '225mgs of Caffeine',
        20: '300mgs of Caffeine',
    },
   };*/



/*  function updateHyperlinkIndexes() {
    var table = document.getElementById('id_index tbody');
    for (var i = 1; i < table.children.length; i++) {
        var trContent = table.children[i];
        for (var i = 0; i  trContent.children.length; i++) {
            if (tryContent.children.item(i).type && trContent.children.item(i). type === "hidden")  {
                var cellName = trContent.children.item(i).name;
                trContent.children.item(i).name = cellName.replace(/[.*]/, i);
            }
        }
    }
    return table;
};
var updatedHtml = updateHyperlinkIndexes();*/


    /*if (espresso == 1) {
        document.getElementById('espresso_results').textContent = `${_espresso[1]}.mg`;
    } else if (espresso == 2) {
        document.getElementById('espresso_results').textContent = `${_espresso[2]}.mg`;
    } else if (espresso == 3) {
        document.getElementById('espresso_results').textContent = `${_espresso[3]}.mg`;
    } else if (espresso == 4) {
        document.getElementById('espresso_results').textContent = `${_espresso[4]}.mg`;
    } else if (espresso == 5) {
        document.getElementById('espresso_results').textContent = `${_espresso[5]}.mg`;
    } else if (espresso == 6) {
        document.getElementById('espresso_results').textContent = `${_espresso[6]}.mg`;
    } else if (espresso == 7) {
        document.getElementById('espresso_results').textContent = `${_espresso[7]}.mg`;
    } else if (espresso == 8) {
        document.getElementById('espresso_results').textContent = `${_espresso[8]}.mg`;
    } else if (espresso == 9) {
        document.getElementById('espresso_results').textContent = `${_espresso[9]}.mg`;
    } else if (espresso == 10) {
        document.getElementById('espresso_results').textContent = `${_espresso[1]}.mg`;
    } else {
        document.getElementById('espresso_results').textContent = espresso * 75;// espresso(user numeric value entered) * 75
    }*/


/*    switch (_espresso[espresso.length]) {
        case _espresso[0]:
            document.getElementById('espresso_results').textContent = _espresso[0];
            break;
        case _espresso[1]:
            document.getElementById('espresso_results').textContent = _espresso[2];
            break;
        case _espresso[2]:
            document.getElementById('espresso_results').textContent = _espresso[3];
            break;
        case _espresso[3]:
            document.getElementById('espresso_results').textContent = _espresso[4];
            break;
        case _espresso[4]:
            document.getElementById('espresso_results').textContent = _espresso[5];
            break;
        case _espresso[5]:
            document.getElementById('espresso_results').textContent = _espresso[6];
            break;
        case _espresso[6]:
            document.getElementById('espresso_results').textContent = _espresso[7];
            break;
        case _espresso[7]:
            document.getElementById('espresso_results').textContent = _espresso[8];
            break;
        default:
            document.getElementById('espresso_results').textContent = "set-value";
    }*/

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


    /*setTimeout( () = {
        alert("Please enter the correct value to continue, thank-you!");
        localStorage.setItem('alreadyDisplayed', 'true');
       }, 1000);
       document.cookie = "cookie=yes; path=/";*/


<main>
        <br><br>
        <h1 class="h1" id="h1">
            <?php
            echo"I LIKE JAVASCRIPT";
            ?>
        </h1>
        <br><br>
        <button id="btn" class="btn exec">
            <?php
            echo"Change State";
            ?>
        </button>
        <ul>
            <?php if(true) {?>
                <br/>
                <li class="link">
                    <a href='javascript' class='link'>I Love <?php
                    $name = "PHP";
                    echo $name;
                    ?>
                    </p>
                </li>
            <?php } ?>
            <?php if(true) {?>
                <br/>
                <li class="link">
                    <a href='php' class='link'>I Love <?php
                    $name = "JavaScript";
                    echo $name;
                    ?></p>
                </li>
            <?php } ?>
            </ul>
            <br/>
            <h3 style='
            text-align: center;
            color: green;
            text-decoration: underline 1px solid crimson;
            background-color: whitesmoke;
            font-family: Georgia;
            font-size: 1.2rem;
            '>
                <?php {
                echo "<br/><br/>";
                echo $_SERVER["DOCUMENT_ROOT"];
                echo "<br/><br/>";
                echo $_SERVER["PHP_SELF"];
                echo "<br/><br/>";
                echo $_SERVER["SERVER_NAME"];
                echo "<br/><br/>";
                echo $_SERVER["REQUEST_METHOD"];
                echo "<br/><br/>";
                $_SESSION["username"] = "BillDev07";
                echo $_SESSION["username"];
                echo "<br/><br/>";
                 }?>
            </h3>
    </main>




    Junk-Code



<input = "username, size, daily, date"; => (btn)
*/
/*step:1# user enters info into field(s)
 *step:2# enter date from the field to submit
  step:3# cup-size = {size1: '8.oz', size2: '12.oz', size3: '16.oz', size4: '20.oz'};
  step:4#  size * total-cups = daily serving
  OUTPUT: username_result, bean_math_cupSize, bean_math_total;

DOM Elements To Consider:
     HTMLInputElement, getElementsByTagName, getElementById, childNodes, appendChild, removeChild, getAttribute
  */

/*<form>
1st Number : <input type="text" id="firstNumber" /><br>
2nd Number: <input type="text" id="secondNumber" /><br>
<input type="button" onClick="multiplyBy()" Value="Multiply" />
<input type="button" onClick="divideBy()" Value="Divide" />
</form>
<p>The Result is : <br>
<span id = "result"></span>
</p>

function multiplyBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select

<input type="text" id="text-box" size="20" value="Hello world!" />
<button onclick="selectText()">Select text</button>

function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}
*/

Solving Issue Of Page Poping an alert when you refresh the page... (beanCalculator.php) (11/29/2023)
site: https://stackoverflow.com/questions/36465057/prevent-settimeout-function-on-page-reload
OPTION: 1#
window.onload = function() {


  if (!document.cookie){
        setTimeout(function(){
            $('#myModal').modal('show');
            }, 10000);
        document.cookie = "cookie=yes; path=/";
    }

OPTION: 2#
/ load flag from localStorage
var alreadyDisplayed = localStorage.getItem('alreadyDisplayed');

// if not found or found but 'false' - display modal (alert in this case)
if (!alreadyDisplayed || alreadyDisplayed == 'false') {

  setTimeout(function() {
    alert('show');
    // store to localStorage the fact that we displayed the modal
    localStorage.setItem('alreadyDisplayed', 'true');

  }, 5 * 1000); // in ms, so 5*1000 = 5 secs
}

}



App.php

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="nav.css">
    <link rel="stylesheet" href="App.css">
    <title>Bean Calculator</title>
</head>
<body>
    <header>
        <nav class="topnav">
            <a class="active" href="https://localhost/beancount/client/index.php">Bean Math</a>
            <a href="https://localhost/beancount/client/App.php">Bean Login Form</a>
            <a href="https://localhost/beancount/client/AppFormHandle.php">Bean Outcome</a>
            <a href="https://localhost/beancount/client/beanCalculator.php">Bean Calculator</a>
          </nav>
    </header>
    <br/><br/><br/><br/>
        <h1 id="header">
            <?php
                echo"Are You Logged In?";
            ?>
        </h1>
        <br/><br/><br/><br/>
        <main class="form-container">
            <form class="form" id="form" method="POST" action="AppFormHandle.php">
                <?php
                    $servername = "localhost";
                    $username = "billdev07";
                    $password = "Guildwars1";
                    $dbname = "MySQL";

                    $conn = new mysqli(
                        $servername, $username, $password, $dbname
                    );

                    if ($conn->connect_error) {
                        die("connection failed..."
                        . $conn->connect_error);
                    }

                    $sqlquery = "INSERT INTO table VALUES
                    ('William', 'Castro', 'william.castro2000@gmail.com')";

                    if ($conn->query($sql) === TRUE) {
                        echo "record inserted successfully!";
                    }
                    else {
                        echo "ERROR: " . $sql . "<br/>" . $conn->error;
                    }
                ?>
            </form>
        </main>
    <script src="App.js"></script>
</body>
</html>

beanCalculator.php (FILE)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="beanCalculator.css">
    <link rel="stylesheet" href="nav.css">
    <title>Bean Calculator</title>
</head>
<body>
    <header>
        <nav class="topnav">
            <a class="active" href="https://localhost/beancount/client/index.php">Bean Math</a>
            <a href="https://localhost/beancount/client/App.php">Bean Login Form</a>
            <a href="https://localhost/beancount/client/AppFormHandle.php">Bean Outcome</a>
            <a href="https://localhost/beancount/client/beanCalculator.php">Bean Calculator</a>
          </nav>
    </header>
    <main class="bean-form">
        <form method="POST" action="client/beanCalculator.php" class="form" id="form_id">
            <label for="date">Enter Date: YYYY-MM-DD</label><br/>
            <input type="text" name="date" id="date" class="label-input" placeholder="YYYY-MM-DD"><br/>
            <label for="size">Enter Serving Size:</label><br/>
            <input type="number" name="size" id="size" class="size" placeholder="6.oz, 8.oz, 12.oz, etc..">
            <br/><br/>
            <label for="daily">Total Cup Count:</label><br/>
            <input type="number" name="daily" id="daily" class="daily" placeholder="How many cups?...">
            <br/><br/>
            <button type="button" class="reset-btn" id="reset_btn" onClick="formField()">
                <?php echo"reset-values"?>
            </button>
            <input type="button" onClick="beanCalculate()" class="btn" id="btn" value="submit-values">
        </form>
    </main>
    <div class="table-results">
        <table class="table">
            <thead>
                <tr>
                    <th class="th" id="label-index"><?php echo"INDEX"?></th>
                    <th class="th" id="label-date"><?php echo"YYYY-MM-DD";?></th>
                    <th class="th" id="label-username"><?php echo"Username:";?></th>
                    <th class="th" id="label-cup-size"><?php echo"Cup size: (mg)";?></th>
                    <th class="th" id="label-total-count"><?php echo"Total Cups:"?></th>
                    <th class="th" id="label-total-caffeine"><?php echo"Caffeine: (mgs)";?></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="td td-index" id="id_index" placeholder=" INDEX: ">set value</td>
                    <td class="td td-date" id="date_result" placeholder="YYYY-MM-DD">set value</td>
                    <td class="td td-user" id="username_result" placeholder="username...">set value</td>
                    <td class="td td-cup" id="bean_math_cupSize" placeholder="size-cup...">set value</td>
                    <td class="td td-total" id="bean_math_total" placeholder="total-cups...">set value</td>
                    <td class="td td-mg" id="total_mg" placeholder="caffeine mg drank...">set value</td>
                </tr>
            </tbody>
        </table>
    </div>

    <script src="beancalculator.js"></script>
</body>
</html>

/*Database Form Table*/

CREATE TABLE newusers(
	id INTEGER(15) NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    pwd VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    date_posted DATETIME NOT NULL,
    PRIMARY KEY(id)
);
