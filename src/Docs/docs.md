Note: Today is the 20th of November and I began this project around the 10th of November.
Technology: HTML5, CSS3, JavaScript, Python, MySQLite3

Issues:
1. link broken can't switch between the different HTML files available.
2. backend with Python and MySQL can't download the required pip file for the connection to bridge MySQL with the Python file called beans.py
3. The client side with the layout of the form on the home page and the file for the bean calculator isn't presentable. Need to fix the style of the layout of the pages.
Database issues:
1. When downloaded a pip python connection I recieve an error message. Cant use the pip method.
2. CANCEL / Going with PHP, MySQL & Apache for the backend...
3. Backend Service: https://app.xano.com/login
3a. Backend Service: https://supabase.com (Leaning in this direction)
4. This tool is similar to Bootstrap: https://boxicons.com/usage called Boxicons
5. Wall paper background for both login and calculator page was found at this site: (located from a Google search result)
6. YouTube: video: How To Make A Website With Login And Register | HTML CSS & JavaScript (Ludiflex)
https://playgroundai.com/post/ultra-realistic-photo-of-night-the-super-large-coffee-shop--clmabl7g3077as6014rcipwie
NOTE: image isn't under any copy right laws.

NOTE: Thinking about using Maps for cupSize for the if else statement or I may re-write as a switch statement
December 20th, 2023...

const cupSize = new Map([
  [8, {mgs: 75} ],
  [12, {mgs: 150} ],
  [16, {mgs: 225} ],
  [20, {mgs: 300} ],
]);

console.log(cupSize);

NOTE: Second solution, use .concat() to combine elements from 2 separate arrays.
December 20th, 2023...




/*STARBUCKS COFFEE:  Cup-size: "8, 12, 16, 20"; Total-cups: "1, 2, 3, 4, 5, 6";

resource for PHP & MySQL Database Create Connection: (11/29/2023)
https://www.raghwendra.com/blog/how-to-connect-html-to-database-with-mysql-using-php-example/

resource for launching TypeScript to your project:
https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
npm command:
npm install -g typescript

SQL (Tutorial) -- YOUTUBE: Code Bro.

Sudo-Code:


Table To Be Used For My Coffee Measurements (StarBucks) Caffe Americano

<table>(OUTPUT FIELD)
    id = "bean_math_cupSize"; (size)
    id = "espresso_result"; (espresso)
    id = "total_mg"; (total mgs)
</table>
<form>(INPUT FIELD)
    id = "size"; (size)
    id = "espresso"; (espresso)
    id = "daily"; (total)
</form>


Espresso: 1-shot = 75mgs
8.0z = Short (75mg Standard(1-shot, Espresso))
12.oz = Tall (150mg Standard(2-shots, Espresso))
16.oz = Grande (225mg Standard(3-shots, Espresso))
20.oz = Venti (300mg Standard(4-shots, Espresso))

CUP-SIZE || ESPRESSO-SHOTS(standard -- versus -- extra shots) || TOTAL-CUPS(SERVING) || TOTAL-CAFFEINE
Short -- 1 (shot) -- ??? -- ???
Tall -- 2 (shot) -- ??? -- ???
grande
venti

CODE FOR PUSHING TO GITHUB:




