import { getResource } from "../adapters/xhr/axios";
import { IVehicle } from "../helpers/interfaces/IVehicle";

export const getVehicles = async (vehiclesEndpoint: string): Promise<any> => {

    if (!vehiclesEndpoint) {
        return;
    }
    
    const vehicles: Array<IVehicle> = [];

    const fillVehicles = (vehicleObject: any) => {
        const newVehicle: IVehicle = {
            name: vehicleObject.name,
            model: vehicleObject.model,
            manufacturer: vehicleObject.manufacturer,
            costInCredits: vehicleObject.cost_in_credits,
            created: vehicleObject.created
        }

        vehicles.push(newVehicle);
    }

    try {
        const response = await getResource(vehiclesEndpoint);

        for (const vehicleObject of response?.data?.results) {
            fillVehicles(vehicleObject);
        }
    } catch (error) {
        console.error(error);
    }

    return vehicles;
}