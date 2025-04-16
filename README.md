# Adapteq - Connected Conversations

## Project Overview
Adapteq - Connected Conversations is a modern web application built to deliver efficient, empathetic, and effective services through AI-powered conversations.

## Development Setup

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started
```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd adapteq-conversations-crafted

# Step 3: Install dependencies
npm i

# Step 4: Start the development server
npm run dev
```

### Development Options

**Use your preferred IDE**
- Clone the repository
- Install dependencies
- Start the development server
- Make changes and commit them to the repository

**Edit directly in GitHub**
- Navigate to the desired file(s)
- Click the "Edit" button (pencil icon)
- Make your changes and commit

**Use GitHub Codespaces**
- Navigate to the repository
- Click on the "Code" button
- Select "Codespaces"
- Create a new codespace
- Edit and commit changes

## Technology Stack
This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment
The application can be deployed using your preferred hosting service. Common options include:
- Vercel
- Netlify
- AWS Amplify

## Custom Domain Setup
To connect a custom domain:
1. Deploy your application to your chosen hosting service
2. Follow the hosting service's instructions for connecting a custom domain
3. Update DNS settings as required by your hosting provider

# Adapteq Style Guide

## Colors

### Primary Colors
- **Adapteq Navy**: Primary brand color for text and important elements
- **Adapteq Blue**: Secondary brand color for interactive elements
- **Adapteq Purple**: Accent color for highlights and gradients
- **Adapteq Purple/70**: Lighter variant of purple for secondary elements
- **Adapteq Light Purple**: Background color for cards and sections
- **Adapteq Grey**: Background color for specific sections

### Gradients
- **Blue to Purple Gradient**: Used for text highlights and backgrounds
  - `from-blue-800 to-purple-400`
- **Light Gradient**: Used for card backgrounds
  - `from-blue-100 to-purple-100`

## Typography

### Headings
- **Heading 1**: Large section titles with gradient text
- **Heading 2**: Section titles with optional gradient spans
- **Heading 3**: Card titles and subsection headers
- **Heading 4**: Feature titles and smaller headers

### Body Text
- **Primary Text**: Standard body text in gray-700
- **Secondary Text**: Supporting text in gray-600
- **Small Text**: Captions and metadata in gray-600

## Components

### Navigation
- **Navbar**: White background with shadow-sm
- **Nav Links**: Navy text with blue hover state
- **Mobile Menu**: Animated fade-in with vertical layout

### Buttons
- **Primary Button**: 
  - Background: Adapteq Blue
  - Hover: Blue-700
  - Text: White
- **Outline Button**:
  - Border: Adapteq Purple
  - Text: Adapteq Purple
  - Hover: Adapteq Light Purple

### Cards
- **Feature Cards**:
  - Background: White
  - Shadow: shadow-md
  - Border Radius: rounded-xl
  - Padding: p-8
- **Info Cards**:
  - Background: Adapteq Light Purple
  - Shadow: shadow-md
  - Border Radius: rounded-xl

### Sections
- **Standard Section**:
  - Padding: py-8 md:py-12
  - Container: max-w-7xl
  - Background: White
- **Alternate Section**:
  - Background: Adapteq Grey or Adapteq Light Purple
  - Same padding and container constraints

## Layout

### Grid System
- **Container**: 
  - Max Width: max-w-7xl
  - Padding: px-4 md:px-6
- **Grid Layouts**:
  - Single Column: grid-cols-1
  - Two Column: grid-cols-1 md:grid-cols-2
  - Four Column: grid-cols-1 sm:grid-cols-2 md:grid-cols-4

### Spacing
- **Section Spacing**: py-8 md:py-12
- **Grid Gaps**: gap-8
- **Component Spacing**: space-y-4
- **Padding**: p-4 to p-8 depending on component

## Icons
- **Icon Size**: Standard sizes of 24px (h-6 w-6) and 48px (h-12 w-12)
- **Icon Colors**: 
  - Primary: Adapteq Blue
  - Secondary: Adapteq Purple
  - White: For contrast on colored backgrounds

## Responsive Design
- **Mobile First**: Base styles for mobile, enhanced for larger screens
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
- **Responsive Elements**:
  - Hidden on mobile, visible on desktop: hidden md:flex
  - Stack on mobile, grid on desktop: grid-cols-1 md:grid-cols-2

## Animations
- **Fade In**: Used for mobile menu
- **Smooth Scroll**: Used for section navigation
- **Hover Transitions**: transition-colors for interactive elements
