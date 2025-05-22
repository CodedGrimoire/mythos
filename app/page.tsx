// app/page.tsx
"use client"
import HeroSection from './components/HeroSection';
import CatalogueSection from './components/CatalogueSection';
import MapSection from './components/MapSection';
import CreatureSection from './components/CreatureSection';

export default function Home() {

  return (
    <div className="relative flex w-full min-h-screen flex-col bg-slate-900 overflow-x-hidden font-serif">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-700 px-10 py-3 bg-slate-900/95 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className="w-4 h-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold">Mythos</h2>
          </div>
          <nav className="flex items-center gap-9">
            <a 
              href="#hero" 
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a 
              href="#catalogues" 
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('catalogues')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Catalogues
            </a>
            <a 
              href="#map" 
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Map
            </a>
            <a 
              href="#creatures" 
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('creatures')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Creatures
            </a>
            <a 
              href="/stories" 
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Stories
            </a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex min-w-40 h-10 max-w-64">
            <div className="flex w-full items-stretch rounded-xl h-full">
              <div className="text-slate-400 flex bg-slate-700 items-center justify-center pl-4 rounded-l-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>
                </svg>
              </div>
              <input
                placeholder="Search"
                className="flex w-full min-w-0 flex-1 rounded-xl text-white bg-slate-700 h-full placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-base border-0 focus:ring-0 focus:outline-none"
              />
            </div>
          </div>
          <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 bg-slate-700 text-white gap-2 text-sm font-bold min-w-0 px-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"/>
            </svg>
          </button>
          <div
            className="bg-gray-400 rounded-full w-10 h-10"
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAECLUZ_7PbtgSUsBIWxaROTTFj7FlRS-mLwtgsq9EzD6mjgIOSZjLh-NBvuYxEWDH8ls9ziRWNbw_swnWFewacVOKQYdNhF")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          />
        </div>
      </header>

      {/* Main Content with top padding to account for fixed header */}
      <div className="layout-container flex h-full grow flex-col pt-16">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-4xl flex-1">
            {/* Hero Section */}
            <section id="hero" className="scroll-mt-20">
              <HeroSection />
            </section>

            {/* Catalogues Section */}
            <section id="catalogues" className="scroll-mt-20">
              <CatalogueSection />
            </section>

            {/* Map Section */}
            <section id="map" className="scroll-mt-20">
              <MapSection />
            </section>

            {/* Creatures Section */}
            <section id="creatures" className="scroll-mt-20">
              <CreatureSection />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}