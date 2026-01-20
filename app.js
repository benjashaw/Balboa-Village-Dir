// Balboa Village Events & Directory App

// Constants
const MERCHANT_CODE = 'balboa2024';
const STORAGE_KEYS = {
  EVENTS: 'balboa_events',
  BUSINESSES: 'balboa_businesses',
  EVENT_TYPES: 'balboa_event_types',
  BUSINESS_CATEGORIES: 'balboa_business_categories',
};

// Default event types
const defaultEventTypes = [
  { id: 'concert', label: 'Concert' },
  { id: 'market', label: 'Market' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'festival', label: 'Festival' },
  { id: 'community', label: 'Community' },
  { id: 'other', label: 'Other' },
];

// Default business categories
const defaultBusinessCategories = [
  'Restaurant',
  'Bakery',
  'Cafe',
  'Bar & Restaurant',
  'Food & Beverage',
  'Retail',
  'Arts & Crafts',
  'Entertainment',
  'Sports & Hobbies',
  'Grocery',
  'Services',
  'Health & Wellness',
  'Other',
];

// Sample data
const sampleEvents = [
  {
    id: '1',
    title: 'New Year Jazz Concert',
    date: '2026-01-10',
    time: '19:00',
    endTime: '22:00',
    type: 'concert',
    description: 'Live jazz music at the village square featuring local artists.',
    location: 'Village Square',
    link: 'https://example.com/jazz-concert',
    businessId: '1',
  },
  {
    id: '2',
    title: 'Weekly Farmers Market',
    date: '2026-01-18',
    time: '08:00',
    endTime: '13:00',
    type: 'market',
    description: 'Fresh produce and artisan goods from local vendors.',
    location: 'Main Street',
    link: '',
    businessId: '',
  },
  {
    id: '3',
    title: 'Pottery Workshop',
    date: '2026-01-25',
    time: '14:00',
    endTime: '16:30',
    type: 'workshop',
    description: 'Learn the basics of pottery making with expert instructors. Register at https://example.com/pottery',
    location: 'Art Studio on 3rd',
    link: '',
    businessId: '2',
  },
  {
    id: '4',
    title: 'Wine Tasting Evening',
    date: '2026-02-07',
    time: '18:00',
    endTime: '21:00',
    type: 'other',
    description: 'Sample wines from local vineyards paired with artisan cheeses.',
    location: 'The Vine Bar',
    link: 'https://example.com/wine-tasting',
    businessId: '3',
  },
  {
    id: '5',
    title: 'Community Cleanup Day',
    date: '2026-02-14',
    time: '09:00',
    endTime: '12:00',
    type: 'community',
    description: 'Join us for a neighborhood cleanup and beautification event.',
    location: 'Village Park',
    link: '',
    businessId: '',
  },
  {
    id: '6',
    title: 'Spring Festival',
    date: '2026-03-21',
    time: '11:00',
    endTime: '20:00',
    type: 'festival',
    description: 'Annual spring celebration with food, music, and activities for all ages.',
    location: 'Main Street',
    link: 'https://example.com/spring-festival',
    businessId: '',
  },
];

const sampleBusinesses = [
  {
    id: '1',
    name: "Devil's Teeth Baking Company",
    category: 'Bakery',
    description: 'Award-winning bakery known for delicious pastries and breakfast sandwiches.',
    address: '3619 Balboa St, San Francisco, CA 94121',
    phone: '(628) 280-1974',
    website: 'https://www.devilsteethbakingcompany.com',
    hours: 'Mon-Fri: 7am-2pm',
    image: '',
  },
  {
    id: '2',
    name: 'Simple Pleasures Cafe',
    category: 'Cafe',
    description: 'A San Francisco Legacy Business since 1978, serving coffee, bagels, and comfort food in a cozy atmosphere.',
    address: '3434 Balboa St, San Francisco, CA 94121',
    phone: '(415) 387-4022',
    website: '',
    hours: 'Mon-Thu: 6am-9pm, Fri-Sat: 6am-12am',
    image: '',
  },
  {
    id: '3',
    name: 'La Promenade Café',
    category: 'Cafe',
    description: 'Local neighborhood café serving specialty coffee, teas, sandwiches, pastries, desserts, and beer & wine.',
    address: '3643 Balboa St, San Francisco, CA 94121',
    phone: '(415) 221-6063',
    website: 'https://www.lapromenadecafe.com',
    hours: 'Mon-Wed: 7am-6pm, Thu-Fri: 7am-8pm, Sat: 8am-8pm, Sun: 8am-6pm',
    image: '',
  },
  {
    id: '4',
    name: 'Butter Love Bakeshop',
    category: 'Bakery',
    description: 'Award-winning bakery specializing in all-butter crusts and pastries, pies, cakes, sticky buns, and cookies.',
    address: '3717 Balboa St, San Francisco, CA 94121',
    phone: '(415) 702-6344',
    website: 'https://www.butterlovebakeshop.com',
    hours: 'Tue-Thu: 7:30am-2pm, Fri-Sun: 8am-4pm, Closed Mon',
    image: '',
  },
  {
    id: '5',
    name: 'Balboa Theater',
    category: 'Entertainment',
    description: 'Historic independent movie theater opened in 1926, showing first-run films and special screenings in a beautiful vintage setting.',
    address: '3630 Balboa St, San Francisco, CA 94121',
    phone: '(415) 221-8184',
    website: 'https://www.balboamovies.com',
    hours: 'Check website for showtimes',
    image: '',
  },
  {
    id: '6',
    name: 'Hockey Haven',
    category: 'Bar & Restaurant',
    description: 'Neighborhood dive bar and hidden culinary gem known for SF-famous Irish Coffee and great food. Dog-friendly with backyard area.',
    address: '3625 Balboa St, San Francisco, CA 94121',
    phone: '(415) 752-4413',
    website: '',
    hours: 'Mon-Sat: 12pm-2am, Sun: 10am-2am',
    image: '',
  },
  {
    id: '7',
    name: 'Noise',
    category: 'Retail',
    description: 'Family-run record store, art gallery & live music venue. Specializing in used vinyl records of all genres and eras. Buy, trade & consign.',
    address: '3427 Balboa St, San Francisco, CA 94121',
    phone: '(415) 702-6006',
    website: 'https://www.sanfrancisconoise.com',
    hours: 'Daily: 12pm-3pm',
    image: '',
  },
  {
    id: '8',
    name: "Chino's Taqueria",
    category: 'Restaurant',
    description: 'Popular Mexican restaurant in the Outer Richmond serving authentic tacos and burritos.',
    address: '3416 Balboa St, San Francisco, CA 94121',
    phone: '(415) 668-9956',
    website: '',
    hours: 'Mon-Fri: 10:30am-9pm',
    image: '',
  },
  {
    id: '9',
    name: 'Purple Kow',
    category: 'Cafe',
    description: 'Popular bubble tea shop established in 2011, located next to the Balboa Theater.',
    address: '3620 Balboa St, San Francisco, CA 94121',
    phone: '(415) 387-9009',
    website: 'https://purplekow.com',
    hours: '',
    image: '',
  },
  {
    id: '10',
    name: 'Mr. Banh Mi',
    category: 'Restaurant',
    description: 'Vietnamese restaurant serving fresh banh mi sandwiches and other Vietnamese favorites.',
    address: '3605 Balboa St, San Francisco, CA 94121',
    phone: '',
    website: '',
    hours: '',
    image: '',
  },
  {
    id: '11',
    name: 'The Laundromat SF',
    category: 'Restaurant',
    description: 'Unique restaurant housed in a former laundromat, serving rip and dip bagels in the morning and pizza at night.',
    address: '3725 Balboa St, San Francisco, CA 94121',
    phone: '(415) 379-4340',
    website: 'https://www.thelaundromatsf.com',
    hours: 'Wed-Sun: Bagels 8am-2pm, Pizza 5pm-9pm. Closed Mon-Tue.',
    image: '',
  },
  {
    id: '12',
    name: 'Cielito Lindo',
    category: 'Restaurant',
    description: 'Popular Mexican restaurant known for delicious and authentic dishes, including quesabirria tacos.',
    address: '3440 Balboa St, San Francisco, CA 94121',
    phone: '(415) 742-0959',
    website: '',
    hours: 'Daily: 8:30am-7:30pm',
    image: '',
  },
  {
    id: '13',
    name: 'Creative IQ Art Studio',
    category: 'Arts & Crafts',
    description: 'Community art studio offering art classes, camps, workshops, and parties for kids, teens, adults and all experience levels.',
    address: '3423 Balboa St, San Francisco, CA 94121',
    phone: '(415) 742-4274',
    website: 'https://www.creativeiqsf.com',
    hours: '',
    image: '',
  },
  {
    id: '14',
    name: 'Balboa Produce Market',
    category: 'Grocery',
    description: 'Neighborhood grocery and produce market known for fresh fruits and vegetables.',
    address: '3635 Balboa St, San Francisco, CA 94121',
    phone: '(415) 387-3289',
    website: '',
    hours: 'Mon-Sat: 10:30am-8pm',
    image: '',
  },
  {
    id: '15',
    name: "Little Henry's",
    category: 'Restaurant',
    description: 'Beloved Italian restaurant bringing the essence of Italian cuisine through breakfast, brunch, and seafood specialties.',
    address: '3600 Balboa St, San Francisco, CA 94121',
    phone: '(415) 387-8761',
    website: '',
    hours: 'Tue-Sat: 11am-8pm, Closed Mon',
    image: '',
  },
  {
    id: '16',
    name: 'Eye and Hand Society',
    category: 'Retail',
    description: 'Unique retail shop established in 2018 offering curated goods and gifts.',
    address: '3425 Balboa St, San Francisco, CA 94121',
    phone: '',
    website: '',
    hours: 'Wed-Sat: 12pm-7pm',
    image: '',
  },
  {
    id: '17',
    name: 'Al-Masri Egyptian Restaurant',
    category: 'Restaurant',
    description: 'The only Egyptian restaurant in Northern California serving fresh and authentic Egyptian cuisine with live music and belly dance.',
    address: '4031 Balboa St, San Francisco, CA 94121',
    phone: '(415) 876-2300',
    website: 'https://www.almasrisfca.com',
    hours: 'Fri-Sun: 5:30pm-10:30pm',
    image: '',
  },
  {
    id: '18',
    name: 'Dimdoduc',
    category: 'Restaurant',
    description: 'Popular dim sum spot with varied and flavorful selection including har gow, cha siu bao, and custard buns. Cash only, best for takeout.',
    address: '3398 Balboa St, San Francisco, CA 94121',
    phone: '(415) 463-5126',
    website: 'https://www.dimdoduc-sf.com',
    hours: 'Daily: 7:30am-6pm',
    image: '',
  },
  {
    id: '19',
    name: 'Shanghai House',
    category: 'Restaurant',
    description: 'Homestyle Shanghai fare restaurant serving authentic Shanghainese cuisine. Cash only.',
    address: '3641 Balboa St, San Francisco, CA 94121',
    phone: '(415) 831-9288',
    website: '',
    hours: '',
    image: '',
  },
  {
    id: '20',
    name: 'Balboa Green Garden Florist',
    category: 'Services',
    description: 'Local florist proudly serving the community for over 45 years with beautiful floral arrangements and delivery.',
    address: '3637 Balboa St, San Francisco, CA 94121',
    phone: '(415) 802-5304',
    website: 'https://bggflorist.com',
    hours: 'Daily: 9am-7pm',
    image: '',
  },
  {
    id: '21',
    name: 'Taste of Fusion',
    category: 'Restaurant',
    description: 'Chinese dim sum restaurant offering a variety of traditional and fusion dishes.',
    address: '3497 Balboa St, San Francisco, CA 94121',
    phone: '(415) 742-4560',
    website: 'https://www.tasteoffusionca.com',
    hours: 'Mon-Fri: 11am-3pm & 5pm-9pm, Sat-Sun: 10am-3pm & 5pm-9pm',
    image: '',
  },
  {
    id: '22',
    name: 'Kio Ramen Izakaya',
    category: 'Restaurant',
    description: 'Neighborhood ramen restaurant opened in 2015 serving authentic Japanese ramen and izakaya dishes.',
    address: '3528 Balboa St, San Francisco, CA 94121',
    phone: '(415) 742-5868',
    website: 'https://www.kioramen.com',
    hours: 'Wed-Sun: 12pm-8pm, Closed Mon-Tue',
    image: '',
  },
  {
    id: '23',
    name: 'Eat Americana',
    category: 'Restaurant',
    description: 'American restaurant serving comfort food classics for lunch and dinner.',
    address: '3532 Balboa St, San Francisco, CA 94121',
    phone: '(415) 387-2893',
    website: 'https://www.eatamericana.com',
    hours: 'Wed-Sun: 11am-3pm & 5pm-8pm, Closed Mon-Tue',
    image: '',
  },
  {
    id: '24',
    name: 'Rampant Wine Co.',
    category: 'Bar & Restaurant',
    description: 'Neighborhood bottle shop and natural wine bar featuring local and natural wines.',
    address: '3516 Balboa St, San Francisco, CA 94121',
    phone: '',
    website: 'https://rampantwine.com',
    hours: '',
    image: '',
  },
  {
    id: '25',
    name: 'Superior Palace',
    category: 'Restaurant',
    description: 'Chinese restaurant with a casual and welcoming atmosphere, popular with families and groups.',
    address: '3546 Balboa St, San Francisco, CA 94121',
    phone: '(415) 387-1386',
    website: '',
    hours: 'Mon-Fri: 11am-8:30pm',
    image: '',
  },
  {
    id: '26',
    name: 'Kim Son Vietnamese Restaurant',
    category: 'Restaurant',
    description: 'Traditional Vietnamese restaurant with a large variety of specialty spring rolls and delicious pho.',
    address: '3614 Balboa St, San Francisco, CA 94121',
    phone: '(415) 221-3811',
    website: '',
    hours: 'Mon-Wed, Fri-Sun: 11am-8pm, Closed Thu',
    image: '',
  },
  {
    id: '27',
    name: 'Balboa Teriyaki',
    category: 'Restaurant',
    description: 'Japanese restaurant known for fresh and generous portions of sushi, sashimi, poke, rolls, donburi, bentos, and udon.',
    address: '3536 Balboa St, San Francisco, CA 94121',
    phone: '(415) 751-8895',
    website: '',
    hours: 'Mon, Tue, Thu, Fri: 11am-8pm, Closed Wed',
    image: '',
  },
  {
    id: '28',
    name: 'Simple Pleasures Coffee Roasting',
    category: 'Cafe',
    description: 'Local coffee roastery offering freshly roasted coffee beans, just a few doors from Simple Pleasures Cafe.',
    address: '3422 Balboa St, San Francisco, CA 94121',
    phone: '',
    website: '',
    hours: '',
    image: '',
  },
  // Spa & Wellness
  {
    id: '29',
    name: 'Richmond Serenity Spa',
    category: 'Health & Wellness',
    description: 'Day spa established in 2015 with beautifully remodeled interior offering facials, massages, and skin care treatments.',
    address: '3446 Balboa St, San Francisco, CA 94121',
    phone: '(415) 702-6468',
    website: 'https://richmondserenityspa.com',
    hours: 'Daily: 10am-8pm',
    image: '',
  },
  {
    id: '30',
    name: 'Purusha Yoga',
    category: 'Health & Wellness',
    description: 'Women-owned yoga and pilates sanctuary offering Hatha, Vinyasa, Yin, Breathwork, Meditation, Prenatal, and more since 2010.',
    address: '3729 Balboa St, San Francisco, CA 94121',
    phone: '(415) 439-0848',
    website: 'https://purushayoga.org',
    hours: 'Daily: 6am-9pm (varies)',
    image: '',
  },
  {
    id: '31',
    name: 'The Yoga Shala SF',
    category: 'Health & Wellness',
    description: 'Woman-owned hot yoga studio offering a variety of yoga classes.',
    address: '2010 Balboa St, San Francisco, CA 94121',
    phone: '(415) 246-8749',
    website: 'https://theyogashalasf.com',
    hours: '',
    image: '',
  },
  // Services
  {
    id: '32',
    name: 'Balboa Business Center',
    category: 'Services',
    description: 'Full-service shipping center (UPS, FedEx, USPS), mailbox rental, printing, copying, notary public, passport photos, and office supplies.',
    address: '3739 Balboa St, San Francisco, CA 94121',
    phone: '(415) 751-8315',
    website: 'https://www.balboabusinesscenter.com',
    hours: '',
    image: '',
  },
  {
    id: '33',
    name: 'SF Green Clean',
    category: 'Services',
    description: "San Francisco's premier eco-friendly dry cleaner using gentle soap and water and the best dry-cleaning solution on the market.",
    address: '4001 Balboa St, San Francisco, CA 94121',
    phone: '(415) 567-2100',
    website: 'https://www.sfgreenclean.com',
    hours: 'Mon-Fri: 9am-4pm',
    image: '',
  },
  {
    id: '34',
    name: 'Payless Cleaners',
    category: 'Services',
    description: 'Neighborhood dry cleaning and laundry services for shirts, blouses, pants, dresses, suits, and jackets.',
    address: '3421 Balboa St, San Francisco, CA 94121',
    phone: '(415) 752-1225',
    website: '',
    hours: 'Mon-Tue, Thu: 8:30am-6:30pm, Fri: 8:30am-5:30pm, Sat: 9am-5pm',
    image: '',
  },
  {
    id: '35',
    name: 'The Hairapist',
    category: 'Services',
    description: 'Expert hair salon offering comprehensive services for all hair types including extensions, balayage, color correction, and services for chemotherapy patients.',
    address: '3412 Balboa St, San Francisco, CA 94121',
    phone: '(415) 806-4247',
    website: '',
    hours: 'Daily: 10am-6pm (by appointment)',
    image: '',
  },
  {
    id: '36',
    name: 'H & Q Beauty Salon',
    category: 'Services',
    description: 'Beauty salon offering haircuts, styling, permanent waves, and hair removal services.',
    address: '3651 Balboa St, San Francisco, CA 94121',
    phone: '(415) 666-0288',
    website: '',
    hours: '',
    image: '',
  },
  // Food & Beverage (Liquor/Wine/Bottle Shops)
  {
    id: '37',
    name: 'Slake San Francisco Bottle & Sundry',
    category: 'Food & Beverage',
    description: 'Neighborhood bottle shop featuring a curated selection of wines, beers, spirits, pantry essentials, and choice provisions.',
    address: '3239 Balboa St, San Francisco, CA 94121',
    phone: '(415) 322-8646',
    website: 'https://slakesf.com',
    hours: 'Wed-Sat: 12pm-8pm, Sun: 12pm-6pm, Closed Mon-Tue',
    image: '',
  },
  {
    id: '38',
    name: 'Balboa Liquor and Deli',
    category: 'Food & Beverage',
    description: 'Classic neighborhood liquor store and deli established in 2009, offering beer, wine, spirits, and convenience items.',
    address: '3524 Balboa St, San Francisco, CA 94121',
    phone: '(415) 750-3882',
    website: '',
    hours: 'Daily: 10am-8pm (hours vary)',
    image: '',
  },
  {
    id: '39',
    name: 'Richmond Market',
    category: 'Food & Beverage',
    description: 'Family-owned convenience store with a large selection of beer, wine, cigarettes, snacks, frozen food, and groceries.',
    address: '3950 Balboa St, San Francisco, CA 94121',
    phone: '(415) 221-0813',
    website: '',
    hours: 'Mon-Thu: 9:30am-11pm, Fri-Sat: 9:30am-12am, Sun: 9:30am-11pm',
    image: '',
  },
  // Optometrist & Eyewear
  {
    id: '40',
    name: 'Custom Eyes Optometry',
    category: 'Health & Wellness',
    description: 'Full-service optometry office providing eye exams, glasses, and contact lenses. Dr. Geri Cheng, O.D.',
    address: '3518 Balboa St, San Francisco, CA 94121',
    phone: '(415) 386-3937',
    website: 'https://www.3518balboa.com',
    hours: 'Mon: 10am-4pm, Tue: 10am-6pm',
    image: '',
  },
  // Dentists
  {
    id: '41',
    name: 'Family Dentistry - Raymond Ginn DDS',
    category: 'Health & Wellness',
    description: 'General and family dentistry services including cleanings, pediatric dentistry, and preventive care.',
    address: '3520 Balboa St, San Francisco, CA 94121',
    phone: '(415) 668-1985',
    website: '',
    hours: '',
    image: '',
  },
  {
    id: '42',
    name: 'Richmond Neighborhood Family Dental',
    category: 'Health & Wellness',
    description: 'Modern family dental office offering personalized, affordable care in a friendly environment. Dr. El Natour.',
    address: '3427 Balboa St, San Francisco, CA 94121',
    phone: '(415) 221-8100',
    website: '',
    hours: '',
    image: '',
  },
  {
    id: '43',
    name: 'Balboa Dental Care',
    category: 'Health & Wellness',
    description: 'General dentistry practice known for excellent customer service. Dr. Ted Nguyen, DDS.',
    address: '3544 Balboa St, San Francisco, CA 94121',
    phone: '(415) 387-8810',
    website: '',
    hours: '',
    image: '',
  },
  // Pet Services
  {
    id: '44',
    name: 'Balboa Pet Hospital',
    category: 'Services',
    description: 'Full-service veterinary hospital serving the Outer Richmond since 1948. Offering wellness exams, surgery, dental care, and more.',
    address: '3329 Balboa St, San Francisco, CA 94121',
    phone: '(415) 752-3300',
    website: 'https://balboapethospital.com',
    hours: 'Mon-Fri: 7:30am-6pm, Sat: 8am-3pm, Closed Sun',
    image: '',
  },
  // Real Estate
  {
    id: '45',
    name: 'Sequoia Real Estate',
    category: 'Services',
    description: 'Full-service real estate brokerage and concierge service for buying and selling homes in San Francisco.',
    address: '3595 Balboa St, San Francisco, CA 94121',
    phone: '(415) 702-9184',
    website: 'https://sequoia-re.com',
    hours: 'Mon-Fri: 9am-5pm',
    image: '',
  },
  // Church
  {
    id: '46',
    name: 'Full Life Christian Center',
    category: 'Other',
    description: 'Assemblies of God church serving the Outer Richmond community. Sunday worship at 10:30am.',
    address: '3535 Balboa St, San Francisco, CA 94121',
    phone: '(415) 668-0266',
    website: 'https://sfflcc.org',
    hours: 'Mon-Fri: 9am-6pm, Sun worship: 10:30am',
    image: '',
  },
  // Hardware & Locksmith
  {
    id: '47',
    name: 'Crown Locksmith & Safe',
    category: 'Services',
    description: 'Family-owned locksmith, safe, and security company serving San Francisco since 1957. Hardware store with fully equipped service vans.',
    address: '3615 Balboa St, San Francisco, CA 94121',
    phone: '(415) 221-9086',
    website: 'https://crownlock.com',
    hours: 'Mon-Fri: 9am-5:30pm',
    image: '',
  },
  // Sports & Hobbies
  {
    id: '48',
    name: 'San Francisco Archery Shop',
    category: 'Sports & Hobbies',
    description: "The Bay Area's friendliest archery shop since 1957. Offering lessons, coaching, equipment rentals for Golden Gate Park, retail sales, and repair services.",
    address: '3795 Balboa St, San Francisco, CA 94121',
    phone: '(415) 751-2776',
    website: 'https://sfarcheryshop.com',
    hours: 'Daily: 12pm-8pm',
    image: '',
  },
];

// State
let isAuthenticated = false;
let events = [];
let businesses = [];
let eventTypes = [];
let businessCategories = [];

// Initialize data
function initializeData() {
  // Event types
  if (!localStorage.getItem(STORAGE_KEYS.EVENT_TYPES)) {
    localStorage.setItem(STORAGE_KEYS.EVENT_TYPES, JSON.stringify(defaultEventTypes));
  }
  eventTypes = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENT_TYPES));

  // Business categories
  if (!localStorage.getItem(STORAGE_KEYS.BUSINESS_CATEGORIES)) {
    localStorage.setItem(STORAGE_KEYS.BUSINESS_CATEGORIES, JSON.stringify(defaultBusinessCategories));
  }
  businessCategories = JSON.parse(localStorage.getItem(STORAGE_KEYS.BUSINESS_CATEGORIES));

  // Events
  if (!localStorage.getItem(STORAGE_KEYS.EVENTS)) {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(sampleEvents));
  }
  events = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS));

  // Businesses
  if (!localStorage.getItem(STORAGE_KEYS.BUSINESSES)) {
    localStorage.setItem(STORAGE_KEYS.BUSINESSES, JSON.stringify(sampleBusinesses));
  }
  businesses = JSON.parse(localStorage.getItem(STORAGE_KEYS.BUSINESSES));
}

// Save data functions
function saveEvents() {
  localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
}

function saveBusinesses() {
  localStorage.setItem(STORAGE_KEYS.BUSINESSES, JSON.stringify(businesses));
}

function saveEventTypes() {
  localStorage.setItem(STORAGE_KEYS.EVENT_TYPES, JSON.stringify(eventTypes));
}

function saveBusinessCategories() {
  localStorage.setItem(STORAGE_KEYS.BUSINESS_CATEGORIES, JSON.stringify(businessCategories));
}

// DOM Elements
const authBtn = document.getElementById('auth-btn');
const authBadge = document.getElementById('auth-badge');
const settingsNavBtn = document.getElementById('settings-nav-btn');
const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');
const eventsList = document.getElementById('events-list');
const businessList = document.getElementById('business-list');
const eventFilter = document.getElementById('event-filter');
const categoryFilter = document.getElementById('category-filter');
const addEventBtn = document.getElementById('add-event-btn');
const addBusinessBtn = document.getElementById('add-business-btn');
const eventFormContainer = document.getElementById('event-form-container');
const businessFormContainer = document.getElementById('business-form-container');
const eventForm = document.getElementById('event-form');
const businessForm = document.getElementById('business-form');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

// Navigation
function switchView(tabName) {
  views.forEach(view => view.classList.remove('active'));
  views.forEach(view => view.classList.add('hidden'));
  navBtns.forEach(btn => btn.classList.remove('active'));

  const targetView = document.getElementById(`${tabName}-view`);
  if (targetView) {
    targetView.classList.remove('hidden');
    targetView.classList.add('active');
  }

  navBtns.forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('active');
    }
  });

  // Render settings if switching to settings view
  if (tabName === 'settings') {
    renderSettings();
  }
}

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    switchView(btn.dataset.tab);
  });
});

// Authentication
authBtn.addEventListener('click', () => {
  if (isAuthenticated) {
    isAuthenticated = false;
    updateAuthUI();
    switchView('calendar');
  } else {
    switchView('login');
  }
});

document.getElementById('cancel-login-btn').addEventListener('click', () => {
  switchView('calendar');
  loginError.classList.add('hidden');
  document.getElementById('merchant-code').value = '';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const code = document.getElementById('merchant-code').value;
  if (code === MERCHANT_CODE) {
    isAuthenticated = true;
    updateAuthUI();
    switchView('calendar');
    document.getElementById('merchant-code').value = '';
    loginError.classList.add('hidden');
  } else {
    loginError.classList.remove('hidden');
  }
});

function updateAuthUI() {
  if (isAuthenticated) {
    authBtn.textContent = 'Logout';
    authBtn.classList.remove('merchant-btn');
    authBtn.classList.add('logout-btn');
    authBadge.classList.remove('hidden');
    settingsNavBtn.classList.remove('hidden');
    addEventBtn.classList.remove('hidden');
    addBusinessBtn.classList.remove('hidden');
  } else {
    authBtn.textContent = 'Merchant Login';
    authBtn.classList.add('merchant-btn');
    authBtn.classList.remove('logout-btn');
    authBadge.classList.add('hidden');
    settingsNavBtn.classList.add('hidden');
    addEventBtn.classList.add('hidden');
    addBusinessBtn.classList.add('hidden');
    eventFormContainer.classList.add('hidden');
    businessFormContainer.classList.add('hidden');
  }
  renderEvents();
  renderBusinesses();
  populateEventTypeSelects();
  populateBusinessCategorySelect();
}

// Populate event type dropdowns
function populateEventTypeSelects() {
  const eventTypeSelect = document.getElementById('event-type');
  const eventFilterSelect = document.getElementById('event-filter');

  // Event form select
  eventTypeSelect.innerHTML = eventTypes.map(type =>
    `<option value="${type.id}">${escapeHtml(type.label)}</option>`
  ).join('');

  // Filter select
  eventFilterSelect.innerHTML = '<option value="all">All Events</option>' +
    eventTypes.map(type =>
      `<option value="${type.id}">${escapeHtml(type.label)}</option>`
    ).join('');
}

// Populate business category select
function populateBusinessCategorySelect() {
  const categorySelect = document.getElementById('business-category');
  const categoryFilterSelect = document.getElementById('category-filter');

  categorySelect.innerHTML = businessCategories.map(cat =>
    `<option value="${cat}">${escapeHtml(cat)}</option>`
  ).join('');

  categoryFilterSelect.innerHTML = '<option value="all">All Categories</option>' +
    businessCategories.map(cat =>
      `<option value="${cat}">${escapeHtml(cat)}</option>`
    ).join('');
}

// Linkify text - convert URLs to clickable links
function linkifyText(text) {
  if (!text) return '';
  const urlRegex = /(https?:\/\/[^\s<]+)/g;
  return escapeHtml(text).replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="event-link">$1</a>');
}

// Events
let showPastEvents = false;

function renderEvents() {
  const filterValue = eventFilter.value;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let filteredEvents = events.filter(event => {
    // Filter by type
    if (filterValue !== 'all' && event.type !== filterValue) {
      return false;
    }

    // Filter by date (past/future) unless showing past events
    if (!showPastEvents) {
      const eventDate = new Date(event.date + 'T00:00:00');
      if (eventDate < today) {
        return false;
      }
    }

    return true;
  });

  // Sort by date (oldest first / ascending)
  filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Update past events button visibility and text
  const pastEventsBtn = document.getElementById('toggle-past-events');
  const pastEventsCount = events.filter(event => {
    const eventDate = new Date(event.date + 'T00:00:00');
    return eventDate < today && (filterValue === 'all' || event.type === filterValue);
  }).length;

  if (pastEventsCount > 0) {
    pastEventsBtn.parentElement.style.display = 'block';
    pastEventsBtn.textContent = showPastEvents
      ? 'Hide Past Events'
      : `Show Past Events (${pastEventsCount})`;
  } else {
    pastEventsBtn.parentElement.style.display = 'none';
  }

  if (filteredEvents.length === 0) {
    eventsList.innerHTML = `<p class="no-events">${showPastEvents ? 'No events found.' : 'No upcoming events found.'}</p>`;
    return;
  }

  eventsList.innerHTML = filteredEvents.map(event => {
    const date = new Date(event.date + 'T00:00:00');
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const business = businesses.find(b => b.id === event.businessId);
    const eventType = eventTypes.find(t => t.id === event.type);
    const typeLabel = eventType ? eventType.label : event.type;

    // Format time range
    let timeDisplay = '';
    if (event.time) {
      timeDisplay = formatTime(event.time);
      if (event.endTime) {
        timeDisplay += ` - ${formatTime(event.endTime)}`;
      }
    }

    // Business host display with optional image
    let hostDisplay = '';
    if (business) {
      if (business.image) {
        hostDisplay = `
          <div class="event-host-with-image">
            <img src="${business.image}" alt="${escapeHtml(business.name)}" class="event-host-thumbnail">
            <span>Hosted by: ${escapeHtml(business.name)}</span>
          </div>
        `;
      } else {
        hostDisplay = `<p class="event-host">Hosted by: ${escapeHtml(business.name)}</p>`;
      }
    }

    return `
      <div class="event-card card">
        <div class="event-date">
          <span class="date-day">${day}</span>
          <span class="date-month">${month}</span>
        </div>
        <div class="event-details">
          <span class="event-type type-${event.type}">${escapeHtml(typeLabel)}</span>
          <h3>${escapeHtml(event.title)}</h3>
          <p class="event-meta">
            ${timeDisplay ? `<span>${timeDisplay}</span>` : ''}
            ${event.location ? `<span> &bull; ${escapeHtml(event.location)}</span>` : ''}
          </p>
          <p class="event-description">${linkifyText(event.description)}</p>
          ${event.link ? `<a href="${escapeHtml(event.link)}" target="_blank" rel="noopener noreferrer" class="event-link">More Info &rarr;</a>` : ''}
          ${hostDisplay}
        </div>
        ${isAuthenticated ? `
          <div class="event-actions">
            <button class="btn btn-secondary btn-small" onclick="editEvent('${event.id}')">Edit</button>
            <button class="btn btn-danger btn-small" onclick="deleteEvent('${event.id}')">Delete</button>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function formatTime(time) {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
}

eventFilter.addEventListener('change', () => {
  renderEvents();
  renderCalendar();
});

// Past Events Toggle
document.getElementById('toggle-past-events').addEventListener('click', () => {
  showPastEvents = !showPastEvents;
  renderEvents();
});

// View Toggle (List / Calendar)
let currentView = 'list';
let currentCalendarDate = new Date();

const viewToggleBtns = document.querySelectorAll('.view-toggle-btn');
const eventsListContainer = document.getElementById('events-list');
const eventsCalendarContainer = document.getElementById('events-calendar');

viewToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    if (view === currentView) return;

    currentView = view;
    viewToggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (view === 'list') {
      eventsListContainer.classList.remove('hidden');
      eventsCalendarContainer.classList.add('hidden');
    } else {
      eventsListContainer.classList.add('hidden');
      eventsCalendarContainer.classList.remove('hidden');
      renderCalendar();
    }
  });
});

// Calendar Rendering
function renderCalendar() {
  const filterValue = eventFilter.value;
  const filteredEvents = events.filter(event =>
    filterValue === 'all' || event.type === filterValue
  );

  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();

  // Update month/year display
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  document.getElementById('calendar-month-year').textContent = `${monthNames[month]} ${year}`;

  // Get first day of month and total days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  // Get today for highlighting
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  // Build calendar days
  const calendarDays = document.getElementById('calendar-days');
  calendarDays.innerHTML = '';

  // Previous month days
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startingDay - 1; i >= 0; i--) {
    const day = prevMonthLastDay - i;
    const dateStr = formatDateStr(year, month - 1, day);
    const dayEvents = getEventsForDate(filteredEvents, dateStr);
    calendarDays.appendChild(createCalendarDay(day, dateStr, dayEvents, true, false));
  }

  // Current month days
  for (let day = 1; day <= totalDays; day++) {
    const dateStr = formatDateStr(year, month, day);
    const dayEvents = getEventsForDate(filteredEvents, dateStr);
    const isToday = isCurrentMonth && today.getDate() === day;
    calendarDays.appendChild(createCalendarDay(day, dateStr, dayEvents, false, isToday));
  }

  // Next month days to fill the grid
  const remainingDays = 42 - (startingDay + totalDays); // 6 rows * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    const dateStr = formatDateStr(year, month + 1, day);
    const dayEvents = getEventsForDate(filteredEvents, dateStr);
    calendarDays.appendChild(createCalendarDay(day, dateStr, dayEvents, true, false));
  }
}

function formatDateStr(year, month, day) {
  // Handle month overflow/underflow
  const date = new Date(year, month, day);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getEventsForDate(filteredEvents, dateStr) {
  return filteredEvents.filter(event => event.date === dateStr);
}

function createCalendarDay(day, dateStr, dayEvents, isOtherMonth, isToday) {
  const div = document.createElement('div');
  div.className = 'calendar-day';
  if (isOtherMonth) div.classList.add('other-month');
  if (isToday) div.classList.add('today');
  if (dayEvents.length > 0) div.classList.add('has-events');

  div.innerHTML = `
    <div class="calendar-day-number">${day}</div>
    <div class="calendar-day-events">
      ${dayEvents.slice(0, 2).map(event => `
        <div class="calendar-event-dot type-${event.type}">${escapeHtml(event.title)}</div>
      `).join('')}
      ${dayEvents.length > 2 ? `<div class="calendar-more-events">+${dayEvents.length - 2} more</div>` : ''}
    </div>
  `;

  div.addEventListener('click', () => openDayEventsModal(dateStr, dayEvents));
  return div;
}

// Month Navigation
document.getElementById('prev-month').addEventListener('click', () => {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
  renderCalendar();
});

// Day Events Modal
function openDayEventsModal(dateStr, dayEvents) {
  const modal = document.getElementById('day-events-modal');
  const modalTitle = document.getElementById('modal-date-title');
  const modalEventsList = document.getElementById('modal-events-list');

  // Format the date for display
  const date = new Date(dateStr + 'T00:00:00');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  modalTitle.textContent = date.toLocaleDateString('en-US', options);

  if (dayEvents.length === 0) {
    modalEventsList.innerHTML = '<p class="no-events-day">No events on this day.</p>';
  } else {
    modalEventsList.innerHTML = dayEvents.map(event => {
      const eventType = eventTypes.find(t => t.id === event.type);
      const typeLabel = eventType ? eventType.label : event.type;
      let timeDisplay = '';
      if (event.time) {
        timeDisplay = formatTime(event.time);
        if (event.endTime) {
          timeDisplay += ` - ${formatTime(event.endTime)}`;
        }
      }

      return `
        <div class="modal-event-item">
          <span class="event-type type-${event.type}">${escapeHtml(typeLabel)}</span>
          <h4>${escapeHtml(event.title)}</h4>
          <p class="event-meta">
            ${timeDisplay ? `<span>${timeDisplay}</span>` : ''}
            ${event.location ? `<span> &bull; ${escapeHtml(event.location)}</span>` : ''}
          </p>
          ${event.description ? `<p class="event-description">${escapeHtml(event.description)}</p>` : ''}
          ${event.link ? `<a href="${escapeHtml(event.link)}" target="_blank" rel="noopener noreferrer" class="event-link">More Info &rarr;</a>` : ''}
        </div>
      `;
    }).join('');
  }

  modal.classList.remove('hidden');
}

document.getElementById('close-day-modal').addEventListener('click', () => {
  document.getElementById('day-events-modal').classList.add('hidden');
});

// Close modal when clicking outside
document.getElementById('day-events-modal').addEventListener('click', (e) => {
  if (e.target.id === 'day-events-modal') {
    document.getElementById('day-events-modal').classList.add('hidden');
  }
});

// Add/Edit Event Form
addEventBtn.addEventListener('click', () => {
  resetEventForm();
  eventFormContainer.classList.remove('hidden');
  populateBusinessSelect();
});

document.getElementById('cancel-event-btn').addEventListener('click', () => {
  eventFormContainer.classList.add('hidden');
  resetEventForm();
});

function resetEventForm() {
  eventForm.reset();
  document.getElementById('event-edit-id').value = '';
  document.getElementById('event-form-title').textContent = 'Add New Event';
  document.getElementById('event-submit-btn').textContent = 'Add Event';
}

function populateBusinessSelect() {
  const select = document.getElementById('event-business');
  select.innerHTML = '<option value="">-- Select a business --</option>';
  businesses.forEach(business => {
    select.innerHTML += `<option value="${business.id}">${escapeHtml(business.name)}</option>`;
  });
}

window.editEvent = function(id) {
  const event = events.find(e => e.id === id);
  if (!event) return;

  document.getElementById('event-edit-id').value = event.id;
  document.getElementById('event-title').value = event.title;
  document.getElementById('event-date').value = event.date;
  document.getElementById('event-time').value = event.time || '';
  document.getElementById('event-end-time').value = event.endTime || '';
  document.getElementById('event-type').value = event.type;
  document.getElementById('event-location').value = event.location || '';
  document.getElementById('event-description').value = event.description || '';
  document.getElementById('event-link').value = event.link || '';

  populateBusinessSelect();
  document.getElementById('event-business').value = event.businessId || '';

  document.getElementById('event-form-title').textContent = 'Edit Event';
  document.getElementById('event-submit-btn').textContent = 'Save Changes';
  eventFormContainer.classList.remove('hidden');

  // Scroll to form
  eventFormContainer.scrollIntoView({ behavior: 'smooth' });
};

eventForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const editId = document.getElementById('event-edit-id').value;
  const eventData = {
    title: document.getElementById('event-title').value,
    date: document.getElementById('event-date').value,
    time: document.getElementById('event-time').value,
    endTime: document.getElementById('event-end-time').value,
    type: document.getElementById('event-type').value,
    location: document.getElementById('event-location').value,
    description: document.getElementById('event-description').value,
    link: document.getElementById('event-link').value,
    businessId: document.getElementById('event-business').value,
  };

  if (editId) {
    // Update existing event
    const index = events.findIndex(e => e.id === editId);
    if (index !== -1) {
      events[index] = { ...events[index], ...eventData };
    }
  } else {
    // Add new event
    const newEvent = {
      id: Date.now().toString(),
      ...eventData,
    };
    events.push(newEvent);
  }

  saveEvents();
  renderEvents();
  eventFormContainer.classList.add('hidden');
  resetEventForm();
});

window.deleteEvent = function(id) {
  if (confirm('Are you sure you want to delete this event?')) {
    events = events.filter(e => e.id !== id);
    saveEvents();
    renderEvents();
  }
};

// Businesses
function renderBusinesses() {
  const filterValue = categoryFilter.value;
  let filteredBusinesses = businesses.filter(business =>
    filterValue === 'all' || business.category === filterValue
  );

  // Sort alphabetically by name
  filteredBusinesses.sort((a, b) => a.name.localeCompare(b.name));

  if (filteredBusinesses.length === 0) {
    businessList.innerHTML = '<p class="no-businesses">No businesses found.</p>';
    return;
  }

  businessList.innerHTML = filteredBusinesses.map(business => {
    const imageHtml = business.image
      ? `<img src="${business.image}" alt="${escapeHtml(business.name)}" class="business-thumbnail">`
      : `<div class="business-thumbnail-placeholder">🏪</div>`;

    return `
      <div class="business-card card">
        <div class="business-header-with-image">
          ${imageHtml}
          <div class="business-header">
            <h3>${escapeHtml(business.name)}</h3>
            <span class="business-category">${escapeHtml(business.category)}</span>
          </div>
        </div>
        <p class="business-description">${escapeHtml(business.description)}</p>
        <div class="business-info">
          ${business.address ? `<p><strong>Address:</strong> ${escapeHtml(business.address)}</p>` : ''}
          ${business.phone ? `<p><strong>Phone:</strong> ${escapeHtml(business.phone)}</p>` : ''}
          ${business.hours ? `<p><strong>Hours:</strong> ${escapeHtml(business.hours)}</p>` : ''}
          ${business.website ? `<a href="${escapeHtml(business.website)}" target="_blank" rel="noopener noreferrer" class="business-link">Visit Website &rarr;</a>` : ''}
        </div>
        ${isAuthenticated ? `
          <div class="business-actions">
            <button class="btn btn-secondary btn-small" onclick="editBusiness('${business.id}')">Edit</button>
            <button class="btn btn-danger btn-small" onclick="deleteBusiness('${business.id}')">Delete</button>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

categoryFilter.addEventListener('change', renderBusinesses);

// Add/Edit Business Form
addBusinessBtn.addEventListener('click', () => {
  resetBusinessForm();
  businessFormContainer.classList.remove('hidden');
});

document.getElementById('cancel-business-btn').addEventListener('click', () => {
  businessFormContainer.classList.add('hidden');
  resetBusinessForm();
});

function resetBusinessForm() {
  businessForm.reset();
  document.getElementById('business-edit-id').value = '';
  document.getElementById('business-image-data').value = '';
  document.getElementById('business-image-preview').classList.add('hidden');
  document.getElementById('business-preview-img').src = '';
  document.getElementById('business-form-title').textContent = 'Add New Business';
  document.getElementById('business-submit-btn').textContent = 'Add Business';
}

window.editBusiness = function(id) {
  const business = businesses.find(b => b.id === id);
  if (!business) return;

  document.getElementById('business-edit-id').value = business.id;
  document.getElementById('business-name').value = business.name;
  document.getElementById('business-category').value = business.category;
  document.getElementById('business-description').value = business.description || '';
  document.getElementById('business-address').value = business.address || '';
  document.getElementById('business-phone').value = business.phone || '';
  document.getElementById('business-website').value = business.website || '';
  document.getElementById('business-hours').value = business.hours || '';

  // Handle image
  if (business.image) {
    document.getElementById('business-image-data').value = business.image;
    document.getElementById('business-preview-img').src = business.image;
    document.getElementById('business-image-preview').classList.remove('hidden');
  } else {
    document.getElementById('business-image-data').value = '';
    document.getElementById('business-image-preview').classList.add('hidden');
  }

  document.getElementById('business-form-title').textContent = 'Edit Business';
  document.getElementById('business-submit-btn').textContent = 'Save Changes';
  businessFormContainer.classList.remove('hidden');

  // Scroll to form
  businessFormContainer.scrollIntoView({ behavior: 'smooth' });
};

businessForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const editId = document.getElementById('business-edit-id').value;
  const businessData = {
    name: document.getElementById('business-name').value,
    category: document.getElementById('business-category').value,
    description: document.getElementById('business-description').value,
    address: document.getElementById('business-address').value,
    phone: document.getElementById('business-phone').value,
    website: document.getElementById('business-website').value,
    hours: document.getElementById('business-hours').value,
    image: document.getElementById('business-image-data').value,
  };

  if (editId) {
    // Update existing business
    const index = businesses.findIndex(b => b.id === editId);
    if (index !== -1) {
      businesses[index] = { ...businesses[index], ...businessData };
    }
  } else {
    // Add new business
    const newBusiness = {
      id: Date.now().toString(),
      ...businessData,
    };
    businesses.push(newBusiness);
  }

  saveBusinesses();
  renderBusinesses();
  renderEvents(); // Re-render events to update business images
  businessFormContainer.classList.add('hidden');
  resetBusinessForm();
});

window.deleteBusiness = function(id) {
  if (confirm('Are you sure you want to delete this business?')) {
    businesses = businesses.filter(b => b.id !== id);
    saveBusinesses();
    renderBusinesses();
  }
};

// Settings
function renderSettings() {
  renderEventTypesList();
  renderBusinessCategoriesList();
  renderBusinessesSettingsList();
  populateSettingsBusinessCategorySelect();
}

// Populate the category dropdown in the settings business form
function populateSettingsBusinessCategorySelect() {
  const categorySelect = document.getElementById('settings-business-category');
  categorySelect.innerHTML = businessCategories.map(cat =>
    `<option value="${cat}">${escapeHtml(cat)}</option>`
  ).join('');
}

function renderEventTypesList() {
  const container = document.getElementById('event-types-list');
  if (eventTypes.length === 0) {
    container.innerHTML = '<p class="no-items">No event types defined.</p>';
    return;
  }

  container.innerHTML = eventTypes.map(type => `
    <div class="settings-item">
      <span class="settings-item-name">${escapeHtml(type.label)}</span>
      <div class="settings-item-actions">
        <button class="btn btn-danger btn-small" onclick="deleteEventType('${type.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function renderBusinessCategoriesList() {
  const container = document.getElementById('business-categories-list');
  if (businessCategories.length === 0) {
    container.innerHTML = '<p class="no-items">No business categories defined.</p>';
    return;
  }

  container.innerHTML = businessCategories.map((cat, index) => `
    <div class="settings-item">
      <span class="settings-item-name">${escapeHtml(cat)}</span>
      <div class="settings-item-actions">
        <button class="btn btn-danger btn-small" onclick="deleteBusinessCategory(${index})">Delete</button>
      </div>
    </div>
  `).join('');
}

function renderBusinessesSettingsList() {
  const container = document.getElementById('businesses-settings-list');
  if (businesses.length === 0) {
    container.innerHTML = '<p class="no-items">No businesses registered.</p>';
    return;
  }

  // Sort alphabetically by name
  const sortedBusinesses = [...businesses].sort((a, b) => a.name.localeCompare(b.name));

  container.innerHTML = sortedBusinesses.map(business => `
    <div class="settings-item">
      <span class="settings-item-name">${escapeHtml(business.name)} <small style="color: var(--text-light);">(${escapeHtml(business.category)})</small></span>
      <div class="settings-item-actions">
        <button class="btn btn-secondary btn-small" onclick="editBusinessFromSettings('${business.id}')">Edit</button>
        <button class="btn btn-danger btn-small" onclick="deleteBusinessFromSettings('${business.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

// Add event type
document.getElementById('add-event-type-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('new-event-type');
  const label = input.value.trim();
  if (!label) return;

  const id = label.toLowerCase().replace(/[^a-z0-9]/g, '-');

  // Check if already exists
  if (eventTypes.some(t => t.id === id)) {
    alert('This event type already exists.');
    return;
  }

  eventTypes.push({ id, label });
  saveEventTypes();
  renderEventTypesList();
  populateEventTypeSelects();
  input.value = '';
});

// Delete event type
window.deleteEventType = function(id) {
  // Check if any events use this type
  const eventsUsingType = events.filter(e => e.type === id);
  if (eventsUsingType.length > 0) {
    if (!confirm(`${eventsUsingType.length} event(s) use this type. They will be changed to "other". Continue?`)) {
      return;
    }
    // Update events to use "other"
    events = events.map(e => e.type === id ? { ...e, type: 'other' } : e);
    saveEvents();
  }

  eventTypes = eventTypes.filter(t => t.id !== id);
  saveEventTypes();
  renderEventTypesList();
  populateEventTypeSelects();
  renderEvents();
};

// Add business category
document.getElementById('add-category-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('new-category');
  const category = input.value.trim();
  if (!category) return;

  // Check if already exists
  if (businessCategories.includes(category)) {
    alert('This category already exists.');
    return;
  }

  businessCategories.push(category);
  saveBusinessCategories();
  renderBusinessCategoriesList();
  populateBusinessCategorySelect();
  input.value = '';
});

// Delete business category
window.deleteBusinessCategory = function(index) {
  const category = businessCategories[index];

  // Check if any businesses use this category
  const businessesUsingCategory = businesses.filter(b => b.category === category);
  if (businessesUsingCategory.length > 0) {
    if (!confirm(`${businessesUsingCategory.length} business(es) use this category. They will be changed to "Other". Continue?`)) {
      return;
    }
    // Update businesses to use "Other"
    businesses = businesses.map(b => b.category === category ? { ...b, category: 'Other' } : b);
    saveBusinesses();
  }

  businessCategories.splice(index, 1);
  saveBusinessCategories();
  renderBusinessCategoriesList();
  populateBusinessCategorySelect();
  renderBusinesses();
};

// Edit business from settings
window.editBusinessFromSettings = function(id) {
  switchView('directory');
  setTimeout(() => {
    editBusiness(id);
  }, 100);
};

// Delete business from settings
window.deleteBusinessFromSettings = function(id) {
  if (confirm('Are you sure you want to delete this business?')) {
    businesses = businesses.filter(b => b.id !== id);
    saveBusinesses();
    renderBusinessesSettingsList();
    renderBusinesses();
  }
};

// Toggle add business form in settings
document.getElementById('toggle-add-business-form').addEventListener('click', () => {
  const form = document.getElementById('settings-business-form');
  const btn = document.getElementById('toggle-add-business-form');
  form.classList.toggle('hidden');
  btn.textContent = form.classList.contains('hidden') ? '+ Add New Business' : 'Hide Form';
});

// Cancel add business form in settings
document.getElementById('cancel-settings-business-btn').addEventListener('click', () => {
  const form = document.getElementById('settings-business-form');
  const btn = document.getElementById('toggle-add-business-form');
  form.classList.add('hidden');
  form.reset();
  btn.textContent = '+ Add New Business';
});

// Add business from settings form
document.getElementById('settings-business-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const newBusiness = {
    id: Date.now().toString(),
    name: document.getElementById('settings-business-name').value,
    category: document.getElementById('settings-business-category').value,
    description: document.getElementById('settings-business-description').value,
    address: document.getElementById('settings-business-address').value,
    phone: document.getElementById('settings-business-phone').value,
    website: document.getElementById('settings-business-website').value,
    hours: document.getElementById('settings-business-hours').value,
    image: document.getElementById('settings-business-image-data').value,
  };

  businesses.push(newBusiness);
  saveBusinesses();
  renderBusinessesSettingsList();
  renderBusinesses();

  // Reset and hide the form
  const form = document.getElementById('settings-business-form');
  const btn = document.getElementById('toggle-add-business-form');
  form.reset();
  document.getElementById('settings-business-image-data').value = '';
  document.getElementById('settings-business-image-preview').classList.add('hidden');
  form.classList.add('hidden');
  btn.textContent = '+ Add New Business';
});

// Image upload handlers
function setupImageUpload(fileInputId, previewContainerId, previewImgId, dataInputId, removeButtonId) {
  const fileInput = document.getElementById(fileInputId);
  const previewContainer = document.getElementById(previewContainerId);
  const previewImg = document.getElementById(previewImgId);
  const dataInput = document.getElementById(dataInputId);
  const removeButton = document.getElementById(removeButtonId);

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 500KB for localStorage)
      if (file.size > 500 * 1024) {
        alert('Image is too large. Please choose an image under 500KB.');
        fileInput.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // Resize image to max 200x200 for storage efficiency
          const canvas = document.createElement('canvas');
          const maxSize = 200;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxSize) {
              height *= maxSize / width;
              width = maxSize;
            }
          } else {
            if (height > maxSize) {
              width *= maxSize / height;
              height = maxSize;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
          dataInput.value = resizedDataUrl;
          previewImg.src = resizedDataUrl;
          previewContainer.classList.remove('hidden');
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  removeButton.addEventListener('click', () => {
    fileInput.value = '';
    dataInput.value = '';
    previewImg.src = '';
    previewContainer.classList.add('hidden');
  });
}

// Setup image upload for main business form
setupImageUpload(
  'business-image',
  'business-image-preview',
  'business-preview-img',
  'business-image-data',
  'remove-business-image'
);

// Setup image upload for settings business form
setupImageUpload(
  'settings-business-image',
  'settings-business-image-preview',
  'settings-business-preview-img',
  'settings-business-image-data',
  'remove-settings-business-image'
);

// Utility
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeData();
  populateEventTypeSelects();
  populateBusinessCategorySelect();
  renderEvents();
  renderBusinesses();
});
