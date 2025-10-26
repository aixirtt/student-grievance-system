# Student Grievance System - Backend

This is the backend for the Student Grievance System for Pamantasan ng Lungsod ng Maynila's College of Engineering. The backend is built using Node.js and Express, and it interacts with a Supabase database for data storage and retrieval.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application where the Express app is initialized.
  - **routes/**: Contains route definitions for the application.
    - **grievances.ts**: Defines routes related to grievances.
  - **controllers/**: Contains the logic for handling requests and responses.
    - **grievancesController.ts**: Handles the logic for creating, retrieving, updating, and deleting grievances.
  - **services/**: Contains services for interacting with external systems.
    - **supabaseService.ts**: Functions for CRUD operations with Supabase.
  - **middleware/**: Contains middleware functions for authentication and authorization.
    - **auth.ts**: Middleware for handling authentication.
  - **types/**: Contains TypeScript types and interfaces used throughout the backend.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd plm-grievance-system/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file based on the `.env.example` file provided.

## Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- **GET /grievances**: Retrieve a list of grievances.
- **POST /grievances**: Submit a new grievance.
- **GET /grievances/:id**: Retrieve a specific grievance by ID.
- **PUT /grievances/:id**: Update a specific grievance by ID.
- **DELETE /grievances/:id**: Delete a specific grievance by ID.

## Deployment

The backend is set up for deployment on Vercel. Ensure that the necessary environment variables are configured in the Vercel dashboard.

## CI/CD Integration

Continuous Integration and Continuous Deployment (CI/CD) workflows are defined in the `.github/workflows` directory to automate testing and deployment processes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.