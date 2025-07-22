# AI Ticket Management System

A smart support ticket system that uses AI to automatically assign tickets to the right team members.

## What does it do?

- **Users** create support tickets
- **AI** analyzes the ticket and finds the best person to solve it
- **Team members** get email notifications when assigned tickets
- **Everyone** can track ticket progress

## How it works

1. User creates a ticket describing their problem
2. AI reads the ticket and understands what skills are needed
3. System finds a team member with those skills
4. Team member gets an email notification
5. Team member solves the ticket

## Technology Used

**Backend (Server)**
- Node.js with Express
- MongoDB database
- Google Gemini AI
- Email notifications

**Frontend (Website)**
- React for the user interface
- Modern styling with Tailwind CSS

## Setup Instructions

### 1. Install Backend
```bash
cd ai-ticket-assistant
npm install
```

### 2. Create Environment File
Create a `.env` file in `ai-ticket-assistant` folder:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/ticket-system
JWT_SECRET=your-secret-key
GEMINI_API_KEY=your-gemini-key
MAILTRAP_SMTP_HOST=smtp.mailtrap.io
MAILTRAP_SMTP_PORT=587
MAILTRAP_SMTP_USER=your-email-user
MAILTRAP_SMTP_PASS=your-email-password
```

### 3. Install Frontend
```bash
cd ai-ticket-frontend
npm install
```

### 4. Start Everything
```bash
# Start backend server
cd ai-ticket-assistant
npm run dev

# Start AI processing (new terminal)
cd ai-ticket-assistant
npm run inngest-dev

# Start frontend (new terminal)
cd ai-ticket-frontend
npm run dev
```

## User Types

**Regular Users**
- Create tickets
- View their own tickets
- See ticket status

**Moderators**
- Get assigned tickets based on their skills
- Can view and update any ticket
- Receive email notifications

**Admins**
- Can see all tickets
- Manage users
- Handle tickets when no moderator is available

## API Endpoints

**User Authentication**
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login

**Tickets**
- `GET /api/tickets/getTickets` - Get tickets
- `POST /api/tickets` - Create new ticket
- `GET /api/tickets/:id` - Get specific ticket

## Key Features

- **Smart Assignment**: AI matches tickets with the right people
- **Email Alerts**: Automatic notifications when tickets are assigned
- **Role-Based Access**: Different permissions for different user types
- **Real-time Processing**: Tickets are processed immediately
- **Secure**: Password protection and user authentication

## Benefits

- Saves time by automatically assigning tickets
- Reduces human error in ticket assignment
- Faster problem resolution
- Better team productivity
- Easy to use interface

## Requirements

- Node.js (version 18 or higher)
- MongoDB database
- Google Gemini API key
- Email service for notifications