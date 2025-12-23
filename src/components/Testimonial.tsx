import imgImage67 from "figma:asset/21a6be253fb14ba0748b3310c64b39b8ff20bbf9.png";

export function Testimonial() {
  return (
    <section className="w-full py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#6b4c7f] to-[#5a3d6a] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-12">
            {/* Quote Section */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M12 28C12 23.5817 15.5817 20 20 20V14C12.268 14 6 20.268 6 28H12ZM32 28C32 23.5817 35.5817 20 40 20V14C32.268 14 26 20.268 26 28H32Z" fill="white" opacity="0.3"/>
                </svg>
              </div>
              
              <blockquote className="text-white mb-8">
                <p className="mb-4">
                  My career has allowed features to run the
                </p>
                <p className="mb-4">
                  show at Cult, where I brought two of my
                </p>
                <p>
                  favorite things to the table: games and
                </p>
                <p>
                  technology, which is 2006.
                </p>
              </blockquote>
              
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full mb-3" />
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={imgImage67} 
                  alt="Testimonial" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
