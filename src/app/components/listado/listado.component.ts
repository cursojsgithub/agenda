import { Component } from '@angular/core';
import { TareaComponent } from "../tarea/tarea.component";

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [TareaComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

}
