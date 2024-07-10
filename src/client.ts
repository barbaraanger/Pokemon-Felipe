import axios from "axios";
//https://axios-http.com/ptbr/docs/api_intro

export const client = axios.create({ baseURL: "https://pokeapi.co/api/v2" });

export const getPokemon = async (name: string) => {
  try {
    const response = await client.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
