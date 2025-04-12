import popular1 from "@/images/popular/5.jpg";
import popular2 from "@/images/popular/6.jpg";
import popular3 from "@/images/popular/9.jpg";
import popular4 from "@/images/popular/10.jpg";
import popular5 from "@/images/popular/12.jpg";
import popular6 from "@/images/popular/13.jpg";
import popular7 from "@/images/popular/14.jpg";
import popular8 from "@/images/popular/15.jpg";
import room1 from "@/images/properties/b-1.jpg";
import room2 from "@/images/properties/b-11.jpg";
import room3 from "@/images/properties/b-12.jpg";
import room4 from "@/images/properties/bg-h-1.jpg";
import room5 from "@/images/properties/fp-10.jpg";
import room6 from "@/images/properties/fp-11.jpg";
import icon1 from "@/images/icon-4.svg";
import icon2 from "@/images/icon-5.svg";
import icon3 from "@/images/icon-6.svg";
import icon4 from "@/images/icon-15.svg";
import team1 from "@/images/t-5.jpg";
import team2 from "@/images/t-6.jpg";
import team3 from "@/images/t-7.jpg";
import team4 from "@/images/t-8.jpg";
import team5 from "@/images/team-image-2.jpg";
import client1 from "@/images/ts-1.jpg";
import client2 from "@/images/ts-2.jpg";
import client3 from "@/images/ts-3.jpg";
import client4 from "@/images/ts-4.jpg";
import client5 from "@/images/ts-5.jpg";

export const Popular = [
  { image: popular1, name: "New York", seat: "220 Properties" },
  { image: popular2, name: "Los Angesls", seat: "230 Properties" },
  { image: popular3, name: "Atalanta", seat: "250 Properties" },
  { image: popular4, name: "Inter Miami", seat: "340 Properties" },
  { image: popular5, name: "San Francisco", seat: "355 Properties" },
  { image: popular6, name: "Chicago", seat: "270 Properties" },
  { image: popular7, name: "Houston", seat: "290 Properties" },
  { image: popular8, name: "Orlando", seat: "287 Properties" },
];

export const featuredRoom = [
  {
    image: room1,
    title: "Real Luxury Family House Villa",
    location: "Central Park South, NYC",
    room: "6 Bedrooms",
    seat: "3 Bathrooms",
    area: "720 ft",
    garage: "2 Garages",
    price: "49",
    status: "For Sale",
    propertyType: "Villa",
    amenities: [
      "Swimming Pool",
      "Private Garden",
      "Gym",
      "Smart Home Features",
    ],
    highlights: "Walking distance to Central Park, premium furnishing.",
    nearbyAttractions: [
      "Central Park",
      "The Metropolitan Museum of Art",
      "Broadway",
    ],
    rating: 4.9,
    reviews: 120,
    description:
      "An exquisite villa located in the heart of NYC, offering luxurious living and proximity to Central Park.",
  },
  {
    image: room2,
    title: "Modern Apartment in Downtown",
    location: " 12 - Downtown, LA",
    room: "3 Bedrooms",
    seat: "2 Bathrooms",
    area: "500 ft",
    garage: "1 Garage",
    price: "35",
    status: "For Rent",
    propertyType: "Apartment",
    amenities: ["Rooftop Terrace", "Concierge Service", "High-Speed Internet"],
    highlights: "Located in a prime downtown area, close to public transport.",
    nearbyAttractions: [
      "Hollywood Walk of Fame",
      "Griffith Observatory",
      "Staples Center",
    ],
    rating: 4.7,
    reviews: 85,
    description:
      "A chic modern apartment in the bustling downtown area of Los Angeles, perfect for city lovers.",
  },
  {
    image: room3,
    title: "Cozy Cottage by the Lake",
    location: "Lakeside Dr Lakeview, MI",
    room: "4 Bedrooms",
    seat: "2 Bathrooms",
    area: "850 ft",
    garage: "No Garage",
    price: "40",
    status: "For Sale",
    propertyType: "Cottage",
    amenities: [
      "Private Dock",
      "Fireplace",
      "Outdoor Patio",
      "Kayaking Access",
    ],
    highlights: "Peaceful lake view, surrounded by nature.",
    nearbyAttractions: ["Lake Michigan", "Nature Trails", "Local Wineries"],
    rating: 4.8,
    reviews: 95,
    description:
      "A serene lakeside cottage offering peace and stunning views, ideal for weekend getaways.",
  },
  {
    image: room4,
    title: "Elegant Penthouse Suite",
    location: " 89 - Upper East Side, NYC",
    room: "5 Bedrooms",
    seat: "3 Bathrooms",
    area: "1200 ft",
    garage: "2 Garages",
    price: "75",
    status: "For Rent",
    propertyType: "Penthouse",
    amenities: ["Skyline View", "Home Theater", "Private Elevator", "Jacuzzi"],
    highlights: "Luxurious suite with breathtaking city views.",
    nearbyAttractions: [
      "Madison Avenue Shopping",
      "Central Park",
      "Museum Mile",
    ],
    rating: 5.0,
    reviews: 130,
    description:
      "A sophisticated penthouse suite featuring panoramic city views and luxurious amenities.",
  },
  {
    image: room5,
    title: "Suburban Family Home",
    location: " Ln, 16 - Suburbs, TX",
    room: "4 Bedrooms",
    seat: "3 Bathrooms",
    area: "900 ft",
    garage: "2 Garages",
    price: "55",
    status: "For Sale",
    propertyType: "Family Home",
    amenities: ["Large Backyard", "BBQ Area", "Playground", "Home Office"],
    highlights: "Family-friendly neighborhood, great schools nearby.",
    nearbyAttractions: ["Local Parks", "Community Pool", "Shopping Centers"],
    rating: 4.6,
    reviews: 75,
    description:
      "A spacious suburban home with a large backyard, perfect for families seeking comfort and space.",
  },
  {
    image: room6,
    title: "Rustic Farmhouse Retreat",
    location: " Rd, 45 - Countryside, VT",
    room: "6 Bedrooms",
    seat: "4 Bathrooms",
    area: "1500 ft",
    garage: "3 Garages",
    price: "60",
    status: "For Sale",
    propertyType: "Farmhouse",
    amenities: ["Barn", "Fruit Orchard", "Solar Panels", "Walking Trails"],
    highlights: "Eco-friendly design, surrounded by farmland.",
    nearbyAttractions: ["Local Markets", "Hiking Trails", "Historic Sites"],
    rating: 4.9,
    reviews: 65,
    description:
      "A rustic farmhouse offering a perfect blend of comfort and countryside charm, ideal for large families.",
  },
  {
    image: room1,
    title: "Beachside Bungalow",
    location: "Ocean Dr, 32 - Malibu, CA",
    room: "3 Bedrooms",
    seat: "2 Bathrooms",
    area: "600 ft",
    garage: "1 Garage",
    price: "50",
    status: "For Rent",
    propertyType: "Bungalow",
    amenities: ["Beach Access", "Outdoor Shower", "Tropical Garden", "Hammock"],
    highlights: "Close to the ocean, stunning sunset views.",
    nearbyAttractions: ["Malibu Beach", "Surfing Spots", "Coastal Cafes"],
    rating: 4.8,
    reviews: 110,
    description:
      "A beautiful bungalow just steps away from the beach, offering relaxing sea views and fresh air.",
  },
  {
    image: room2,
    title: "Urban Loft in the City",
    location: " St, 101 - Manhattan, NYC",
    room: "2 Bedrooms",
    seat: "1 Bathroom",
    area: "400 ft",
    garage: "No Garage",
    price: "30",
    status: "For Rent",
    propertyType: "Loft",
    amenities: [
      "Exposed Brick Walls",
      "Open Floor Plan",
      "High Ceilings",
      "Co-Working Space",
    ],
    highlights: "Perfect for professionals, near major offices.",
    nearbyAttractions: [
      "Times Square",
      "Empire State Building",
      "Chelsea Market",
    ],
    rating: 4.5,
    reviews: 50,
    description:
      "A trendy urban loft with a unique industrial vibe, located in the heart of Manhattan.",
  },
];

export const chooseUs = [
  {
    title: "Wide Renge Of Properties",
    image: icon1,
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
  {
    title: "Trusted by thousands",
    image: icon2,
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
  {
    title: "Financing made easy",
    image: icon3,
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
  {
    title: "We are here near youv",
    image: icon4,
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
];

export const team = [
  { name: "Nina Thomas", image: team1, title: "Real Estate Agent" },
  { name: "Chris Melo", image: team2, title: "Real Estate Agent" },
  { name: "Katy Grace", image: team3, title: "Real Estate Agent" },
  { name: "Mark Web", image: team4, title: "Real Estate Aget" },
  { name: "Carls Jhons", image: team5, title: "Real Estate Aget" },
];

export const client = [
  {
    image: client1,
    name: "Carls Jhons",
    country: "New York",
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
  {
    image: client2,
    name: "Mark Web",
    country: "New York",
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
  {
    image: client3,
    name: "Katy Grace",
    country: "New York",
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
  {
    image: client3,
    name: "Chris Melo",
    country: "New York",
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
  {
    image: client4,
    name: "Carls Jhons",
    country: "New York",
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
  {
    image: client5,
    name: "Carls Jhons",
    country: "New York",
    des: "orem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directoyr.",
  },
];
