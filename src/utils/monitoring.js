import { getCLS, getFID, getLCP } from 'web-vitals';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
const initializeGA = () => {
  if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
  }
};

// Performance Monitoring
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry); // Cumulative Layout Shift
    getFID(onPerfEntry); // First Input Delay
    getLCP(onPerfEntry); // Largest Contentful Paint
  }
};

// Error Tracking
export const logError = (error, errorInfo) => {
  // Log to console in development
  if (process.env.REACT_APP_ENV === 'development') {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }
  
  // Send to Google Analytics
  if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Error',
      action: error.message,
      label: errorInfo?.component || 'Unknown',
    });
  }
};

// Analytics
export const trackEvent = (eventName, eventData) => {
  // Log to console in development
  if (process.env.REACT_APP_ENV === 'development') {
    console.log('Event:', eventName, eventData);
  }
  
  // Send to Google Analytics
  if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
    ReactGA.event({
      category: eventData?.component || 'General',
      action: eventName,
      label: JSON.stringify(eventData),
    });
  }
};

// Performance Monitoring
export const trackPerformance = (metric) => {
  const { name, value } = metric;
  
  // Log to console in development
  if (process.env.REACT_APP_ENV === 'development') {
    console.log(`Performance Metric - ${name}:`, value);
  }
  
  // Send to Google Analytics
  if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Performance',
      action: name,
      value: Math.round(value), // GA requires integers
    });
  }
};

// Page View Tracking
export const trackPageView = (path) => {
  if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

// Initialize GA when the module is imported
initializeGA(); 