import type { CUBARI } from "../types/Cubari";

type PARAMS = {
    endpoint: string;
}

type Response = CUBARI;

export default abstract class Client {

    protected async instance(params: PARAMS): Promise<Response> {
        
        const response = await fetch(params.endpoint, {
            method: 'GET',
        });

        if (response.status != 200) throw new Error(response.statusText);

        const data: Response = await response.json();
        return data;
    }

}