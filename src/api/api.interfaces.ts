export interface SummonerDetails {
    puuid: string,
    id: string,
}

export interface League {
    mode: string,
    division: string,
    tier: string,
    LP: number,
}

export interface Participant {
    summonerName: string,
    champName: string,
    champLevel: number,
    kills: number,
    deaths: number, 
    assists: number,
    items: string[],
    minionsKilled: number,
    lane?: string
}

export interface Objectives {
    noBarons: number,
    noDragons: number,
    noTurrets: number,
    noInhibs: number,
    noHeralds: number,
}

export interface Match {
    gameMode: string,
    gameDuration: number,
    participants: Participant[],
    objectives: Objectives[],
    winnerTeam: number,
}

export interface Info {
    leagues: League[],
    matches: Match[]
}