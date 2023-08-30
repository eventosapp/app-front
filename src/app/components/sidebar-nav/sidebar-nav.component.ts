import { Component } from '@angular/core';
import { menu } from 'src/app/interfaces/main.interfaces';
import { routesList as clientesRutas } from 'src/modules/clientes/constants/main.constants';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent {

  public clientesRutas = clientesRutas;

  public menu: menu[] = [{
    nombre: "Clientes Template",
    subMenus: [{
      nombre: "Lista de clientes",
      iconoClase: "ti ti-user",
      link: 'clientes/' + this.clientesRutas.__Lista_Clientes__
    }]
  }];

}
