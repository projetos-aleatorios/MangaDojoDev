import type { CHAPTERS } from "../types/Cubari";
import type { RESPONSE } from "../types/Response";
import { ENDPOINTS, ID, SITE, TITLES, type MANGAS } from "../utils/constants";
import Client from "./Client";

class Manga extends Client {
    public async chapters(): Promise<RESPONSE[]> {
        const mangas: RESPONSE[] = [];

        for await (let i of TITLES) {

            const manga = i as MANGAS;

            const { title, author, chapters } = await this.instance({ endpoint: ENDPOINTS[manga] });
            const id = this.lastChapter(chapters);

            mangas.push({
                name: title,
                author: author,
                img: `./assets/mangas/Cover${i}.jpg`,
                allLinks: `${SITE['CUBARI']}/${ID[manga]}`,
                mangaLink: `${SITE['CUBARI']}/${ID[manga]}/${id}/1`,
                lastContent: id,
                lastTitle: chapters[id].title,
                note: '123'
            })
        }

        return mangas;
    }

    private lastChapter(chapters: Record<string, CHAPTERS>): string {
        const ids = Object.keys(chapters).filter((i) => chapters[i].groups["Mangá Dōjō"]);
        return ids.reverse()[0];
    }

}

export default new Manga