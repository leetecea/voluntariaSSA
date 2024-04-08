import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-vagas',
  standalone: true,
  imports: [ CarouselModule ],
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.scss'
})
export class VagasComponent {

}
