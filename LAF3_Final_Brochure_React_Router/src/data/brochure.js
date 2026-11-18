// Editorial presentation based on LAF3.0 Brochure_ FINAL.pdf (12 pages).
// The supplied brochure is the authority for event dates, agenda and participants.
export const event = {
  name: 'Lucknow Architecture Festival 3.0',
  theme: 'Expressway Pradesh, Vision 2047: Designing the Future',
  dates: '22 · 23 · 24 January 2027',
  dateShort: '22–24 JAN 2027',
  venue: 'Bharat Ratna Shri Atal Bihari Vajpayee Ekana International Stadium',
  address: 'Sector 7, Gomti Nagar, Amar Shaheed Path, Lucknow, Uttar Pradesh 226010, India',
  download: '/assets/LAF3.0-Final-Brochure.pdf',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Highlights', to: '/highlights' },
  { label: 'Agenda', to: '/agenda' },
  { label: 'Team', to: '/team' },
  { label: 'Committees', to: '/committees' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Brands', to: '/brands' },
  { label: 'Venue', to: '/venue' },
];

export const upFacts = [
  { value: '01', name: 'Expressways', description: 'A leading state in expressway infrastructure.' },
  { value: '02', name: 'MSME ecosystem', description: 'A major hub for registered and unregistered MSMEs.' },
  { value: '03', name: 'Business climate', description: 'Highlighted for ease of doing business.' },
  { value: '04', name: 'Economic ambition', description: 'Aiming towards a one-trillion-dollar economy.' },
];

export const history = [
  { edition: 'LAF 1.0', year: '2022', title: 'Avirbhav — Lucknow Architecture Festival', detail: 'Held from 4–6 November 2022 at Ekana International Stadium, the inaugural major edition brought together architects, academicians, government representatives and industry leaders for exhibitions, symposiums, competitions, cultural events and workshops.' },
  { edition: 'LAF 2.0', year: '2025', title: 'A festival for a future-ready region', detail: 'Held from 10–12 January 2025 at Ekana International Stadium. The edition expanded the build expo and the programme of technical sessions, design competitions, networking and discussions on sustainable development in Lucknow and the State Capital Region.' },
  { edition: 'LAF 3.0', year: '2027', title: 'Expressway Pradesh · Vision 2047', detail: 'The next edition builds on this collaborative platform, linking the design, construction, urban planning, technology, academic and policy communities around the future of Uttar Pradesh.' },
];

export const festivalFormats = [
  ['Exhibition', 'Design and construction innovations on display'],
  ['Symposium', 'Perspectives shaping the future of cities'],
  ['Learning', 'Knowledge exchange and practical workshops'],
  ['Competition', 'Ideas, talent and design challenges'],
  ['Media exchange', 'Conversations amplified across platforms'],
  ['Networking', 'Connections across disciplines and industries'],
  ['Culture', 'Installations, art and celebration'],
  ['Industry partnership', 'Business, brands and stakeholder participation'],
];

export const focusSectors = [
  'Art', 'Construction', 'Green Tech', 'Building Equipments', 'Sustainability',
  'Real Estate', 'Architecture', 'Interiors', 'Building Materials',
  'New Technologies', 'Building Techniques', 'Smart Building', 'Academics',
  'Government Schemes & Departments',
];
export const keyHighlights = [
  'Architects’ meets, seminars and workshops',
  'A platform for marketers to showcase products and services',
  'Engagement activities and direct interaction with the target audience',
  'A platform for brands to reach their target market',
  'On-spot loan and financing facility',
  'Expert presentations and workshops',
  'Displays of art, culture and heritage',
  'Media amplification across online and offline channels',
];

// Schedules below preserve the brochure's printed times, including the unusually early Day 2 film screening.
export const agenda = [
  { day: 'Day 1', date: '22 January 2027', items: [
    ['09:00 – 10:00', 'Arrival of delegates and registration at venue'],
    ['10:00 – 11:30', 'Inaugural session of LAF 3.0'],
    ['11:30 – 13:00', 'Technical session 1'],
    ['13:00 – 14:00', 'Networking lunch'],
    ['14:00 – 15:00', 'Technical session 2'],
    ['15:00 – 16:00', 'Live workshops'],
    ['16:00 – 17:00', 'Delegates visit to exhibition pavilion'],
    ['17:30 onwards', 'Cultural programmes'],
    ['19:00 onwards', 'Architects Grand Dinner'],
  ] },
  { day: 'Day 2', date: '23 January 2027', items: [
    ['06:30 – 10:30', 'Film screening'],
    ['10:00 – 11:00', 'Delegates visit to exhibition pavilion'],
    ['11:00 – 11:30', 'Technical session 1'],
    ['11:30 – 12:30', 'Technical session 2'],
    ['12:30 – 13:30', 'Networking lunch'],
    ['13:30 – 14:30', 'Keynote presentation'],
    ['14:30 – 15:30', 'Technical session 3'],
    ['15:30 – 16:00', 'Live workshops'],
    ['16:00 – 17:30', 'Delegates visit to exhibition pavilion'],
    ['17:30 – 17:45', 'Cultural programmes'],
    ['17:45 onwards', 'Gala Dinner of LAF 3.0'],
  ] },
  { day: 'Day 3', date: '24 January 2027', items: [
    ['10:00 – 10:30', 'Heritage walk'],
    ['10:30 – 11:00', 'Jury panel for ADC'],
    ['11:00 – 12:00', 'Keynote presentation'],
    ['12:00 – 13:00', 'Technical session 1'],
    ['13:00 – 14:00', 'Technical session 2'],
    ['14:00 – 14:30', 'Networking lunch'],
    ['14:30 – 15:30', 'Delegates visit to exhibition pavilion'],
    ['15:30 – 16:30', 'Preview of LAA and future events'],
    ['16:30 – 17:30', 'Valedictory ceremony'],
    ['17:30 onwards', 'Vote of thanks by Ar. Repunjay Patel, President – LAA'],
    ['19:00 onwards', 'Cultural programmes'],
  ] },
];

export const outreach = [
  'Pre-publicity begins 7–10 days before the event',
  'Two AV vans covering potential markets',
  'Hoardings, banners and posters in Lucknow and nearby areas',
  'Lucky draw leaflets in newspapers and inserts',
  'Radio jingles and advertisements',
  'Newspaper advertising',
  'Mall and market activations',
  'Advertorials, editorials and press conferences',
  'Facebook, Instagram, Twitter/X and LinkedIn promotion',
  'SMS, email and other outreach',
];
export const visitors = [
  'Architects', 'Interior designers', 'Builders and promoters',
  'Large warehouse builders', 'Civil and structural engineers', 'Government officials',
  'Contractors', 'Faculties and students', 'Consultants', 'General public',
  'Dealers and distributors', 'Prospective home buyers', 'End users and buyers',
];
export const opportunities = [
  'Connect with architects, institutional buyers, experts, interior designers and other professionals',
  'Showcase products, design, features and cost advantages',
  'Let end users experience your products directly',
  'Present innovations and new ranges of products',
  'Reach potential agents, distributors and wholesalers',
  'Consolidate trade relationships and explore on-spot orders',
  'Meet key decision makers from different buyer segments',
  'Build a database of prospective buyers',
  'Get instant feedback on products, prices and innovations',
  'Understand market trends, consumer preferences and retail needs',
];

export const teamGroups = [
  { title: 'Convenors', names: ['Ar. Ashok Kumar', 'Ar. Rajat Kant Mittal', 'Ar. Ranjan Shukla', 'Ar. Anupam Mittal'] },
  { title: 'Curators', names: ['Ar. Jagbir Singh', 'Ar. Sabina Singh', 'Ar. Jitendra Kr. Tripathi', 'Ar. Vipul Varshney', 'Ar. Aninda Sircar', 'Ar. Arvind Yadav', 'Ar. Sanjay Mathur'] },
  { title: 'Curatorial Directors', names: ['Ar. Prashant Pal Singh', 'Ar. Devesh Mani Tripathi', 'Ar. Neeraj Kushwaha'] },
  { title: 'Coordinators', names: [
    'Ar. Puneet Srivastava', 'Ar. Ashish Gupta', 'Ar. D. P. Singh', 'Ar. Anita Srivastava',
    'Ar. Ritu Gulati', 'Ar. Shubhra Mittal', 'Ar. Awadhesh Verma', 'Ar. Anuj Tandon',
    'Ar. Sandeep Negi', 'Ar. Shubhendra Bajpai', 'Ar. Deepti Jayant', 'Ar. Avanish Gangwar',
    'Ar. Brijesh Kumar', 'Ar. Hitesh Kumar', 'Ar. Namit Tandon', 'Ar. Vandana Patel',
    'Ar. Prashant K. Singh', 'Ar. Amit Singh', 'Ar. Rohit Parmar', 'Ar. Shikhar Singh',
    'Ar. Shriyak Singh', 'Ar. Akash Hemnani', 'Ar. Rajarshi Bajpai', 'Ar. Alok Maurya',
  ] },
  { title: 'Joint Coordinators', names: [
    'Ar. Swati Bhatia', 'Ar. Deepti Pandey', 'Ar. Faraz Usmani', 'Ar. R. P. Gangwar',
    'Ar. Ashutosh Sahu', 'Ar. Rajit Agarwal', 'Ar. Vishal Jain', 'Ar. Layak Singh',
    'Ar. Rohit Gupta', 'Ar. Alok Kumar', 'Ar. Pragya Singh', 'Ar. Paarul Saxena',
    'Ar. Devyani Dayal', 'Ar. Shipra Singh', 'Ar. Chhaya Shukla', 'Ar. Kabir Kumar',
    'Ar. Pankaj Mishra', 'Ar. Gaurav Gupta', 'Ar. Kartikey Verma',
    'Ar. Nishant Upadhyay', 'Ar. Ashutosh Gupta', 'Ar. Yati K. Mishra',
  ] },
];
export const corporateCommittee = [
  'Mr. Anurag Agarwal', 'Mr. Kamaljeet Singh', 'Mr. Karunesh Verma',
  'Mr. Rajiv Agarwal', 'Mr. Manuj Sharma', 'Mr. Sandeep Singhal',
];
export const supportingOrganizations = [
  ['IUDI · Lucknow Centre', 'Ar. Rajat Kant', 'Chairperson'],
  ['ITPI · Lucknow Chapter', 'Tpr. Anoop Kumar Srivastava', 'President'],
  ['IIID · Lucknow Chapter', 'Ar. Aviral Agarwal', 'Chairman'],
  ['IPA · Lucknow Chapter', 'Ar. Devesh Mani Tripathi', 'Chairman'],
  ['IIA · All UP Chapter', 'Ar. Sandeep Saraswat', 'Chairman'],
  ['YACA', 'Ar. Vishal Mathur', 'President'],
  ['FSAI · Lucknow Chapter', 'Mr. Puneet Jaiswal', 'Joint Secretary'],
];
export const laaLeadership = [
  ['Mentor', 'Ar. D C Thapar'], ['Immediate Past President', 'Ar. Prashant Pal Singh'],
  ['President', 'Ar. Repunjay Patel'], ['Vice President', 'Ar. Avinash Ghai'],
  ['General Secretary', 'Ar. Ashutosh Verma'],
  ['Joint Secretary', 'Ar. Pushpendra Kumar'], ['Joint Secretary', 'Ar. Rahul Jadon'],
  ['Treasurer', 'Ar. Naveen Singh'],
];
export const committeeCategories = [
  'Academic Committee', 'Edu-Formation Committee', 'Sports Committee',
  'Hospitality & Welfare Committee', 'Cultural & Exhibition Committee',
  'Event Management Committee', 'Membership & Directory Committee',
  'Media & Protocol Committee', 'Governments Interaction & Professional Practice Committee',
  'Legal Committee', 'Spouses Committee', 'LSR Committee (LAA Social Responsibility)',
];
export const pastEventStats = [
  ['200+', 'Industries showcased'],
  ['2000+', 'Architects & other professionals'],
  ['3,00,000+', 'General public visiting'],
];
export const mediaStats = [
  ['200+', 'Influencers captured the event'],
  ['100+', 'Media houses covered the event'],
  ['50+', 'Radio spots daily for a month'],
];
export const chapters = ['Ghaziabad Architects Association', 'Kanpur Regional Chapter', 'Allahabad Association', 'Varanasi Architects Association'];
export const contact = {
  email: 'lucknowarchitects@gmail.com',
  taskEmail: 'info@taskmarketingsolutions.in',
  phone: '+91 9335210024',
  taskPhone: '+91 8874184076',
};
