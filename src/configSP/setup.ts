import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const configSP=async()=>{
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient("https://devfvg.sharepoint.com/sites/AndersonRujeles", "d61c1ba4-1cb3-410f-bd44-c2bf5aa8dd67", "cahHUSG4R0J5tgOltjOpxvCAWUKysNaDBQnhU1Q8sRM=");
            },
        },
    });
}