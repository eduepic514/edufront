export const GA_MEASUREMENT_ID = "G-SH8HB0F2RW";

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === "undefined") return;

  // Avoid adding the script multiple times
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views (for React Router)
export const trackPageView = (path) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Optional: Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};