export const TITLES: Array<string> = ['OnePiece', 'JujutsuKaisen', 'SakamotoDays'];
export type MANGAS = 'OnePiece' | 'JujutsuKaisen' | 'SakamotoDays';
export type GROUPS = 'Chrono Scans' | 'Mangá Dōjō';

type DOMAINS = 'CUBARI'

export const SITE: Record<DOMAINS, string> = {
    'CUBARI': 'https://cubari.moe/read/gist'
}

export const ENDPOINTS: Record<MANGAS, string> = {
    'OnePiece': 'https://raw.githubusercontent.com/jvdudabononi/tr3qxz/main/OnePiece.json',
    'JujutsuKaisen': 'https://raw.githubusercontent.com/jvdudabononi/tr3qxz/main/jujutsukainse.json',
    'SakamotoDays': 'https://raw.githubusercontent.com/jvdudabononi/tr3qxz/main/sakamotodays.json',
}

export const ID: Record<MANGAS, string> = {
    'OnePiece': 'cmF3L2p2ZHVkYWJvbm9uaS90cjNxeHovbWFpbi9PbmVQaWVjZS5qc29u',
    'JujutsuKaisen': 'cmF3L2p2ZHVkYWJvbm9uaS90cjNxeHovbWFpbi9qdWp1dHN1a2FpbnNlLmpzb24',
    'SakamotoDays': 'cmF3L2p2ZHVkYWJvbm9uaS90cjNxeHovbWFpbi9zYWthbW90b2RheXMuanNvbg',
}