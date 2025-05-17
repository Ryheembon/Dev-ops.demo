# DevOps Portfolio Project

A modern React application demonstrating CI/CD practices, environment management, and monitoring implementation.

## 🚀 Features

- **React Application**
  - Modern React practices
  - Clean architecture
  - Responsive design
  - Animated components

- **CI/CD Pipeline**
  - Automated testing
  - Linting checks
  - Automated deployment
  - GitHub Actions workflow

- **Environment Management**
  - Development environment
  - Staging environment
  - Production environment
  - Environment-specific configurations

- **Monitoring & Analytics**
  - Google Analytics integration
  - Performance monitoring
  - Error tracking
  - User interaction tracking

## 🛠️ Technologies Used

- React 18
- GitHub Actions
- Google Analytics 4
- Web Vitals
- Environment Variables

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Ryheembon/Dev-ops.demo.git
cd Dev-ops.demo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create `.env.development` for local development
   - Create `.env.staging` for staging environment
   - Create `.env.production` for production environment

## 🔧 Environment Setup

### Development
```bash
npm start
```

### Staging
```bash
npm run build:staging
```

### Production
```bash
npm run build:prod
```

## 📊 Monitoring

The application includes:
- Page view tracking
- User interaction tracking
- Performance metrics
- Error tracking

To view analytics:
1. Go to Google Analytics dashboard
2. Select your property
3. View real-time and historical data

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for:
- Automated testing
- Linting checks
- Build process
- Deployment to GitHub Pages

### Deployment URLs
- Production: https://ryheembon.github.io/Dev-ops.demo/
- Staging: https://ryheembon.github.io/Dev-ops.demo/staging

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   └── welcome.js
│   ├── utils/
│   │   └── monitoring.js
│   ├── App.js
│   └── index.js
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── .env.development
├── .env.staging
├── .env.production
└── package.json
```

## 🔍 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm run build:staging` - Build for staging
- `npm run build:prod` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linting

## 📝 Environment Variables

Required environment variables:
```
REACT_APP_ENV=development|staging|production
REACT_APP_API_URL=your_api_url
REACT_APP_GITHUB_URL=your_github_url
REACT_APP_ENABLE_ANIMATIONS=true|false
REACT_APP_DEBUG=true|false
REACT_APP_GA_MEASUREMENT_ID=your_ga_id
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Ryheembon
- GitHub: [@Ryheembon](https://github.com/Ryheembon)

## 🙏 Acknowledgments

- React Documentation
- GitHub Actions Documentation
- Google Analytics Documentation
