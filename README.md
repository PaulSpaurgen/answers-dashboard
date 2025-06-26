# AnswersAI Frontend Take-Home Assessment

A modern data visualization platform built with React, TypeScript, and Firebase.

🔗 **[Live Demo](https://answers-dashboard.vercel.app/login)**

## ✅ Features Implemented

### Required Screens (3/3)
- **Dashboard Screen** - Interactive charts, KPI cards, and variables panel
- **Variable Editing Slide-Over** - Smooth animated slide-over for parameter adjustment
- **Details Screen** - Detailed data point information

### Required Interactions (3/3)
- **Slide-Over Variable Editing** - Framer Motion animations with form controls
- **Data Point Hover** - Interactive tooltips with vertical indicator lines
- **Variable Selection** - Hover states with contextual information

### Technical Stack ✅
- React 18+ with TypeScript
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Firebase Authentication (Email/Password + Google OAuth)
- Framer Motion animations
- Highcharts for data visualization

## 🚀 Quick Start

### Installation
```bash
git clone <repository-url>
cd answersai-frontend
npm install
```

### Environment Setup
Create `.env.local`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Firebase Setup
1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication → Email/Password and Google providers
3. Add config keys to `.env.local`

### Run
```bash
npm run dev
```
Visit `http://localhost:5173`

## 🏗 Architecture

### Key Components
- **Dashboard**: Interactive charts with hover tooltips and KPI cards
- **Variable Management**: Slide-over drawer with smooth animations
- **Authentication**: Firebase Auth with multiple providers
- **Responsive Design**: Desktop-first with mobile adaptations

### Tech Decisions
- **Redux Toolkit**: State management for assignment compliance
- **Framer Motion**: Complex animations (slide-over, accordions)
- **Highcharts**: Robust charting with interactive data points
- **Tailwind CSS**: Utility-first styling with custom breakpoints

## 🎯 Key Features

- Interactive line chart with hover tooltips and vertical indicators
- Smooth slide-over animations for variable editing
- Real-time authentication state management
- Responsive bento-style grid layout
- Protected routes with authentication guards
- Loading states and error handling

## ⚡ Performance & Security

- Code splitting with React Router
- Memoized chart calculations
- Environment variables for sensitive config
- Protected routes with auth checks
- Optimized re-renders with Redux selectors

## 📱 Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES2020+ features.

## ⏱ Development Time

**Total: ~12 hours**
- Setup & Firebase: 2h
- Dashboard: 4h  
- Auth & routing: 2h
- Animations: 3h
- Redux integration: 1h

## 🚀 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview build
npm run lint         # Run linter
```

**Built with ❤️ for AnswersAI**
