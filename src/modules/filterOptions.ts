export const PRICE_OPTIONS = ["Any price", "Under $500k", "$500k - $750k", "$750k - $1M", "$1M+"] as const;
export const TYPE_OPTIONS = ["Any type", "Single-family", "Multi-family", "Condos", "Apartments"] as const;
export const BEDS_OPTIONS = ["Any beds", "2", "3", "4", "5+"] as const;
export const STATUS_OPTIONS = ["Any status", "For sale", "For rent", "Sold"] as const;
export const SORT_OPTIONS = ["Newest", "Oldest", "Price: Low to high", "Price: High to low"] as const;

export type Price = typeof PRICE_OPTIONS[number];
export type PropertyType = typeof TYPE_OPTIONS[number];
export type Beds = typeof BEDS_OPTIONS[number];
export type Status = typeof STATUS_OPTIONS[number];
export type Sort = typeof SORT_OPTIONS[number];

export interface Filters {
    price: Price;
    type: PropertyType;
    beds: Beds;
    status: Status;
    sort: Sort;
}

export const DEFAULT_FILTERS: Filters = {
    price: 'Any price',
    type: 'Any type',
    beds: 'Any beds',
    status: 'Any status',
    sort: 'Newest',
}