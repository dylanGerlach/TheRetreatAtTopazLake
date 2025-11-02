import "./App.css";
import Hero from "./components/Hero";
import PropertyInfo from "./components/PropertyInfo";
import PhotoCarousel from "./components/PhotoCarousel";
import Video from "./components/Video";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import heroImage from "./assets/hero.jpeg";

function App() {
  // Property data matching the Rela template
  const propertyData = {
    address: "1929 US-395",
    city: "Gardnerville",
    state: "NV",
    zip: "89410",
    price: 2800000,
    beds: 11,
    baths: 7,
    sqft: 8150,
    lotSize: "53579sf",
    yearBuilt: 1969,
    heroImage: heroImage,
    description:
      "Welcome to the Topaz Lake Retreat — a rare 8,150 sq.ft. standalone destination property overlooking Topaz Lake with panoramic water and mountain views. Situated on 1.23 acres with over 450 feet of Highway 395 frontage, this highly visible, income-producing opportunity sits just north of the Nevada/California border, offering the perfect blend of tax advantages, tourism traffic, and long-term upside. This property has one of the only Short Term Rental Permits in the area and rents vary. Listing Agent has more information about the variety of rents charged. Occupants work in neighboring cities and keep the property mostly reserved. Originally built in 1969 and rebuilt/expanded in 1989 (per the Douglas County Assessor), the property has been thoughtfully improved (2024/2025) and is currently operating as a short-term rental. The property has NEW PLUMBING & ELECTRICAL, NEW WINDOWS, NEW TANKLESS WATER HEATERS, NEW CABINETS & FIXTURES AND ALL NEW APPLIANCES IN EVERY UNIT. With 11 spacious bedrooms, 6 bathrooms, 4 full kitchens plus a kitchenette, this retreat is ideal for use as a corporate lodge, wellness retreat, boutique hospitality concept, or high-end vacation rental compound. Each unit has been tastefully designed with NEW granite islands/breakfast bars, laminate flooring, washer/dryer (combo) in every unit, and is comes completely furnished. The property also offers 31 dedicated parking spaces, comprised of RV, boat, and standard vehicle parking, making it a rare find for lake visitors, large groups, or event-style hosting. Additionally, there is gated long-term RV storage, creating further passive income potential. Shared potable water, wastewater disposal, and fire protection systems with the adjacent Best Western provide streamlined utility support. With unmatched exposure along Nevada's most traveled highway and unobstructed views of Topaz Lake, this is a one-of-a-kind investment opportunity with multiple revenue pathways — hospitality, retreat rental, corporate leasing, event hosting, or continued STR operations. The property is fully fenced and secure with phenomenal lake views. Truly a one of a kind gem.",
  };

  return (
    <div className="app">
      <Hero property={propertyData} />
      <PropertyInfo property={propertyData} />
      <PhotoCarousel />
      <Video />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
