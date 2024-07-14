import type { GROUPS } from "../utils/constants";

export type CUBARI = {
    title: string;
    description: string;
    artist: string;
    author: string;
    cover: string;
    chapters: Record<string, CHAPTERS>;
}

export type CHAPTERS = {
    title: string;
    volume: string;
    last_updated: string;
    groups: Record<GROUPS, string>;
}