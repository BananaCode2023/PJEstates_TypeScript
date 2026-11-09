export interface Property {
    id: number;
    address: string;
    addressName: string;
    addressCity: string;
    city: string;
    price: number;
    status: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
    yearBuilt: number;
    hoaMonth: number | null | string;
    agents: string[];
    agentLicenses: string[];
    mlsNumber: number;
    description: string;

    bedroomsBathroomsInterior?: string;
    roomsInterior?: string;
    bedroomInterior?: string;
    bathroomInterior?: string;
    diningRoomInterior?: string;
    kitchenInterior?: string;
    heatingInterior?: string;
    coolingInterior?: string;
    appliancesInterior?: string;
    featuresInterior?: string;
    interiorAreaInterior?: string;
    parkingAdditional?: string;
    accessibilityAdditional?: string;
    featuresAdditional?: string;
    lotAdditional?: string;
    detailsAdditional?: string;
    images?: string[];
}