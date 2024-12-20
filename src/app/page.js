import Image from "next/image";

export default function Menu() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-auto bg-gray-100">
      {/* Menu Image */}
      <div className="flex-grow">
        <Image
          src="/menu.png"
          alt="Restaurant Menu"
          layout="intrinsic"
          width={1080} // Adjust based on your image dimensions
          height={1920}
          className="w-full"
        />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="lg:flex lg:justify-around ">
          <p className="text-lg font-semibold sm:mb-4 ">Platinium pool          </p>
          <p className="sm:mb-4">4 Rue Aknoul, Casablanca 20050</p>
          <p className="sm:mb-1">
            <a href="tel:+212679093177 " > Phone: +212679093177</a>
            </p>
        </div>
      </footer>
    </div>
  );
}
