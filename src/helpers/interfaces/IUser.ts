import { INavbar } from "./INavbar";
import { IVehicle } from "./IVehicle";

export interface IUser extends INavbar {
    specieVehicles?: Array<IVehicle>
}