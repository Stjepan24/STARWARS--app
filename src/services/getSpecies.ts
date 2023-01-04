import { getResource } from "../adapters/xhr/axios";
import { API_SPECIES } from "../helpers/constants/api/endpoints";
import { ISpecie } from "../helpers/interfaces/ISpecie";

export const getSpecies = async (...speciesParams: Array<string>) : Promise<any> => {
    const species: Array<ISpecie> = [];

    const fillSpecies = (specieObject: any) => {
        const newSpecie: ISpecie = {
            name: specieObject.name,
            classification: specieObject.classification,
            designation: specieObject.designation,
            language: specieObject.language,
            people: specieObject.people
        }

        species.push(newSpecie);
    }
    try {
        if(speciesParams.length === 0){
            const response = await getResource(API_SPECIES);

            for (const specieObject of response?.data?.results) {
                fillSpecies(specieObject);
            }

        } else {
            for (const key in speciesParams) {
                const specie: string = speciesParams[key];
                
                const response = await getResource(`${API_SPECIES}?search=${specie}`);
                const specieObject = response?.data?.results[0];

                fillSpecies(specieObject);
                
            }
        }
   
    } catch (error) {
        console.error(error);
    }

    return species;
};