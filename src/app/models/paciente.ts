export interface ApiResponse<T> {
    message?: string;
    data: T;
  }
  
  export interface IPaciente {
    _id?: string;
    name: string;
    email: string;
    mobile: string;
    dob: string;
    doj: string;
  }