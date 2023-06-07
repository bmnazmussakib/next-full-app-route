# Full Stack Next.js Blog App

This is a full-stack blog application built with Next.js, MongoDB, Express.js, and Node.js.

## Features

- User authentication and authorization
- Create, read, update, and delete blog posts
- Commenting system for blog posts
- Responsive design for mobile and desktop

## Technologies Used

- Next.js: A React framework for server-side rendering and static site generation.
- MongoDB: A NoSQL database for storing blog posts and user data.
- Express.js: A web application framework for building RESTful APIs.
- Node.js: A JavaScript runtime environment for server-side development.
- Tailwind CSS: A utility-first CSS framework for styling the application.
- JWT (JSON Web Tokens): Used for user authentication and authorization.
- Axios: A promise-based HTTP client for making API requests.
- Formik: A form library for managing form state and validation.
- Yup: A JavaScript schema validation library for form validation.

## Getting Started

### Prerequisites

- Node.js (version 12 or above)
- MongoDB (running instance or MongoDB Atlas account)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/full-stack-nextjs-blog.git
```

2. Install the dependencies:

```bash
cd full-stack-nextjs-blog
npm install
```

3. Set up environment variables:

- Node.js (version 12 or above)
- MongoDB (running instance or MongoDB Atlas account)

```bash
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit http://localhost:3000 to access the application.

## Folder Structure

- `/components`: Contains reusable React components used throughout the application.
- `/pages`: Contains Next.js pages that define the routes and server-side rendering logic.
- `/api`: Defines the API routes for the server-side functions.
- `/models`: Defines the MongoDB data models.
- `/utils`: Contains utility functions and helper modules.
- `/public`: Stores static assets such as images and CSS files.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
