import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import { Star, MapPin, Heart, Share, Bed, BathIcon, Users } from "lucide-react";
import { BUTTON_TEXT } from "@/constants";
import Link from "next/link";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center my-4 justify-between">
        <div className="flex items-center space-x-2 my-4">
          <Star className=" text-gray-900" style={{ height: 20, width: 20 }} />{" "}
          <span className="text-gray-900">{property.rating}</span>
          <span className="text-gray-600">
            {property.reviews && `(${property.reviews.length} reviews)`}
          </span>
          <MapPin className="text-gray-900" style={{ height: 20, width: 20 }} />
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="flex space-x-4 items-center bg-gray-50 rounded-full px-4 py-2 text-gray-950 border border-gray-200 cursor-pointer hover:bg-gray-100 transition ease-in-out duration-300"
            onClick={() => console.log("Save clicked!")}
            aria-label="Save property"
          >
            <Heart className="w-5 h-5 text-gray-900 mr-4" />
            {BUTTON_TEXT.save}
          </button>

          <button className="flex space-x-4 items-center bg-gray-50 rounded-full px-4 py-2 text-gray-950 border border-gray-200 cursor-pointer hover:bg-gray-100 transition ease-in-out duration-300">
            <Share className="w-5 h-5 text-gray-900 mr-4" />
            {BUTTON_TEXT.share}
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px] relative">
        {/* Main Image */}
        <div className="col-span-2 row-span-2 relative">
          <Image
            src={property.images?.main || "/placeholder.jpg"}
            alt="Main property view"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>

        {/* Other Images */}
        {(property.images?.others?.length ?? 0) > 0 &&
          property.images?.others?.map((src, idx) => (
            <div key={idx} className="relative h-full">
              <Image
                src={src}
                alt={`Property view ${idx + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
          ))}

        {/* Bottom right button */}
        <button 
        onClick={() => console.log("Show all photos clicked!")}
        className=" absolute bottom-4 right-4 bg-white/55 text-white border-white border-2 px-4 py-2 rounded-full shadow">
         {BUTTON_TEXT.showAll}
        </button>
      </div> 

      <div className="mt-6 flex items-center space-x-4">
        <span className="flex  items-center space-x-4 py-2 px-4 bg-gray-50 border-gray-100 border-2 rounded-full">
          <Bed className="w-5 h-5 mr-2" /> {property.bedrooms} Bedrooms
        </span>

        <span className="flex  items-center space-x-4 py-2 px-4 bg-gray-50 border-gray-100 border-2 rounded-full">
          <BathIcon className="w-5 h-5 mr-2" /> {property.bathrooms} Bathrooms
        </span>

        <span className="flex  items-center space-x-4 py-2 px-4 bg-gray-50 border-gray-100 border-2 rounded-full">
          <Users className="w-5 h-5 mr-2" /> {property.number_of_guests} Guests
        </span>
      </div>
    </div>
  );
  
};
 
const Description: React.FC<{property:PropertyProps}> = ({ property }) => {
  return (
    <div className="mt-4 flex-3/5">
       {/* Description */}
 <div >
   <div className="flex justify-between border-y-1 border-gray-500 py-4"> 
     <nav>
       <ul className="flex space-x-4">
         <li>
           <Link href={`/property/${property.id}`} className="text-gray-500 hover:underline">
             Description
           </Link>
         </li>
         <li>
           <Link href={`/property/${property.id}/reviews`} className="text-gray-500 hover:underline">
             What we offer
           </Link>
         </li>
         <li>
           <Link href={`/property/${property.id}/location`} className="text-gray-500 hover:underline">
             Location
           </Link>
         </li>
       </ul>
     </nav>
     <p className="text-gray-500">
       Published
     </p>
   </div>
  
   <p className="my-4 text-justify">{property.description}</p>
 </div>
 {/* Amenities */}
 <div className="mt-4">
   <h2 className="text-2xl font-semibold">What this place offers</h2>
   <ul className="flex flex-wrap space-x-4">
     {property.category?.map((amenity: string, index: number) => (
       <li key={index} className="bg-gray-200 p-2 rounded-md">
         {amenity}
       </li>
     ))}
   </ul>
 </div>
    </div>
  );
};



export default PropertyDetail;
export { Description };
