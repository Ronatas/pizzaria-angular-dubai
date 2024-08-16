import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produtos } from './produtos.model'; // Certifique-se de que a interface Produtos está corretamente definida

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: Produtos = {
    pizzas: [
      
      {
        id: 1,
        name: 'Alface',
        price: 25,
        ingredients: 'Mussarela, alface e bacon.',
        img: 'https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38485.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 2,
        name: 'Atum',
        price: 25,
        ingredients: 'Mussarela, cebola e atum.',
        img: 'https://img.freepik.com/fotos-premium/pizza-e-uma-comida-italiana-servida-na-placa-de-circulo-de-madeira_41043-643.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 3,
        name: 'Atum II',
        price: 25,
        ingredients: 'Mussarela, atum e catupiry.',
        img: 'https://img.freepik.com/fotos-premium/pizza-e-uma-comida-italiana-servida-na-placa-de-circulo-de-madeira_41043-643.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 4,
        name: 'Americana',
        price: 25,
        ingredients: 'Mussarela, presunto, bacon, ovo e tomate.',
        img: 'https://img.freepik.com/fotos-premium/pizza-de-queijo-de-pretzel-recem-assada_1202914-41974.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 5,
        name: 'Alho',
        price: 25,
        ingredients: 'Mussarela e alho.',
        img: 'https://img.freepik.com/fotos-premium/pizza-de-queijo-caseira_133187-106.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 6,
        name: 'Aliche',
        price: 25,
        ingredients: 'Mussarela e aliche.',
        img: 'https://img.freepik.com/fotos-premium/uma-pizza-com-cogumelos-e-cogumelos_1044943-64479.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 7,
        name: 'Baiana',
        price: 25,
        ingredients: 'Mussarela, calabresa, cebola, pimenta e ovo.',
        img: 'https://img.freepik.com/fotos-premium/uma-pizza-de-queijo-classica-recem-saida-do-forno-com-queijo-derretido-pegajoso_875755-4689.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 8,
        name: 'Bacon',
        price: 25,
        ingredients: 'Mussarela, bacon e tomate.',
        img: 'https://img.freepik.com/fotos-premium/pizza-fresca-e-deliciosa-numa-mesa-de-madeira_615731-9527.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 9,
        name: 'Brocólis',
        price: 25,
        ingredients: 'Mussarela, brócolis, parmesão.',
        img: 'https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38485.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 10,
        name: 'Brocólis II',
        price: 25,
        ingredients: 'Mussarela, brócolis, champignon e creme de leite.',
        img: 'https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38485.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 11,
        name: 'Brocólis III',
        price: 25,
        ingredients: 'Mussarela, brócolis, bacon e catupiry.',
        img: 'https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38485.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 12,
        name: 'Barbecue',
        price: 25,
        ingredients: 'Mussarela, calabresa, ovo, bacon, molho barbecue.',
        img: 'https://img.freepik.com/fotos-premium/desfrute-de-uma-deliciosa-e-classica-pizza-margherita-que-e-recem-cozida-a-perfeicao-e-deliciosa_152124-10824.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 13,
        name: 'Champignom',
        price: 25,
        ingredients: 'Mussarela e champignon.',
        img: 'https://img.freepik.com/fotos-premium/pizza-saborosa-com-frango-e-cogumelos-na-massa-preta_112304-801.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
    },
    {
        id: 14,
        name: 'Calabresa',
        price: 25,
        ingredients: 'Mussarela, cebola e calabresa.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 15,
        name: 'Calabresa C/ Catupiry',
        price: 25,
        ingredients: 'Mussarela, calabresa e catupiry.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 16,
        name: 'Cheddar',
        price: 25,
        ingredients: 'Mussarela e cheddar.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 17,
        name: 'Catupiry',
        price: 25,
        ingredients: 'Mussarela e catupiry.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 18,
        name: 'Cinco Queijos',
        price: 25,
        ingredients: 'Mussarela, catupiry, provolone, gorgonzola e parmesão.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 19,
        name: 'Frango C/ Catupiry',
        price: 25,
        ingredients: 'Mussarela, frango, catupiry e milho.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 20,
        name: 'Grega',
        price: 25,
        ingredients: 'Mussarela, lombo, creme de leite e manjericão.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 21,
        name: 'Lisboa',
        price: 25,
        ingredients: 'Mussarela, calabresa, catupiry e batata palha.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 22,
        name: 'Lombo',
        price: 25,
        ingredients: 'Mussarela, lombo e catupiry.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 23,
        name: 'Milho',
        price: 25,
        ingredients: 'Mussarela, milho e catupiry.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 24,
        name: 'Milho II',
        price: 25,
        ingredients: 'Mussarela, milho, bacon e catupiry.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 25,
        name: 'Mussarela',
        price: 25,
        ingredients: 'Mussarela e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 26,
        name: 'Marguerita',
        price: 25,
        ingredients: 'Mussarela, parmesão, tomate e manjericão.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 27,
        name: 'Mexicana',
        price: 25,
        ingredients: 'Mussarela, frango, cheddar e pimenta.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 28,
        name: 'Napolitana',
        price: 25,
        ingredients: 'Mussarela, parmesão e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 29,
        name: 'Polastra',
        price: 25,
        ingredients: 'Mussarela, frango e creme de leite.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 30,
        name: 'Peperone',
        price: 25,
        ingredients: 'Mussarela e peperone.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 31,
        name: 'Peperone II',
        price: 25,
        ingredients: 'Mussarela, peperone e catupiry.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 32,
        name: 'Paulista',
        price: 25,
        ingredients: 'Mussarela, presunto, bacon e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 33,
        name: 'Paulista II',
        price: 25,
        ingredients: 'Mussarela, presunto, ovo e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 34,
        name: 'Portuguesa',
        price: 25,
        ingredients: 'Mussarela, presunto, ervilha, ovo, palmito e cebola.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 35,
        name: 'Palmito',
        price: 25,
        ingredients: 'Mussarela, palmito, catupiry e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 36,
        name: 'Peito de Peru',
        price: 25,
        ingredients: 'Mussarela, peito de peru e catupiry.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 37,
        name: 'Peito de peru II',
        price: 25,
        ingredients: 'Mussarela, peito de peru, milho e cebola.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 38,
        name: 'Presunto',
        price: 25,
        ingredients: 'Mussarela, presunto e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 39,
        name: 'Quatro Queijos',
        price: 25,
        ingredients: 'Mussarela, catupiry, provolone e gorgonzola.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 40,
        name: 'Requeijão',
        price: 25,
        ingredients: 'Mussarela, requeijão, bacon e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 41,
        name: 'Seis Queijos',
        price: 25,
        ingredients: 'Mussarela, catupiry, provolone, gorgonzola, parmesão e cheddar.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 42,
        name: 'Strogonoff de Frango',
        price: 25,
        ingredients: 'Mussarela, frango, champignon, milho, creme de leite e batata palha.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 43,
        name: 'Salame',
        price: 25,
        ingredients: 'Mussarela, salame e cebola.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 44,
        name: 'Siciliana',
        price: 25,
        ingredients: 'Mussarela, champignon, bacon e parmesão.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 45,
        name: 'Saborosa',
        price: 25,
        ingredients: 'Mussarela, presunto, catupiry e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 46,
        name: 'Três Queijos',
        price: 25,
        ingredients: 'Mussarela, catupiry e parmesão.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 47,
        name: 'Toscana',
        price: 25,
        ingredients: 'Mussarela, calabresa, ovo e catupiry.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 48,
        name: 'Tomate Seco',
        price: 25,
        ingredients: 'Mussarela e tomate seco.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    },
    {
        id: 49,
        name: 'Vegetariana',
        price: 25,
        ingredients: 'Mussarela, ervilha, palmito, milho e tomate.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
    }
    
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
        price: 6,
        volume: "2 Litros",
        img: "https://lh3.googleusercontent.com/pw/ACtC-3fYrl0u11NO1zzGQTO9UDlpsHAP5Bvt52Rw_kQSVSHDoIfcngn09CDPVKx09lz89fUH7NIr2HhlMDJR5SQhLZ6GP-C7kiyO2m6cU9XkEnchjj24MYfJu7k_3KSDvPs48Jxt5DLse-9jMy6--V_4kg0H=w708-h943-no?authuser=0"
      },
      {
        id: 4,
        name: "Coca-cola",
        price: 4.5,
        volume: "1 Litro",
        img: "https://lh3.googleusercontent.com/pw/ACtC-3eLQv8QVPt-SaiT2T4a_vogOcBG1LGfI22-_mjgJymNoOmyeWg4NRTfdMGw3E1lLIWEvZACKC3-IyiLI9TOF09O_sYVpf-JsQV4DrjfAUx5LYuOKcuB-d6Ebw9l239TMU1QHt1VWCRML0r1r3Ky705l=w486-h648-no?authuser=0"
      },
      {
        id: 6,
        name: "Fanta Uva",
        price: 5.5,
        volume: "2 Litros",
        img: "https://lh3.googleusercontent.com/pw/ACtC-3czfOaqgzfsdKGY_eXJ3GcRqO_qANuW7I4RYu_dlkLRV4tS2TeWh5PSoAyLz1luTBkADrrOwYAVnRULGuPHPkpLNunOwIu5eFOrS_G3SZRaRP39KsVhhQpXNd-nuGbwrAhN5Ff75tgyOAK9ney_pob5=w708-h943-no?authuser=0"
      },
      {
        id: 7,
        name: "Fanta Laranja",
        price: 5.5,
        volume: "2 Litros",
        img: "https://lh3.googleusercontent.com/pw/ACtC-3dJUuJlv1fnqhaEAo-l3zQzzmUmf4SO4aHzz_DwE1EhtyCLNCV25ubR4EFIsXH7mSVu2J4EivUI2kHE36_7_EfIKZyb0HQ3YDBzh5f28911fIEs-OOEj-HmXT3dbQF180u85HbKoj44h_I5I0tH7whD=w708-h943-no?authuser=0"
      },
      {
        id: 3,
        name: "Pepsi",
        price: 3,
        volume: "350ml",
        img: "https://lh3.googleusercontent.com/pw/ACtC-3d-Bu85HstdK8oHyTfcbIEhqmugjR7CYt3-HgJw-LVQr5_fTv7CkjQZfXIzt6272j2U7sktnRJxiyFp8crlR4kM7qweG5yEUWz9T2qdfGB-WDDtzdnGtcetVnGuiYFAhm6u43uYXyUV9Pp7Rv1iXZl-=w800-h600-no?authuser=0"
      },
      {
        id: 5,
        name: "Fanta Laranja",
        price: 3,
        volume: "350ml",
        img: 'https://lh3.googleusercontent.com/pw/ACtC-3dA25dLiQlA5oIMiszueTe44CU4BoGfyQIbKb67RCU5mQjQqO9tw8AzLDTJZwWPccXHmNJB5UlnyCyVVO7ulkoqKmGtq5bd_h9wA77BryLRTRqlnSbQlMmGR1swUvRn3SC_pIBpv9bqN4EDLzeyo3Gg=w840-h630-no?authuser=0',
      },

      {
        id: 10,
        name: "Skol",
        price: 6,
        volume: "350ml",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJDjb9qegZJoSsfn7Q4DLKVT5jQYWXQntpA&s",
     }
      // Adicione outras bebidas conforme necessário
    ]
  };

  constructor() { }

  public getProdutos(): Observable<Produtos> {
    return of(this.produtos);
  }
}
