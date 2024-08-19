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
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, alface e bacon.',
                img: 'https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38485.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 2,
                name: 'Atum',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, cebola e atum.',
                img: 'https://img.freepik.com/fotos-premium/pizza-e-uma-comida-italiana-servida-na-placa-de-circulo-de-madeira_41043-643.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 3,
                name: 'Atum II',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, atum e catupiry.',
                img: 'https://img.freepik.com/fotos-premium/pizza-e-uma-comida-italiana-servida-na-placa-de-circulo-de-madeira_41043-643.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 4,
                name: 'Americana',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, presunto, bacon, ovo e tomate.',
                img: 'https://img.freepik.com/fotos-premium/pizza-de-queijo-de-pretzel-recem-assada_1202914-41974.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 5,
                name: 'Alho',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela e alho.',
                img: 'https://img.freepik.com/fotos-premium/pizza-de-queijo-caseira_133187-106.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 6,
                name: 'Aliche',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela e aliche.',
                img: 'https://img.freepik.com/fotos-premium/uma-pizza-com-cogumelos-e-cogumelos_1044943-64479.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 7,
                name: 'Baiana',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, calabresa, cebola, pimenta e ovo.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 8,
                name: 'Bacon',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, bacon e tomate.',
                img: 'https://img.freepik.com/fotos-premium/pizza-fresca-e-deliciosa-numa-mesa-de-madeira_615731-9527.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 9,
                name: 'Brocólis',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, brócolis, parmesão.',
                img: 'https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38485.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 10,
                name: 'Brocólis II',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, brócolis, champignon e creme de leite.',
                img: 'https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38485.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 11,
                name: 'Brocólis III',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, brócolis, bacon e catupiry.',
                img: 'https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38485.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 12,
                name: 'Barbecue',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, calabresa, ovo, bacon, molho barbecue.',
                img: 'https://img.freepik.com/fotos-premium/desfrute-de-uma-deliciosa-e-classica-pizza-margherita-que-e-recem-cozida-a-perfeicao-e-deliciosa_152124-10824.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 13,
                name: 'Champignom',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela e champignon.',
                img: 'https://img.freepik.com/fotos-premium/pizza-saborosa-com-frango-e-cogumelos-na-massa-preta_112304-801.jpg?ga=GA1.1.620364796.1723812083&semt=ais_hybrid'
            },
            {
                id: 14,
                name: 'Calabresa',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, cebola e calabresa.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 15,
                name: 'Calabresa C/ Catupiry',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, calabresa e catupiry.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 16,
                name: 'Cheddar',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela e cheddar.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 17,
                name: 'Catupiry',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela e catupiry.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 18,
                name: 'Cinco Queijos',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, catupiry, provolone, gorgonzola e parmesão.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 19,
                name: 'Frango C/ Catupiry',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, frango, catupiry e milho.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 20,
                name: 'Grega',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, lombo, creme de leite e manjericão.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 21,
                name: 'Lisboa',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, atum, champignon, catupiry e creme de leite.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 22,
                name: 'Marguerita',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, tomate e manjericão.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 23,
                name: 'Milanesa',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, lombo, cebola e tomate.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 24,
                name: 'Milho',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela e milho.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 25,
                name: 'Napolitana',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, presunto, parmesão e orégano.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 26,
                name: 'Paulista',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, presunto, champignon e palmito.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 27,
                name: 'Palmito',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela e palmito.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 28,
                name: 'Portuguesa',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, presunto, cebola, ovo, azeitonas e ervilha.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 30,
                name: 'Rústica',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, provolone, alho e parmesão.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 32,
                name: 'Salame',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela e salame.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 33,
                name: 'Toscana',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, presunto, calabresa e ovo.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 34,
                name: 'Vegetariana',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, brócolis, palmito, champignon e alho.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 40,
                name: 'Quatro Queijos',
                cat: 'N',
                price: 39.99,
                ingredients: 'Mussarela, gorgonzola, provolone e parmesão.',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
            },
            {
                id: 41,
                name: 'Doritos',
                cat: 'E',
                price: 44.90,
                ingredients: 'Mussarela, frango cheddar, pimenta e Doritos',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 42,
                name: 'Dubai',
                cat: 'N',
                price: 39.90,
                ingredients: 'Mussarela, lombo, milho, ovo, bacon, catupiry',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 43,
                name: 'Moda casa',
                cat: 'E',
                price: 41.90,
                ingredients: 'Mussarela, frango, presunto, ovo, milho, bacon e catupiry',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 44,
                name: 'Sueca',
                cat: 'N',
                price: 39.90,
                ingredients: 'Mussarela, presunto, palmito, milho, bacon e catupiry',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 45,
                name: 'Português da casa',
                cat: 'N',
                price: 39.90,
                ingredients: 'Mussarela, presunto, ervilha, palmito, ovo, cebola e catupiry',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 46,
                name: 'Irlandesa',
                cat: 'E',
                price: 41.90,
                ingredients: 'Mussarela, frango, presunto, ovo, milho, bacon, catupiry, tomate e cebola',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 47,
                name: 'Romana',
                cat: 'N',
                price: 39.90,
                ingredients: 'Mussarela, lombo, milho, presunto, ovo e catupiry',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 48,
                name: 'Magnífica',
                cat: 'N',
                price: 39.90,
                ingredients: 'Mussarela, bacon, catupiry e tomate',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 49,
                name: 'Vitoriana',
                cat: 'N',
                price: 39.90,
                ingredients: 'Mussarela, presunto, champignon e creme de leite',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 50,
                name: 'Nervosa',
                cat: 'E',
                price: 60.00,
                ingredients: 'Mussarela, presunto, calabresa, frango, cebola, milho, lombo, catupiry, bacon, provolone e tomate',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 51,
                name: 'Da Patroa',
                cat: 'N',
                price: 39.90,
                ingredients: 'Mussarela, lombo, milho, cebola, catupiry e tomate',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              },
              {
                id: 52,
                name: 'Famosa',
                cat: 'N',
                price: 39.90,
                ingredients: 'Mussarela, frango, bacon, catupiry e tomate',
                img: 'https://pizzadipietre.com/wp-content/uploads/2021/06/sabores-pizza-mais-pedidos-brasileiros.jpg'
              }
        ]
        
    
      // Adicione outras pizzas conforme necessário
    ,
    bebidas: [
        {
            id: 1,
            name: "Coca-Cola 2L",
            price: 15.00,
            volume: "2 Litros",
            img: "https://img.irroba.com.br/filters:fill(fff):quality(80)/bebfesta/catalog/produtos/teste/coca-cola-beb-festa.jpg"
          },
          {
            id: 2,
            name: "Sprite 2L",
            price: 14.00,
            volume: "2 Litros",
            img: "https://images.tcdn.com.br/img/img_prod/1115696/sprite_pet_2l_177_1_e6e9e838cd50f7f522e479d15e48c16a.png"
          },
          {
            id: 3,
            name: "Fanta 2L",
            price: 14.00,
            volume: "2 Litros",
            img: "https://m.media-amazon.com/images/I/71c2e7jl2QL.jpg"
          },
          {
            id: 4,
            name: "Guaraná Antártica 2L",
            price: 14.00,
            volume: "2 Litros",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUP1JgInVJUXcSB1xO4zo2gIyZNUBa4NnUQ&s"
          },
          {
            id: 5,
            name: "Coca-Cola Lata",
            price: 6.00,
            volume: "350 ml",
            img: "https://www.extrabom.com.br/uploads/produtos/350x350/5057_extrabom_refrigerante_refrigerante-coca-cola-lata-350ml.jpg"
          },
          {
            id: 6,
            name: "Coca-Cola Zero Lata",
            price: 6.00,
            volume: "350 ml",
            img: "https://cdn.supermercadoescola.org.br/media/catalog/product/cache/54623312829cd3d4f6e7d9783b645a28/7/8/7894900700015.jpeg"
          },
          {
            id: 7,
            name: "Coca-Cola 600 ml",
            price: 8.00,
            volume: "600 ml",
            img: "https://d3mhu901409m9r.cloudfront.net/Custom/Content/Products/39/87/39878_refrigerante-coca-cola-pet-600ml-p71906_l1_638188995933380001.jpg"
          },
          {
            id: 8,
            name: "Coca-Cola Zero 600 ml",
            price: 8.00,
            volume: "600 ml",
            img: "https://www.redeservebem.com/cdn/shop/products/ee3a9c50-051d-4605-8e2e-dce7ebf252a6v00_1200x1200.jpg?v=1654783568"
          },
          {
            id: 9,
            name: "Guaraná Antártica 1L",
            price: 10.00,
            volume: "1 Litro",
            img: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/4614-refrigerante-guarana-antarctica-1l.jpg"
          },
          {
            id: 10,
            name: "Guaraná São Carlos 2L",
            price: 7.00,
            volume: "2 Litro",
            img: "https://img.sitemercado.com.br/produtos/774807be7be92827328129d7d78ecdf6c98e9808017dc2f27d18984b5c76aeeb_full.jpg"
          },
          {
            id: 11,
            name: "Brahma Lata",
            price: 6.00,
            volume: "350 ml",
            img: "https://bretas.vtexassets.com/arquivos/ids/201435-800-auto?v=638376352000370000&width=800&height=auto&aspect=true"
          },
          {
            id: 12,
            name: "Skol Lata",
            price: 6.00,
            volume: "350 ml",
            img: "https://bretasatacarejo.vtexassets.com/arquivos/ids/196619/657b45091c8a0bad255a9a2b.jpg?v=638381742223500000"
          },
          {
            id: 13,
            name: "Amstel Lata",
            price: 6.00,
            volume: "350 ml",
            img: "https://marmoreio.com.br/wp-content/uploads/2020/05/amstel-lata-Copia-2.jpg"
          },
          {
            id: 14,
            name: "Água Mineral 500 ml",
            price: 3.00,
            volume: "500 ml",
            img: "https://abir.org.br/abir2022/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-30-at-15.26.58-1024x593.jpeg"
          },
          {
            id: 15,
            name: "Água com Gás 500 ml",
            price: 3.00,
            volume: "500 ml",
            img: "https://cdn.irmaospatrocinio.com.br/img/p/1/7/8/7/8/9/178789-large_default.jpg"
          }
      // Adicione outras bebidas conforme necessário
    ]
  };

  constructor() { }

  public getProdutos(): Observable<Produtos> {
    return of(this.produtos);
  }
}
