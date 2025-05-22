"use client"
import React, { useState } from 'react';

const Stories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = ['Greek', 'Roman', 'Norse', 'Egyptian', 'Celtic'];

  const stories = [
    {
      id: 1,
      title: 'The Odyssey',
      description: "A tale of Odysseus's long journey home.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Q7FRu2muA1GVM0nuxEZ9uHhXcqYVaYWEHnHz-FestszrVtOfhweEdYyWTIncxEpzBBTuOKABJOq-9ncs3e-aNHUv9933r5Iu1ve6ns--UkmIm3GUJE3Np_McB00nHQIH4gXEouW63YDlMt7KfFln2d2vQfT_oN1RI6eDX1asZuo5Oay1hgubfG8YnHeIoXqGSPEYWeo7VybUA2voq2b2sqG6eq09AUWsJzo9akQMM8Y9PQ1TC4qEKAstlG1RhVyC2_n6dnaMBJqM',
      genre: 'Greek'
    },
    {
      id: 2,
      title: 'The Aeneid',
      description: "The epic of Aeneas's journey to found Rome.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUfFSXNulUKfGhccNToOvUp8oXN2r6JAikM1PfgjrbPBDDBMYHfU-hFFBm-WAL1Ca-aVewaYgiegVyTujs9cIHmYbwBKYuy6dDOGNzubtjCAaUVjDiRMXBCsCv7eAs_sEb-ZzkzMevlG0M4jRQhldqZXcpvLd7PnxFvk6wu-07eVA4pNgDpzUFmtrrSDEMp-ujsmT9zUKV19oTdtfTZEmHWx-pPen-JQscAHMEptfYZIpWm2C_PsuWYYAyZcKHkbUSi6d2N4FiHReF',
      genre: 'Roman'
    },
    {
      id: 3,
      title: "Thor's Hammer",
      description: "Thor's quest to retrieve his stolen hammer.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaWf29PaotuvMtKiEApeILvzkxklbmEYZ0v9FxCc4AjROszfF55F0aWnmdIIHaXEAEZhv3EQY27KCt6tvuO1oSOexxJG9IL8BLOYcFlle425JeWQtvm2Ol832TLQ0d0bpI7otUTQ0X-N9fyIOa64bFgZ2bAVqLNPCnxZzijShg3SEZ2YKunSc50bcMhfNmIGaX-cxGYliBxPpufz81ehaAwMHNluyMV1fVgzWJWLOA5EtOum0QzpHrAxV61T6wEB-kHDqxE_2xgk_3',
      genre: 'Norse'
    },
    {
      id: 4,
      title: 'The Book of the Dead',
      description: 'Ancient Egyptian funerary texts.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsp4WC_hw7JP4K2y_VHRpjY8_H0gZNTEk-GMt_cSK1LPTSbIVXhv-iyMAjymQQ--Hl4RAJuOD1gnwE-TBSPWP5cHnj9Z9e7--1MQKAPTWQfxL1EcCOp558sw2WUGhrQ8tsLtPwUevQrH0loaIVpiTQCbHLMNuXViM2RAZqQKiSzb8xDS95RLYRCndil70NdQp2jhVSVxdFelw4ucdWUX3SREgnl99CoSzpbSwWWKC9nX3pHwAOJdRyo9F23xQ0wmtjVYPSzUnKxmsh',
      genre: 'Egyptian'
    },
    {
      id: 5,
      title: 'The Mabinogion',
      description: 'A collection of Welsh tales.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG02_yoV6i2kGe69fZcJH1Zp-6TIb_PmfQOIZgWOK7kMgrtn0LD7WC1tpEPCZyjfBf75XQP_PGH-XlHb7mKZiiPz3jENvLU8PRRntHGSfiB8c4-rRYZCCRm-Q_5b1cpbipfkyAPbrTTgKTDsk15fAt8b3hejFUP0IXVCY7PjR7aNL7il6zMgBxbArzBn6Qa_5_j94rwgVJ9JoHYjXoT8f4yPCGSiE_kI72S5X1V3s-LKybLbSG05Asdw2X3rmmxstOe87KkoXIOl59',
      genre: 'Celtic'
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 5;

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = !selectedGenre || story.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const totalPages = Math.ceil(filteredStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const displayedStories = filteredStories.slice(startIndex, startIndex + storiesPerPage);

  const MagnifyingGlassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
    </svg>
  );

  const BookmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z" />
    </svg>
  );

  const CaretLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
    </svg>
  );

  const CaretRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
    </svg>
  );

  const FlagIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
      <path
        d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#1f1a14] text-white" style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#40362b] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <FlagIcon />
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Mythos</h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal hover:text-[#beae9d] transition-colors cursor-pointer">Home</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#beae9d] transition-colors cursor-pointer">Stories</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#beae9d] transition-colors cursor-pointer">Characters</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#beae9d] transition-colors cursor-pointer">Gods</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#beae9d] flex border-none bg-[#40362b] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <MagnifyingGlassIcon />
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#40362b] focus:border-none h-full placeholder:text-[#beae9d] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </label>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#40362b] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#4a3d32] transition-colors">
              <BookmarkIcon />
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGn6yka-pTWdJmnyQnUKdwbQ3_TPHbqYDBNv7D7XZ6FGsTabv9xccEVpcfcpnwdO1V3lDRRO3m9VAU5i3iZnis1P5vJ0Z66pMPJanRuBFJ7LHMd9Qx9BQDTznEvpQfdBZJl3-jA35fGtBcyHtoQ1cexzHzjwBUDTt0OKHDVlDwGVxAUVeg03fKbrOJ0rLqug6ceKk5mLzk2wBZhRQ9XB6PC7s_1_h1D-ybClvaAJHF2aWKiFpXGuSFzMRYxQSI_3xzYjkT_hTIN5vc")' }}
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Search Bar */}
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#beae9d] flex border-none bg-[#40362b] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <MagnifyingGlassIcon />
                  </div>
                  <input
                    placeholder="Search for stories"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#40362b] focus:border-none h-full placeholder:text-[#beae9d] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </label>
            </div>

            {/* Genre Filter */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filter by Genre</h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div 
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 cursor-pointer transition-colors ${
                  selectedGenre === '' ? 'bg-[#beae9d] text-[#1f1a14]' : 'bg-[#40362b] hover:bg-[#4a3d32]'
                }`}
                onClick={() => setSelectedGenre('')}
              >
                <p className="text-sm font-medium leading-normal">All</p>
              </div>
              {genres.map((genre) => (
                <div
                  key={genre}
                  className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 cursor-pointer transition-colors ${
                    selectedGenre === genre ? 'bg-[#beae9d] text-[#1f1a14]' : 'bg-[#40362b] hover:bg-[#4a3d32]'
                  }`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  <p className="text-sm font-medium leading-normal">{genre}</p>
                </div>
              ))}
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {displayedStories.map((story) => (
                <div key={story.id} className="flex flex-col gap-3 pb-3 group cursor-pointer">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url("${story.image}")` }}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal group-hover:text-[#beae9d] transition-colors">{story.title}</p>
                    <p className="text-[#beae9d] text-sm font-normal leading-normal">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center p-4">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex size-10 items-center justify-center hover:bg-[#40362b] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CaretLeftIcon />
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const pageNum = index + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`text-sm font-${currentPage === pageNum ? 'bold' : 'normal'} leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
                        currentPage === pageNum 
                          ? 'bg-[#40362b] text-white' 
                          : 'text-white hover:bg-[#40362b]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex size-10 items-center justify-center hover:bg-[#40362b] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CaretRightIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;