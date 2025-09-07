
import React from "react";
import { BACKGROUND_IMAGE, BUTTON_TEXT, API_BASE_URL } from "@/constants/index";
import Button from "@/components/common/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/common/Card";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/properties`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <p className="flex-1 justify-center items-center text-center">
        Loading...
      </p>
    );
  }

  return (
    <main className="bg-white">
      <div
        className="
          mx-4 mt-8
          rounded-xl shadow-lg 
          h-96
          flex items-center justify-center
          relative overflow-hidden
        "
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        <div className="relative z-10 p-6 text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-row flex-wrap justify-between items-center gap-4 px-4">
        <div className="flex-1 flex-row flex-wrap gap-2">
          <Button
            label={BUTTON_TEXT.all}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
          <Button
            label={BUTTON_TEXT.topVilla}
            variant="secondary"
            onClick={() => console.log("Top Villa clicked!")}
          />
          <Button
            label={BUTTON_TEXT.freeReschedule}
            variant="secondary"
            onClick={() => console.log("Free Reschedule clicked!")}
          />
          <Button
            label={BUTTON_TEXT.bookNowPayLater}
            variant="secondary"
            onClick={() => console.log("Book Now Pay Later clicked!")}
          />
          <Button
            label={BUTTON_TEXT.selfCheckin}
            variant="secondary"
            onClick={() => console.log("Self Checkin clicked!")}
          />
          <Button
            label={BUTTON_TEXT.instantBook}
            variant="secondary"
            onClick={() => console.log("Instant Book clicked!")}
          />
        </div>

        <div className="flex-row flex-wrap gap-2 justify-end">
          <Button
            label={BUTTON_TEXT.filter}
            variant="secondary"
            onClick={() => console.log("Filter clicked!")}
          />
          <Button
            label={BUTTON_TEXT.sortByHighestPrice}
            variant="secondary"
            onClick={() => console.log("Sort by highest price clicked!")}
          />
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {properties.map((property) => (
          <Card
            key={String(property.id)}
            id={String(property.id)}
            title={property.name}
            price_perNight={property.price}
            city={property.address.city}
            image={property.image ?? ""}
            bedrooms={Number(property.offers?.bed)}
            bathrooms={Number(property.offers?.shower)}
            number_of_guests={String(property.offers?.occupants)}
            rating={property.rating}
            features={property.category}
          />
        ))}
      </div>
    </main>
  );
}
