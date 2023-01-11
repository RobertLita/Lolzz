import { Info, League, Match, Objectives, SummonerDetails } from "./api.interfaces";
import { Participant } from "./api.interfaces";

const api_key = process.env.REACT_APP_API_KEY;

const regionMapping: { [index: string]: string } = {
    eun1: 'europe',
    euw1: 'europe',
    na1: 'america',
    kr: 'asia',
    oc1: 'sea'
};

async function getSummonerDetails(summonerName: string, region: string): Promise<SummonerDetails | string> {

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


async function getLeagues(id: string, region: string): Promise<League[] | string> {
    try {
        const leagueEndpoint = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`;
        const response = await fetch(leagueEndpoint);
        const data = await response.json();
        const leagues = [];
        for (let i = 0; i < data.length; i++) {
            leagues.push({
                mode: data[i]['queueType'],
                division: data[i]['tier'],
                tier: data[i]['rank'],
                LP: data[i]['leaguePoints']
            })
        }
        return leagues

    } catch (error) {
        console.error(error);
        return "Something went wrong.";
    }
}

async function getMatchList(puuid: string, region: string, start: number): Promise<string[] | string> {
    try {
        const matchListEndpoint = `https://${regionMapping[region]}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=10&api_key=${api_key}`;
        const response = await fetch(matchListEndpoint);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
        return "Something went wrong.";
    }
}


async function getMatchDetails(summonerName:string, matchId: string, region: string): Promise<Match | string> {
    try {
        const matchDetails = `https://${regionMapping[region]}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${api_key}`;
        const response = await fetch(matchDetails);
        const data = await response.json();
        const match: Match = {} as Match
        const objectives: Objectives = {} as Objectives
        const p: Participant = {} as Participant;
        let team: number = 0;
        
        for (let i = 0; i < 10; i++) {
            if (data['info']['participants'][i]['summonerName'] === summonerName) {
                p.summonerName = data['info']['participants'][i]['summonerName'];
                p.assists = data['info']['participants'][i]['assists'];
                p.champLevel = data['info']['participants'][i]['champLevel'];
                p.champName = data['info']['participants'][i]['championName'];
                p.kills = data['info']['participants'][i]['kills'];
                p.deaths = data['info']['participants'][i]['deaths'];
                p.minionsKilled = data['info']['participants'][i]['totalMinionsKilled']
                p.items = [
                    data['info']['participants'][i]['item0'], 
                    data['info']['participants'][i]['item1'], 
                    data['info']['participants'][i]['item2'],
                    data['info']['participants'][i]['item3'],
                    data['info']['participants'][i]['item4'],
                    data['info']['participants'][i]['item5'],
                    data['info']['participants'][i]['item6']
                ]
                p.lane = data['info']['participants'][i]['lane'];
                team = Math.floor(i / 5);

                break;
            }
        }
        objectives.noBarons = data['info']['teams'][team]['objectives']['baron']['kills'];
        objectives.noDragons = data['info']['teams'][team]['objectives']['dragon']['kills'];
        objectives.noTurrets = data['info']['teams'][team]['objectives']['tower']['kills'];

        match.gameMode = data['info']['gameMode'];
        match.gameDuration = data['info']['gameDuration'];
        match.participant = p;
        match.objectives = objectives;
        match.win = data['info']['teams'][team]['win'];
        
        return match

    } catch (error) {
        console.error(error);
        return "Something went wrong.";
    }
}

export async function getSummonerHistory(summonerName: string, region: string) : Promise <Info | string> {
    let summonerInfo: SummonerDetails | string = await getSummonerDetails(summonerName, region);
    if (typeof summonerInfo === 'string') {
        return summonerInfo
    }

    let leagues: League[] | string = await getLeagues(summonerInfo.id, region);
    if (typeof leagues === 'string') {
        return leagues
    }

    let matchIds: string[] | string = await getMatchList(summonerInfo.puuid, region, 0);
    if (typeof matchIds === 'string') {
        return matchIds
    }
    
    let matchesDetails: Match[] = [];
    for (let i = 0; i < matchIds.length; i++) {
        let match: Match | string = await getMatchDetails(summonerName, matchIds[i], region) 
        if (typeof match === 'string') 
            continue;
        matchesDetails.push(match);
    }

    let info: Info = {
        leagues : leagues,
        matches : matchesDetails,
        message : '' 
    }

    return info;
} 