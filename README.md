Product Management Application (MERN Stack):
Project Overview:
SAC (Smart Accessories Collection) is a full-stack Product Management Application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application is designed specifically for managing different types of bags such as school bags, travel bags, handbags, laptop bags, trolley bags, backpacks, hiking bags, and duffel bags.The primary objective of this project is to demonstrate the complete CRUD (Create, Read, Update, Delete) workflow by integrating a React frontend with a Node.js and Express backend, while storing and managing product information in MongoDB.

Backend Development:
The backend is developed using Node.js and Express.js. Express is responsible for creating REST APIs, while MongoDB stores all the product details.The backend follows a modular folder structure where each folder has a separate responsibility.

Database Connection:
The database connection is handled inside config/db.js.This file establishes the connection between the application and MongoDB using Mongoose.
Instead of writing the connection logic inside the server file, a separate module is created so that the code remains clean and reusable.The MongoDB connection string is stored inside the .env file to improve security.

Environment Variables:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/sac
The .env file stores sensitive information such as the database connection string and application port.Using environment variables prevents confidential information from being directly written into the source code.

Controller:
The controller contains the business logic of the application.The controller receives data from the frontend.It performs database operations such as
1)Creating a product
2)Retrieving products
3)Updating products
4)Deleting products
Separating the controller from routes makes the project easier to understand and maintain.

Routes:
Routes define the API endpoints.Whenever the frontend sends a request, Express matches the corresponding route and calls the appropriate controller function.

Server:
The server initializes Express, connects MongoDB, enables CORS for frontend communication, parses JSON requests, and registers all product-related routes.

Frontend Development:
The frontend is developed using React.js.React provides a component-based architecture, allowing the application to be divided into reusable components.
Axios is used to communicate with the backend.Instead of writing the complete URL repeatedly, an Axios instance is created.Now every request becomes making the code cleaner and easier to maintain.

CRUD Operations:
1)Create
await API.post("/",product);
A POST request sends product information to the backend.The backend stores it inside MongoDB.
2)Read
const res = await API.get();
The GET request retrieves all products from MongoDB.React displays them immediately.

3)Update
await API.put(`/${product._id}`,product);
The PUT request updates an existing product.MongoDB modifies only the selected document.
4)Delete
await API.delete(`/${id}`);
The DELETE request removes the selected product from MongoDB.After deletion, the updated list is displayed automatically.

Conclusion:
SAC (Smart Accessories Collection) is a complete MERN Stack Product Management Application that demonstrates full-stack development by integrating React, Node.js, Express.js, and MongoDB. The project follows a clean modular architecture where each component has a specific responsibility. REST APIs handle CRUD operations, Axios enables communication between the frontend and backend, and MongoDB stores all bag-related product information. The application provides a responsive and user-friendly interface while ensuring proper validation, error handling, and real-time updates. Through this project, I gained practical experience in API development, database management, React state management, and full-stack application architecture.
