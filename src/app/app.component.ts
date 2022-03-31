import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormaPago, Item, Presupuesto } from 'src/models/presupuesto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  presupuesto = <Presupuesto>{};
  formGroupPresupuesto: FormGroup;

  formaPago: FormaPago[] = [
    { Id: 1, Descripcion: 'Contado' },
    { Id: 2, Descripcion: 'Cheque' },
    { Id: 3, Descripcion: 'Transferencia' },
    { Id: 4, Descripcion: 'Tarjeta' }
  ]

  constructor(

    private formBuilder: FormBuilder
  ) {
    this.presupuesto.Items = []

    this.formGroupPresupuesto = new FormGroup({
      Numero: new FormControl(
        this.presupuesto.Numero,
        [Validators.required]
      ),
      Cliente: new FormControl(
        this.presupuesto.Cliente,
        [Validators.required]
      ),
      Domicilio: new FormControl(
        this.presupuesto.Domicilio
      ),
      Paciente: new FormControl(
        this.presupuesto.Paciente
      ),
      Fecha: new FormControl(
        this.presupuesto.Fecha,
        [Validators.required]
      ),
      Telefono: new FormControl(
        this.presupuesto.Telefono
      ),
      Expediente: new FormControl(
        this.presupuesto.Expediente
      ),
      Total: new FormControl(
        this.presupuesto.Total
      ),
      TotalEscrito: new FormControl(
        this.presupuesto.TotalEscrito,
        [Validators.required]
      ),
      MantenimientoOferta: new FormControl(
        this.presupuesto.MantenimientoOferta,
        [Validators.required]
      ),
      PlazoEntrega: new FormControl(
        this.presupuesto.PlazoEntrega,
        [Validators.required]
      ),
      FormaPago: new FormControl(
        this.presupuesto.FormaPago,
        [Validators.required]
      )
    });
  }

  ngOnInit(): void {}
  
  addItem() {
    let nuevoItem = <Item>{};
    if (this.presupuesto.Items.length > 0) {
      nuevoItem.Numero = this.presupuesto.Items[this.presupuesto.Items.length - 1].Numero + 1;
    }
    else {
      nuevoItem.Numero = 1
    }
    nuevoItem.Cantidad = 1
    this.presupuesto.Items.push(nuevoItem);
    console.log(this.presupuesto.Items, 'items')
  }

  print() {
    window.print();
  }
}

