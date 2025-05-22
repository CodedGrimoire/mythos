// app/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <div className="p-4">
      <div
        className="flex min-h-96 flex-col gap-6 bg-cover bg-center rounded-xl items-center justify-center p-8"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9yX56k-MMlZXrHVGo3Pn4bSL9KQVrTsmHdewn-V0a2AP0MfSuaJJkIM9eYWXBaIISQF4UFUGlfvIBsRcwB_U2qeCZkQL4G48wqLfakcCko0YtX0m_blz2iVJN1DO2fVD_mYbvsror9RjTUznigePy3RYrPgLcldbIs9zdqUW_iSY2FrTThzznp9xGOgZaLKyNCo7bojx9Nbagvd7Z6JSN3ENqxynL9mAIiVE2t9yT3dGTHQUjbdlhfxAVFRC-6lhIfWVf1NFW2hrt")'
        }}
      >
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-white text-5xl font-black">
            Explore the World of Myths
          </h1>
          <p className="text-white text-base">
            Dive into the rich tapestry of ancient tales and legends from around the globe. Discover the heroes, gods, and creatures that have shaped cultures and inspired generations.
          </p>
        </div>
        <button className="flex cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-blue-600 text-white text-base font-bold hover:bg-blue-700">
          Start Exploring
        </button>
      </div>
    </div>
  );
}