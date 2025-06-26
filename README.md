# AnswersAI Frontend Take-Home Assessment

A modern data visualization platform built with React, TypeScript, and Firebase.

## 🚀 Features Implemented

### ✅ Required Screens (3/3)
1. **Dashboard Screen** - Interactive data visualization with charts, KPI cards, and variables panel
2. **Variable Editing Slide-Over** - Smooth slide-over card for adjusting visualization parameters
3. **Details Screen** - Detailed information display for specific data points

### ✅ Required Interactions (3/3)
1. **Slide-Over Variable Editing** - Smooth Framer Motion animations with form controls
2. **Data Point Hover** - Interactive tooltips with fade-in animations and vertical indicator lines
3. **Variable Selection** - Hover states with contextual information and active/inactive states

### ✅ Technical Requirements
- **React 18+** with TypeScript
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Firebase Authentication** with email/password and Google OAuth
- **Framer Motion** for smooth animations
- **Highcharts** for data visualization

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS v4
- **Authentication**: Firebase Auth
- **Charts**: Highcharts React
- **Animations**: Framer Motion
- **Routing**: React Router DOM

## 📦 Installation & Setup

### Prerequisites
- Node.js v16+ 
- npm or yarn
- Firebase project (for authentication)

### 1. Clone and Install
```bash
git clone <repository-url>
cd answersai-frontend
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication with Email/Password and Google providers
3. Copy your config keys to `.env.local`

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173`

## 📱 Responsive Design

- **Desktop-first** approach as specified
- **Tablet** adaptations with proper breakpoints
- **Mobile** responsive with collapsible navigation
- **Custom breakpoints**: sm, md, lg, xl

## 🎨 Component Architecture

### Reusable Components
- `Button` - Multi-variant button component
- `Input` - Form input with icon support
- `Drawer` - Slide-over panel with animations
- `LoadingSpinner` - Loading states
- `Label` - Variable selection labels
- `KPICard` - Dashboard metric cards
- `Accordion` - Collapsible content sections

### Page Components
- `Home` - Main dashboard layout
- `Login` - Authentication screen
- `Details` - Data point detail view

### Feature Components
- `HomeGraphsection` - Chart and KPI layout
- `GraphBox` - Highcharts integration with interactions
- `HomeEditVariablesComponent` - Variable management
- `Nav` - Navigation sidebar

## 🔧 Technical Decisions & Trade-offs

### State Management
- **Redux Toolkit** chosen for assignment compliance
- **Firebase Auth state** integrated with Redux
- **Local component state** for UI-specific interactions
- **Minimal boilerplate** with RTK slices

### Animations
- **Framer Motion** for complex animations (slide-over, accordions)
- **CSS transitions** for simple hover effects
- **Performance optimized** with `AnimatePresence`

### Data Visualization
- **Highcharts** for robust charting capabilities
- **Custom tooltip** implementation
- **Responsive charts** with window resize handling
- **Interactive data points** with hover states

### Authentication
- **Firebase Auth** for production-ready security
- **Multiple providers** (Email/Password, Google OAuth)
- **Protected routes** with authentication guards
- **Persistent sessions** across browser refreshes

## 🎯 Features & Interactions

### Dashboard
- Interactive line chart with hover tooltips
- KPI cards with real-time data
- Variables panel with selection states
- Responsive bento-style grid layout

### Variable Management
- Slide-over drawer with smooth animations
- Hover descriptions for decision support
- Active/inactive state management
- Accordion-organized variable categories

### Data Interactions
- Hover tooltips with data point details
- Vertical indicator lines on chart hover
- Smooth fade-in/out animations
- Click navigation to detail screens

## 🧪 Testing & Edge Cases

### Handled Edge Cases
- **Authentication errors** with user-friendly messages
- **Loading states** throughout the application
- **Network failures** with graceful degradation
- **Invalid data** with fallback displays
- **Responsive breakpoints** across all device sizes

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features with Vite bundling
- CSS Grid and Flexbox for layouts

## ⚡ Performance Optimizations

- **Code splitting** with React Router
- **Lazy loading** for non-critical components
- **Memoized calculations** in chart components
- **Optimized re-renders** with Redux selectors
- **Asset optimization** with Vite bundling

## 🔒 Security Considerations

- **Environment variables** for sensitive config
- **Firebase Security Rules** (recommended for production)
- **Protected routes** with authentication checks
- **Input validation** on form submissions

## 🚧 Known Limitations

1. **Demo data only** - Uses static/mock data for visualization
2. **Limited chart types** - Currently supports line charts only
3. **Basic error handling** - Could be enhanced with retry mechanisms
4. **No offline support** - Requires internet connection

## ⏱ Time Spent

**Total: ~12 hours**
- Initial setup & Firebase: 2 hours
- Dashboard implementation: 4 hours  
- Authentication & routing: 2 hours
- Animations & interactions: 3 hours
- Redux integration: 1 hour

## 🚀 Future Enhancements

- [ ] Real-time data integration
- [ ] Additional chart types (bar, pie, scatter)
- [ ] Advanced filtering and search
- [ ] Data export functionality
- [ ] Offline support with service workers
- [ ] Advanced error boundaries
- [ ] Unit and integration tests

## 📄 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```


**Built with ❤️ for AnswersAI**
