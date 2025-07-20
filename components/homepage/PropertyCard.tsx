import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />

      <div className="text-black flex gap-4 mt-1 p-2">
        {property.category.map((cat, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-300 transition"
          >
            <p>{cat}</p>
          </div>
        ))}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{property.name}</h3>
        <p className="text-gray-500">{property.address.city}, {property.address.country}</p>
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>⭐ {property.rating}</span>
          <span>${property.price}/night</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
