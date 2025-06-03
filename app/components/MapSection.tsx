import FantasyMap from "./FantasyMap";
import { useState } from "react";

export default function MapSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCivilization, setSelectedCivilization] = useState<string | null>(null);
  const [showRoutes, setShowRoutes] = useState(false);

  const civilizations = [
    { key: 'greek', name: 'Greek', color: '#3b82f6', icon: '⚡' },
    { key: 'norse', name: 'Norse', color: '#8b5cf6', icon: '🔨' },
    { key: 'egyptian', name: 'Egyptian', color: '#eab308', icon: '👁️' },
    { key: 'japanese', name: 'Japanese', color: '#ef4444', icon: '⚔️' },
    { key: 'hindu', name: 'Hindu', color: '#f97316', icon: '🕉️' }
  ];

  return (
    <>
      <h2 className="text-white text-2xl font-bold px-4 pb-3 pt-5">Interactive Mythology Map</h2>
      <div className="flex flex-col">
        <div className="px-4 py-3">
          {/* Civilization Toggles */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setSelectedCivilization(null)}
              className={`px-3 py-2 rounded-full border transition-all text-sm ${
                !selectedCivilization 
                  ? 'bg-white text-slate-900 border-white' 
                  : 'bg-slate-800 text-white border-slate-600 hover:border-white'
              }`}
            >
              🌍 All Mythologies
            </button>
            {civilizations.map((civ) => (
              <button
                key={civ.key}
                onClick={() => setSelectedCivilization(civ.key)}
                className={`px-3 py-2 rounded-full border transition-all text-sm flex items-center gap-1 ${
                  selectedCivilization === civ.key
                    ? 'border-2 shadow-lg text-white'
                    : 'bg-slate-800 text-white border-slate-600 hover:border-white'
                }`}
                style={{
                  backgroundColor: selectedCivilization === civ.key ? civ.color : '',
                  borderColor: selectedCivilization === civ.key ? civ.color : '',
                }}
              >
                {civ.icon} {civ.name}
              </button>
            ))}
          </div>

          {/* Feature Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setShowRoutes(!showRoutes)}
              className={`px-3 py-2 rounded-full border transition-all text-sm ${
                showRoutes 
                  ? 'bg-green-600 text-white border-green-600' 
                  : 'bg-slate-800 text-white border-slate-600 hover:border-green-400'
              }`}
            >
              {showRoutes ? '🗺️ Hide Epic Routes' : '🗺️ Show Epic Routes'}
            </button>
          </div>

          <div 
            className="relative bg-cover bg-center flex flex-col justify-between px-4 py-6 rounded-xl border border-white shadow-[0_0_10px_white]"
            style={{
              backgroundImage:
                'url("https://images-cdn.ubuy.co.in/6757f3b34aadb55d943c4ebc-antique-style-world-map-poster-print.jpg")',
              minHeight: "400px",
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(0,0,0,0.2)'
            }}
          >
            {/* Search Input */}
<div className="flex min-w-40 h-12 mb-4">
  <div className="flex w-full items-stretch h-full overflow-hidden border border-white shadow-md">
    <div className="text-slate-400 flex bg-slate-800 items-center justify-center px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
      </svg>
    </div>
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search mythologies, gods, or locations..."
      className="flex w-full min-w-0 flex-1 text-white bg-slate-800 h-full placeholder:text-slate-400 px-4 text-base border-0 focus:ring-0 focus:outline-none"
    />
  </div>
</div>


            

            {/* SVG Map Overlay - FIXED: Pass selectedCivilization directly */}
            <FantasyMap 
              searchTerm={searchTerm}
              selectedCivilization={selectedCivilization}
              showRoutes={showRoutes}
            />

            {/* Zoom & Tool Buttons */}
            <div className="absolute top-4 right-4 flex flex-col items-end gap-3">
              <div className="flex flex-col gap-1">
                <button className="flex w-10 h-10 items-center justify-center rounded-t-xl bg-slate-800 hover:bg-slate-700 border border-white/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
                  </svg>
                </button>
                <button className="flex w-10 h-10 items-center justify-center rounded-b-xl bg-slate-800 hover:bg-slate-700 border border-white/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
                  </svg>
                </button>
              </div>
              <button className="flex w-10 h-10 items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 bg-slate-800/90 rounded-xl p-4 border border-slate-600">
            <h3 className="text-white font-bold mb-3">🗂️ Mythology Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {civilizations.map((civ) => (
                <div key={civ.key} className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: civ.color }}
                  />
                  <span className="text-white text-sm">{civ.icon} {civ.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}