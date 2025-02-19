import { Component, HostListener } from '@angular/core';
import { Registro } from 'src/app/models/registro';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrosService } from 'src/app/core/services/registros.service';
import { BadgeComponent } from 'src/app/shared/ui/badge/badge.component';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';
import { LabelComponent } from 'src/app/shared/ui/label/label.component';
import { SwitcherComponent } from 'src/app/shared/ui/switcher/switcher.component';
import { CommonModule, Location } from '@angular/common';
import { DropdownComponent } from 'src/app/shared/ui/dropdown/dropdown.component';
import { ModalComponent } from 'src/app/shared/ui/modal/modal.component';
import { NotificationService } from './../../../core/services/mensajes.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    BadgeComponent,
    ButtonComponent,
    LabelComponent,
    SwitcherComponent,
    DropdownComponent,
    ModalComponent,
    CommonModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  registro!: Registro | null;
  id!: string;
  editableIcon!: string;
  editableColor!: string;
  qrCodeUrl?: string;
  disabled = false;
  isMobile!: boolean;
  isModalOpen: boolean = false;
  modalDelete: boolean = false;
  selectedFile?: string;
  selectedItemId: string | null = null;

  categoriaMap: { [key: string]: { icon: string; color: string } } = {
    'Medicina General': { icon: 'user-md', color: '#007bff' }, // Blue
    'Pediatría': { icon: 'baby', color: '#28a745' }, // Green
    'Ginecología y Obstetricia': { icon: 'venus', color: '#e83e8c' }, // Pink
    'Cardiología': { icon: 'heart', color: '#dc3545' }, // Red
    'Dermatología': { icon: 'spa', color: '#fd7e14' }, // Orange
    'Neurología': { icon: 'brain', color: '#6f42c1' }, // Purple
    'Psiquiatría': { icon: 'comments', color: '#20c997' }, // Teal
    'Endocrinología': { icon: 'balance-scale', color: '#ffc107' }, // Yellow
    'Gastroenterología': { icon: 'stethoscope', color: '#795548' }, // Brown
    'Traumatología y Ortopedia': { icon: 'crutch', color: '#6c757d' }, // Gray
    'Oftalmología': { icon: 'eye', color: '#17a2b8' }, // Cyan
    'Otorrinolaringología': { icon: 'head-side-cough', color: '#6610f2' }, // Indigo
    'Urología': { icon: 'x-ray', color: '#007bff' }, // Blue
    'Neumología': { icon: 'lungs', color: '#87ceeb' }, // Light Blue
    'Oncología': { icon: 'ribbon', color: '#6f42c1' }, // Purple
    'Nutrición y Dietética': { icon: 'utensils', color: '#a2d729' }, // Lime
    'Fisiatría y Rehabilitación': { icon: 'dumbbell', color: '#fd7e14' }, // Orange
    'Odontología': { icon: 'tooth', color: '#5fc8db' } // White
  };

  // Función que devuelve un array en lugar del array per-sé
  getMenuItems(data: Registro): { label: string, icon?: string, subItems?: any[], path?: string, disabled: boolean, callback?: () => void } [] {
    return [
      { label: 'Editar', icon: 'user', disabled: false, callback: () => this.navigateToEdit(data) },
      { label: 'Gestionar permisos', icon: 'star', disabled: true },
      { label: 'Eliminar', icon: 'trash', disabled: false, 
        callback: (event?: MouseEvent) => {
          this.openDeleteModal(event);
      },
    }
    ]
  }

  dropdownPosition = { top: '35px', left: '-190px' };

  constructor(
    private route: ActivatedRoute,
    private registroService: RegistrosService,
    private router: Router,
    private location: Location,
    private notificationService: NotificationService
  ) {}

  // Notificaciones
  triggerSuccess() {
    this.notificationService.addNotification('Registro eliminado con éxito!', 'danger');
  }

  triggerError() {
    this.notificationService.addNotification('Error al generar el registro', 'warning');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.fetchDetails(this.id);
        console.log(`ID: ${this.id}`);
      } else {
        console.error('ID not found in route parameters');
      }
    });
    this.checkIfMobile(window.innerWidth)
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile(event.target.innerWidth);
  }

  checkIfMobile(width: number): void {
    this.isMobile = width < 768; 
  }

  generateQRCode(data: any) {
    if (data) {
      const formattedData = 
      `Título: ${data.titulo}\nDescripción: ${data.descripcion}\nFecha: ${data.fecha}\nHora: ${data.hora}\nCategoria: ${data.categoria}\nValidado: ${data.validado}\nEstado: ${data.estado}\nEmisor: ${data.validador}\nAdjuntos: ${data.adjuntos}`;
      const encodedData = encodeURIComponent(formattedData);
      this.qrCodeUrl = `https://quickchart.io/qr?text=${encodedData}`;
    }
  }

  async fetchDetails(id: string) {
    if (id) {
      try {
        await this.loadRegistro(id); 
        if (this.registro) {
          this.generateQRCode(this.registro);
        }
      } catch (error) {
        console.error('Error loading registro:', error);
        this.registro = null; 
      }
    } else {
      this.registro = null;
    }
  }

  async loadRegistro(id: string): Promise<void> {
    try {
      const registro = await this.registroService.getRegistro(id);
      this.registro = registro || null;
      this.generateQRCode(registro);
    } catch (error) {
      this.registro = null;
      console.error('Error fetching registro:', error);
    }
  }

  getIconForCategoria(categoria: string): string {
    return this.categoriaMap[categoria]?.icon || 'question-circle';
  }

  getColorForCategoria(categoria: string): string {
    return this.categoriaMap[categoria]?.color || 'gray';
  }

  trackByFn(item: any): any {
    return item.id;
  }

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    } 
  }

  navigateToEdit(item: Registro): void {
    this.router.navigate([`/actualizar/${item.id}`]);
  }

  async navigateToDelete(item: Registro): Promise<void> {
    try {
      await this.registroService.deleteRegistro(item.id);
     this.router.navigate(['/']);
    } catch (error) {
      console.error('Error deleting registro', error);
    }
  }

  openDeleteModal(event: MouseEvent | undefined) {
    event?.stopPropagation();
    this.modalDelete = true; 
  }

  openModal(file: string):void {
      this.selectedFile = file;
      this.isModalOpen = !this.isModalOpen;
  }

  async onConfirm(): Promise<void> {
    const itemId = this.id;

    if (itemId) {
      try {
        this.modalDelete = false;
        await this.registroService.deleteRegistro(itemId);
        this.router.navigate(['/']);
        this.triggerSuccess();
      } catch (error) {
        this.triggerError();
      }
    }
  }
}
