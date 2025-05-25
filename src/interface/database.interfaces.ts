export enum Instruments{
    TRUMPET = 'TRUMPET',
    CLARINET = 'CLARINET',
    SAX = 'SAX'
}

export interface databaseConfiguration{
   name: string,
   age: number,
   instruments: Instruments,
   address: string
}