// this const could be modified to support more lists
export const programTypes = ["movie", "series"] as const;
export type ProgramType = typeof programTypes[number];

type ProgramTypeConfigType = {
    title: string,
    description: string,
    posterArtUrl: string,
    uri: string,
    type: ProgramType
}

export const programTypesList: ProgramTypeConfigType[] = [
    {
        title: 'Series',
        description: 'Popular Series',
        posterArtUrl: '/placeholder.png',
        uri: 'series',
        type: 'series',   
    },
    {
        title: 'Movies',
        description: 'Popular Movies',
        posterArtUrl: '/placeholder.png',
        uri: 'movie',
        type: 'movie',
    }
];