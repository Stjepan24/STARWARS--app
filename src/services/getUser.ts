import { getResource } from '../adapters/xhr/axios';

export const getUser = async (userEndpoint: string): Promise<any> => {
    try {
        const response = await getResource(userEndpoint);
        const userName: string = response.data.name;

        return userName;
    } catch (error) {
        console.error(error);
    }
}