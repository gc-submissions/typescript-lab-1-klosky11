import { Product } from "./products";

export interface InventoryItem {
    product: Product;   //from products.ts
    quantity: number;
}

let inventory: InventoryItem[] = [
    { product: { name: "Motor" , price: 10.0 }, quantity: 10 },
    {  product: { name: "Sensor" , price: 12.5 }, quantity: 4 },
    { product: { name: "LED" , price: 1.0 }, quantity: 20 }
];

export function calcInventoryValue(array: InventoryItem[]):number {
    let sum: number = 0;
    if (array.length !==0) {
        for (let item of array) {
        sum += item.product.price * item.quantity;
        }
        return sum;
    }
    return 0;
}



console.log( calcInventoryValue(inventory) ); //170
console.log( calcInventoryValue([]) ); //0