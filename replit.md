# Overview

This is a modern personal portfolio website for Shah Jahan Baloch, a Public Health Student, Community Builder, Digital Educator, and Health Advocate from Balochistan, Pakistan. The portfolio showcases his academic journey, professional skills, projects, certifications, testimonials, and blog posts through an interactive and responsive web interface.

The application is built with React and TypeScript, featuring a component-based architecture with smooth animations, intersection observers for performance optimization, and a secure backend integration for AI-powered features through Google's Gemini AI.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 19 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom brand colors and responsive design
- **Component Structure**: Modular component architecture with reusable Section wrapper
- **State Management**: Local React state using hooks (useState, useEffect)
- **Performance Optimization**: Custom intersection observer hook for lazy loading and animation triggers
- **Routing**: Single-page application with hash-based navigation and smooth scrolling

## Backend Architecture
- **Server**: Express.js backend running on port 3001
- **API Structure**: RESTful endpoints with `/api` prefix for health checks and AI integration
- **Security**: Environment-based configuration with secure API key handling
- **CORS**: Cross-origin resource sharing enabled for frontend-backend communication

## Development Setup
- **Build Tool**: Vite for fast development and optimized production builds
- **Proxy Configuration**: Development proxy routing frontend requests to backend API
- **TypeScript Configuration**: Strict type checking with modern ES2022 target
- **Hot Module Replacement**: Vite HMR for rapid development iteration

## Data Management
- **Content Structure**: Centralized content management through TypeScript interfaces
- **Type Safety**: Comprehensive type definitions for all data structures (NavLink, EducationItem, Project, Certificate, Workshop, BlogPost, Skill, Testimonial)
- **Static Assets**: Image assets served through external CDN (Picsum for placeholders)

## UI/UX Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animation System**: CSS transitions and custom keyframe animations
- **Modal System**: Image overlay functionality with keyboard navigation
- **Form Handling**: Contact form with validation and submission feedback
- **Typography**: Custom font configuration with Poppins (sans-serif) and Lora (serif)

# External Dependencies

## Core Framework Dependencies
- **React 19.1.1**: Main UI framework with latest features
- **React DOM 19.1.1**: DOM rendering for React components
- **TypeScript 5.8.2**: Static type checking and modern JavaScript features
- **Vite 6.2.0**: Build tool and development server

## Backend Dependencies
- **Express 5.1.0**: Web server framework for API endpoints
- **CORS 2.8.5**: Cross-origin resource sharing middleware
- **dotenv 17.2.2**: Environment variable management
- **@google/generative-ai 0.24.1**: Official Google Gemini AI SDK

## Development Tools
- **@types/node 22.14.0**: Node.js type definitions for TypeScript

## External Services
- **Google Gemini AI**: AI-powered chat functionality through secure backend integration
- **Tailwind CSS**: Utility-first CSS framework loaded via CDN
- **Google Fonts**: Typography assets (Poppins and Lora font families)
- **Picsum Photos**: Placeholder image service for development

## Environment Configuration
- **GEMINI_API_KEY**: Required for AI functionality integration
- **BACKEND_PORT**: Configurable backend server port (default: 3001)
- **Frontend Port**: Fixed at 5000 with proxy configuration to backend

## API Endpoints
- **GET /api/health**: Backend health check endpoint
- **POST /api/gemini/chat**: Standard AI chat interaction
- **POST /api/gemini/stream**: Streaming AI chat responses