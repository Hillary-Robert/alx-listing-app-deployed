const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="container mx-auto px-4 grid gap-8 grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-600">
        <div>
          <div className="text-4xl font-bold text-green-600">alx</div>
          <p className="text-xs mt-4">
            ALX is a platform where travelers can discover <br /> and book unique,
            comfortable, and affordable lodging options worldwide. <br /> From cozy
            city apartments and tranquil countryside <br /> retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.{" "}
            <a href="#" className="underline">
              here
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Explore</h4>
          <ul>
            <li>Apartments in Dubai</li>
            <li>Hotels in New York</li>
            <li>Villa in Spain</li>
            <li>Mansion in Indonesia</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Brand</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Help</h4>
          <ul>
            <li>Support</li>
            <li>Cancel booking</li>
            <li>Refunds</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
