export const initialPackages = [
  {
    title: 'Delhi-Shimla',
    destination: 'Shimla',
    days: 6,
    price: 13500,
    description: 'Experience the Queen of Hills with this comprehensive 6-day package covering all major attractions of Shimla including Mall Road, Ridge, Jakhu Temple, and nearby Kufri.',
    itinerary: [
      'Day 1: Departure from Delhi, overnight journey',
      'Day 2: Arrive Shimla, check-in, Mall Road visit',
      'Day 3: Kufri excursion, adventure activities',
      'Day 4: Jakhu Temple, Christ Church, local sightseeing',
      'Day 5: Naldehra, Mashobra visit',
      'Day 6: Check-out, return to Delhi',
    ],
    includes: ['AC transportation', 'Driver allowance', 'Toll taxes', 'Parking charges', 'Fuel charges'],
    excludes: ['Hotel accommodation', 'Meals', 'Entry tickets', 'Personal expenses'],
    image: '/images/shimla.jpg',
    featured: true,
  },
  {
    title: 'Delhi-Manali',
    destination: 'Manali',
    days: 6,
    price: 13500,
    description: 'Discover the breathtaking beauty of Manali with snow-capped mountains, Solang Valley, and the ancient Hadimba Temple in this 6-day adventure package.',
    itinerary: [
      'Day 1: Departure from Delhi, overnight journey',
      'Day 2: Arrive Manali, check-in, local market',
      'Day 3: Solang Valley, adventure sports',
      'Day 4: Rohtang Pass / Atal Tunnel excursion',
      'Day 5: Hadimba Temple, Vashisht, Old Manali',
      'Day 6: Check-out, return to Delhi',
    ],
    includes: ['AC transportation', 'Driver allowance', 'Toll taxes', 'Parking charges', 'Fuel charges'],
    excludes: ['Hotel accommodation', 'Meals', 'Entry tickets', 'Adventure activities'],
    image: '/images/manali.jpg',
    featured: true,
  },
  {
    title: 'Delhi-Manali Premium',
    destination: 'Manali',
    days: 5,
    price: 17500,
    description: 'A premium 5-day Manali experience with comfortable stays and comprehensive sightseeing covering all major attractions.',
    itinerary: [
      'Day 1: Departure from Delhi, reach Manali by evening',
      'Day 2: Solang Valley full day excursion',
      'Day 3: Rohtang Pass / Atal Tunnel, snow activities',
      'Day 4: Hadimba Temple, Vashisht, Mall Road',
      'Day 5: Check-out, return to Delhi',
    ],
    includes: ['AC transportation', 'Driver allowance', 'Toll taxes', 'Parking charges', 'Fuel charges'],
    excludes: ['Hotel accommodation', 'Meals', 'Entry tickets', 'Adventure activities'],
    image: '/images/manali.jpg',
    featured: true,
  },
  {
    title: 'Delhi-Haridwar',
    destination: 'Haridwar',
    days: 3,
    price: 17300,
    description: 'Spiritual journey to Haridwar and Rishikesh, experience the divine Ganga Aarti and explore ancient temples.',
    itinerary: [
      'Day 1: Delhi to Haridwar, evening Ganga Aarti at Har Ki Pauri',
      'Day 2: Rishikesh sightseeing, Lakshman Jhula, Ram Jhula, temples',
      'Day 3: Morning rituals, return to Delhi',
    ],
    includes: ['AC transportation', 'Driver allowance', 'Toll taxes', 'Parking charges', 'Fuel charges'],
    excludes: ['Hotel accommodation', 'Meals', 'Entry tickets', 'Boat rides'],
    image: '/images/haridwar.jpg',
    featured: true,
  },
  {
    title: 'Delhi-Shimla Express',
    destination: 'Shimla',
    days: 4,
    price: 10500,
    description: 'Quick getaway to Shimla covering the essential attractions in a compact 4-day package.',
    itinerary: [
      'Day 1: Departure from Delhi, reach Shimla',
      'Day 2: Mall Road, Ridge, local sightseeing',
      'Day 3: Kufri excursion',
      'Day 4: Check-out, return to Delhi',
    ],
    includes: ['AC transportation', 'Driver allowance', 'Toll taxes', 'Parking charges', 'Fuel charges'],
    excludes: ['Hotel accommodation', 'Meals', 'Entry tickets'],
    image: '/images/shimla.jpg',
    featured: false,
  },
  {
    title: 'Delhi-Nainital',
    destination: 'Nainital',
    days: 4,
    price: 18200,
    description: 'Explore the beautiful lake city of Nainital with boating, cable car rides, and scenic viewpoints.',
    itinerary: [
      'Day 1: Delhi to Nainital, check-in',
      'Day 2: Naini Lake boating, Mall Road, Naina Devi Temple',
      'Day 3: Snow View Point, Tiffin Top, Zoo',
      'Day 4: Check-out, return to Delhi',
    ],
    includes: ['AC transportation', 'Driver allowance', 'Toll taxes', 'Parking charges', 'Fuel charges'],
    excludes: ['Hotel accommodation', 'Meals', 'Entry tickets', 'Boating charges'],
    image: '/images/nainital.jpg',
    featured: true,
  },
]

export const initialPricing = [
  {
    category: 'Local Trip',
    minKm: 250,
    ratePerKm: 11,
    approxCost: 3000,
    description: 'Perfect for city tours and nearby destinations within 250 km radius',
  },
  {
    category: 'Long Trip',
    minKm: 300,
    ratePerKm: 10.5,
    approxCost: 3400,
    description: 'Ideal for outstation trips and weekend getaways',
  },
  {
    category: 'Weekly Package',
    minKm: 250,
    ratePerKm: 10,
    approxCost: 2700,
    description: 'Best value for extended trips and family vacations',
  },
]

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Excellent service! The driver was professional and the car was well-maintained. Our Shimla trip was memorable.',
  },
  {
    name: 'Priya Sharma',
    location: 'Noida',
    rating: 5,
    text: 'Very reasonable rates and comfortable journey. Highly recommend Prabhu Tour & Travel for family trips.',
  },
  {
    name: 'Amit Verma',
    location: 'Ghaziabad',
    rating: 5,
    text: 'We booked for our Manali trip and it was fantastic. On-time pickup and excellent vehicle condition.',
  },
]

export const benefits = [
  {
    title: 'Experienced Drivers',
    description: 'Our drivers are well-trained with years of experience on hill routes',
  },
  {
    title: 'Well-Maintained Vehicles',
    description: 'All our vehicles are regularly serviced and kept in top condition',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges. What you see is what you pay',
  },
  {
    title: '24/7 Support',
    description: 'Round the clock customer support for any assistance',
  },
  {
    title: 'Flexible Bookings',
    description: 'Easy booking process with flexible cancellation options',
  },
  {
    title: 'Safe Travel',
    description: 'Your safety is our priority with sanitized vehicles and safety protocols',
  },
]

export const importantNotes = [
  'All rates are subject to change without prior notice',
  'Toll, parking, and state permits are extra as per actuals',
  'Night charges applicable after 10 PM (Rs. 300/night)',
  'Driver allowance is included in the package',
  'Fuel charges are included based on package kilometers',
  'Extra kilometers will be charged at Rs. 12/km',
  'AC will not work during hill climbs to prevent overheating',
  'Booking amount: 20% advance, rest on trip completion',
]
