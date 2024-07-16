import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produtos } from './produtos.model'; // Certifique-se de que a interface Produtos está corretamente definida

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: Produtos = {
    pizzas: [
      { id: 1, name: 'Calabresa', price: 23.5, ingredients: 'Calabresa, muçarela e presunto.', img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg' },
      
      { 
        id: 2,
        name: 'Portuguesa',
        price: 25,
        ingredients: 'Ovos, muçarela e vegetais.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
      },
      { 
        id: 3,
        name: 'Mista',
        price: 24.5,
        ingredients: 'Muçarela e presunto.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
      },
      { 
        id: 4,
        name: 'Vegetariana',
        price: 24.5,
        ingredients: 'Muçarela, tomate e vegetais.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
      },
      { 
        id: 5,
        name: 'Frango Catupiry',
        price: 26,
        ingredients: 'Frango desfiado e muçarela.',
        img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
      },
      { 
        id: 6,
        name: 'Chocolate',
        price: 28,
        ingredients: 'Chocolate e cereja.',
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
