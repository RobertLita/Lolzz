import { SummonerDetails } from "./api.interfaces";

const api_key = "RGAPI-de8add2c-0a26-463f-9014-0467f64f471e";

export async function getSummonerDetails(summonerName: string, region: string): Promise<SummonerDetails | string> {

    try {
        const summonerEndpoint = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`;
        const response = await fetch(summonerEndpoint);
        const data = await response.json();
        return {
            puuid: data['puuid'],
            id: data['id']
        }

    } catch (error) {
        console.error(error);
        return "Make sure your name and region are correct!";
    }
}
