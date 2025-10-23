# Maratha Samaj Pratishthan - Next.js Website

This is a modern Next.js website for Maratha Samaj Pratishthan, a non-profit organization dedicated to helping people and causes in the community.

## Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Fully Responsive Design** that works on all devices (mobile, tablet, desktop)
- **Scrollable Content** with proper overflow handling
- **Optimized Images** with Next.js Image component for better performance
- **SEO Optimized** with proper metadata
- **Fast Performance** with Next.js optimizations
- **Component-based Architecture** for maintainability
- **Mobile-First Approach** with responsive utilities

## Pages

- **Home** - Main landing page with all sections
- **About** - Information about the organization
- **Services** - Available services and programs
- **Donations** - Donation opportunities and progress
- **Contact** - Contact form and information
- **Team** - Team members and leadership
- **Events** - Upcoming events and activities
- **Blog** - Latest news and updates

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd maratha-samaj-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── donations/         # Donations page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Header.tsx         # Header component
│   ├── Footer.tsx         # Footer component
│   ├── Banner.tsx         # Hero banner
│   ├── About.tsx          # About section
│   ├── Donations.tsx      # Donations section
│   ├── Team.tsx           # Team section
│   └── ...                # Other components
└── public/                # Static assets
    └── assets/            # Images, CSS, JS files
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React** - UI library
- **Next.js Image** - Optimized images
- **Next.js Link** - Client-side navigation

## Recent Updates

### Responsiveness & Scrolling Improvements
- ✅ **Fixed scrolling issues** - Removed `position: fixed` from body and added proper overflow handling
- ✅ **Made all images responsive** - Added `img-responsive` class to all Image components
- ✅ **Improved mobile layout** - Added mobile-first responsive utilities and breakpoints
- ✅ **Enhanced container responsiveness** - Better spacing and layout on all screen sizes
- ✅ **Fixed overflow issues** - Ensured proper content visibility and scrolling behavior

### Technical Improvements
- Added responsive image containers with proper aspect ratios
- Implemented mobile-first CSS approach with proper breakpoints
- Enhanced grid system with better mobile support
- Added smooth scrolling behavior
- Improved touch scrolling for mobile devices
- Fixed iOS Safari viewport issues

## Customization

### Styling
The project uses a combination of:
- Tailwind CSS for utility classes
- Custom CSS from the original template with responsive enhancements
- CSS variables for consistent theming
- Mobile-first responsive design patterns

### Content
Update content by modifying the respective component files in the `src/components/` directory.

### Images
Replace images in the `public/assets/img/` directory with your own images. All images are automatically responsive thanks to the Next.js Image component and custom CSS classes.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@example.com or create an issue in the repository.