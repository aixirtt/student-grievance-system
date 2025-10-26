# Student Grievance System - Frontend

This project is a web-based Student Grievance System for the College of Engineering at Pamantasan ng Lungsod ng Maynila. It allows students to submit grievances, view existing grievances, and manage their submissions.

## Technologies Used

- **Frontend**: Next.js, TypeScript, React
- **Backend**: Node.js, Express
- **Database**: Supabase
- **Deployment**: Vercel

## Project Structure

```
frontend/
├── package.json          # NPM configuration for frontend
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── src/
    ├── pages/            # Next.js pages
    │   ├── _app.tsx      # Custom App component
    │   ├── index.tsx     # Landing page
    │   └── grievances/    # Grievance-related pages
    │       ├── index.tsx  # List of grievances
    │       └── [id].tsx   # Grievance details
    ├── components/        # React components
    │   ├── Header.tsx     # Header component
    │   ├── Footer.tsx     # Footer component
    │   ├── GrievanceForm.tsx # Form for submitting grievances
    │   └── GrievanceList.tsx # List of grievances component
    ├── styles/            # Global styles
    │   └── globals.css    # Global CSS
    ├── lib/               # Library files
    │   └── supabaseClient.ts # Supabase client initialization
    └── types/             # TypeScript types
        └── index.ts       # Type definitions
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd plm-grievance-system/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.