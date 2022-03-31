
export interface Presupuesto {
    Numero: number,
    Cliente: string,
    Domicilio?: string,
    Paciente?: string,
    Fecha: Date,
    Telefono?: number,
    Expediente?: string,
    Items: Item[],
    Total: number,
    TotalEscrito: string,
    MantenimientoOferta: number,
    PlazoEntrega: number,
    FormaPago: string;
}

export interface Item {
    Numero: number,
    Cantidad: number,
    Detalle: string,
    PrecioUnitario: number
}

export interface FormaPago {
    Id: number,
    Descripcion: string
}