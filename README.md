# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/73d78136-3465-4b4c-b936-3e3b5fd548b1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/73d78136-3465-4b4c-b936-3e3b5fd548b1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/73d78136-3465-4b4c-b936-3e3b5fd548b1) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

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
