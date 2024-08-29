import { IPaciente } from "./paciente";

export interface Paciente extends Registro {
    id: string;
  }
  
export interface Registro {
    // paciente: IPaciente,
    userId?: string;
    paciente: string,
    titulo: string,
    descripcion: string,
    categoria: string,
    validado: boolean,
    estado: string,
    emisor: string,
    fecha: Date,
    hora: string,
    adjuntos: string, // Array de imágenes
}
