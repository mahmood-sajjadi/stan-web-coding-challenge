import type { ProgramType } from "../config";

export interface ListResponse {
    total:   number;
    entries: Entry<ProgramType>[];
}

export interface Entry<T extends ProgramType> {
    title:       string;
    description: string;
    programType: T;
    images:      Images;
    releaseYear: number;
}

export interface Images {
    "Poster Art": PosterArt;
}

export interface PosterArt {
    url:    string;
    width:  number;
    height: number;
}