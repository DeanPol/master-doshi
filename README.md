# Master Doshi

## A Next JS + Redux + Prisma application focused on testing one's abilities on the japanese N5 verbs.

## Initializing project

- Run 'npm install' to install all neccessary packages.
- Run 'npm run dev' and navigate to localhost:3000 (or whichever port is
  available).

## Changelog

### 0.0.1

Getting started - Initializing next js app.

- Getting rid of initial unused files.
- Installed Prettier.
- Installed mui/material.

### 0.0.2

Created basic Page Layout

- Initialized basic structure and interactive component.
- Created simple header component.
- Created simple footer component.

### 0.0.3

Created a basic layout of components.

- Created Card component.
- Created CardContainer component.
- Created a function to generate the question and the possible answers.

### 0.0.4

Updated hierarchy of components.

- Created an InteractiveSection component.
- Correctly passing props and declaring interfaces for each component.
- Separated server-side and client-side components.

### 0.0.5

Database creation and connection.

- Installed prisma and prisma-related packages.
- Initialized database details and created Verb model.
- Generated prisma schema and added global prisma client.
- Installed ts-node for database seeding and created sample data for display.

### 0.0.6

Database model representation.

- Records from database fetched using async methods.
- Passing fetched props from Server-Side components to Client-Side.
- Using shuffling and filtering methods to correctly display unique values for
  the quiz.

### 0.0.7

State management.

- Added an end condition to the quiz.
- Created the questions and correct answer props.
- Added a new end results splash component to display the above props.
- Installed redux to handle their states.

### 0.0.8

Added new cardSlice functions.

- Forcing only one option to be selected.
- General tree shaking.

### 0.0.9

Optimizations.

- Corrected the question selection process.
- Fixed bug in which answer would always be the first option.
- Showing appropriate messages before each question or results.

### 1.0.0

Reset status and completion of first draft.

- Added a hook to reset states and return to initial state.
- Reducing total project size.
- Correct bundling for easy installation and execution.

### 1.0.1

Updated database. Created ProgressBar component.

- Added more verbs in the database Verb model.
- Removed unused packages.
- Added installation steps to this file.
