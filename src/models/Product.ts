export interface Product {
    id: string;
    id_category: string;

    name: string;
    description?: string | null | undefined;
    active: boolean;

    created_at?: any;
    updated_at?: any;
}
