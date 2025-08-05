# 🚀 PitchStartup Hub

A modern platform for entrepreneurs to pitch their startups, connect with other entrepreneurs, and participate in virtual competitions. Built with cutting-edge technologies for optimal performance and user experience.

## 🌐 **Live Demo**

**🚀 Production URL:** [https://pitchstartup-hub.vercel.app/](https://pitchstartup-hub.vercel.app/)

*Experience the platform live with real startup pitches and full functionality!*

## 📋 Project Overview

PitchStartup Hub is a comprehensive platform that enables entrepreneurs to:
- **Submit startup pitches** with detailed descriptions and markdown support
- **Browse and search** through submitted startups
- **Connect with other entrepreneurs** through user profiles
- **Vote and interact** with startup pitches
- **Real-time updates** with live data synchronization

## 🛠️ Technologies Used

### **Frontend & Framework**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### **Authentication & Security**
- **[Auth.js (NextAuth)](https://authjs.dev/)** - Complete authentication solution
- **[NextAuth v5](https://next-auth.js.org/)** - Modern authentication for Next.js

### **Content Management**
- **[Sanity CMS](https://www.sanity.io/)** - Headless content management system
- **[Sanity Studio](https://www.sanity.io/studio)** - Content editing interface
- **[Markdown Support](https://markdown-it.github.io/)** - Rich text editing with markdown-it

### **UI Components & Design**
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[Work Sans Font](https://fonts.google.com/specimen/Work+Sans)** - Modern typography

### **Monitoring & Error Tracking**
- **[Sentry](https://sentry.io/)** - Application monitoring and error tracking
- **[Sentry Next.js SDK](https://docs.sentry.io/platforms/javascript/guides/nextjs/)** - Next.js integration

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

## ✨ Key Features

### **User Experience**
- 🎨 **Modern UI/UX** - Clean, responsive design with custom styling
- 📱 **Mobile-First** - Optimized for all device sizes
- ⚡ **Fast Performance** - Optimized with Next.js App Router
- 🔍 **Advanced Search** - Real-time search functionality
- 📊 **View Tracking** - Track startup pitch views

### **Content Management**
- 📝 **Rich Text Editor** - Markdown support for detailed pitch descriptions
- 🖼️ **Image Management** - Support for startup images and user avatars
- 📂 **Category System** - Organized startup categorization
- 🔄 **Real-time Updates** - Live data synchronization

### **Authentication & Security**
- 🔐 **Secure Authentication** - NextAuth.js integration
- 👤 **User Profiles** - Complete user management system
- 🛡️ **Protected Routes** - Secure access to authenticated features

### **Developer Experience**
- 🎯 **Type Safety** - Full TypeScript implementation
- 🧪 **Error Monitoring** - Sentry integration for production monitoring
- 📦 **Component Library** - Reusable shadcn/ui components
- 🔧 **Development Tools** - ESLint, PostCSS, and more

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Sanity account (for CMS)
- Sentry account (for monitoring)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/EstebanCanVaz/PitchStartup-Hub.git
cd PitchStartup-Hub
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
Create a `.env.local` file with the following variables:
```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Sentry Configuration
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
pitchstartup-hub/
├── app/                    # Next.js App Router
│   ├── (root)/            # Main application routes
│   ├── api/               # API routes
│   ├── studio/            # Sanity Studio
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── sanity/               # Sanity CMS configuration
│   ├── schemaTypes/      # Content schemas
│   ├── lib/              # Sanity utilities
│   └── ...               # CMS configuration
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS with custom CSS classes defined in `app/globals.css`. Key styling classes:
- `.blue_container` - Main section containers
- `.startup-card` - Startup card styling
- `.heading` - Typography styles
- `.pattern` - Background patterns

### Components
All UI components are built with shadcn/ui and can be customized in the `components/ui/` directory.

## 📊 Monitoring & Analytics

### Sentry Integration
- **Error Tracking**: Automatic error capture and reporting
- **Performance Monitoring**: Track application performance
- **User Feedback**: Collect user feedback on errors

### View Tracking
- **Startup Views**: Track how many times each startup is viewed
- **User Analytics**: Monitor user engagement

## 🚀 Deployment

### ✅ **Successfully Deployed on Vercel**

The application is **live and fully functional** at [https://pitchstartup-hub.vercel.app/](https://pitchstartup-hub.vercel.app/)

### **Deployment Configuration**
- **Platform:** Vercel
- **Framework:** Next.js 15
- **Domain:** pitchstartup-hub.vercel.app
- **Status:** ✅ Production Ready
- **Authentication:** GitHub OAuth fully configured
- **Database:** Sanity CMS connected

### **Environment Variables Configured**
```env
NEXTAUTH_URL=https://pitchstartup-hub.vercel.app
NEXTAUTH_SECRET=configured
GITHUB_ID=configured
GITHUB_SECRET=configured
NEXT_PUBLIC_SANITY_PROJECT_ID=configured
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=configured
```

### **Other Deployment Options**
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Esteban Canto** - [GitHub](https://github.com/EstebanCanVaz)

## 🎉 **Project Status**

- ✅ **Development Complete**
- ✅ **Production Deployed**
- ✅ **Authentication Working**
- ✅ **Database Connected**
- ✅ **All Features Functional**

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Sanity](https://www.sanity.io/) for the headless CMS
- [shadcn](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for the deployment platform

---

⭐ **Star this repository if you find it helpful!**
