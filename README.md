# React and Axios Product Search

This project is a simple React application that fetches product data from an Express.js backend using Axios. It allows users to search for products dynamically while implementing features like loading states, error handling, and request cancellation to improve performance.

## Features

- **React Frontend**: Displays a list of products fetched from the backend.
- **Axios for API Requests**: Fetches product data with search functionality.
- **Error Handling**: Displays an error message in case of API failure.
- **Loading State**: Shows a loading message while fetching data.
- **Request Cancellation**: Uses `AbortController` to cancel previous API requests on search input change.
- **Proxy Setup**: Vite proxy is configured to route API requests to the backend.

## Installation and Setup

### Prerequisites
- Node.js installed

### Steps to Run
1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Start the Backend Server**
   ```bash
   node server.js
   ```
   The backend will run on `http://localhost:3000`.

4. **Start the Frontend**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port).

## Communication Pathway

### 1. Frontend (React) Makes an API Request
- The `App.jsx` component sends an API request to fetch products from the backend.
- When the user types in the search input, a new API request is made with the search query.
- If a previous request is still pending, it is canceled using `AbortController`.

### 2. Backend (Express) Handles the Request
- The backend listens for `GET /api/products` requests.
- If a search query is provided, it filters products and returns the matching ones.
- Otherwise, it returns the full list of products with a simulated delay of 3 seconds.

### 3. Frontend Processes the Response
- If the request is successful, the product list is updated.
- If there is an error, an error message is displayed.
- If the request is pending, a loading message is shown.

## Project Structure

```
📦 Project Root
├── 📂 frontend
│   ├── App.jsx      # Main React component
│   ├── vite.config.js # Vite proxy configuration
│   ├── package.json # Frontend dependencies
├── 📂 backend
│   ├── server.js    # Express backend with API routes
│   ├── package.json # Backend dependencies
└── README.md        # Project documentation
```

## Technologies Used

- **Frontend**: React.js, Axios, Vite
- **Backend**: Express.js (Node.js)
- **Proxying**: Vite proxy for seamless API calls
