import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './modules/categorias/categorias.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { HomeComponent } from './modules/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categorias', component:CategoriasComponent},
  {path:'productos', component: ProductosComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    ProductosComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
