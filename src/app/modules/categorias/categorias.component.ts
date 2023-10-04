import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  
  categoria : Categoria = new Categoria;


  categoriaArray: Categoria[] = [
    {id: 1,descripcion: "Juegos"},
    {id: 2,descripcion: "Arte"}
  ]

  selectedCategoria : Categoria = new Categoria();

  add(){
    if(this.selectedCategoria.id == undefined){
    this.selectedCategoria.id = this.categoriaArray.length + 1;
    this.categoriaArray.push(this.selectedCategoria);
    }
    this.selectedCategoria = new Categoria();
  }

  edit(){
    if(this.selectedCategoria.id != undefined){
    this.selectedCategoria.id = this.categoriaArray.length + 1;
    this.categoriaArray.push(this.selectedCategoria);
    }
    else{
      alert("Si desea ingresar una nueva categoria aprete el boton 'Agregar'");
    }
    this.selectedCategoria = new Categoria();
  }

  openForEdit(categoria : Categoria){
    this.selectedCategoria = categoria;
  }

  delete(){
    if(confirm("Desea eliminarlo?")){
    this.categoriaArray = this.categoriaArray.filter(x => x!=this.selectedCategoria);
    this.selectedCategoria = new Categoria;
    }
  }
}
