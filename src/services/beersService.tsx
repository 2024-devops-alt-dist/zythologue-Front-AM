import { Beers } from "../interfaces/beerInterface";
import { apiClient } from "./apiClient";

export const getBeers = async (): Promise<Beers[]> => {
    try {
        const response = await apiClient.get<Beers[]>('/beers');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des bières:", error);
        throw error;
    }
};