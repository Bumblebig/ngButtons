import { Component } from '@angular/core';
import { NgxSemanticModule } from 'ngx-semantic';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgxSemanticModule, CustomButtonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
