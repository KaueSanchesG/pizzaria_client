import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  inject,
} from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { Cliente } from 'src/app/models/cliente';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  //arrays para buscar do back
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  pizzas: Pizza[] = [];
  funcionarios: Funcionario[] = [];

  //valores adicionados para o pedido
  produtoSelected: Produto[] = [];
  pizzaSelected: Pizza[] = [];

  //instanciando novo pedido
  pedido: Pedido = new Pedido();

  @Output() retorno = new EventEmitter<Pedido>();

  pedidoService = inject(PedidoService);
  clienteService = inject(ClienteService);
  produtoService = inject(ProdutoService);
  pizzaService = inject(PizzaService);
  funcionarioService = inject(FuncionarioService);

  ngOnInit() {
    this.getClientes();
    this.getProdutos();
    this.getPizzas();
    this.getFuncionario();
  }

  save() {
    this.pedido.produtoList = this.produtoSelected;
    this.pedido.pizzaList = this.pizzaSelected;

    this.pedidoService
      .create(this.pedido)
      .then((response) => {
        alert('Pedido cadastrado com sucesso');
        this.retorno.emit(this.pedido);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getClientes() {
    this.clienteService
      .list()
      .then((response) => {
        this.clientes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getProdutos() {
    this.produtoService
      .list()
      .then((response) => {
        this.produtos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getPizzas() {
    this.pizzaService
      .list()
      .then((response) => {
        this.pizzas = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getFuncionario() {
    this.funcionarioService
      .list()
      .then((response) => {
        this.funcionarios = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleProductSelection(produto: Produto) {
    if (this.produtoSelected.includes(produto)) {
      this.produtoSelected = this.produtoSelected.filter((p) => p !== produto);
    } else {
      this.produtoSelected.push(produto);
    }
  }
  togglePizzaSelection(pizza: Pizza) {
    if (this.pizzaSelected.includes(pizza)) {
      this.pizzaSelected = this.pizzaSelected.filter((p) => p !== pizza);
    } else {
      this.pizzaSelected.push(pizza);
    }
  }
}
