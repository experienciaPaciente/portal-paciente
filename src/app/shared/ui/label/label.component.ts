import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  
  @Input() icon = false;
  @Input() iconLabel!: String
  @Input() label!: String
  @Input() subtitle!: String
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';
}
