export interface IInstrumento {
    id:number,
    instrumento: string,
    marca:string,
    modelo:string,
    imagen:string,
    precio: string,
    costoEnvio: string,
    cantidadVendida: string,
    descripcion: string,
    categoria: {
        id: number
    }
}

export interface INuevoInstrumento {
    instrumento: string,
    marca:string,
    modelo:string,
    imagen:string,
    precio: string,
    costoEnvio: string,
    cantidadVendida: string,
    descripcion: string,
    categoria: {
        id: number
    }
}