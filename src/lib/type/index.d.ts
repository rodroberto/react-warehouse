type ProductImage = {
    id: number;
    productId: number;
    isDefault: boolean;
    url: string;
}

type Product = {
    id: number;
    images?: ProductImage[];
    name: string;
    category: string;
    price: number;
    description?: string;
    qty?: number;
    seller?: string;
}

type CompanyUser = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    isManager: boolean;
}