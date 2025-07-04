import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ScrollProps {
  imageUrl?: string;
  name?: string;
  power?: string;
  offspring?: string;
  description?: string;
}

export default function Scroll({ 
  imageUrl: propImageUrl,
  name: propName,
  power: propPower,
  offspring: propOffspring,
  description: propDescription
}: ScrollProps) {
  const [godData, setGodData] = useState({
    imageUrl: propImageUrl || "https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Character+Image",
    name: propName || "Character Name",
    power: propPower || "Divine Power",
    offspring: propOffspring || "Offspring",
    description: propDescription || "Character description goes here. This is where the detailed story and attributes of the mythological character will be displayed."
  });

  useEffect(() => {
    const selectedGod = localStorage.getItem('selectedGod');
    if (selectedGod) {
      try {
        const parsedGod = JSON.parse(selectedGod);
        setGodData(prev => ({
          imageUrl: parsedGod.imageUrl || prev.imageUrl,
          name: parsedGod.name || prev.name,
          power: parsedGod.power || prev.power,
          offspring: parsedGod.offspring || prev.offspring,
          description: parsedGod.description || prev.description
        }));
        localStorage.removeItem('selectedGod');
      } catch (error) {
        console.error('Error parsing selected god data:', error);
      }
    }
  }, []);

  const { imageUrl, name, power, offspring, description } = godData;

  return (
    <div className="min-h-screen flex items-center justify-center p-4" 
         style={{
           backgroundImage: "url('https://as1.ftcdn.net/jpg/04/26/18/90/1000_F_426189082_wM2oVaY8zOcemq6AeSWQAscMboNYmUXZ.jpg')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      
      <div className="relative max-w-4xl w-full">
        <div className="bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200 
                        shadow-2xl border-8 border-amber-900 rounded-lg
                        relative overflow-hidden">
          
          <div className="absolute inset-0 border-4 border-amber-800 rounded-lg m-2 opacity-30"></div>
          
          <div className="relative z-10 p-8 flex gap-8">
            
            {/* Left Side - Character Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 rounded-lg overflow-hidden shadow-lg border-4 border-amber-800 relative">
                <Image 
                  src={imageUrl}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                />
              </div>
            </div>
            
            {/* Right Side - Character Information */}
            <div className="flex-1 space-y-6">
              
              <div className="text-center">
                <h1 className="text-4xl font-bold text-amber-900 mb-2 font-serif">
                  {name}
                </h1>
                <div className="w-32 h-1 bg-amber-700 mx-auto rounded"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-200/50 p-4 rounded-lg border-2 border-amber-700">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2 font-serif">
                    Divine Power
                  </h3>
                  <p className="text-amber-800 font-medium">
                    {power}
                  </p>
                </div>
                
                <div className="bg-amber-200/50 p-4 rounded-lg border-2 border-amber-700">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2 font-serif">
                    Children/Offspring
                  </h3>
                  <p className="text-amber-800 font-medium">
                    {offspring}
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-100/70 p-6 rounded-lg border-2 border-amber-700">
                <h3 className="text-xl font-semibold text-amber-900 mb-4 font-serif">
                  Description
                </h3>
                <p className="text-amber-800 leading-relaxed text-justify font-serif text-base">
                  {description}
                </p>
              </div>
              
            </div>
          </div>
          
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-amber-800 opacity-50"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-amber-800 opacity-50"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-amber-800 opacity-50"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-amber-800 opacity-50"></div>
          
        </div>
      </div>
    </div>
  );
}

// Example usage
export function ScrollExample() {
  return (
    <Scroll 
      imageUrl="https://example.com/zeus-image.jpg"
      name="Zeus"
      power="Thunder and Lightning, King of Gods"
      offspring="Apollo, Artemis, Athena, Ares, Dionysus"
      description="Zeus is the king of the gods in ancient Greek religion and mythology. He is the god of the sky, lightning, thunder, law, order, and justice. Zeus is the youngest child of Cronus and Rhea, though sometimes reckoned the eldest as the others required disgorging from Cronus's stomach. In most traditions, he is married to Hera, but he is also known for his many affairs and children born from them."
    />
  );
}
