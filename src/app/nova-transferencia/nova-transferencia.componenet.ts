import { Component } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.componente.html',
    styleUrls:['./nova-transferencia.componente.scss']
})

export class NovaTransferenciaComponent {

  transferir() {
    console.log('Solicitada nova transferência')
  }

}
