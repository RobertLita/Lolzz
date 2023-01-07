import { Info, League, Match, Objectives, SummonerDetails } from "./api.interfaces";
import { Participant } from "./api.interfaces";

const api_key = "RGAPI-78d2b2bf-25bb-4b3c-b288-3e040ad41e2f";
const regionMapping: { [index: string]: string } = {
    eun1: 'europe',
    euw1: 'europe',
    na1: 'america',
    kr: 'asia',
    oc1: 'sea'
};

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


export async function getLeagues(id: string, region: string): Promise<League[] | string> {
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

export async function getMatchList(puuid: string, region: string, start: number): Promise<string[] | string> {
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


export async function getMatchDetails(matchId: string, region: string): Promise<Match | string> {
    try {
        const matchDetails = `https://${regionMapping[region]}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${api_key}`;
        const response = await fetch(matchDetails);
        const data = await response.json();
        const match: Match = {} as Match
        const objectives: Objectives[] = []
        const participants: Participant[] = [];
        
        for (let i = 0; i < 10; i++) {
            let p: Participant = {} as Participant;
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
            participants.push(p);
        }

        for (let i = 0; i < 2; i++) {
            let obj: Objectives = {} as Objectives;
            obj.noBarons = data['info']['teams'][i]['objectives']['baron']['kills'];
            obj.noDragons = data['info']['teams'][i]['objectives']['dragon']['kills'];
            obj.noInhibs = data['info']['teams'][i]['objectives']['inhibitor']['kills'];
            obj.noTurrets = data['info']['teams'][i]['objectives']['tower']['kills'];
            obj.noHeralds = data['info']['teams'][i]['objectives']['riftHerald']['kills'];

            objectives.push(obj);
        }
        match.gameMode = data['info']['gameMode'];
        match.gameDuration = data['info']['gameDuration'];
        match.participants = participants;
        match.objectives = objectives;
        data['info']['teams'][0] === true ? match.winnerTeam = 0: match.winnerTeam = 1;
        
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
        let match: Match | string = await getMatchDetails(matchIds[i], region) 
        if (typeof match === 'string') 
            continue;
        matchesDetails.push(match);
    }

    let info: Info = {
        leagues : leagues,
        matches : matchesDetails
    }

    return info;
} 