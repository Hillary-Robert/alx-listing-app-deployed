import { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">{property.name}</h1>
      <p className="text-gray-500">
        {property.address.city}, {property.address.country}
      </p>

      <div className="flex gap-2 mt-2">
        {property.category.map((cat) => (
          <span key={cat} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            {cat}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-semibold">${property.price}/night</span>
        <span className="text-sm">⭐ {property.rating}</span>
      </div>

      {property.description && (
        <p className="mt-4 text-gray-700">{property.description}</p>
      )}
    </div>
  );
}
