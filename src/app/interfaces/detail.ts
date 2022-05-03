export interface Detail {
    _id?:string,
    descrizione?:string,
    difficolta?: number,
    img?:string ,
    imgs?: any[],
    ingredienti?:Ingrediente[],
    procedimento?:string,
}
export interface Ingrediente{
    descrizione?:string, 
    quantita?:string,
    _id?:string
}