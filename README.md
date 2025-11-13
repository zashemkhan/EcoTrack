# EcoTrack — Sustainable Living Community

EcoTrack is a community platform where eco-conscious people discover and join sustainability challenges, share practical eco-tips, browse local green events, and track personal environmental impact. The platform focuses on measurable, community-driven progress toward a greener lifestyle.

## Live Site
[Insert Your Live Client URL Here]

## Features
- **Dynamic Challenges:** Browse ongoing challenges with details like category, duration, participants, and impact metrics.
- **User Progress Tracking:** Join challenges, update progress, and visualize your personal contribution to sustainability.
- **Community Tips & Events:** Access latest eco-friendly tips and upcoming local events dynamically fetched from the database.
- **Authentication:** Secure login and registration via Email/Password or Google. Protected routes ensure your data is safe.
- **Responsive & Modern UI:** Mobile-friendly design with consistent layout, navigation, and interactive elements.

## Pages & Routes
- `/` — Home (public)
- `/challenges` — Browse all challenges (public)
- `/challenges/:id` — Challenge detail (public)
- `/challenges/add` — Add new challenge (protected)
- `/challenges/join/:id` — Join a challenge (protected)
- `/my-activities` — User dashboard (protected)
- `/my-activities/:id` — Detailed progress (protected)
- `/login` — Login (public)
- `/register` — Register (public)
- `/forgot-password` — Forgot Password (public link only)
- `/*` — 404 Page

## Technologies Used
- **Client:** React, React Router, Firebase Auth, Axios
- **Server:** Node.js, Express, MongoDB
- **Hosting:** Netlify / Vercel (client & server)
- **Notifications:** Styled toast messages (no alert())
- **UI & Styling:** Responsive layouts, skeleton loaders, consistent cards, modern buttons

## API Endpoints
- **Challenges**
  - `GET /api/challenges` — List with filters
  - `GET /api/challenges/:id` — Challenge details
  - `POST /api/challenges` — Create challenge
  - `PATCH /api/challenges/:id` — Update challenge (owner/admin)
  - `DELETE /api/challenges/:id` — Delete challenge (owner/admin)
  - `POST /api/challenges/join/:id` — Join challenge (protected)

- **UserChallenges**
  - Track individual user challenge progress with status and timestamps.

- **Tips & Events**
  - Dynamic retrieval for homepage display.

## Project Highlights
- Advanced filtering with MongoDB operators (`$in`, `$gte`, `$lte`)
- Progress tracking per user for each challenge
- Real-time community statistics (CO₂ saved, plastic reduced, etc.)
- Responsive and accessible design for all devices
- Secure environment variables and protected server routes

---

> Built with care for a sustainable future. 🌱
