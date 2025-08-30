import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "@/components/homepage/HeroSection";
import PropertyCard from "@/components/homepage/PropertyCard";
import Pill from "@/components/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self Checkin",
  "Instant Book",
];

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error)
      }finally{
        setLoading(false)
      }
    };
    fetchProperties()
  }, []);

  if(loading){
    return <p>Loading....</p>
  }

  return (
    <>

    <div className="grid grid-cols-3 gap-4">
      {
        properties.map((property)=>(
          <PropertyCard key={property.id} property={property}/>
        ))
      }
    </div>
      
    </>
  );
}
