export default function Home() {
  return (
    <div className="relative flex w-full min-h-screen flex-col bg-slate-900 overflow-x-hidden font-serif">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-700 px-10 py-3">
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
              <a href="#" className="text-white text-sm font-medium">Home</a>
              <a href="#" className="text-white text-sm font-medium">Catalogues</a>
              <a href="#" className="text-white text-sm font-medium">Map</a>
              <a href="#" className="text-white text-sm font-medium">Stories</a>
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
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAECLUZ_7PbtgSUsBIWxaROTTFj7FlRS-mLwtgsq9EzD6mjgIOSZjLh-NBvuYxEWDH8ls9ziRWNbw_swnWFewacVOKQYdNhFQWOww831DdNMXarkjxjtO9eqHgNOQ7PoeBwMof63SHbEweCsGnwnMWdVya5unrGLKGdSRBD0sJwhaXgpxeXZRX9mgjbH5luSo4VwV8TlA8tbNS61USXqV1WtfZ_ZQfd6hMubObshI5bWBAvV8ElxF_8rZT6AbUz5rEIePwqeZJxorK3")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            />
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-4xl flex-1">
            {/* Hero Section */}
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

            {/* Catalogues Section */}
            <h2 className="text-white text-2xl font-bold px-4 pb-3 pt-5">Catalogues</h2>
            <div className="grid grid-cols-3 gap-6 p-4">
              {[
                { name: 'Greek Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqy5Bx0sozcrGb4wbWQOqsSqwwebhIu5M1sp20tRFyJKnr73lxVvbRzESfO_MbUYkNv9IPahqYl1fojfNBQLyAoGVOW46yu_oWvYoU46FogR2Y5tAB4gTO29VkLlCDkjopRLKIFfv5Gzm-55Ogsn2Ww3_kidoR61mnUVgPIgG88FHnsYCsIgFiUJlHGEnoNNTyI2P1eVopzPcma4Sj_FUnS_E-cvw7iibdXfamXi_VlacA4g2CNhVDN8a5yE7iSJknTKd6wYbDsqdx' },
                { name: 'Norse Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzpRKyrDn9XlpugDYthe82n1ATw0jfAbpv0gMbpXEqlu0EAkxP-dGRB5DvIQTvWgzZPczc68HZ4qtiLWLphNOxpN_FjWlaHbDE3uIvWVvVV57XzEuaod6w1-R9-DsvHYC0myQqX4TY6Bt9L-gdB56G_Iepz3lMpCzKXSc2_pNwOfd_ehaBb7PSnIN7EM-ITKZ33XkyQuAglBHNhAeejS05G_-EbtG0PIZzKr1HJA39nOfYVPaVB-YjDqadTIkAKHIvjkIl-x2X5pR9' },
                { name: 'Egyptian Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKbkDAe8SDS5EIo7PyP2bp0DVfZePv43-MlsfiMRItz-wSXSqCC-BeQZJQ4QJuF_5TuxCJ9m2YvnU4tJQS2fVy9owKF99sRfqIJsxl6uzX_cfU4Ob-vj61v340a_58MwgC28x9NHJAxCBlX8CLE9prc_Oj-5eJPPTWnBVd67ZbQc654cbpDrEX2sadj5-3Yp21xCAbmSFRn5gH-NiU6DiEVGYYBY8_OyYv9ZRrlrjeDJcMGXHoIYwyQSQwaCnHvdN2G11gyr2Olv4Q' },
                { name: 'Celtic Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy2KEzdGv4jFeJKsnJfMHKWyTrrAtuT0b6QVMRS6b18soDEg3RjHp7kqNMG0XPI2sNBE4ZZAwlaX1_xbl2WLeVclLThVZ6df6LXS0P_0_TZDNxDNjonhKQtBy2wEss0APWDbuA1q-_LDFpdgo5BvioPn4s7SvZ2b47CyKymeHPVDxwupoLG7AMbH92H4Yposu9t9GDIb0fYs3x_zjJP0BP6udwu0fmKB9HVFPpG7bR5Hyp11MI0gwIsfKxp1rdbgmodCcpDmfq5pDl' },
                { name: 'Roman Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqoWjGIwHGR__OTnXW2StKtONBDsEWNhIqQcq3Ta1uc0BWD6wriDMfhql8XtIl2TD0nmEJw53QUl5THpPG89zQ4bw2SazC8xKZ0kuG7-iSnyD0Ys-gCuJFxcSOksZbJcWeGc7IjBJLGycgJ7gQOwNVvB7Jpov3WSI18XhLcXC1s5VBg82wyzdDDgoii6zbSHRVomJ3ZYxlnP_c30CAkf4-irfy4MhLTR31bjaNhtSzmT2ddC6CVMGtau0F1cBFI3uP8A1wGmoor1UI' },
                { name: 'Mesopotamian Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALliPsIZN4YqnlR_1-aHPBnHPxN4Pq5o9kPQzArtbWroTAdG2nCX9t4Mivbgujmsrc29QZdFDk7myw_WpNdG7bIEC-SMxdgMdlRa5uvN7LkNd2T9oMf6ZB63r_mMWcftRyzTWoORb0lUI1MsOCEhpmG4P67a_QydklpiPXWDnAKvgJnen0gpL1YdFxpJOaPHyKCvN7Si7Aal_Cs15QE6rT4WKvd5pS3AmaSFIMc_Q_U1za46vaj7AwMW90MEipSS7v89T62opOUDT1' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-3 cursor-pointer hover:scale-105 transition-transform">
                  <div 
                    className="w-full aspect-square bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url("${item.img}")` }}
                  />
                  <p className="text-white text-base font-medium">{item.name}</p>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <h2 className="text-white text-2xl font-bold px-4 pb-3 pt-5">Map</h2>
            <div className="flex flex-col">
              <div className="px-4 py-3">
                <div 
                  className="bg-cover bg-center flex min-h-80 flex-col justify-between px-8 py-6 rounded-xl"
                  style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}
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
          </div>
        </div>
      </div>
    </div>
  )
}