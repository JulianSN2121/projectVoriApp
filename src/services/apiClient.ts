import { Accommodation } from "../models/Accommodation";
import { Association } from "../models/Association";
import { Bar } from "../models/Bar";
import { Company } from "../models/Company";
import { Hotel } from "../models/Hotel";
import { Nightclub } from "../models/Nightclub";
import { Organisation } from "../models/Organisation";
import { Restaurant } from "../models/Restaurant";

async function getEntries<T>(entity: string) {
    return await fetch("http://localhost:8055/items/" + entity)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.json())
                return response.json();
            } else {
                throw new Error("Something went wrong on API server!");
            }
        })
        .then((response) => {
            console.debug(response);
        })
        .catch((error) => {
            console.error(error);
        });
}

export async function getData() {
    const r = await getEntries<Restaurant>("restaurants");
    const b = await getEntries<Bar>("bars");
    const n = await getEntries<Nightclub>("nightclubs");
    const h = await getEntries<Hotel>("hotels");
    const c = await getEntries<Company>("companies");
    const ac = await getEntries<Accommodation>("accommodations")
    const as = await getEntries<Association>("associations")
    const or = await getEntries<Organisation>("organisations")
    const e = await getEntries<Event>("events")
    return {
        restaurants: r,
        bars: b,
        nightclubs: n,
        hotels: h,
        companies: c,
        accommodations: ac,
        associations: as,
        organisations: or,
        events: e
    }
}