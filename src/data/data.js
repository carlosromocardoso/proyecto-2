 const data = [
    {
      name: 'FuelCell',
      price: 190,
      gender: 'female',
      seller: 'NewBalance',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928374/new-balance-logo-16_apry5b.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332643/NB_hombre_mujer_nfrpys.png',
      url: 'https://www.newbalance.es/es/pd/fuelcell-supercomp-pacer/WFCRRV1-41131.html?dwvar_WFCRRV1-41131_style=WFCRRCC'
    },
    {
      name: 'Nile Streakfly',
      price: 112,
      gender: 'male',
      seller: 'Nike',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1689496223/vecteezy_nike-just-do-it-logo-transparent-png_22101070_388_y65xdb.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1689495868/streakfly-zapatillas-de-competicion-asfalto-5B4DMx_l1e4xi.png',
      url: 'https://www.nike.com/es/t/streakfly-zapatillas-de-competicion-asfalto-5B4DMx'
    },
    {
      name: 'Fresh Foam X',
      price: 160,
      gender: 'male',
      seller: 'NewBalance',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928374/new-balance-logo-16_apry5b.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332643/NB_Hombre_re2zgj.png',
      url: 'https://www.newbalance.es/es/pd/fresh-foam-x-hierro-v7/MTHIERV7-41134.html#dwvar_MTHIERV7-41134_style=MTHIERO7&dwvar_MTHIERV7-41134_width=D&pid=MTHIERV7-41134&quantity=1'
    },
    {
      name: 'Terrex Speed',
      price: 130,
      gender: 'male',
      seller: 'Adidas',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1689496458/vecteezy_adidas-logo-png-adidas-icon-transparent-png_19766237_252_y9xwld.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1689501115/adidas-terrex-speed-flow-hombre-gy6135_ftzpqq.png',
      url: 'https://www.adidas.es/zapatilla-terrex-speed-flow-trail-running/HR1128.html'
    },

    {
      name: 'Fresh Foam X',
      price: 190,
      gender: 'female',
      seller: 'NewBalance',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928374/new-balance-logo-16_apry5b.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332644/NB_mujer_tlr5sc.png',
      url: 'https://www.newbalance.es/es/pd/fresh-foam-x-1080v12/W1080V12-42824.html#dwvar_W1080V12-42824_style=W108012R&dwvar_W1080V12-42824_width=B&pid=W1080V12-42824&quantity=1'
    },
    {
      name: 'Caldera 6',
      price: 150,
      gender: 'male',
      seller: 'Brooks',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928420/brooks-vector-logo_qjjlbo.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332643/Caldera_6_w1hpe5.png',
      url: 'https://www.brooksrunning.com/es_es/caldera-6-mens-distance-trail-running-shoe/110379.html'
    },
    {
      name: 'Divide 3',
      price: 110,
      gender: 'female',
      seller: 'Brooks',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928420/brooks-vector-logo_qjjlbo.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332643/Divide_3_vjxb5b.png',
      url: 'https://www.brooksrunning.com/es_es/divide-3-womens-running-shoes/120368.html'
    },
    {
      name: 'Catamount 2',
      price: 170,
      gender: 'female',
      seller: 'Brooks',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928420/brooks-vector-logo_qjjlbo.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332644/Catamount2_an9nwq.png',
      url: 'https://www.brooksrunning.com/es_es/catamount-2-womens-trail-running-shoe/120388.html'
    },
    {
      name: "Beast '20",
      price: 160,
      gender: 'male',
      seller: 'Brooks',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928420/brooks-vector-logo_qjjlbo.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332643/Beast_20_gjdbwn.png',
      url: 'https://www.brooksrunning.com/es_es/beast-20-mens-road-running-shoe/110327.html'
    },
    {
      name: 'Aurora-BL',
      price: 200,
      gender: 'female',
      seller: 'Brooks',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928420/brooks-vector-logo_qjjlbo.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332642/Aurora_BL_p8hsod.png',
      url: 'https://www.brooksrunning.com/es_es/aurora-bl-womens-road-running-shoe/120354.html'
    },
    {
      name: 'Glycerin 20',
      price: 180,
      gender: 'male',
      seller: 'Brooks',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928420/brooks-vector-logo_qjjlbo.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332746/Glycerin20_t6ubs0.png',
      url: 'https://www.brooksrunning.com/es_es/glycerin-20-mens-neutral-cushioned-running-shoe/110382.html'
    },
    {
      name: 'London Edition',
      price: 240,
      gender: 'male',
      seller: 'NewBalance',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928374/new-balance-logo-16_apry5b.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332644/NB_London_Edition_oiocjx.png',
      url: 'https://www.newbalance.es/es/pd/london-edition-fuelcell-supercomp-elite-v3/MRCELV3-44275.html?dwvar_MRCELV3-44275_style=MRCELLD3'
    },
    {
      name: 'London Edition',
      price: 160,
      gender: 'female',
      seller: 'NewBalance',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928374/new-balance-logo-16_apry5b.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332643/NB_London_Edition_Negra_lavqvk.png',
      url: 'https://www.newbalance.es/es/pd/london-edition-fresh-foam-x-880-v13/M880V13-44277.html'
    },
    {
      name: 'Ghost 8',
      price: 'Descatalogada',
      gender: 'male',
      seller: 'Brooks',
      sellerImg: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1688928420/brooks-vector-logo_qjjlbo.png',
      img: 'https://res.cloudinary.com/dqip8uhet/image/upload/v1679332643/Brooks_Ghost_8_rdpb5s.png',
      url: 'https://www.podiumrunner.com/events/brooks-unveils-special-edition-berlin-marathon-ghost-8-shoe/'
    },
  ];
  
  export default data;