export enum Instruments{
    TRUMPET = 'TRUMPET',
    CLARINET = 'CLARINET',
    SAX = 'SAX'
}

export interface databaseConfiguration{
    id:number
   name: string,
   age: number,
   instruments: Instruments,
   address: string
}