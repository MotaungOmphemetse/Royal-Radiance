export interface Product{
    id: number;
    productId: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number,
    rating:number,
    stock:number,
    brand:string,
    category: string,
    thumbnail: string, // Assuming thumbnail is a string URL or file path
    images: string[];
    qty: number;
}
