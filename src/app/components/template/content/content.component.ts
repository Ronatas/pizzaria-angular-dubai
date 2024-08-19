import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Bebida } from './bebida.model';
import { Pizza } from './pizza.model';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pizzasArray: Pizza[] = [];
  bebidasArray: Bebida[] = [];
  pizzasEspeciais: Pizza[] = []; // Para armazenar pizzas especiais
  pizzasNormais: Pizza[] = []; // Para armazenar pizzas normais

  constructor(private produtosService: ProdutosService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas() {
    this.produtosService.getProdutos().subscribe((data: { pizzas: Pizza[]; bebidas: Bebida[]; }) => {
      this.pizzasArray = data.pizzas;
      this.bebidasArray = data.bebidas;

      // Filtra as pizzas normais e especiais
      this.pizzasNormais = this.pizzasArray.filter(pizza => pizza.cat !== 'E');
      this.pizzasEspeciais = this.pizzasArray.filter(pizza => pizza.cat === 'E');
    });
  }

  addPizzaPedido(id: number, portion: 'whole' | 'half', isBroto: boolean = false) {
    this.pizzasArray.forEach((pizza) => {
      if (pizza.id === id) {
        let pizzaName: string;
        let pizzaPrice: number;

        if (isBroto) {
          // Configuração para pizza broto
          pizzaName = `Broto de ${pizza.name}`;
          pizzaPrice = 28.90; // Valor fixo para pizza broto salgada
        } else {
          // Configuração para pizza inteira ou meia pizza
          pizzaName = portion === 'half' ? `Meia ${pizza.name}` : pizza.name;
          pizzaPrice = portion === 'half' ? pizza.price / 2 : pizza.price;
        }

        this.pedidoService.getPedidoValues(pizzaName, pizzaPrice);
        this.pedidoService.openSnackBar(`${pizzaName} adicionada ao pedido!`);
      }
    });
  }

  addBebidaPedido(id: number) {
    this.bebidasArray.forEach((bebida) => {
      if (bebida.id === id) {
        this.pedidoService.getPedidoValues(`${bebida.name} ${bebida.volume}`, bebida.price);
        this.pedidoService.openSnackBar('Bebida adicionada!');
      }
    });
  }
}
