export interface SummonerDetails {
    puuid: string,
    id: string,
}

export interface Rank {
    mode: string,
    division: string,
    tier: number,
}

export interface Participant {
    summonetName: string,
    champName: string,
    champLevel: number,
    kills: number,
    deaths: number, 
    assists: number,
    items: string[],
    lane?: string
}

export interface Objectives {
    noBarons: number,
    noDragons: number,
    noTurrets: number,
    noInhibs: number,
}

export interface Match {
    gameDuration: number,
    participant: Participant[],
    objectives: Objectives,
}