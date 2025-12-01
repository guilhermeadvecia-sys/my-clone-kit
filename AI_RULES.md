# AI Rules for this Application

This document outlines the technical stack and guidelines for developing features within this project.

## Tech Stack Overview

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
*   **Vite**: A fast build tool that provides an extremely quick development experience for modern web projects.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS.
*   **React Router**: A standard library for routing in React applications.
*   **TanStack Query (React Query)**: A powerful library for managing, caching, and synchronizing server state in React.
*   **Zod & React Hook Form**: Used together for robust form management and validation.
*   **Lucide React**: A library providing a collection of beautiful and consistent open-source icons.
*   **Date-fns**: A comprehensive JavaScript date utility library.

## Library Usage Rules

To maintain consistency and leverage the existing setup, please adhere to the following guidelines when implementing new features:

*   **UI Components**: Always prioritize using components from `shadcn/ui`. If a required component is not available, create a new, small, and focused component in `src/components/`.
*   **Styling**: All styling must be done using **Tailwind CSS** classes. Avoid inline styles or custom CSS files.
*   **Routing**: Use **React Router (`react-router-dom`)** for all navigation. Define new routes within `src/App.tsx`.
*   **Data Fetching & Server State**: For managing server state, data fetching, caching, and synchronization, use **TanStack Query (`@tanstack/react-query`)**.
*   **Form Handling & Validation**: Implement forms using **React Hook Form** and validate inputs with **Zod**.
*   **Icons**: Use icons from **Lucide React**.
*   **Toasts/Notifications**: For displaying transient messages to the user, use the existing `shadcn/ui` toast system via the `useToast` hook from `@/hooks/use-toast`.
*   **Date Manipulation**: For any date-related operations, use **date-fns**.
*   **Utility Functions**: For combining CSS classes, use the `cn` utility function from `src/lib/utils.ts`.
*   **File Structure**:
    *   New pages should be placed in `src/pages/`.
    *   New components should be placed in `src/components/`.
    *   Utility functions should be placed in `src/lib/` or `src/utils/`.
    *   Hooks should be placed in `src/hooks/`.