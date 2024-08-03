import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { NgxSemanticModule } from 'ngx-semantic';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [NgxSemanticModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input({ required: true }) name!: string;

  toaster= inject(ToastrService)

  onClick() {
    this.toaster.success(`${this.name} is clicked!`, 'Button')
  }
}
