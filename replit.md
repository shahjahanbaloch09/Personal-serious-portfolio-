# Overview

This is a personal portfolio website for Shah Jahan Baloch, a Public Health Student, Community Builder, Digital Educator, and Health Advocate from Awaran, Balochistan, Pakistan. The application is a modern, single-page React portfolio showcasing his educational background, professional experience, skills, projects, certifications, testimonials, workshops, blog posts, and contact information. The site emphasizes his work in public health advocacy and community development in underserved regions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 19 with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS for utility-first styling with custom brand colors and animations
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular component architecture with dedicated sections for each portfolio area (About, Education, Experience, Skills, etc.)
- **State Management**: Local React state using useState hooks for modal controls, view navigation, and form handling
- **Routing**: Single-page application with hash-based navigation and smooth scrolling between sections

## Design Patterns
- **Custom Hooks**: Reusable hooks for intersection observer functionality and active section tracking
- **Component Composition**: Shared Section component wrapper for consistent layout and animations
- **TypeScript Interfaces**: Strongly typed data structures for all content types (BlogPost, Workshop, Certificate, etc.)
- **Icon System**: Organized icon components grouped by category (Social, Skill, Feature, Action, Decorative icons)

## User Interface Features
- **Responsive Design**: Mobile-first approach with responsive grid layouts and adaptive typography
- **Animations**: Intersection Observer-based scroll animations, typing effects, and smooth transitions
- **Modal System**: Image gallery modal with keyboard navigation and click-outside-to-close functionality
- **Navigation**: Sticky header with active section highlighting and mobile hamburger menu
- **Content Views**: Multi-view system supporting main portfolio, detailed blog posts, and extended about page

## Data Management
- **Static Content**: All portfolio data stored in TypeScript files with structured interfaces
- **Content Types**: Comprehensive data models for education, experience, projects, certifications, workshops, testimonials, and blog posts
- **Image Handling**: Support for image galleries in workshops with modal viewing capabilities

# External Dependencies

## Core Libraries
- **React & ReactDOM 19.1.1**: Core UI framework for component-based architecture
- **TypeScript 5.8.2**: Static typing for enhanced development experience and code reliability
- **Vite 6.2.0**: Modern build tool for fast development server and optimized production builds

## Styling & UI
- **Tailwind CSS**: Utility-first CSS framework loaded via CDN with custom configuration
- **Google Fonts**: Poppins and Lora font families for typography hierarchy
- **Custom Animations**: CSS animations for fade-ins, typing effects, and scroll-triggered transitions

## AI Integration
- **@google/genai 1.19.0**: Google Generative AI SDK for potential AI-powered features
- **Environment Variables**: GEMINI_API_KEY configuration for AI service authentication

## Development Tools
- **@types/node**: Node.js type definitions for development tooling
- **Vite Configuration**: Custom alias setup and environment variable handling for development and production builds

## External Services
- **Placeholder Images**: Picsum photos service for demo images and backgrounds
- **Form Handling**: Contact form with simulated submission (ready for integration with email services)
- **Social Media Integration**: LinkedIn profile links and social media icons for professional networking