// Studio Information
export const STUDIO_INFO = {
  name: "Saurabh Studio",
  tagline: "Capturing Divine Moments",
  description: "Where Frames Come Alive - Premium photography and cinematography with cutting-edge digital technology",
  phone: "+91 9198297260",
  email: "hello@saurabhstudio.in",
  whatsapp: "919198297260",
  address: {
    line1: "Near Ram Mandir Road",
    line2: "Ayodhya, Uttar Pradesh",
    pin: "224123",
    country: "India"
  },
  social: {
    instagram: "https://www.instagram.com/saurabh_studio_108",
    facebook: "https://facebook.com/saurabhstudio",
    youtube: "https://www.youtube.com/@saurabhstudio007",
    whatsapp: "https://wa.me/919198297260"
  },
  developer: {
    name: "DevArea",
    url: "https://youtube.com/@DevArea"
  }
};

// Navigation Items
export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// Portfolio Categories
export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "pre-wedding", label: "Pre-Wedding" },
  { id: "events", label: "Events" },
  { id: "commercial", label: "Commercial" },
  { id: "portraits", label: "Portraits" },
  { id: "cinematography", label: "Cinematography" },
];

// Services
export const SERVICES = [
  {
    id: "wedding",
    title: "Wedding Photography & Cinematography",
    description: "Capture every sacred moment of your divine union with our expert wedding coverage. From mehendi to vidaai, we preserve memories that last forever.",
    icon: "Heart",
    features: ["Full Day Coverage", "2 Photographers", "1 Cinematographer", "Drone Coverage", "Same Day Edit", "Premium Album"],
    startingPrice: "₹75,000",
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Shoots",
    description: "Create magical memories before the big day. From the ghats of Sarayu to the grandeur of Ram Mandir, we find the perfect backdrop for your love story.",
    icon: "Camera",
    features: ["4-6 Hours Coverage", "2 Locations", "50+ Edited Photos", "Cinematic Video", "Outfit Changes", "Props Included"],
    startingPrice: "₹25,000",
  },
  {
    id: "events",
    title: "Event Coverage",
    description: "From corporate gatherings to spiritual ceremonies, we document every significant moment with professional precision and artistic flair.",
    icon: "Calendar",
    features: ["Flexible Hours", "Multiple Photographers", "Live Streaming", "Quick Delivery", "Online Gallery", "Print Ready"],
    startingPrice: "₹15,000",
  },
  {
    id: "commercial",
    title: "Commercial Photography",
    description: "Elevate your brand with stunning product photography and commercial shoots that capture the essence of your business.",
    icon: "Building",
    features: ["Studio Setup", "Professional Lighting", "Post Processing", "Commercial License", "Multiple Angles", "Quick Turnaround"],
    startingPrice: "₹10,000",
  },
  {
    id: "product",
    title: "Product Photography",
    description: "Showcase your products in the best light. Perfect for e-commerce, catalogs, and marketing materials.",
    icon: "Package",
    features: ["White Background", "Lifestyle Shots", "360° Views", "Color Correction", "Bulk Pricing", "E-commerce Ready"],
    startingPrice: "₹500/product",
  },
  {
    id: "drone",
    title: "Drone Videography",
    description: "Capture breathtaking aerial perspectives of your events and locations with our professional drone services.",
    icon: "Plane",
    features: ["4K Footage", "Licensed Pilots", "Cinematic Shots", "Location Scouting", "Raw + Edited", "Safe Operations"],
    startingPrice: "₹8,000",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    event: "Wedding",
    rating: 5,
    text: "Saurabh Studio captured our wedding so beautifully that every time we look at the photos, we relive those magical moments. The team was professional, creative, and understood exactly what we wanted. The cinematic video still brings tears to our eyes!",
    image: "/img1.jpg",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Ananya Gupta",
    event: "Pre-Wedding Shoot",
    rating: 5,
    text: "Our pre-wedding shoot at the ghats of Sarayu was nothing short of magical. The photographer knew all the perfect spots and timings. The photos look like they're straight out of a Bollywood movie!",
    image: "/img2.jpg",
    hasVideo: false,
  },
  {
    id: 3,
    name: "Amit Kumar",
    event: "Corporate Event",
    rating: 5,
    text: "We hired Saurabh Studio for our company's annual event. The coverage was comprehensive, and the photos were delivered within a week. Highly professional service!",
    image: "/img3.jpg",
    hasVideo: false,
  },
  {
    id: 4,
    name: "Meera & Vikram",
    event: "Destination Wedding",
    rating: 5,
    text: "Having our wedding in Ayodhya was a dream, and Saurabh Studio made it even more special. They captured the spiritual essence of the location beautifully. Our album is a treasure!",
    image: "/img4.jpg",
    hasVideo: true,
  },
  {
    id: 5,
    name: "Sunita Devi",
    event: "Family Portrait",
    rating: 5,
    text: "Getting our entire family of 50 members photographed was a challenge, but the team handled it with such grace. Every face, every smile perfectly captured. Thank you!",
    image: "/img5.jpg",
    hasVideo: false,
  },
];

// Portfolio Items (Sample Data)
export const PORTFOLIO_ITEMS = [
  { id: 1, category: "weddings", title: "Sharma Wedding", image: "/img1.jpg", aspectRatio: "portrait" },
  { id: 2, category: "weddings", title: "Gupta Wedding", image: "/img2.jpg", aspectRatio: "landscape" },
  { id: 3, category: "pre-wedding", title: "Love by Sarayu", image: "/img3.jpg", aspectRatio: "portrait" },
  { id: 4, category: "events", title: "Corporate Gala", image: "/img4.jpg", aspectRatio: "landscape" },
  { id: 5, category: "portraits", title: "Bridal Portrait", image: "/img5.jpg", aspectRatio: "portrait" },
  { id: 6, category: "commercial", title: "Product Launch", image: "/img6.jpg", aspectRatio: "square" },
  { id: 7, category: "weddings", title: "Temple Wedding", image: "/img7.jpg", aspectRatio: "landscape" },
  { id: 8, category: "pre-wedding", title: "Sunset Romance", image: "/img8.jpg", aspectRatio: "landscape" },
  { id: 9, category: "cinematography", title: "Wedding Film", image: "/img9.jpg", aspectRatio: "landscape" },
  { id: 10, category: "events", title: "Religious Ceremony", image: "/img10.jpg", aspectRatio: "portrait" },
  { id: 11, category: "portraits", title: "Groom Portrait", image: "/img11.jpg", aspectRatio: "portrait" },
  { id: 12, category: "commercial", title: "Brand Shoot", image: "/img12.jpg", aspectRatio: "square" },
];

// Team Members
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder & Lead Photographer",
    bio: "With 15+ years of experience, Rajesh brings an artistic vision that transforms moments into timeless memories.",
    image: "/dev.jpg",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Creative Director",
    bio: "Priya's eye for detail and creativity ensures every frame tells a compelling story.",
    image: "/team1.jpg",
  },
  {
    id: 3,
    name: "Vikram Verma",
    role: "Lead Cinematographer",
    bio: "Vikram's cinematic approach creates wedding films that rival Bollywood productions.",
    image: "/team2.jpg",
  },
  {
    id: 4,
    name: "Anita Sharma",
    role: "Photo Editor",
    bio: "Anita's post-processing magic brings out the best in every photograph.",
    image: "/team3.jpg",
  },
];

// Stats for About Section
export const STUDIO_STATS = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 2500, suffix: "+" },
  { label: "Events Covered", value: 1000, suffix: "+" },
  { label: "Awards Won", value: 25, suffix: "" },
];

// Video Showcase
export const VIDEO_SHOWCASE = [
  {
    id: 1,
    title: "Wedding Highlight Film",
    thumbnail: "/img1.jpg",
    videoUrl: "https://youtu.be/eLzrYqKZs8s?si=MMSzEm5lIZgfv4Ad",
    duration: "4:46",
    category: "wedding",
  },
  {
    id: 2,
    title: "Pre-Wedding Cinematic",
    thumbnail: "/img2.jpg",
    videoUrl: "https://youtu.be/XkkL7LjL-ro?si=S3qEXMCApB8kZTx7",
    duration: "4:47",
    category: "pre-wedding",
  },
  {
    id: 3,
    title: "Wedding Teaser",
    thumbnail: "/img3.jpg",
    videoUrl: "https://www.youtube.com/watch?v=d6_PjPFyTdg",
    duration: "3:17",
    category: "wedding",
  },
  {
    id: 4,
    title: "Cinematic Wedding Film",
    thumbnail: "/img4.jpg",
    videoUrl: "https://youtu.be/RSMdPxaDoYg?si=H9HCvIWNZ12teNJA",
    duration: "4:57",
    category: "wedding",
  },
];

// Budget Ranges for Form
export const BUDGET_RANGES = [
  { value: "10000-25000", label: "₹10,000 - ₹25,000" },
  { value: "25000-50000", label: "₹25,000 - ₹50,000" },
  { value: "50000-100000", label: "₹50,000 - ₹1,00,000" },
  { value: "100000-200000", label: "₹1,00,000 - ₹2,00,000" },
  { value: "200000+", label: "₹2,00,000+" },
];

// Event Types for Form
export const EVENT_TYPES = [
  { value: "wedding", label: "Wedding" },
  { value: "pre-wedding", label: "Pre-Wedding Shoot" },
  { value: "engagement", label: "Engagement" },
  { value: "birthday", label: "Birthday Party" },
  { value: "corporate", label: "Corporate Event" },
  { value: "religious", label: "Religious Ceremony" },
  { value: "product", label: "Product Photography" },
  { value: "other", label: "Other" },
];
