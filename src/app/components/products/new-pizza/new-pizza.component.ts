import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Tamanho } from 'src/app/models/enums/tamanho';
import { Pizza } from 'src/app/models/pizza';
import { Sabor } from 'src/app/models/sabor';
import { PizzaService } from 'src/app/services/pizza.service';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrls: ['./new-pizza.component.scss'],
})
export class NewPizzaComponent {
  sabores: Sabor[] = [];
  saborSelected: Sabor[] = [];

  pizza: Pizza = new Pizza();

  @Output() retorno = new EventEmitter<Pizza>();

  pizzaService = inject(PizzaService);
  saborService = inject(SaborService);

  ngOnInit() {
    this.getSabores();
  }

  save() {
    this.pizza.saborList = this.saborSelected;

    this.pizzaService
      .create(this.pizza)
      .then((response) => {
        this.retorno.emit(this.pizza);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSabores() {
    this.saborService
      .list()
      .then((response) => {
        this.sabores = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleSaborSelection(sabor: Sabor) {
    if (this.saborSelected.includes(sabor)) {
      this.saborSelected = this.saborSelected.filter((p) => p !== sabor);
    } else {
      this.saborSelected.push(sabor);
    }
  }

  getTamanhosEnum(): string[] {
    return Object.values(Tamanho).filter(
      (value) => typeof value === 'string'
    ) as string[];
  }
}
