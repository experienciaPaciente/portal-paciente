import { Component, Input, } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { LabelComponent } from '../label/label.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ButtonComponent, LabelComponent, CardComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() items: any[] = [];

  toggleSelectable(item: any) {
    item.selectable = !item.selectable;
  }

  trackByFn(index: number, item: any): string {
    return item.label; // or any unique identifier for your items
  }
}

