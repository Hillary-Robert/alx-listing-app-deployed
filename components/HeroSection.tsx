const HeroSection = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/assets/hero.png')` }}
    >
      <div className="bg-black bg-opacity-40 text-center p-6 rounded-lg text-white">
        <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide</p>
      </div>
    </section>
  );
};

export default HeroSection;
