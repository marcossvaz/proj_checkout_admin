export interface Variants {
    id?: string;
    id_product: string;
    sku: string;
    price: number;
    stock: number;
    active?: boolean;
    combo: boolean;

    height: number;
    width: number;
    weight: number;
    length: number;

    json_feature: any;
    main: boolean;
    created_at?: any;
    updated_at?: any;
}

interface IComponents {
    id_variants: string;
    quantity: number;
}