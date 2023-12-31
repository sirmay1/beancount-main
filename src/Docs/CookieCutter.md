beanCalculator.php FILE 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="beanCalculator.css">
    <link rel="stylesheet" href="nav.css">
    <title>Calculator</title>
</head>
<body>
<header>
        <nav class="topnav">
            <a class="active" href="http://localhost/BeanCount/client/index.php">Home</a>
            <a href="http://localhost/BeanCount/client/App.php">Register</a>
            <a href="http://localhost/BeanCount/client/beanCalculator.php">Bean Calculator</a>
            <a href="http://localhost/BeanCount/client/AppFormHandle.php">Handle Form</a>
          </nav> 
    </header>
    <main>
        <div class="container">
            <form action="/SQL/sqlite3.py">
                <label for="date">Today's Date</label>
                <br>
                <input type="date" name="date" id="date" class="date">
                <br>
                <label for="user">Username</label>
                <input type="text" name="user" id="user" class="user" placeholder="enter username...">
                    <label for="unit" id="unit" class="unit">Price Per Unit:</label>
                    <select name="unit" id="unit" class="unit">
                        <option value="unit0">Make A selection</option>
                        <option value="null">N/A</option>
                        <option value="unit1">$2.99</option>
                        <option value="unit2">$4.99</option>
                        <option value="unit3">$6.99</option>
                        <option value="unit4">$6.29</option>
                        <option value="unit5">$8.79</option>
                        <option value="unit6">$4.79</option>
                    </select>
                    <br>
                    <label for="serving">Cup Size:</label>
                    <select name="serving" id="serving" class="serving">
                        <option value="serving0">Make A selection</option>
                        <option value="null">N/A</option>
                        <option value="serving1">1 cup, "Hot or Oleato"</option>
                        <option value="serving2">2 cup</option>
                        <option value="serving3">3 cup</option>
                        <option value="serving4">4 cup</option>
                        <option value="serving5">5 cup</option>
                        <option value="serving6">6 cup</option>
                    </select>
                    <label for="perBrew">Caffeine Per-serving:</label>
                    <select name="perBrew" id="perBrew" class="perBrew">
                        <option value="perBrew0">Make A selection</option>
                        <option value="null">N/A</option>
                        <option value="perBrew1">80mg Caffeine</option>
                        <option value="perBrew2">90mg Caffeine</option>
                        <option value="perBrew3">100mg Caffeine</option>
                        <option value="perBrew4">110mg Caffeine</option>
                        <option value="perBrew5">120mg Caffeine</option>
                        <option value="perBrew6">130mg Caffeine</option>
                        <option value="perBrew7">140mg Caffeine</option>
                        <option value="perBrew8">150mg Caffeine</option>
                        <option value="perBrew9">160mg Caffeine</option>
                        <option value="perBrew10">170mg Caffeine</option>
                        <option value="perBrew11">180mg Caffeine</option>
                        <option value="perBrew12">190mg Caffeine</option>
                        <option value="perBrew13">200mg Caffeine</option>
                        <option value="perBrew14">210mg Caffeine</option>
                        <option value="perBrew15">220mg Caffeine</option>
                        <option value="perBrew16">230mg Caffeine</option>
                        <option value="perBrew17">240mg Caffeine</option>
                        <option value="perBrew18">250mg Caffeine</option>
                        <option value="perBrew19">260mg Caffeine</option>
                        <option value="perBrew20">270mg Caffeine</option>
                        <option value="perBrew21">280mg Caffeine</option>
                        <option value="perBrew22">290mg Caffeine</option>
                        <option value="perBrew23">300mg Caffeine</option>
                        <option value="perBrew24">310mg Caffeine</option>
                        <option value="perBrew25">320mg Caffeine</option>
                        <option value="perBrew26">330mg Caffeine</option>
                        <option value="perBrew27">340mg Caffeine</option>
                        <option value="perBrew28">350mg Caffeine</option>
                        <option value="perBrew29">360mg Caffeine</option>
                        <option value="perBrew30">370mg Caffeine</option>
                        <option value="perBrew31">380mg Caffeine</option>
                        <option value="perBrew32">390mg Caffeine</option>
                        <option value="perBrew33">400mg Caffeine</option>
                        <option value="perBrew34">410mg Caffeine</option>
                        <option value="perBrew35">420mg Caffeine</option>
                        <option value="perBrew36">430mg Caffeine</option>
                        <option value="perBrew37">440mg Caffeine</option>
                        <option value="perBrew38">450mg Caffeine</option>
                        <option value="perBrew39">460mg Caffeine</option>
                        <option value="perBrew40">470mg Caffeine</option>
                        <option value="perBrew41">480mg Caffeine</option>
                        <option value="perBrew42">490mg Caffeine</option>
                        <option value="perBrew43">500mg Caffeine</option>
                        <option value="perBrew44">510mg Caffeine</option>
                        <option value="perBrew45">520mg Caffeine</option>
                        <option value="perBrew46">530mg Caffeine</option>
                        <option value="perBrew47">540mg Caffeine</option>
                        <option value="perBrew48">550mg Caffeine</option>
                        <option value="perBrew49">560mg Caffeine</option>
                        <option value="perBrew50">570mg Caffeine</option>
                        <option value="perBrew51">580mg Caffeine</option>
                        <option value="perBrew52">590mg Caffeine</option>
                        <option value="perBrew53">600mg Caffeine</option>
                        <option value="perBrew54">610mg Caffeine</option>
                        <option value="perBrew55">620mg Caffeine</option>
                        <option value="perBrew56">630mg Caffeine</option>
                        <option value="perBrew57">640mg Caffeine</option>
                        <option value="perBrew58">650mg Caffeine</option>
                        <option value="perBrew59">660mg Caffeine</option>
                        <option value="perBrew60">670mg Caffeine</option>
                        <option value="perBrew61">680gm Caffeine</option>
                        <option value="perBrew62">690mg Caffeine</option>
                        <option value="perBrew63">700mg Caffeine</option>
                        <option value="perBrew64">710mg Caffeine</option>
                        <option value="perBrew65">720mg Caffeine</option>
                        <option value="perBrew66">730mg Caffeine</option>
                        <option value="perBrew67">740mg Caffeine</option>
                        <option value="perBrew68">750mg Caffeine</option>
                        <option value="perBrew69">760mg Caffeine</option>
                        <option value="perBrew70">770mg Caffeine</option>
                        <option value="perBrew71">780mg Caffeine</option>
                        <option value="perBrew72">790mg Caffeine</option>
                        <option value="perBrew73">800mg Caffeine</option>
                    </select>
                    <label for="totalBrew">Total Caffeine Count:</label>
                    <input type="text" name="totalBrew" id="totalBrew" placeholder="Enter Total Caffeine Count...">
                    <label for="genBrew">Caffeine Beberage Category</label>
                    <select name="genBrew" id="genBrew" class="genBrew">
                        <option value="genBrew0">Make A selection</option>
                        <option value="null">N/A</option>
                        <option value="genBrew1">Oleato</option>
                        <option value="genBrew2">Hot Coffees</option>
                        <option value="genBrew3">Frappuccino Blended Beverages </option>
                        <option value="genBrew4">Cold Coffees</option>
                    </select>
                    <label for="oleato">Oleato Menu:</label>
                    <select name="oleato" id="oleato" class="oleato">
                        <option value="default">Make A selection</option>
                        <option value="null">N/A</option>
                        <option value="oleato1">Oleato Gingerbread  Oatmilk Latte</option>
                        <option value="oleato2">Oleato Golden Foam Cold Brew</option>
                        <option value="oleato3">Oleato Caffe Latte With Oatmilk</option>
                        <option value="oleato4">Oleato Iced Shaken Espresso With Oatmilk & Toffeenut</option>
                        <option value="oleato5">Ice Chai Tea Latte with Oleato Golden Foam</option>
                        <option value="oleato6">Ice Matcha Tea Latte With Oleato Golden Foam</option>
                        <option value="oleato7">Paradise Drink Starbucks Refreshers Beverage With Oleato Golden Foam</option>
                        <option value="oleato8">Dragon Drink Starbucks Refreshers Beverage With Oleato Golden Foam</option>
                    </select>
                    <label for="oleato">Hot Coffee Menu:</label>
                    <select name="hotcoffee" id="hotcoffee" class="hotcoffee">
                        <option value="default">Make A selection</option>
                        <option value="null">N/A</option>
                        <option value="hotcoffee1">Caffe Americano</option>
                        <option value="hotcoffees2">Featured Blonde Roast</option>
                        <option value="hotcoffees3">Featured Medium Roast Pike Place Roast</option>
                        <option value="hotcoffee4">Featured Dark Roast</option>
                        <option value="hotcoffee5">Featured Decaf Roast Decaf Pike Place Roast</option>
                        <option value="hotcoffee6">Christmas Blonde Roast Clover Vertica Brewed Coffee</option>
                        <option value="hotcoffee7">Featured Medium Roast Pike Place Roast</option>
                        <option value="hotcoffee8">Featured Dark Roast Caffe Verona</option>
                        <option value="hotcoffee9">Featured Decaf Roast Decaf Pike Place Roast</option>
                        <option value="hotcoffee10">Caffee Misto</option>
                        <option value="hotcoffee11">Clover Vertica Christmas Blend</option>
                        <option value="hotcoffee12">Starbucs Reserv Christmas 2023 Clover</option>
                        <option value="hotcoffee13">Clover Malawi Sable Farms Starbucks Reserve</option>
                        <option value="hotcoffee13">Clover Starbucks Reserve Vietnam Da Lat</option>
                        <option value="hotcoffee13">Clover Malawi Sable Farms Starbucks Reserve</option>
                        <option value="hotcoffee13">Cappuccino</option>
                        <option value="hotcoffee13">Espresso Con Panna</option>
                        <option value="hotcoffee13">Flat White</option>
                        <option value="hotcoffee13">Honey Almondmilk Flat White</option>
                        <option value="hotcoffee13">Gingerbread Latte</option>
                        <option value="hotcoffee13">Sugar Cookie Almondmilk Latte</option>
                        <option value="hotcoffee13">Caramel Brulee Latte</option>
                        <option value="hotcoffee13">Chestnut Praline Latte</option>
                        <option value="hotcoffee13">Pumpkin Spice Latte</option>
                        <option value="hotcoffee13">Oleato Caffee Latte With Oatmilk</option>
                        <option value="hotcoffee13"> Caffe Latte</option>
                        <option value="hotcoffee13">Cinnamon Dolce Latte</option>
                        <option value="hotcoffee13">Starbucks Reserve Latte</option>
                        <option value="hotcoffee13">Starbucks Reserve Hazelnut Bianco Latte</option>
                        <option value="hotcoffee13">Starbucks Blonde Vanilla Latte</option>
                        <option value="hotcoffee13">Apple Crisp</option>
                        <option value="hotcoffee13">Caramel Macchiato</option>
                        <option value="hotcoffee13">Espresso Macchiato</option>
                        <option value="hotcoffee13">Peppermint Mocha</option>
                        <option value="hotcoffee13">Peppermint White Chocolate Mocha</option>
                        <option value="hotcoffee13">Caffe Mocha</option>
                        <option value="hotcoffee13">Starbucks Reserve Dark Chocolate Mocha</option>
                        <option value="hotcoffee13">White Chocolate Mocha</option>
                    </select>
                    <label for="frappuccino">Frappuccino Menu:</label>
                    <select name="frapuccino" id="frappuccino" class="frappuccino">
                        <option value="default">Make A selection</option>
                        <option value="null">N/A</option>
                        <option value="frapuccino1">Sugar Cookie Almondmilk Frappuccino Blended Beverage</option>
                        <option value="frapuccino2">Apple Crisp Oatmilk Frappuccino Blended Beverage</option>
                        <option value="frapuccino3">Pumpkin Spice Frappuccino Blended Beverage</option>
                        <option value="frapuccino4">Caramel Brulee Frappuccino Blended Beverage</option>
                        <option value="frapuccino5">Chestnut Praline Frappuccino Blended Beverage</option>
                        <option value="frapuccino6">Peppermint Mocha Frappuccino Blended Beverage</option>
                        <option value="frapuccino7">Peppermint White Chocolate Mocha Frappuccino Blended  Beverage</option>
                        <option value="frappuccino8">Mocha Cookie Crumble Frappuccino</option>
                        <option value="frapuccino9">Caramel Ribbon Crunch Frappuccino Blended Beverage</option>
                        <option value="frapuccino10">Espresso Frappuccino Blended Beverage</option>
                        <option value="frapuccino11">Caffe Vanilla Frappuccino Blended Beverage</option>
                        <option value="frappuccino12">Caramel Frappuccino Blended Beverage</option>
                        <option value="frapuccino13">Coffee Frappuccino Blended Beverage</option>
                        <option value="frapuccino14">Mocha Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Java Chip Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">White Chocolate Mocha Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Sugar Cookie ALmondmilk Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Apple Crisp Oatmilk Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Pumpkin Spice Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Caramel Brulee Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Chestnut Praline Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Peppermint Mocha Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Peppermint White Chocolate Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Chocolate Cookie Crumble Creme Frappuccino</option>
                        <option value="frapuccino15">Caramel Ribbon Crunch Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Strawberry Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Chai Creme Frappuccino</option>
                        <option value="frapuccino15">Double Chocolate Chip Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Matcha Creme Frappuccino Blended Beverage</option>
                        <option value="frapuccino15">Vanilla Bean Creme Frappuccino Blended Creme</option>
                        <option value="frapuccino15">White Chocolate Creme Frappuccino Blended Beverage</option>
                    </select>
                    <label for="coldcoffee">Cold Coffee Menu:</label>
                    <select name="coldcoffee" id="coldcoffee" class="coldcoffee">
                        <option value="default">Make A selection</option>
                        <option value="null">N/A</option>
                        <option value="coldcoffee1">Pumpkin Cream Cold Brew</option>
                        <option value="coldcoffee2">Oleato Golden Foam Brew</option>
                        <option value="coldcoffee3">Cinnamon Caramel Cream Cold Brew</option>
                        <option value="coldcoffee4">Chocolate Cream Cold Brew</option>
                        <option value="coldcoffee5">Salted Caramel Cream Cold Brew</option>
                        <option value="coldcoffee6">Starbucks Reserve Cold Brew</option>
                        <option value="coldcoffee7">Starbucks Cold Brew Coffee</option>
                        <option value="coldcoffee8">Vanilla Sweet Cream Cold Brew</option>
                        <option value="coldcoffee9">Starbucks Cold Brew Coffee With Milk</option>
                        <option value="coldcoffee10">Cinnamon Caramel Cream Nitro Cold Brew</option>
                        <option value="coldcoffee11">Starbucks Reserve Nitro Cold Brew</option>
                        <option value="coldcoffee12">Nitro Cold Brew</option>
                        <option value="coldcoffee13">Vanilla Sweet Cream Nitro Cold Brew</option>
                        <option value="coldcoffee14">Iced Caffe Americano</option>
                        <option value="coldcoffee15">Iced Coffee</option>
                        <option value="coldcoffee16">Iced Coffee With Milk</option>
                        <option value="coldcoffee17">Iced Espresso</option>
                        <option value="coldcoffee18">Iced Apple Crisp Oatmilk Shaken Espresso</option>
                        <option value="coldcoffee19">Oleato Iced Shaken Espresso With Oatmilk & Toffenut</option>
                        <option value="coldcoffee20">Iced Toasted Vanilla Oatmilk Shaken Espresso</option>
                        <option value="coldcoffee21">Iced Brown Sugar Oatmilk Shaken Espresso</option>
                        <option value="coldcoffee22">Iced Shaken Espresso</option>
                        <option value="coldcoffee23">Iced Flat White</option>
                        <option value="coldcoffee24">Iced Honey Almondmilk Flat White</option>
                        <option value="coldcoffee25">Iced Gingerbread Lattle</option>
                        <option value="coldcoffee26">Iced Sugar Cookie Almondmilk Latte</option>
                        <option value="coldcoffee27">Iced Caramel Brulee Latte></option>
                        <option value="coldcoffee28">Iced Chestnut Praline Latte</option>
                        <option value="coldcoffee29">Iced Pumpkin Spice Latte</option>
                        <option value="coldcoffee30">Starbucks Reserve Iced Latte</option>
                        <option value="coldcoffee31">starbucks Reserve Iced Hazelnut Bianco Latte</option>
                        <option value="coldcoffee32">Iced Caffe Latte</option>
                        <option value="coldcoffee33">Iced Cinnamon Dolce Latte</option>
                        <option value="coldcoffee34">Iced Starbucks Blonde Vanilla Latte</option>
                        <option value="coldcoffee35">Iced Apple Crisp Oatmilk Macchiato</option>
                        <option value="coldcoffee36">Iced Caramel Macchiato</option>
                        <option value="coldcoffee37">Iced Peppermint Mocha</option>
                        <option value="coldcoffee38">Iced Peppermint Mocha</option>
                        <option value="coldcoffee39">Iced Peppermint White Chocolate Mocha</option>
                        <option value="coldcoffee40">Iced White Chocolate Mocha</option>
                        <option value="coldcoffee41">Iced Caffe Mocha</option>
                        <option value="coldcoffee42">Starbucks Reserve Iced Dark Chocolate Mocha</option>
                    </select>
                    <div>
                        <button type="submit" name="btn" id="btn" class="btn">Submit Java!</button>
                    </div>
            </form>
        </div>
    </main>

    <script src="App.js"></script>
    <script src="root.js"></script>
    <script src="sqlite3.py"></script>
    <script src="javascript.js"></script>
    <script src="bean.py"></script>
    <script src="python.py"></script>
    <script src="sql.js"></script>
</body>
</html>


App.php FILE


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="nav.css">
    <link rel="stylesheet" href="App.css">
    <title>REgistration Form</title>
</head>
<body>
    <header>
        <nav class="topnav">
            <a class="active" href="http://localhost/BeanCount/client/index.php">Home</a>
            <a href="http://localhost/BeanCount/client/App.php">Register</a>
            <a href="/client/beanCalculator.php">Bean Calculator</a>
            <a href="http://localhost/BeanCount/client/AppFormHandle.php">Handle Form</a>
          </nav> 
    </header>
    <main class="main-form">
        <form method="POST" class="form-container" id="form" action="/client/AppFormHandle.php" <?php echo $_SERVER["PHP_SELF"];?>>
            <br/><br/>
            <label for="fname">First Name</label><br/>
            <input type="text" name="fname" id="fname" class="fname" placeholder="First Name...">
            <br/>
            <label for="lname">Last Name</label><br/>
            <input type="text" name="lname" id="lname" class="lname" placeholder="Last Name...">
            <br/>
            <label for="newuser">User Name</label><br/>
            <input type="text" name="newuser" id="newuser" class="newuser" placeholder="username">
            <br/>
            <label for="email">Email</label><br/>
            <input type="email" name="email" id="email" class="email" placeholder="email...">
            <br/>
            <input type="radio" name="policy" id="policy" class="policy" name="policy">
            <label for="policy">policy agreement</label>
            <br><br/>
            <input type="submit" value="submit form" class="btn" id="btn">
        </form>
    </main>

    <script src="App.js"></script>
    <script src="root.js"></script>
    <script src="sqlite3.py"></script>
    <script src="javascript.js"></script>
    <script src="bean.py"></script>
    <script src="python.py"></script>
    <script src="sql.js"></script>
</body>
</html>


label for="username" class="label label-2">Enter your name:</label><br/>
<input type="text" name="username" id="username" class="username" placeholder="Enter your screen name..."><br/>