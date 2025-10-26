# Student Grievance System

## Overview
The Student Grievance System is a web-based application designed for the College of Engineering at Pamantasan ng Lungsod ng Maynila. This system allows students to submit grievances, view existing grievances, and manage their submissions efficiently.

## Technologies Used
- **Frontend**: Next.js with TypeScript
- **Backend**: Node.js with Express
- **Database**: Supabase
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Project Structure
The project is organized into three main directories: `frontend`, `backend`, and `supabase`.

### Frontend
- **`src/pages`**: Contains the main pages of the application.
- **`src/components`**: Contains reusable components such as Header, Footer, GrievanceForm, and GrievanceList.
- **`src/styles`**: Contains global CSS styles.
- **`src/lib`**: Contains the Supabase client for database interactions.
- **`src/types`**: Contains TypeScript types and interfaces.

### Backend
- **`src/routes`**: Contains the routes for handling grievances.
- **`src/controllers`**: Contains the logic for managing grievances.
- **`src/services`**: Contains services for interacting with the Supabase database.
- **`src/middleware`**: Contains authentication middleware.
- **`src/types`**: Contains TypeScript types and interfaces.

### Supabase
- **`migrations`**: Contains database migration files.
- **`functions`**: Contains serverless functions for additional backend logic.

## Getting Started

### Prerequisites
- Node.js
- npm
- Supabase account

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```
3. Navigate to the backend directory and install dependencies:
   ```
   cd ../backend
   npm install
   ```

### Environment Variables
Create a `.env` file in both the `frontend` and `backend` directories based on the `.env.example` file provided.

### Running the Application
- To run the frontend:
  ```
  cd frontend
  npm run dev
  ```
- To run the backend:
  ```
  cd backend
  npm run start
  ```

### Deployment
The application is set up for deployment on Vercel. Push your changes to the main branch, and the CI/CD pipeline will handle the deployment automatically.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.