export class Property{
    ref!: string 
    city!: string
    startPrice: number = 0

    constructor(property: Property = {ref:"NA", city:"NA", startPrice:0}){
    }
}