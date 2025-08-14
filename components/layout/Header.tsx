import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">alx</div>


        <div>
          <ul className="flex flex-row gap-5 text-black">

            <Link href={"/"}><li>Home</li></Link>

            <Link href={"/"}><li>About</li></Link>

            <Link href={"/"}><li>Products</li></Link>
            
          </ul>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-md border border-green-600 text-green-600 hover:bg-green-50 transition">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>

  );
};

export default Header;
