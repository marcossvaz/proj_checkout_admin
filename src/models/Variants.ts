export interface Variants {
    id: string;
    id_product: string;
    sku: string;
    price: number;
    weight: number;
    volume: string;
    active?: boolean;
    
    json_feature: any;

    created_at: Date;
    updated_at: Date;
}