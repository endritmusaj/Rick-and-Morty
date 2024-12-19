Software Engineering Assignment - Endrit Musaj

#Project Description

This project is a React.js and Tailwind CSS application that uses GraphQL to fetch data. The application displays a list of characters and allows filtering and sorting based on various criteria (e.g., by name or origin).

#Technologies Used

Frontend: React.js
CSS: Tailwind CSS
GraphQL: Used to fetch data from an API
Other Packages and Libraries: react-infinite-scroll-component, @apollo/client

#Setup Instructions

1. Clone the repository:
Open Git Bash and run:
git clone https://github.com/endritmusaj/rick-and-morty.git  
cd rick-and-morty  

2. Install dependencies:
npx create-react-app .  
npm install @apollo/client graphql  
npm install tailwindcss  
npx tailwindcss init  

3. Prepare and start the application:
npm start  
The application will open at http://localhost:3000.

#Usage

Within the application, you can:

Filter characters by status and species.
Sort characters by name or origin.
View details for each character, Character Name, Status, Species, Gender, and Origin.
Switch between English and German languages