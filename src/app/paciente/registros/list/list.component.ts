import { Component, OnInit, inject, Input } from '@angular/core';
import { ItemComponent } from 'src/app/shared/ui/item/item.component';
import { LabelComponent } from 'src/app/shared/ui/label/label.component';
import { RegistrosService } from 'src/app/core/services/registros.service';
import { Registro } from 'src/app/models/registro';
import { Auth, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardComponent } from 'src/app/shared/ui/card/card.component';
import { BadgeComponent } from 'src/app/shared/ui/badge/badge.component';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, LabelComponent, CommonModule, CardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  registro!: Registro[];
  registros$!: Observable<Registro[]>;
  private auth: Auth = inject(Auth);
  readonly authState$ = authState(this.auth);
  
  @Input() type?: 'flex' | 'grid' = 'flex';
  @Input() direction?: 'horizontal' | 'vertical' = 'horizontal';

  categoriaMap: { [key: string]: { icon: string; color: string } } = {
    'Consulta general': { icon: 'user-md', color: '#FD5B71' },
    'Laboratorios': { icon: 'vial', color: '#6DDDFC' },
    'Consulta pediátrica': { icon: 'baby', color: '#A2BDFF' },
    'Vacunación': { icon: 'syringe', color: '#FF9110' },
    'Alergia e Inmunología': { icon: 'allergies', color: '#208AF2' },
    'Cardiología': { icon: 'heart', color: '#1BC5DD' },
  };

  constructor(private registroService: RegistrosService, private router: Router) {
  }

  ngOnInit(): void {
    this.authState$.subscribe(user => {
      if (user) {
        this.registros$ = this.registroService.getRegistrosByUserId(user.uid);
      }
    });
  }
  onItemSelected(item: Registro): void {
    this.router.navigate([`/item/${item.id}`]);
  }

  getIconForCategoria(categoria: string): string {
    return this.categoriaMap[categoria]?.icon || 'question-circle'; // Default icon
  }

  getColorForCategoria(categoria: string): string {
    return this.categoriaMap[categoria]?.color || 'gray'; // Default color
  }

  trackByFn(item: Registro): string {
    return item.id; // Or another unique identifier
  }
}
