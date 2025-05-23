// app/components/CatalogueSection.jsx
export default function CatalogueSection() {
  const catalogues = [
    { name: 'Greek Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqy5Bx0sozcrGb4wbWQOqsSqwwebhIu5M1sp20tRFyJKnr73lxVvbRzESfO_MbUYkNv9IPahqYl1fojfNBQLyAoGVOW46yu_oWvYoU46FogR2Y5tAB4gTO29VkLlCDkjopRLKIFfv5Gzm-55Ogsn2Ww3_kidoR61mnUVgPIgG88FHnsYCsIgFiUJlHGEnoNNTyI2P1eVopzPcma4Sj_FUnS_E-cvw7iibdXfamXi_VlacA4g2CNhVDN8a5yE7iSJknTKd6wYbDsqdx' },
    { name: 'Norse Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzpRKyrDn9XlpugDYthe82n1ATw0jfAbpv0gMbpXEqlu0EAkxP-dGRB5DvIQTvWgzZPczc68HZ4qtiLWLphNOxpN_FjWlaHbDE3uIvWVvVV57XzEuaod6w1-R9-DsvHYC0myQqX4TY6Bt9L-gdB56G_Iepz3lMpCzKXSc2_pNwOfd_ehaBb7PSnIN7EM-ITKZ33XkyQuAglBHNhAeejS05G_-EbtG0PIZzKr1HJA39nOfYVPaVB-YjDqadTIkAKHIvjkIl-x2X5pR9' },
    { name: 'Egyptian Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKbkDAe8SDS5EIo7PyP2bp0DVfZePv43-MlsfiMRItz-wSXSqCC-BeQZJQ4QJuF_5TuxCJ9m2YvnU4tJQS2fVy9owKF99sRfqIJsxl6uzX_cfU4Ob-vj61v340a_58MwgC28x9NHJAxCBlX8CLE9prc_Oj-5eJPPTWnBVd67ZbQc654cbpDrEX2sadj5-3Yp21xCAbmSFRn5gH-NiU6DiEVGYYBY8_OyYv9ZRrlrjeDJcMGXHoIYwyQSQwaCnHvdN2G11gyr2Olv4Q' },
    { name: 'Celtic Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy2KEzdGv4jFeJKsnJfMHKWyTrrAtuT0b6QVMRS6b18soDEg3RjHp7kqNMG0XPI2sNBE4ZZAwlaX1_xbl2WLeVclLThVZ6df6LXS0P_0_TZDNxDNjonhKQtBy2wEss0APWDbuA1q-_LDFpdgo5BvioPn4s7SvZ2b47CyKymeHPVDxwupoLG7AMbH92H4Yposu9t9GDIb0fYs3x_zjJP0BP6udwu0fmKB9HVFPpG7bR5Hyp11MI0gwIsfKxp1rdbgmodCcpDmfq5pDl' },
    { name: 'Roman Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqoWjGIwHGR__OTnXW2StKtONBDsEWNhIqQcq3Ta1uc0BWD6wriDMfhql8XtIl2TD0nmEJw53QUl5THpPG89zQ4bw2SazC8xKZ0kuG7-iSnyD0Ys-gCuJFxcSOksZbJcWeGc7IjBJLGycgJ7gQOwNVvB7Jpov3WSI18XhLcXC1s5VBg82wyzdDDgoii6zbSHRVomJ3ZYxlnP_c30CAkf4-irfy4MhLTR31bjaNhtSzmT2ddC6CVMGtau0F1cBFI3uP8A1wGmoor1UI' },
    { name: 'Mesopotamian Mythology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALliPsIZN4YqnlR_1-aHPBnHPxN4Pq5o9kPQzArtbWroTAdG2nCX9t4Mivbgujmsrc29QZdFDk7myw_WpNdG7bIEC-SMxdgMdlRa5uvN7LkNd2T9oMf6ZB63r_mMWcftRyzTWoORb0lUI1MsOCEhpmG4P67a_QydklpiPXWDnAKvgJnen0gpL1YdFxpJOaPHyKCvN7Si7Aal_Cs15QE6rT4WKvd5pS3AmaSFIMc_Q_U1za46vaj7AwMW90MEipSS7v89T62opOUDT1' }
  ];



const handleCatalogueClick = (catalogueName: string): void => {
    // Convert mythology name to URL format for existing HTML pages
    let urlName: string;
    
    switch(catalogueName) {
        case 'Greek Mythology':
            urlName = 'greek';
            break;
        case 'Norse Mythology':
            urlName = 'norse';
            break;
        case 'Egyptian Mythology':
            urlName = 'egyptian';
            break;
        case 'Celtic Mythology':
            urlName = 'celtic';
            break;
        case 'Roman Mythology':
            urlName = 'roman';
            break;
        case 'Mesopotamian Mythology':
            urlName = 'mesopotamian';
            break;
        default:
            urlName = catalogueName.toLowerCase().replace(' mythology', '').replace(' ', '-');
    }
    
    // Navigate to the corresponding HTML page
    window.location.href = `${urlName}.html`;
    
    console.log(`Navigating to ${urlName}.html`);
};

  return (
    <>
      <h2 className="text-white text-2xl font-bold px-4 pb-3 pt-5">Mythologies</h2>
      <div className="grid grid-cols-3 gap-6 p-4">
        {catalogues.map((item, index) => (
          <button
            key={index} 
            className="flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-xl"
            onClick={() => handleCatalogueClick(item.name)}
            aria-label={`View ${item.name} catalogue`}
          >
            <div 
              className="w-full aspect-square bg-cover bg-center rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow duration-300"
              style={{ backgroundImage: `url("${item.img}")` }}
            >
              {/* Overlay for better hover effect */}
              <div className="w-full h-full rounded-xl bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
            </div>
            <p className="text-white text-base font-medium group-hover:text-blue-400 transition-colors duration-300">
              {item.name}
            </p>
          </button>
        ))}
      </div>
    </>
  );
}