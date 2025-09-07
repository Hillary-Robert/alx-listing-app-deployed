export interface CardProps {
  
  title: string;
  price_perNight: number;
  city: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  number_of_guests: string; 
  rating: number;
  features?: string[];
}

export interface ButtonProps {
  
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger"|"tertiary";
  className?: string;
  disabled?: boolean;
  icon?:string;
}


interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}



export interface Review {
  date: string;
  period: string;
  trip: string;
  user: string;
  avatar?: string;
  comment: string;
  rating: number;
  
}


export interface PropertyProps {
  id?:number | string;
   name: string;
   price: number;
   rating: number;
   address: {
     state?: string;
     city: string;
     country: string;
   };
    images?: {
     main: string;
     others: string[];
   };
   reviews?: Review[];
   description: string;
   category: string[];
   bedrooms: number;
   bathrooms: number;
   number_of_guests: string;
   features: string[];
   discount?: string;
   offers?: Offers;
   image?: string; 
   // published:Date;
 
 }