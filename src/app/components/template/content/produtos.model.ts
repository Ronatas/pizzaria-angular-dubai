export interface Pizza {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  img: string;
}

export interface Bebida {
  id: number;
  name: string;
  price: number;
  volume: string;
  img: string;
}

export interface Produtos {
  pizzas: Pizza[];
  bebidas: Bebida[];
}

export const produtos: Produtos = {
  pizzas: [
    {
      id: 1,
      name: "Calabresa",
      price: 23.5,
      ingredients: "Calabresa, muçarela e presunto.",
      img: "https://lh3.googleusercontent.com/pw/ACtC-3dA2byIGysDluhgN_l-uEgmy_zSvQ4KK2YMdW-OrEVdS5qr40XgSMFKYceZTVrzVq8iSj_tOA0PVD11uOJeiwnpdo-1AgrKap1Wd5iM1cB06dIzBMB6mbThxlcPm588F3eTblo5cNYBQrGlb3XjevEb=w736-h552-no?authuser=0"
    },
    {
      id: 2,
      name: "Portuguesa",
      price: 25.0,
      ingredients: "Ovos, muçarela e vegetais.",
      img: "https://lh3.googleusercontent.com/pw/ACtC-3eJ5gIDf6qM3xDAuRI4wafjZ2MQWXLI8sN0Z5MT95B2rWSZACCHEN-rdOIOlQT8gx008UK_h9YkunRlDbcxULg31Wi_Ndb6o4nuyrSmwa_Tc75jCsf6R0HX4gbTe9TIOc31pp-Y_lKCFHErEVRGMF2G=w1258-h943-no?authuser=0"
    },
    // Adicione outras pizzas conforme necessário
  ],
  bebidas: [
    {
      id: 1,
      name: "Coca-cola",
      price: 6.5,
      volume: "2 Litros",
      img: "https://lh3.googleusercontent.com/pw/ACtC-3eLQv8QVPt-SaiT2T4a_vogOcBG1LGfI22-_mjgJymNoOmyeWg4NRTfdMGw3E1lLIWEvZACKC3-IyiLI9TOF09O_sYVpf-JsQV4DrjfAUx5LYuOKcuB-d6Ebw9l239TMU1QHt1VWCRML0r1r3Ky705l=w486-h648-no?authuser=0"
    },
    {
      id: 2,
      name: "Guaraná",
      price: 6.0,
      volume: "2 Litros",
      img: "https://lh3.googleusercontent.com/pw/ACtC-3fYrl0u11NO1zzGQTO9UDlpsHAP5Bvt52Rw_kQSVSHDoIfcngn09CDPVKx09lz89fUH7NIr2HhlMDJR5SQhLZ6GP-C7kiyO2m6cU9XkEnchjj24MYfJu7k_3KSDvPs48Jxt5DLse-9jMy6--V_4kg0H=w708-h943-no?authuser=0"
    },
    // Adicione outras bebidas conforme necessário
  ]
};
