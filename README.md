Exam Angular – Baha Essid

This project is an Angular application for managing posts. It demonstrates component-based architecture, services, routing, and the use of Bootstrap for styling.

📁 Project Structure
exam-bahaessid/
│
├─ app/
│  ├─ components/
│  │  ├─ post-list/      # Component for displaying list of posts
│  │  └─ login/          # Component for login page
│  ├─ models/
│  │  └─ post.ts         # Defines Post type
│  ├─ services/
│  │  ├─ post.ts         # Service providing posts data and CRUD operations
│  │  └─ post.spec.ts    # Unit test for PostService
│  ├─ app.html           # Root template including navbar and router-outlet
│  ├─ app.ts             # Root component (App) configuration
│  └─ app.config.ts      # Router configuration (if used)
│
├─ package.json
└─ README.md

🛠 Features Implemented

Components

AppComponent → Contains navbar and main container.

PostListComponent → Displays posts using Bootstrap Accordion.

LoginComponent → Shows "Login Page".

Routing

Home page (/) → PostListComponent

Login page (/login) → LoginComponent

Implemented with RouterOutlet and Angular standalone components.

Services

PostService → Provides a list of posts and methods to create, update, delete posts.

PostService is injectable and used by PostListComponent.

Models

Post → TypeScript type defining post structure (id, titre, contenu).

Styling

Uses Bootstrap 5 for responsive layout and Accordion UI.

Unit Testing

post.spec.ts → Tests the PostService to ensure it is correctly created.

🚀 How to Run the Project

Clone the repository

git clone https://github.com/BahaEssid1/exam-bahaessid.git
cd exam-bahaessid


Install dependencies

npm install


Run the application

ng serve


Open your browser at http://localhost:4200.

🔗 Notes

Front-end and back-end integration (REST API) is not implemented yet.

Posts are currently hardcoded in PostService.

Navigation between Home and Login pages works through Angular routing.


👨‍💻 Author

Baha Essid – License Degree in IT – DevOps & Cloud Master Student
