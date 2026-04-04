# Owen HVAC Corp. — Website v2

Full-stack HVAC company website with AI chatbot, bilingual support, and social integration.

**Stack:** React + Vite (frontend) | Node.js + Express (backend) | MongoDB Atlas | OpenAI GPT-4o

---

## Project Structure

```
├── frontend/          ← React SPA (Render Static Site, free)
│   ├── src/
│   │   ├── pages/     ← 11 page components
│   │   ├── components/← Navbar, Footer, ChatWidget, UI
│   │   └── i18n/      ← EN + ZH translations
│   └── public/images/
│
├── backend/           ← Express API (Render Web Service, $7/mo)
│   ├── routes/        ← chat, contact, admin
│   └── server.js
│
└── render.yaml        ← One-click deploy blueprint
```

## Quick Start (Local Dev)

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend (in another terminal)
cd backend && cp .env.example .env  # fill in your keys
npm install && npm run dev
```

## Deploy to Render

### 1. MongoDB Atlas (Free)
1. Go to https://cloud.mongodb.com
2. Create free M0 cluster
3. Create database user
4. Get connection string → save for step 3

### 2. Push to GitHub
```bash
git init && git add . && git commit -m "Owen HVAC v2"
git remote add origin <your-repo-url>
git push -u origin main
```

### 3. Deploy on Render
1. Go to https://dashboard.render.com
2. New → Blueprint → connect your repo
3. Render reads render.yaml → creates 2 services
4. Set environment variables for backend:
   - `MONGODB_URI` — from Atlas
   - `OPENAI_API_KEY` — from OpenAI
   - `ADMIN_SECRET` — pick any secure string
   - `SMTP_USER` / `SMTP_PASS` — Gmail credentials
5. Deploy

### 4. Custom Domain
- Frontend: Settings → Custom Domains → add `www.owenhvac.ca`
- Backend: Settings → Custom Domains → add `api.owenhvac.ca`

## Pages

| URL | Page |
|-----|------|
| `/` | Home (maintenance-first hero) |
| `/about` | About Us |
| `/services` | Services overview |
| `/services/maintenance` | HVAC Maintenance & Cleaning |
| `/services/heat-pump` | Heat Pump |
| `/services/electric-boiler` | Electric Boiler (new) |
| `/services/hrv` | HRV Ventilation |
| `/services/electrical` | Electrical |
| `/blog` | Blog |
| `/contact` | Contact + booking form |
| `/faq` | FAQ |

## API Endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/chat` | — | AI chat (proxies to OpenAI) |
| POST | `/api/contact` | — | Contact form submission |
| GET | `/api/admin/prompts` | Bearer | List prompts |
| POST | `/api/admin/prompts` | Bearer | Create prompt |
| PUT | `/api/admin/prompts/:id` | Bearer | Update prompt |
| GET | `/api/admin/contacts` | Bearer | Recent contacts |
| GET | `/api/admin/conversations` | Bearer | Recent chats |

## Monthly Cost

| Item | Cost |
|------|------|
| Render Static Site | Free |
| Render Web Service | $7/mo |
| MongoDB Atlas M0 | Free |
| OpenAI GPT-4o | ~$10-30/mo |
| **Total** | **$17-37/mo** |
