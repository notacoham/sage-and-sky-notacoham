import tourImg1 from './images/meditation-sas.webp';
import tourImg2 from './images/energy-sas.webp';
import tourImg3 from './images/child-energy-sas.webp';
import tourImg4 from './images/card-sas.webp';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'Reviews' },
  { id: 4, href: '#tours', text: 'Services' },
];

export const socialLinks = [
  { id: 1, href: 'https://facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-solid fa-comments',
    title: 'Melissa F.',
    text: '"I had been feeling lost and overwhelmed, but after working with Tamera at Sage and Sky Intuitive Coaching, I finally feel like I have direction and the tools I need to thrive."',
  },
  {
    id: 2,
    icon: 'fas fa-solid fa-comments',
    title: 'Lauren M.',
    text: '"Sage and Sky Intuitive Coaching has helped me understand myself better and make meaningful changes in my life. I highly recommend their services to anyone looking to grow and develop."',
  },
  {
    id: 3,
    icon: 'fas fa-solid fa-comments',
    title: 'Eldon S.',

    text: '"Tamera at Sage and Sky Intuitive Coaching truly cares about her clients and goes above and beyond to provide personalized support and guidance. I am so grateful for her help!"',
  },
];

export const tours = [
  {
    id: 1,
    image: tourImg1,
    date: 'learn more',
    title: 'Personal coaching package',
    text: 'If you are looking to improve all areas of your life, this is a great option. You will get 12 individual coaching sessions that are 90 minutes each. The sessions are completely individualized to your needs and will focus on mental/emotional health, physical health, energetic health, improving relationships, and financial success. Great support in creating the life you really want! Invest in yourself, you deserve it.',
    location: 'online',
    duration: 90,
    price: 1500,
  },
  {
    id: 2,
    image: tourImg2,
    date: 'learn more',
    title: 'Full Spectrum Energy Session',
    text: 'In this hour-long session, you will receive a powerful energy clearing along with a psychic energy reading and intuitive guidance. Feel free to come with a specific issue or two that we can focus on, and be prepared to release what is holding you back.',
    location: 'online',
    duration: 60,
    price: 100,
  },
  {
    id: 3,
    image: tourImg3,
    date: 'learn more',
    title: 'Child Energy Clearing and Coaching Session',
    text: "This option is designed for youth who are struggling with emotional issues. If you aren't sure what is bothering them and don't know how to help, this may be a good option for you. I will connect with your child and help them identify what they are experiencing while reading their energies for additional information. Energy will be cleansed. Parents should be present during session.",
    location: 'online',
    duration: 90,
    price: 100,
  },
  {
    id: 4,
    image: tourImg4,
    date: 'learn more',
    title: 'Intuitive Oracle Card Reading',
    text: 'For the reading, you may choose between specific issues or general information as it comes out. We use mostly oracle cards with optional tarot. Readings last around 40 minutes. May be added onto any other service for half price with notice.',
    location: 'online',
    duration: 40,
    price: 50,
  },
];

export const footerLinks = [
  { id: 1, href: '#home', title: 'Home' },
  { id: 2, href: '#about', title: 'About' },
  { id: 3, href: '#services', title: 'Reviews' },
  { id: 4, href: '#featured', title: 'Services' },
];

export const footerIcons = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];
