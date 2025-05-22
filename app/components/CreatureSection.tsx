// components/CreatureSection.tsx
import React from 'react';

const CreatureSection = () => {
  const creatures = [
    { 
      name: 'Dragons', 
      img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
      description: 'Mighty winged beasts of legend' 
    },
    { 
      name: 'Phoenix', 
      img: 'https://images.unsplash.com/photo-1551377743-d8e881ffa116?w=400&h=400&fit=crop&crop=center',
      description: 'Immortal birds of rebirth' 
    },
    { 
      name: 'Kraken', 
      img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=center',
      description: 'Colossal sea monsters' 
    },
    { 
      name: 'Griffins', 
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
      description: 'Majestic eagle-lion hybrids' 
    },
    { 
      name: 'Minotaur', 
      img: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop&crop=center',
      description: 'Bull-headed labyrinth guardians' 
    },
    { 
      name: 'Sphinx', 
      img: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73edf?w=400&h=400&fit=crop&crop=center',
      description: 'Riddle-speaking lion guardians' 
    },
    { 
      name: 'Hydra', 
      img: 'https://images.unsplash.com/photo-1516985080664-ed2fc6a32937?w=400&h=400&fit=crop&crop=center',
      description: 'Multi-headed serpentine beasts' 
    },
    { 
      name: 'Banshee', 
      img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center',
      description: 'Wailing spirits of doom' 
    }
  ];

  const handleCreatureClick = (creatureName: string) => {
    // You can add navigation logic here later
    console.log(`Clicked on ${creatureName}`);
  };

  return (
    <div className="py-8">
      <h2 className="text-white text-2xl font-bold px-4 pb-3 pt-5">Creatures</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {creatures.map((creature, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-3 cursor-pointer hover:scale-105 transition-transform duration-300 group"
            onClick={() => handleCreatureClick(creature.name)}
          >
            <div 
              className="w-full aspect-square bg-cover bg-center rounded-xl bg-gray-700 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow duration-300"
              style={{ backgroundImage: `url("${creature.img}")` }}
            >
              <div className="w-full h-full rounded-xl bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
            </div>
            <div>
              <p className="text-white text-base font-medium group-hover:text-blue-400 transition-colors duration-300">
                {creature.name}
              </p>
              <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                {creature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatureSection;