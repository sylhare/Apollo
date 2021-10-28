import { ProductReference } from "./ProductReference";

export class Product implements ProductReference {
    id: number;
    name: string;
    description: string;

    constructor(id: number, name?: string, description?: string | null) {
        this.id = id;
        this.name = name || "Product " + id;
        this.description = description || "Description"
    }

    toString() {
        return "This is " + this.name;
    }
}

export function randomProduct() {
    return new Product(Math.floor(Math.random() * 100))
}
