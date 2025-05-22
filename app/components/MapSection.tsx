// app/components/MapSection.jsx
export default function MapSection() {
  return (
    <>
      <h2 className="text-white text-2xl font-bold px-4 pb-3 pt-5">Map</h2>
      <div className="flex flex-col">
        <div className="px-4 py-3">
          <div 
            className="bg-cover bg-center flex min-h-80 flex-col justify-between px-8 py-6 rounded-xl"
            style={{ backgroundImage: 'url("https://images-cdn.ubuy.co.in/6757f3b34aadb55d943c4ebc-antique-style-world-map-poster-print.jpg")' }}
          >
            <div className="flex min-w-40 h-12">
              <div className="flex w-full items-stretch rounded-xl h-full">
                <div className="text-slate-400 flex bg-slate-800 items-center justify-center pl-4 rounded-l-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>
                  </svg>
                </div>
                <input
                  placeholder="Search for a mythology"
                  className="flex w-full min-w-0 flex-1 rounded-xl text-white bg-slate-800 h-full placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-base border-0 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex flex-col gap-1">
                <button className="flex w-10 h-10 items-center justify-center rounded-t-xl bg-slate-800 hover:bg-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/>
                  </svg>
                </button>
                <button className="flex w-10 h-10 items-center justify-center rounded-b-xl bg-slate-800 hover:bg-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"/>
                  </svg>
                </button>
              </div>
              <button className="flex w-10 h-10 items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
                  <path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}