To Start the Project :-

Step 1 :-

clone the code using command :-
git clone https://github.com/predecode/ecommerce_backend.git

Step 2 :-
cd ecommerce_backend

Step 3 :-
npm install

Step 4 :-
npm start

This project is the backend of an ecommerce application which contains the following features :-

1. User Login/Signup
2. Admin Login/Signup
3. JWT Authentication for required api's.
4. Add/Fetch Categories.
5. Add/Fetch Products.

Discription of node packages used in the project :-

1. "express": "^4.17.1" => The Express philosophy is to provide small, robust tooling for HTTP servers,
   making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.

2. "express-validator": "^6.12.0" => It is used for Validating the request params.

3. "mongoose": "^5.12.14" => It is used for the MongoDB related stuffs. For more info refer the docs : https://mongoosejs.com/

4. "nodemon": "^2.0.7" => nodemon is a tool that helps develop node.js based applications by
   automatically restarting the node application when file changes in the directory are detected.

5. "dotenv": "^10.0.0" => It is used to read variables from the .env file.

6. "bcrypt": "^5.0.1" => It is used for the password encryption and decryption. For more info visit :
   https://www.npmjs.com/package/bcrypt

7. "slugify": "^1.5.3" => Used to slugify data.

8. "multer": "^1.4.2" => Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
   NOTE: Multer will not process any form which is not multipart (multipart/form-data).

   Instead of this you can also use https://www.npmjs.com/package/formidable package.

9. "nanoid": "^3.1.23" => A tiny, secure, URL-friendly, unique string ID generator for JavaScript.
