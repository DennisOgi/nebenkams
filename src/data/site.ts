import type { ImageMetadata } from 'astro';

// Services
import svcTruck from '../assets/services/1565734032.jpg';
import svcMarquee from '../assets/services/1565734148.jpeg';
import svcCanopy from '../assets/services/1565734213.jpeg';
import svcGreenhouse from '../assets/services/1565734321.jpg';
import svcAccessories from '../assets/services/1565734501.jpeg';
import svcAgro from '../assets/services/1565734610.jpeg';
import svcAutocraft from '../assets/services/1572865503.jpg';
import svcSideTruck from '../assets/services/1680023714.jpg';
// Projects
import prjGreenville from '../assets/projects/1565736948.jpg';
import prjLyseek from '../assets/projects/1565736831.jpg';
import prjBhn from '../assets/projects/1565736734.jpg';
import prjBhn2 from '../assets/projects/BHN1.jpg';
import prjAufmevic from '../assets/projects/1565736353.jpg';
import prjAufmevic2 from '../assets/projects/Aufmevic.jpg';
import prjTsl from '../assets/projects/1565736042.jpg';
import prjRoyal from '../assets/projects/1565735925.jpg';
import prjAshmina from '../assets/projects/1565735056.jpg';
import prjAshmina2 from '../assets/projects/aquadana1.jpg';
// Blog
import blogAutocraft from '../assets/blog/1572864466.jpg';
import blogFireproof from '../assets/blog/1572863724.png';
import blogProlong from '../assets/blog/1572863935.jpg';
// Testimonial logos
import tGreenville from '../assets/testimonials/1572861903.png';
import tTsl from '../assets/testimonials/1572861819.png';
import tBhn from '../assets/testimonials/1572861747.jpg';
import tGolden from '../assets/testimonials/1572861560.png';
// Client logos
import c1 from '../assets/clients/1570178767.png';
import c2 from '../assets/clients/1570178716.png';
import c3 from '../assets/clients/1565735212.jpg';
import c4 from '../assets/clients/1565733373.png';
import c5 from '../assets/clients/1565730974.png';
import c6 from '../assets/clients/1570178799.jpg';
import c7 from '../assets/clients/1565730365.png';
import c8 from '../assets/clients/1565649821.jpg';
import c9 from '../assets/clients/1565649797.jpg';
import c10 from '../assets/clients/1565650117.png';
import c11 from '../assets/clients/1565649717.jpg';
import c12 from '../assets/clients/1565649690.jpg';
import c13 from '../assets/clients/1565649668.png';
import c14 from '../assets/clients/1565649636.png';
import c15 from '../assets/clients/1565649609.png';
import c16 from '../assets/clients/1565649573.jpg';
import whoWeAre from '../assets/company/who-we-are-1565338589.jpg';
import heroTransport from '../assets/carousel/hero-transport.png';
import heroTransportM from '../assets/carousel/hero-transport-mobile.png';
import heroShelter from '../assets/carousel/hero-shelter.png';
import heroShelterM from '../assets/carousel/hero-shelter-mobile.png';
import heroAgri from '../assets/carousel/hero-agriculture.png';
import heroAgriM from '../assets/carousel/hero-agriculture-mobile.png';
import heroTarpaulin from '../assets/carousel/tarpaulin.png';
import heroMarqueePhoto from '../assets/carousel/marquee.png';

export const contact = {
  hours: 'Monday to Saturday - 8am to 6pm',
  person: { name: 'Chinedum Emenike Onuzurike', role: 'CEO' },
  address: 'Plot 369, Durbar Road, Amuwo Odofin, Lagos.',
  places: [
    { label: 'Office', address: 'Plot 369, Durbar Road, Amuwo Odofin, Lagos.' },
    { label: 'Branch office', address: '19 Coker Street, Near Olosha Market, Mushin, Lagos.' },
    { label: 'Factory', address: 'C Close, 6th Avenue, Festac, opposite Early Life Boarding School, Lagos.' },
  ],
  phones: [
    { label: '(+234) 803 304 3995', href: 'tel:+2348033043995' },
    { label: '(+234) 708 772 3620', href: 'tel:+2347087723620' },
    { label: '(+234) 816 534 1333', href: 'tel:+2348165341333' },
  ],
  emails: ['info@nebenkams.com', 'nebenkamsgloballimited@gmail.com', 'neduasso@gmail.com'],
  socials: [
    { name: 'Facebook', href: 'https://facebook.com/nebenkams/', icon: 'facebook' },
    { name: 'Twitter', href: 'https://twitter.com/nebenkams/', icon: 'twitter' },
    { name: 'Instagram', href: 'https://www.instagram.com/nebenkams/', icon: 'instagram' },
  ],
} as const;

export const company = {
  intro:
    'We are a brand in tarpaulin business with over 21 years of experience in the industry. We are proud to be known as an industry leader in the assembling and exporting of tarpaulin product for various uses.',
  teamExcerpt:
    'Within the past 21 years, we have assembled the best hands to handle every part of our business. Led by our very experienced and astute Managing Director, Mr. Chinedum Emenike Onuzurike.',
  team: [
    'Within the past 21 years, we have assembled the best hands to handle every part of our business. Led by our very experienced and astute Managing Director, Mr. Chinedum Emenike Onuzurike, we have a strong workforce comprising Managers, Technicians, Supervisors, Accountants, Marketers and others who constantly undergo training workshops to keep abreast of current industry development and practice.',
  ],
  products: [
    'Our products are strongly visible in the fertilizer, food (grain), haulage, cement, construction, agro products and logistics industries as well as specialized tents for events.',
    'From Tarpaulin rolls, Truck Tarpaulin, Car Cover, Ship Cover, Equipment Cover, Sand Cover to Outdoor Tarpaulin Printing, we strive to meet up with our clients demands.',
    'This is why we are The Tarpaulin People!',
  ],
  facility:
    'Located in the industrial Area of Amuwo Odofin, Lagos Nigeria is a fully integrated infrastructure system covering 75,000 sq ft where our experts produce the unique demands as made by our clients.',
  mission:
    "To ensure constant customers' satisfaction through, due diligence, innovation and constant evolution in line with current trends",
  vision: 'To become the biggest manufacturer of tarpaulin in West Africa',
  values:
    'As a trusted brand, we carry out our business with deep and highly held values which guide our every business transaction. They include; Quality, Transparency, Stability, Communication and Trust.',
  poweredBy: { name: 'Essyp Technologies', href: 'https://essyp.com' },
};

export const hero = {
  eyebrow: 'Custom tarpaulin solutions',
  heading: ['Made to cover.', 'Built to protect.'],
  intro: 'Covers, shelters and materials for the way you work.',
};

/** Source company image from the live site (branded logo board, not a workshop photograph). */
export const whoWeAreImage = {
  src: whoWeAre,
  alt: 'Nebenkams Global Ltd logo displayed in a branded office setting',
};

export interface HeroSlide {
  id: 'material' | 'marquee' | 'transport' | 'shelter' | 'agriculture';
  number: string;
  selector: string;
  serviceSlug: string;
  image: ImageMetadata;
  imageMobile: ImageMetadata;
  imageAlt: string;
  objectPosition: string;
}

/** Opening frame shared by the splash and the hero, so the intro lands in the carousel. */
export const heroOpenId: HeroSlide['id'] = 'marquee';

/** Carousel scenes. Tarpaulin and marquee are the new material studies; the other three stay in the rotation. */
export const heroSlides: HeroSlide[] = [
  {
    id: 'material',
    number: '01',
    selector: 'Material',
    serviceSlug: 'tarpaulin-accessories',
    image: heroTarpaulin,
    imageMobile: heroTarpaulin,
    imageAlt: 'Close-up of blue woven tarpaulin with a brass grommet',
    objectPosition: '82% 68%',
  },
  {
    id: 'marquee',
    number: '02',
    selector: 'Marquee',
    serviceSlug: 'marquee-tents-production',
    image: heroMarqueePhoto,
    imageMobile: heroMarqueePhoto,
    imageAlt: 'White tension canopy lit from within at dusk',
    objectPosition: '72% 45%',
  },
  {
    id: 'transport',
    number: '03',
    selector: 'Transport',
    serviceSlug: 'truck-cover-production',
    image: heroTransport,
    imageMobile: heroTransportM,
    imageAlt: 'Rigid truck fitted with a blue curtain-side tarpaulin cover',
    objectPosition: '72% 50%',
  },
  {
    id: 'shelter',
    number: '04',
    selector: 'Shelter',
    serviceSlug: 'canopies-and-shades',
    image: heroShelter,
    imageMobile: heroShelterM,
    imageAlt: 'Peaked marquee tent with a tarpaulin roof',
    objectPosition: '50% 42%',
  },
  {
    id: 'agriculture',
    number: '05',
    selector: 'Agriculture',
    serviceSlug: 'green-house-farm-and-fishponds',
    image: heroAgri,
    imageMobile: heroAgriM,
    imageAlt: 'Circular tarpaulin fishpond tanks',
    objectPosition: '50% 60%',
  },
];

export interface Service {
  slug: string;
  name: string;
  /** Quote form `service_id` value from the live site's select. */
  quoteId: string;
  image: ImageMetadata;
  imageAlt: string;
  excerpt: string;
  body: string[];
  extra?: { heading: string; items: string[] }[];
  after?: string[];
}

export const services: Service[] = [
  {
    slug: 'truck-cover-production',
    name: 'Truck cover production',
    quoteId: '12',
    image: svcTruck,
    imageAlt: 'Blue curtain-side tarpaulin cover fitted to a rigid truck',
    excerpt:
      'Nebenkams Global Ltd specializes in Production of High quality truck covers of all sizes for different ton trucks.',
    body: [
      'Nebenkams Global Ltd specializes in Production of High quality truck covers of all sizes for different ton trucks. We insist on 1st quality super PVC nylon for all our customers to avoid damages to goods covered. We also Produce sided covers for trucks with side cover.',
    ],
  },
  {
    slug: 'marquee-tents-production',
    name: 'Marquee Tents production',
    quoteId: '13',
    image: svcMarquee,
    imageAlt: 'Large white peaked marquee tent on a lawn',
    excerpt:
      'We are the household name now in production of all the materials and parts for event tents and other outdoor tents.',
    body: [
      'We are the household name now in production of all the materials and parts for event tents and other outdoor tents. We do this with evolution and innovation in mind. We also offer Maintenance services for already produced Tents.',
    ],
  },
  {
    slug: 'canopies-and-shades',
    name: 'Canopies and Shades',
    quoteId: '14',
    image: svcCanopy,
    imageAlt: 'Row of white outdoor canopies with peaked roofs',
    excerpt:
      'We specialize in the production of different sizes of outdoor canopies for rentals and individual use.',
    body: [
      'We specialize in the production of different sizes of outdoor canopies for rentals and individual use. We go with the specification of our customers and also offer advice on the best quality designs to suit all their needs.',
    ],
  },
  {
    slug: 'green-house-farm-and-fishponds',
    name: 'Green House Farm and fishponds',
    quoteId: '15',
    image: svcGreenhouse,
    imageAlt: 'Black tarpaulin fishpond tanks on a farm',
    excerpt: 'We have overtime invited convenient ways to build farm houses using our Tarpaulin.',
    body: [
      'We have overtime invited convenient ways to build farm houses using our Tarpaulin. We also build different capacities of Fishponds which is meant to meet our customer’s needs.',
    ],
  },
  {
    slug: 'tarpaulin-accessories',
    name: 'Tarpaulin Accessories',
    quoteId: '16',
    image: svcAccessories,
    imageAlt: 'Stacked rolls of coloured tarpaulin material',
    excerpt: 'We also sell quality tarpaulin materials and accessories and deliver at your convenience.',
    body: ['We also sell quality tarpaulin materials and accessories and deliver at your convenience.'],
  },
  {
    slug: 'agro-allied-product-cover',
    name: 'Agro Allied Product Cover',
    quoteId: '17',
    image: svcAgro,
    imageAlt: 'Interior of a covered crop tunnel with rows of green plants',
    excerpt:
      'We produce the best materials according to specification and demand of our client to meet agro allied product cover.',
    body: [
      'We produce the best materials according to specification and demand of our client to meet agro allied product cover, we bring our long age professionalism to bear where Tarpaulin for covering Machineries are.',
    ],
  },
  {
    slug: 'neben-autocraft-car-cover',
    name: 'Neben Autocraft Car Cover',
    quoteId: '18',
    image: svcAutocraft,
    imageAlt: 'Grey fitted car cover over a saloon car',
    excerpt:
      'Built to last, this Product is made with a superior quality of PVC Nylon which stands the test of heat without affecting your vehicle.',
    body: [
      'Built to last, this Product is made with a superior quality of PVC Nylon which stands the test of heat without affecting your vehicle, it has a cooling effect on cars, it also comes in different colors and designs to suit our clients taste. It’s Affordable at the quality which we provide. It also comes with a unique Bag Pack which makes it fanciful and it’s also portable to carry around.',
    ],
    extra: [
      { heading: 'Features of Neben- Autocraft', items: ['Strong', 'Durable', 'Aesthetic', 'Portable', 'Affordable'] },
      {
        heading: 'Ranges of Products',
        items: ['SUVs', 'Cars', 'Mini Cars', 'Saloon Cars', 'Pickup vans', 'Mini vans', 'And so on…'],
      },
    ],
    after: [
      'You can buy Neben Autocraft from motor parts dealers around Lagos, also online at www.Nebenkams.com as a dispatch rider will deliver at any location within Lagos. You can also contact our Agents and Outlets. 08167522223, 08033043995.',
    ],
  },
  {
    slug: 'nebenkams-side-truck-cover',
    name: 'Nebenkams Side Truck Cover',
    quoteId: '19',
    image: svcSideTruck,
    imageAlt: 'Green curtain-side tarpaulin on a long trailer',
    excerpt: 'Our Side Truck Tarpaulin cover is durable, affordable and of very high quality.',
    body: ['Our Side Truck Tarpaulin cover is durable, affordable and of very high quality.'],
  },
];

export const whyTrustUs = [
  'We are Cost Effective',
  'We Deliver Within Timeframe',
  'Great and Unique Designs',
  'Smart Planning and Execution of Projects',
];

/** Quote form budget select, copied verbatim from the live site (values and labels). */
export const budgetOptions = [
  { value: '0-200k', label: '₦0-200k' },
  { value: '200-500k', label: '₦200-500k' },
  { value: '500-1M', label: '₦500-1M' },
  { value: '1M-1.5M', label: '₦1M-1.5M' },
  { value: '1.5M-2M', label: '₦1.5M-2M' },
  { value: '2.5M-3M', label: '₦2.5M-3M' },
  { value: '3M-5M', label: '₦3M-5M' },
  { value: '5M-10M', label: '₦5M-10M' },
  { value: '10M-15M', label: '₦10M-15M' },
  { value: '15M-25M', label: '₦15M-25M' },
  { value: '25M-30M', label: '₦25M-30M' },
  { value: '30M-35M', label: '₦30M-35M' },
  { value: '35M-50M', label: '₦35M-50M' },
  { value: '50M and above>', label: '₦50M and above' },
];

export interface Project {
  slug: string;
  title: string;
  client?: string;
  clientLogo?: ImageMetadata;
  image: ImageMetadata;
  imageAlt: string;
  gallery: { src: ImageMetadata; alt: string }[];
  body: string[];
  /** Body copy not yet available from source. */
  missingBody?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'greenville-case-cover-whB0iJrTir',
    title: 'Greenville Case cover',
    client: 'Greenville LNG',
    clientLogo: c7,
    image: prjGreenville,
    imageAlt: 'Articulated truck with its load covered in dark tarpaulin',
    gallery: [],
    body: [
      'Greenville LNG an Oil company with Head office at Abuja Nigeria sited a New Depot at Shagamu for Liquid gas and Fuel sales. Nebenkams Global Ltd won the Bid to Supply Tarpaulin covers for over 300 40ft container loaded with sensitive Machineries in a wooden container.',
      'After a year Greenville imported another set of machineries in a wooden 20ft and 40ft container which Nebenkams was there to deliver same quality on time.',
    ],
  },
  {
    slug: 'lyseek-abuja-large-fishpond-project-2019-vnangZVQOq',
    title: 'Lyseek Abuja Large Fishpond Project 2019',
    image: prjLyseek,
    imageAlt: 'Rows of black tarpaulin fishpond tanks inside a walled farm',
    gallery: [],
    body: [],
    missingBody: true,
  },
  {
    slug: 'multi-pro-bhn-sided-truck-cover-tarpaulin-Sg5WfwwuYQ',
    title: 'Multi Pro BHN Sided Truck Cover Tarpaulin',
    client: 'Multi Pro BHN',
    clientLogo: c6,
    image: prjBhn,
    imageAlt: 'Sided truck fitted with a tarpaulin cover',
    gallery: [{ src: prjBhn2, alt: 'Additional Multi Pro BHN project photograph' }],
    body: [
      'Multi Pro BHN is a haulage and Logistics company whose major specialty is in the Flour, Cement and other Perishables. They move these goods for major players in the Cement and Building material market. Worthy of note is that yours truly Nebenkams Global has been their number 1 supplier of quality tarpaulin which they have confessed to serving them well as compared with other local vendors.',
      'Last Year, Multipro BHN imported new sets of 40ft sided Truck overs with sided over Tarpaulin made in China by the Truck Dealers, which they use especially for carrying their brewery drink products for Nigeria Brewery etc. after a period of time the tarpaulin covers got old and spoilt and their arose a need for replacement and being that the cost of importation is expensive, Nebenkams was called up to the task and as usual we produced a sample using top quality Tarpaulin after which we mass produced for Many trucks and we are still Producing for the company.',
    ],
  },
  {
    slug: 'production-of-marquee-tent-water-proof-tarpaulin-body-3iIQiP2voj',
    title: 'Production of Marquee Tent water proof tarpaulin body',
    client: 'Aufmevic Nig Ltd',
    clientLogo: c8,
    image: prjAufmevic,
    imageAlt: 'Marquee tent with a waterproof tarpaulin body',
    gallery: [{ src: prjAufmevic2, alt: 'Additional Aufmevic marquee project photograph' }],
    body: [
      'Sometime in 2016, Nebenkams developed a mould for production of superb quality of Marquee Tent water proof tarpaulin body. This innovation drew Aufmevic Nig Ltd to bringing all their tent jobs to us as we meet same needs that takes time to china thus saving them time, money and manpower. Since then they have completed over 30 tent jobs with us includes amendment jobs.',
    ],
  },
  {
    slug: 'over-1000pcs-of-truck-covers-DwfcbJK5pv',
    title: 'Over 1000pcs of Truck Covers',
    client: 'TSL Nigeria Ltd',
    clientLogo: c5,
    image: prjTsl,
    imageAlt: 'Truck carrying a tarpaulin-covered load',
    gallery: [],
    body: [
      'One of the fastest Growing Logistics companies in Nigeria is our client with purchases of over 1000pcs of Truck Covers, Mr Fatai one of their principal officers in charge of The Store confessed to the durability and standard materials which they get from us for both their truck liners and flatbed trucks.',
    ],
  },
  {
    slug: 'branding-of-trucks-and-tarpaulin-accessories-mgvUGGdOFG',
    title: 'Branding of trucks and tarpaulin accessories',
    client: 'West African Royal',
    clientLogo: c4,
    image: prjRoyal,
    imageAlt: 'Branded truck with tarpaulin cover and accessories',
    gallery: [],
    body: [
      'Proud makers of royal ceramics tiles and house equipment made us their number one choice for covering their fleet. We specifically brand their trucks and also provide tarpaulin accessories such as nylon Ropes and eyelet rings on their tarpaulins. We have produced and supplied over 400 bundles of these truck covers',
    ],
  },
  {
    slug: 'branding-of-distribution-trucks-with-durable-tarpaulin-LzYzSmFsWE',
    title: 'Branding of distribution trucks with durable tarpaulin',
    client: 'Ashmina Ltd',
    clientLogo: c3,
    image: prjAshmina,
    imageAlt: 'Distribution truck branded with a printed tarpaulin cover',
    gallery: [{ src: prjAshmina2, alt: 'Additional branded distribution truck photograph' }],
    body: [
      'Aquadana has a big name among beverage companies in Nigeria, in this bid to increase its customer base decided to brand their distribution trucks with durable tarpaulin cover instead of a sticker body which won’t last after few weeks. Nebenkams gave this look to their trucks hereby prolonging the life span of truck while giving it an ecstatic look.',
    ],
  },
];

/** Projects shown on the live homepage, in order. */
export const homeProjectSlugs = [
  'greenville-case-cover-whB0iJrTir',
  'production-of-marquee-tent-water-proof-tarpaulin-body-3iIQiP2voj',
  'over-1000pcs-of-truck-covers-DwfcbJK5pv',
];

export const blogCategories = [
  { slug: 'lifestyle', name: 'Lifestyle' },
  { slug: 'nebenkams-news', name: 'Nebenkams News' },
  { slug: 'technology', name: 'Technology' },
] as const;

export interface Post {
  slug: string;
  title: string;
  date: string; // ISO
  category: (typeof blogCategories)[number]['slug'];
  image?: ImageMetadata;
  imageAlt?: string;
  excerpt: string;
  body: (string | { heading: string; items: string[] })[];
}

export const posts: Post[] = [
  {
    slug: 'technique-for-the-selection-of-tarpaulins',
    title: 'Technique For The Selection Of Tarpaulins',
    date: '2019-11-04',
    category: 'technology',
    // The live article image is a watermarked Getty Images photo; it is not reused.
    excerpt:
      'If you want to buy good quality tarpaulins, you must first understand the quality of tarpaulins, tarpaulins prices account for a large factor, but not entirely decided by the price.',
    body: [
      'If you want to buy good quality tarpaulins, you must first understand the quality of tarpaulins, tarpaulins prices account for a large factor, but not entirely decided by the price. Under normal circumstances, the same proportion of the area, the higher the price of tarpaulin products, the quality will certainly be better. Price is only one aspect, practicality is another aspect. A very important criterion for the quality of tarpaulins is the density of longitude and latitude. The higher the density, the better the strength, that is, the better the quality. In looking at the appearance, the more rough the surface is, the lower the quality, so if you take a tarp, look at the roughness first, and then try to try the softness by hand.',
      'First choose the tent pole. Tent poles are mostly fiberglass rods, with a small number of aluminum rods. The price of glass fiber rod is cheap, but it is heavy. The glass fiber rod will break under the high cold environment and sudden heavy pressure. So we have to look at the actual situation, we need the tent pole.',
      'Look at the tent cloth in the second step. A good tent, the tent cloth is the focus. How to check the quality of the tarpaulin should be the main reference for the rain proof performance of the outer tent. The index is still calculated by how many mm water columns per square centimeter. Excellent quality rain-proof canvas, not only high rain-proof index, but also in the canvas seam joints there are wide compression tape to prevent seam leakage. No one wants to run into a rainy day when camping out, or even the tarpaulin he bought is still leaking.',
      'The third step is to choose the style, the dome type or the channel type. The dome tent is supported by more than 2 ledger poles, and it can basically be built without nails. Channel type tents basically need to use ground nails to build firmly, so the wind resistant effect is good. It is mainly used in the high mountain wind environment. If it is on hard ground such as cement, only the heavy stone will be used to hold the support point of the tent.',
    ],
  },
  {
    slug: 'neben-autocraft-a-new-product-launched',
    title: 'Neben Autocraft a New Product Launched',
    date: '2019-07-11',
    category: 'nebenkams-news',
    image: blogAutocraft,
    imageAlt: 'Grey fitted car cover over a saloon car',
    excerpt:
      'Built to last, this Product is made with a superior quality of PVC Nylon which stands the test of heat without affecting your vehicle.',
    body: [
      'Built to last, this Product is made with a superior quality of PVC Nylon which stands the test of heat without affecting your vehicle, it has a cooling effect on cars, it also comes in different colors and designs to suit our clients taste. It’s Affordable at the quality which we provide. It also comes with a unique Bag Pack which makes it fanciful and it’s also portable to carry around.',
      { heading: 'Features of Neben- Autocraft', items: ['Strong', 'Durable', 'Aesthetic', 'Portable', 'Affordable'] },
      {
        heading: 'Ranges of Products',
        items: ['SUVs', 'Cars', 'Mini Cars', 'Saloon Cars', 'Pickup vans', 'Mini vans', 'And so on…'],
      },
      'You can buy Neben Autocraft from motor parts dealers around Lagos, also online at www.Nebenkams.com as a dispatch rider will deliver at any location within Lagos. You can also contact our Agents and Outlets. 08167522223, 08033043995.',
    ],
  },
  {
    slug: 'the-benefits-of-a-fireproof-tarpaulin',
    title: 'The Benefits Of A Fireproof Tarpaulin',
    date: '2019-06-19',
    category: 'technology',
    image: blogFireproof,
    imageAlt: '',
    excerpt:
      'Fireproof tarpaulin, as the name suggests, has the fire protection function.',
    body: [
      'Fireproof tarpaulin, as the name suggests, has the fire protection function, although is so, the tarpaulin manufacturer still wants everybody to talk about the advantage ratio of the fireproof tarpaulin, may have the unexpected harvest, everybody quickly come to understand it:',
      'It can protect objects away from hot spots and spark zones, and completely prevent combustion or isolation combustion. Because the covering cloth itself has the function of heat insulation, it can delay the time of combustion and explosion of dangerous goods or precision instruments, so there is time for discovery and rescue. The covering cloth is used for safety protection in the production, storage and transportation of inflammable and explosive dangerous goods and precision instruments and equipment.',
      'We should completely cover dangerous goods and precision instruments and equipment, so that they can reduce the combustion and explosion caused by little Mars.',
      "Yes, what you see is true. The fireproof tarpaulin is not only fireproof, but also explosion-proof, fireproof and explosion-proof is the advantage of the tarpaulin. We can understand the meaning of the tarpaulin. We can know what kind of tarpaulin we need at the time of purchase and we know it when we buy it. It's not really suitable for using fire proof tarpaulin, so you don't have to ask others, you can make your own decisions. Isn't that good?",
    ],
  },
  {
    slug: 'how-to-prolong-the-service-life-of-the-tarpaulin',
    title: 'How To Prolong The Service Life Of The Tarpaulin',
    date: '2019-06-06',
    category: 'technology',
    image: blogProlong,
    imageAlt: 'Blue curtain-side tarpaulin cover fitted to a rigid truck',
    excerpt:
      'In order to prolong the service life of tarpaulin and canvas, it is necessary to reprocess them regularly to restore the waterproof and anticorrosive properties of the fabrics.',
    body: [
      'In order to prolong the service life of tarpaulin and canvas, it is necessary to reprocess them regularly to restore the waterproof and anticorrosive properties of the fabrics. According to the method of restoring the waterproofing and anticorrosion properties of canvas and tarpaulin by the central phloem Science Research Institute of the Soviet Union, special preparation is used to process it.',
      'It contains paraffin emulsion, leather glue, copper acetate and aluminum acetate.',
      'The paraffin emulsion is prepared from 38 kg of paraffin, 19 kg of stearic acid, and a small amount of water, heated until the wax and stearic acid are completely melted. Then when 80-90 degrees, one side is constantly stirring, one side adding 9.5 kilograms of water dilute triethanolamine and 3 liters and 25% ammonia water in advance, and the prepared emulsion is gradually diluted to 250-300 liters with hot water in the condition of agitation.',
      'The emulsion is prepared in barrels and iron drums with agitators. Heating can be used direct steam and indirect steam, stirrer speed is 100-120 revolutions per minute, the preparation of emulsion water, should use soda softened water.',
      'The leather glue is prepared by soaking it in 38 litres of hot water with 38 kg of leather glue; expanding it for 15-20 hours and then boiling it with direct or indirect steam.',
    ],
  },
];

/** Posts shown on the live homepage and in the "Featured News" sidebar. */
export const featuredPostSlugs = [
  'neben-autocraft-a-new-product-launched',
  'the-benefits-of-a-fireproof-tarpaulin',
  'how-to-prolong-the-service-life-of-the-tarpaulin',
];

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  logo: ImageMetadata;
  logoAlt: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Kiran',
    role: 'Procurement/Shagamu Office',
    company: 'Greenville LNG',
    logo: tGreenville,
    logoAlt: 'Greenville LNG',
    quote:
      'Square pegs must be used in square holes, if you need a right man for every job, search out the internet and you will find out your specification. This is how we got Nebenkams Global limited, from then till now we have good services, timely delivery, extra services without pay and quality materials. we are happy to have met with this company.',
  },
  {
    name: 'Fatai',
    role: 'Head of Procurement',
    company: 'TSL Nigeria Ltd',
    logo: tTsl,
    logoAlt: 'TSL',
    quote:
      'Nebenkams is Reliable, Delivers Timely and at an affordable Price that meets our yearly Budget in terms of tarpaulin and accessories. We got a referral from someone about this company and we tried them and since 6yrs now we have been proud business partners.',
  },
  {
    name: 'Aijey, Store.',
    role: 'Procurement officer',
    logo: tBhn,
    logoAlt: 'BHN',
    quote:
      'With over 2,500 Trucks in our haulage Fleet, BHN remains the leading Haulage Company in Nigeria and as such the responsibility of handling our client’s goods well is on us, we go for the best parts and equipment’s even to Manpower to make sure we deliver quality. Nebenkams just delivers the best and quality tarpaulin products over time even improving on what we were used to which was less effective in productivity. We are proud partners with Nebenkams Global Limited.',
  },
  {
    name: 'Uche',
    role: 'Procurement officer',
    company: 'Golden Transport',
    logo: tGolden,
    logoAlt: 'Golden Transport',
    quote:
      'With over 7years partnership, Nebenkams Global Ltd supplying our truck covers, our goods are safely delivered against rain and vandalisation, we can go to bed and sleep knowing our chain supply and hauling business is safe.',
  },
];

export const testimonialsIntro =
  'We pay attention to details and quality, good communication and strong customer relationship. Here is what they say about us.';

/** Client logos in live-site order. */
export const clients: { logo: ImageMetadata; name: string }[] = [
  { logo: c1, name: 'Golden Transport' },
  { logo: c2, name: 'BUA Group' },
  { logo: c3, name: 'Aquadana' },
  { logo: c4, name: 'Royal' },
  { logo: c5, name: 'TSL' },
  { logo: c6, name: 'BHN' },
  { logo: c7, name: 'Greenville LNG' },
  { logo: c8, name: 'Aufmevic Nigeria Limited' },
  { logo: c9, name: 'Zartech' },
  { logo: c10, name: 'Nosak Group' },
  { logo: c11, name: 'Funsho Logistics' },
  { logo: c12, name: 'Stallion' },
  { logo: c13, name: 'The Flour Mill' },
  { logo: c14, name: 'Capital Oil and Gas Industries' },
  // Name not legible from the logo; confirm with owner.
  { logo: c15, name: 'Client logo' },
  { logo: c16, name: 'Dangote Group' },
];

// Gallery: live-site dataset, caption = service label shown on the source page.
const galleryFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*', { eager: true });
const galleryOrder: [string, string][] = [
  ['1565737940.lLS4np.jpeg', 'Canopies and Shades'],
  ['1565737940.pCc0DR.jpeg', 'Canopies and Shades'],
  ['1565737940.nF6880.jpeg', 'Canopies and Shades'],
  ['1565737909.uTcWlK.jpeg', 'Agro Allied Product Cover'],
  ['1565737909.HZDGmR.jpeg', 'Agro Allied Product Cover'],
  ['1565737883.k4bP8z.jpeg', 'Green House Farm and fishponds'],
  ['1565737883.YSsJsS.jpeg', 'Green House Farm and fishponds'],
  ['1565737883.QG4Xla.jpg', 'Green House Farm and fishponds'],
  ['1565737854.cijmIq.jpeg', 'Canopies and Shades'],
  ['1565737853.4Dp5a7.jpeg', 'Canopies and Shades'],
  ['1565737853.kBAeIh.jpeg', 'Canopies and Shades'],
  ['1565737853.M5dasG.jpeg', 'Canopies and Shades'],
  ['1565737853.sMITur.jpeg', 'Canopies and Shades'],
  ['1565737853.VA1OpM.jpeg', 'Canopies and Shades'],
  ['1565737853.V4Dh1x.jpeg', 'Canopies and Shades'],
  ['1565737853.Vflay1.jpeg', 'Canopies and Shades'],
  ['1565737853.RjibUO.jpeg', 'Canopies and Shades'],
  ['1565737853.FSptoA.jpeg', 'Canopies and Shades'],
  ['1565737805.Ijl1Ji.jpeg', 'Marquee Tents production'],
  ['1565737805.VAjmYp.jpeg', 'Marquee Tents production'],
  ['1565737805.9vqmeG.jpeg', 'Marquee Tents production'],
  ['1565737805.rI7QNS.jpeg', 'Marquee Tents production'],
  ['1565737805.esPKPJ.jpg', 'Marquee Tents production'],
  ['1565737757.8Zuyo1.jpg', 'Truck cover production'],
  ['1565737757.t2i49p.jpg', 'Truck cover production'],
  ['1565737757.EipBh9.jpg', 'Truck cover production'],
  ['1565737757.Nn8PvT.jpg', 'Truck cover production'],
  ['1565737757.Q1uGAG.jpg', 'Truck cover production'],
  ['1565737734.LhqYjk.jpg', 'Truck cover production'],
  ['1565737734.0ahVbx.jpg', 'Truck cover production'],
  ['1565737734.91br2D.jpg', 'Truck cover production'],
];
export const gallery = galleryOrder.map(([file, caption]) => ({
  src: galleryFiles[`../assets/gallery/${file}`].default,
  caption,
}));
export const GALLERY_PAGE_SIZE = 16;

export const aboutMenu = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Testimonials', href: '/client-testimonies' },
  { label: 'Career', href: '/careers' },
  { label: 'Our Services', href: '/our-services' },
];

export const serviceHref = (s: { slug: string }) => `/service/${s.slug}`;
export const projectHref = (p: { slug: string }) => `/project/${p.slug}`;
export const postHref = (p: { slug: string }) => `/news/${p.slug}`;
export const findService = (slug: string) => services.find((s) => s.slug === slug);
export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
export const findPost = (slug: string) => posts.find((p) => p.slug === slug);
export const categoryName = (slug: string) => blogCategories.find((c) => c.slug === slug)?.name ?? slug;
export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'UTC' });

export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About', children: aboutMenu },
  { label: 'Services', href: '/our-services', children: services.map((s) => ({ label: s.name, href: serviceHref(s) })) },
  { label: 'Past Projects', href: '/past-projects' },
  { label: 'Gallery', href: '/image/gallery' },
  { label: 'Blog', href: '/news-publications' },
  { label: 'Contact', href: '/contact-us' },
];

export const footerCompany = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Projects', href: '/past-projects' },
  { label: 'Services', href: '/our-services' },
  { label: 'Gallery', href: '/image/gallery' },
  { label: 'Blog', href: '/news-publications' },
  { label: 'Contact', href: '/contact-us' },
];
