import React, { useState, useEffect } from 'react';
import { Params, useParams } from 'react-router-dom';
import User from '../components/User';
import { API_VEHICLES } from '../helpers/constants/api/endpoints';
import { ISpecie } from '../helpers/interfaces/ISpecie';
import { IVehicle } from '../helpers/interfaces/IVehicle';
import { TSpeciesProp } from '../helpers/types/TSpeciesProp';
import { getUser } from '../services/getUser';
import { getVehicles } from '../services/getVehicles';

const People = ({ species }: TSpeciesProp): JSX.Element => {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [specieName, setSpecieName] = useState<string | undefined>('');
    const [userName, setUserName] = useState<string | undefined>('');
    const [specieVehicles, setSpecieVehicles] = useState<Array<IVehicle> | undefined>();

    const params: Params<string> = useParams();

    useEffect(() => {
        setIsLoad(false);

        const specie: ISpecie | undefined = species.find(({ name }) => name.toLowerCase() === params.specieName);
        const userUrl: string | undefined = specie?.people ? specie.people[0] : undefined;
        let vehiclesUrl: string = '';

        setSpecieName(specie?.name);

        switch (specie?.name) {
            case 'Human':
                vehiclesUrl = API_VEHICLES;
                break;
            case 'Droid':
                vehiclesUrl = API_VEHICLES + '?search=droid';
                break;
            default:
                break;
        }

        if (userUrl) {
            const data: Promise<any> = Promise.all([getUser(userUrl), getVehicles(vehiclesUrl)]);

            data.then((results: Array<any>) => {
                setUserName(results[0]);
                setSpecieVehicles(results[1]);
            })
                .catch(() => {
                    console.error('Nekaj ni vredu!');
                })
                .finally(() => {
                    setIsLoad(true);
                });
        }
    }, [species, params]);

    return <User isLoad={isLoad} specieName={specieName} userName={userName} specieVehicles={specieVehicles} />;
};

export default People;
