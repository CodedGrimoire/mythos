// components/FantasyMap.jsx
"use client";
import React, { useState, useRef } from "react";

const mythologyData = {
  greek: {
    name: "Greek Mythology",
    color: "#3b82f6",
    regions: [
      { id: 'olympus', x: 300, y: 200, name: 'Mount Olympus', description: 'Home of the twelve Olympian gods including Zeus, Hera, and Athena', gods: ['Zeus', 'Hera', 'Athena', 'Apollo'] },
      { id: 'troy', x: 340, y: 180, name: 'Troy', description: 'Site of the legendary Trojan War described in Homer\'s Iliad', gods: ['Ares', 'Aphrodite', 'Hector'] },
      { id: 'crete', x: 310, y: 240, name: 'Crete', description: 'Home of the Minotaur and the labyrinth built by Daedalus', gods: ['Minos', 'Ariadne', 'Theseus'] }
    ],
    routes: [
      { name: "Odysseus's Journey", path: [{ x: 310, y: 240 }, { x: 280, y: 260 }, { x: 260, y: 280 }, { x: 300, y: 200 }] }
    ]
  },
  norse: {
    name: "Norse Mythology", 
    color: "#8b5cf6",
    regions: [
      { id: 'asgard', x: 400, y: 80, name: 'Asgard', description: 'Realm of the Æsir gods, connected by the rainbow bridge Bifrost', gods: ['Odin', 'Thor', 'Frigg', 'Baldur'] },
      { id: 'midgard', x: 410, y: 100, name: 'Midgard', description: 'The world of humans, encircled by Jormungandr the World Serpent', gods: ['Humans', 'Heroes'] },
      { id: 'jotunheim', x: 440, y: 60, name: 'Jotunheim', description: 'Land of the giants (Jotuns), enemies of the gods', gods: ['Loki', 'Giants', 'Fenrir'] }
    ],
    routes: []
  },
  egyptian: {
    name: "Egyptian Mythology",
    color: "#eab308", 
    regions: [
      { id: 'thebes', x: 520, y: 280, name: 'Thebes', description: 'Ancient capital and center of Amun worship in Upper Egypt', gods: ['Amun', 'Mut', 'Khonsu'] },
      { id: 'memphis', x: 515, y: 260, name: 'Memphis', description: 'First capital of unified Egypt, center of Ptah worship', gods: ['Ptah', 'Sekhmet', 'Nefertem'] },
      { id: 'duat', x: 530, y: 300, name: 'Duat', description: 'The Egyptian underworld where souls journey after death', gods: ['Osiris', 'Anubis', 'Thoth'] }
    ],
    routes: [
      { name: "Journey through Duat", path: [{ x: 530, y: 300 }, { x: 540, y: 320 }, { x: 520, y: 340 }, { x: 530, y: 300 }] }
    ]
  },
  japanese: {
    name: "Japanese Mythology",
    color: "#ef4444",
    regions: [
      { id: 'takamagahara', x: 700, y: 200, name: 'Takamagahara', description: 'The High Celestial Plain where kami (gods) dwell', gods: ['Amaterasu', 'Susanoo', 'Tsukuyomi'] },
      { id: 'fuji', x: 720, y: 220, name: 'Mount Fuji', description: 'Sacred mountain and dwelling of Konohanasakuya-hime', gods: ['Konohanasakuya-hime', 'Fuji-hime'] },
      { id: 'yomi', x: 690, y: 240, name: 'Yomi', description: 'The shadowy land of the dead in Japanese mythology', gods: ['Izanami', 'Yomi-no-kuni'] }
    ],
    routes: []
  },
  hindu: {
    name: "Hindu Mythology",
    color: "#f97316",
    regions: [
      { id: 'kailash', x: 620, y: 220, name: 'Mount Kailash', description: 'Sacred abode of Lord Shiva and Parvati in the Himalayas', gods: ['Shiva', 'Parvati', 'Ganesha'] },
      { id: 'ayodhya', x: 630, y: 240, name: 'Ayodhya', description: 'Birthplace of Lord Rama, hero of the Ramayana', gods: ['Rama', 'Sita', 'Hanuman'] },
      { id: 'kurukshetra', x: 620, y: 200, name: 'Kurukshetra', description: 'Sacred battlefield of the Mahabharata war', gods: ['Krishna', 'Arjuna', 'Dharma'] }
    ],
    routes: [
      { name: "Rama's Journey", path: [{ x: 630, y: 240 }, { x: 640, y: 270 }, { x: 600, y: 300 }, { x: 580, y: 280 }, { x: 630, y: 240 }] }
    ]
  }
};

/**
 * @param {Object} props
 * @param {string=} props.searchTerm
 * @param {string|null=} props.selectedCivilization
 * @param {boolean=} props.showRoutes
 */
export default function FantasyMap({ searchTerm = '', selectedCivilization = null, showRoutes = false }) {
  const [activeRegion, setActiveRegion] = useState(null);
  const [zoom, setZoom] = useState(1);
  const svgRef = useRef(null);

  // Filter regions based on search and civilization
  const getFilteredRegions = () => {
    let filtered = {};
    
    Object.entries(mythologyData).forEach(([key, data]) => {
      // Skip if civilization filter is active and doesn't match
      if (selectedCivilization && selectedCivilization !== key) return;
      
      // Filter regions by search term
      const matchingRegions = data.regions.filter(region => 
        region.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        region.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.gods?.some(god => god.toLowerCase().includes(searchTerm.toLowerCase())) ||
        region.gods?.some(god => god.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      
      if (matchingRegions.length > 0) {
        filtered[key] = { ...data, regions: matchingRegions };
      }
    });
    
    return filtered;
  };

  const filteredData = getFilteredRegions();

  const handleRegionClick = (civilizationKey, region) => {
    setActiveRegion({ 
      ...region, 
      civilization: civilizationKey,
      civilizationData: mythologyData[civilizationKey]
    });
  };

  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
      <svg
        ref={svgRef}
        viewBox={`0 0 800 600`}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
        preserveAspectRatio="xMidYMid meet"
        style={{ transform: `scale(${zoom})` }}
      >
        <rect width="800" height="600" fill="transparent" />

        {/* Mythological Routes */}
        {showRoutes && Object.entries(filteredData).map(([key, data]) => 
          data.routes?.map((route, idx) => (
            <g key={`${key}-route-${idx}`}>
              <path
                d={`M ${route.path.map(p => `${p.x} ${p.y}`).join(' L ')}`}
                stroke={data.color}
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                opacity="0.9"
                className="animate-pulse"
              />
              <text 
                x={route.path[0].x} 
                y={route.path[0].y - 15} 
                fill={data.color} 
                fontSize="12" 
                className="font-bold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
              >
                ✨ {route.name}
              </text>
            </g>
          ))
        )}

        {/* Mythological Regions */}
        {Object.entries(filteredData).map(([key, data]) =>
          data.regions.map((region) => (
            <g key={`${key}-${region.id}`}>
              {/* Subtle glow around pin */}
              <circle
                cx={region.x}
                cy={region.y - 10}
                r="20"
                fill={data.color}
                opacity="0.2"
                className="animate-pulse"
              />
              
              {/* Map Pin */}
              <g 
                className={`cursor-pointer transition-all duration-300 ${
                  activeRegion?.id === region.id ? 'animate-bounce' : 'hover:scale-110'
                }`}
                onClick={() => handleRegionClick(key, region)}
                style={{
                  transform: activeRegion?.id === region.id ? 'scale(1.2)' : 'scale(1)',
                  transformOrigin: `${region.x}px ${region.y}px`
                }}
              >
                {/* Pin shadow */}
                <path
                  d={`M ${region.x - 12} ${region.y + 2} 
                      C ${region.x - 12} ${region.y - 8}, ${region.x - 6} ${region.y - 14}, ${region.x} ${region.y - 14}
                      C ${region.x + 6} ${region.y - 14}, ${region.x + 12} ${region.y - 8}, ${region.x + 12} ${region.y + 2}
                      L ${region.x} ${region.y + 15} Z`}
                  fill="rgba(0,0,0,0.3)"
                />
                
                {/* Main pin body */}
                <path
                  d={`M ${region.x - 10} ${region.y} 
                      C ${region.x - 10} ${region.y - 10}, ${region.x - 5} ${region.y - 15}, ${region.x} ${region.y - 15}
                      C ${region.x + 5} ${region.y - 15}, ${region.x + 10} ${region.y - 10}, ${region.x + 10} ${region.y}
                      L ${region.x} ${region.y + 12} Z`}
                  fill={data.color}
                  stroke="white"
                  strokeWidth="2"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
                  }}
                />
                
                {/* Pin inner circle */}
                <circle
                  cx={region.x}
                  cy={region.y - 7}
                  r="6"
                  fill="white"
                  className="pointer-events-none"
                />
                
                {/* Pin center dot */}
                <circle
                  cx={region.x}
                  cy={region.y - 7}
                  r="3"
                  fill={data.color}
                  className="pointer-events-none"
                />
              </g>
              
              {/* Region name */}
              <text 
                x={region.x} 
                y={region.y - 25} 
                fill="white" 
                fontSize="13" 
                className="font-bold pointer-events-none"
                textAnchor="middle"
                style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
                  filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.3))'
                }}
              >
                {region.name}
              </text>
              
              {/* Civilization indicator */}
              <text 
                x={region.x} 
                y={region.y + 25} 
                fill={data.color} 
                fontSize="10" 
                className="font-medium pointer-events-none"
                textAnchor="middle"
                style={{ 
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                  filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.8))'
                }}
              >
                {data.name}
              </text>
            </g>
          ))
        )}
        
      </svg>

      {/* Enhanced Region Details Modal */}
      {activeRegion && (
        <div className="absolute bottom-4 left-4 bg-slate-900/95 p-6 rounded-xl shadow-2xl max-w-md border-2 backdrop-blur-sm"
             style={{ borderColor: activeRegion.civilizationData.color }}>
          
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-5 h-5 rounded-full animate-pulse"
              style={{ backgroundColor: activeRegion.civilizationData.color }}
            />
            <h2 className="text-white text-xl font-bold">{activeRegion.name}</h2>
          </div>
          
          <div className="mb-2">
            <span 
              className="text-sm px-2 py-1 rounded-full"
              style={{ 
                backgroundColor: `${activeRegion.civilizationData.color}20`,
                color: activeRegion.civilizationData.color 
              }}
            >
              {activeRegion.civilizationData.name}
            </span>
          </div>
          
          <p className="text-slate-300 mb-4 leading-relaxed">{activeRegion.description}</p>
          
          <div className="mb-4">
            <h3 className="text-yellow-400 font-semibold mb-2 flex items-center gap-1">
              ⚡ Related Deities & Figures:
            </h3>
            <div className="flex flex-wrap gap-2">
              {activeRegion.gods?.slice(0, 4).map((god, idx) => (
                <span 
                  key={idx}
                  className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm border transition-all hover:scale-105"
                  style={{ borderColor: `${activeRegion.civilizationData.color}50` }}
                >
                  {god}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              className="text-white px-4 py-2 rounded-lg transition-all hover:scale-105 flex items-center gap-2"
              style={{ backgroundColor: activeRegion.civilizationData.color }}
            >
              ✨ Explore Myths
            </button>
            <button
              onClick={() => setActiveRegion(null)}
              className="text-slate-400 text-sm hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Search Results Counter */}
      {searchTerm && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-900/90 px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
          <span className="text-white text-sm">
            🔍 Found {Object.values(filteredData).reduce((sum, data) => sum + data.regions.length, 0)} locations
          </span>
        </div>
      )}
    </div>
  );
}