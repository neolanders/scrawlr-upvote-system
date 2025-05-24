# Upvote System

A modern, interactive upvote system built with React and TypeScript. This application allows users to create multiple lists of upvotes, toggle their states, and persist the data across page refreshes.

![Upvote System Screenshot](screenshot.png)

## Features

- Create multiple upvote lists
- Toggle upvote states (selected/unselected)
- Add new upvotes to lists
- Persistent data storage
- Responsive design
- TypeScript support
- Unit tests

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety and better developer experience
- **Redux Toolkit** - State management
- **Redux Persist** - Data persistence
- **CSS Modules** - Scoped styling
- **Jest** - Testing framework
- **Testing Library** - React component testing
- **Vite** - Build tool and development server

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scrawlr-upvote-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run linter
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── upvote/       # Upvote-specific components
├── store/           # Redux store and slices
├── styles/          # Global styles and variables
└── App.tsx          # Root component
```

## Testing

The project includes unit tests for the upvote functionality. Run tests with:

```bash
npm test
```

### Redux DevTools

Debugging & Developer Experience
This project includes integration with Redux DevTools to make it easy to inspect state transitions and debug Redux actions. You can view dispatched actions and state history using the Redux DevTools browser extension.

## Assignment Description

This project was created as a technical assessment to demonstrate React and TypeScript skills. The requirements included:

1. Creating a reusable upvote component with two states:
   - Default state: Background #F4F6F8, Arrow #343A40
   - Selected state: Background #E5E8FD, Arrow #253CF2

2. Implementing upvote lists with the following features:
   - Toggle selection state for all upvotes in a list
   - Independent selection states between lists
   - Add new upvotes to lists
   - Persist data across page refreshes

3. Technical requirements:
   - Reusable components
   - State management
   - Data persistence
   - Unit tests
   - TypeScript implementation

