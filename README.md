# MERN Todo Website  

This is a simple **MERN Todo Website** application that allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of todos. It’s a lightweight project to demonstrate the integration of a full-stack application using the MERN stack.  

## 📌 Features  

- **Add Todos**: Easily add tasks to your list.  
- **Edit Todos**: Modify tasks as needed.  
- **Delete Todos**: Remove completed or unnecessary tasks.  
- **Mark as Complete**: Mark tasks as done or undone.  
- **Persistent Storage**: Todos are saved in a MongoDB database.  

## 🛠️ Technologies Used  

- **Frontend**:  
  - React.js  
  - Axios (for API calls)  
  - CSS Modules / TailwindCSS (for styling)  

- **Backend**:  
  - Node.js  
  - Express.js  
  - MongoDB (NoSQL database)  
  - Mongoose (for database interactions)  

## 🚀 Getting Started  

### Prerequisites  

Ensure you have the following installed:  
- Node.js (v14 or higher)  
- MongoDB (local or cloud)  
- npm or yarn  

### Installation  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/abhishekboadgurjar/mern-todo.git  
   cd mern-todo  
   ```  

2. **Install dependencies**:  
   - Backend:  
     ```bash  
     cd server  
     npm install  
     ```  
   - Frontend:  
     ```bash  
     cd client  
     npm install  
     ```  

3. **Set up environment variables**:  
   - Create a `.env` file in the `server` directory with the following:  
     ```env  
     PORT=5000  
     MONGO_URI=mongodb://localhost:27017/mern-todo  
     ```  

4. **Start the application**:  
   - Backend:  
     ```bash  
     cd server  
     npm start  
     ```  
   - Frontend:  
     ```bash  
     cd client  
     npm start  
     ```  

5. Open your browser and navigate to `http://localhost:3000`.  

## 📂 Project Structure  

### Backend (`/server`)  
- **Routes**: API endpoints for managing todos (`GET`, `POST`, `PUT`, `DELETE`).  
- **Models**: Mongoose schema for Todo items.  
- **Controllers**: Logic for handling CRUD operations.  

### Frontend (`/client`)  
- **Components**: Modular React components for the Todo list, form, and individual items.  
- **Pages**: Main Todo page displaying all functionalities.  
- **Services**: API calls to interact with the backend.  

## 🌟 API Endpoints  

- **GET /api/todos**: Fetch all todos.  
- **POST /api/todos**: Add a new todo.  
- **PUT /api/todos/:id**: Update an existing todo.  
- **DELETE /api/todos/:id**: Delete a todo.  


## 🤝 Contributing  

Contributions are welcome! Follow these steps:  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m 'Add feature'`).  
4. Push to the branch (`git push origin feature-name`).  
5. Open a pull request.  


## 📧 Contact  

- **GitHub**: [abhishekboadgurjar](https://github.com/abhishekboadgurjar)  
