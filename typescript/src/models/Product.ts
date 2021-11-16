import { ProductReference } from "./ProductReference";

export class Product implements ProductReference {
    id: number = 0;
    name: string =  "Product";
    description: string = "Description";

    constructor(product?: Partial<Product>) {
        Object.assign(this, product);
    }

    toString() {
        return "This is " + this.name;
    }
}

export function randomProduct() {
    return new Product({ id: Math.floor(Math.random() * 100) })
}
