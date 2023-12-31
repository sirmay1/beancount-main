/**** Create A Connection with TypeScript, JavaScript, node & Express ****/


/*Sure, I can help with that. Here’s a simple way to create a connection between the frontend and backend using vanilla JavaScript, TypeScript, and a database.

Firstly, let’s start with the backend. You can use Node.js and Express.js to set up a simple server. Here’s a basic example:*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



/*Next, you’ll want to connect your backend to a database. You can use a library like pg-promise for PostgreSQL or mongoose for MongoDB. Here’s how you might set up a connection with pg-promise:*/



const pgp = require('pg-promise')();
const db = pgp('postgres://username:password@localhost:5432/myDatabase');

db.any('SELECT * FROM myTable')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });




/*Now, let’s move on to the frontend. You can use the fetch API in vanilla JavaScript to make requests to your backend. Here’s a simple example:*/

fetch('http://localhost:3000')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


/*If you’re using TypeScript, the code will look very similar, but you’ll have the added benefit of static types:*/


fetch('http://localhost:3000')
  .then((response: Response) => response.json())
  .then((data: any) => console.log(data))
  .catch((error: Error) => console.error('Error:', error));


/*Remember, this is a very basic example and real-world applications will be more complex. You’ll likely need to handle things like CORS, environment variables, error handling, etc. But hopefully, this gives you a good starting point! Let me know if you have any other questions. 😊*/



/**** Creating a basic connection with JavaScript, HTML5 & PHP, MySQL in XAMPP ****/

/*Create a Database in PHPMyAdmin:

Log in to PHPMyAdmin using the credentials provided during the XAMPP installation.
Click on the “Databases” tab and enter the name of your database in the “Create database” field.
Click on the “Create” button to create your new database.
Create a PHP script that gets product information from the database2:

You can create a PHP script that retrieves data from your MySQL database and sends it to your JavaScript code.
Use the PHP script to create an HTML page to show the products, CSS for the styling2.

Use Javascript to add dynamic elements to the HTML page2:

For example, you can use JavaScript to handle what happens when the user clicks on a product.
Here is a simple example of how you might retrieve a value from a MySQL database using PHP and pass it to JavaScript3:

Sure, I can guide you on how to create a basic connection with JavaScript, PHP, MySQL database using XAMPP. Here are the steps:*/


// In your getValueFromDB.php:
<?php
    // retrieve value from DB here (This part is not the problem)
    $someVar = 0;
?>

// In your index.html:
<form action="someOtherScript.php" method="get">
    <input type="submit" name="button1" value="Run me now!">
</form>

<script>
    var value = "<?php echo $someVar; ?>";
    if(value == 0){
        document.getElementsByName("button1")[0].disabled = true;
    }
</script>

/*In this example, when the website loads, the JavaScript gets the result from the getValueFromDB.php script3.

Please note that this is a very basic example and you might need to adjust it according to your specific needs. For instance, you might need to use AJAX to asynchronously load data from the server without refreshing the page. Also, remember to always sanitize and validate your data when dealing with user inputs to prevent SQL injection attacks. Happy coding! 😊*/