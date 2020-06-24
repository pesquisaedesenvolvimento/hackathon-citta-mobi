import { CustomGeolocation } from './custom_geolocation';

export interface Bus {
    currentPassengerAmount: number;
    bus_type_id:            string;
    updatedAt:              Date;
    createdAt:              Date;
    line_id:                string;
    chassis:                string;
    id:                     string;
    isAvailable:            number;
    geolocation:            CustomGeolocation;
}