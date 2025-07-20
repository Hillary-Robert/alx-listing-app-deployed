const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
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
        <div>
          <p className="text-xs mt-4">
            Some hotel requires you to cancel more than 24 hours... <a href="#" className="underline">here</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
