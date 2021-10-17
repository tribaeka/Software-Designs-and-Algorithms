export interface IShipmentState {
    shipmentId: number;
    toAddress: string;
    fromAddress: string;
    toZipCode: string;
    fromZipCode: string;
    weight: number;
    marks?: string[];
}
