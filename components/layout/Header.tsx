import { useState } from "react";

import { BUTTON_TEXT } from "@/constants/index";
import Button from "../common/Button";
import { useRouter } from 'next/router';


import {
  Mail,
  Home,
  Castle,
  Trees,
  Building,
  Palmtree,
  Sparkles,
  Waves,
  Umbrella,
  Mountain,
  Tent,
  Building2,
  TreePine,
  BuildingIcon as Barn,
  Search,
} from "lucide-react";
import Image from "next/image";

const accommodationTypes = [
  { id: "rooms", label: "Rooms", icon: Home },
  { id: "mansion", label: "Mansion", icon: Castle },
  { id: "countryside", label: "Countryside", icon: Trees },
  { id: "villa", label: "Villa", icon: Building },
  { id: "tropical", label: "Tropical", icon: Palmtree },
  { id: "new", label: "New", icon: Sparkles },
  { id: "amazing-pool", label: "Amazing pool", icon: Waves },
  { id: "beach-house", label: "Beach house", icon: Umbrella },
  { id: "island", label: "Island", icon: Mountain },
  { id: "camping", label: "Camping", icon: Tent },
  { id: "apartment", label: "Apartment", icon: Building2 },
  { id: "house", label: "House", icon: Home },
  { id: "lakefront", label: "Lakefront", icon: Waves },
  { id: "farm-house", label: "Farm house", icon: Barn },
  { id: "treehouse", label: "Treehouse", icon: TreePine },
  { id: "cabins", label: "Cabins", icon: Home },
  { id: "castles", label: "Castles", icon: Castle },
];

export default function Header() {
  const [selectedType, setSelectedType] = useState("villa");
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    people: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchData((prev) => ({ ...prev, [field]: value }));
  };

   const router = useRouter();


  const isPropertyDetailPage = router.pathname.startsWith("/property/") && router.pathname !== "/property";

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-emerald-500 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <Mail className="h-5 w-5" />
          <span className="text-sm font-medium">
            Overseas trip? Get the latest information on travel guides
          </span>
          <Button
            label={BUTTON_TEXT.moreInfo}
            variant="tertiary"
            onClick={() => console.log("All clicked!")}
          />
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 lg:px-10 px-2">
        <div className=" mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/assets/Vector.png"
                alt="Vector icon"
                width={70}
                height={70}
                className="cover cursor-pointer"
                 onClick={() => router.push('/')}
              />{" "}
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-4xl overflow-hidden">
              <div className="flex items-center bg-white border border-gray-300 rounded-full ">
                <div className="flex-1 grid grid-cols-4 divide-x divide-gray-300">
                  {/* Location */}
                  <div className="px-6 py-3">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Search for destination"
                      value={searchData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      className="w-full text-sm text-gray-600 placeholder-gray-400 border-0 p-0 focus:outline-none focus:ring-0"
                    />
                  </div>

                  {/* Check in */}
                  <div className="px-6 py-3">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Check in
                    </label>
                    <input
                      type="text"
                      placeholder="Add date"
                      value={searchData.checkIn}
                      onChange={(e) =>
                        handleInputChange("checkIn", e.target.value)
                      }
                      className="w-full text-sm text-gray-600 placeholder-gray-400 border-0 p-0 focus:outline-none focus:ring-0"
                    />
                  </div>

                  {/* Check out */}
                  <div className="px-6 py-3">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Check out
                    </label>
                    <input
                      type="text"
                      placeholder="Add date"
                      value={searchData.checkOut}
                      onChange={(e) =>
                        handleInputChange("checkOut", e.target.value)
                      }
                      className="w-full text-sm text-gray-600 placeholder-gray-400 border-0 p-0 focus:outline-none focus:ring-0"
                    />
                  </div>

                  {/* People */}
                  <div className="px-6 py-3">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      People
                    </label>
                    <input
                      type="text"
                      placeholder="Add guest"
                      value={searchData.people}
                      onChange={(e) =>
                        handleInputChange("people", e.target.value)
                      }
                      className="w-full text-sm text-gray-600 placeholder-gray-400 border-0 p-0 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="p-2 mr-3 bg-amber-400 rounded-full">
                  <Search className="text-white" />
                </div>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-6">
              <Button
                label={BUTTON_TEXT.signIn}
                variant="primary"
                onClick={() => router.push('/signIn')}

              />
              <Button
                label={BUTTON_TEXT.signUp}
                variant="secondary"
                onClick={() => router.push('/signUp')}

              />
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
      {!isPropertyDetailPage && (
        <div className="flex justify-between bg-white border-b border-gray-200 px-10">
          <div className=" mx-auto px-4 py-4">
            <div className="flex items-center gap-8 overflow-auto no-scrollbar">
              {accommodationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex flex-col items-center gap-2 min-w-0 flex-shrink-0 p-2  transition-colors ${
                    selectedType === type.id
                      ? "text-gray-900 border-b-2 border-gray-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <type.icon className="h-4 w-4" />
                  <span className="text-xs font-small whitespace-nowrap">
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
