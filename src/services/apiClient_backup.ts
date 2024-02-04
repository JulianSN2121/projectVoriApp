import { Accommodation } from "../models/Accommodation";
import { Association } from "../models/Association";
import { Bar } from "../models/Bar";
import { Company } from "../models/Company";
import { Hotel } from "../models/Hotel";
import { Nightclub } from "../models/Nightclub";
import { Organisation } from "../models/Organisation";
import { Restaurant } from "../models/Restaurant";
import { Event } from "../models/Event";

import {
  createDirectus,
  rest,
  readItems,
  readCollections,
} from "@directus/sdk";

export default async function testApiClient() {
  const client = createDirectus("http://10.214.194.78:8055/").with(rest());
  const result = await client.request(
    readItems("entities", {
      fields: ["*"],
    })
  );

  console.log(result);
  return undefined;
}

// async function getEntries<T>(entity: string){
//   let entries: T[] = [];
//   await fetch("http://localhost:8055/items/" + entity)
//     .then(async (response) => {
//       if (response.status === 200) {
//         entries = await response.json();
//       } else {
//         throw new Error("Something went wrong on API server!");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   return entries;
// }

// export async function getAllEntities(): Promise<any[]> {
//   const r = await getRestaurants();
//   const b = await getBars();
//   const n = await getNightclubs();
//   const h = await getHotels();
//   const a = await getAccommodations();
//   const c = await getCompany();
//   const o = await getOrganisation();
//   const e = await getAssociation();
//   const f = await getEvents();
//   return [r, b, n, h, a, c, o, e, f];
// }

// export async function getRestaurants() {
//   return await getEntries<Restaurant>("restaurants");
// }
// export async function getBars() {
//   return await getEntries<Bar>("bars");
// }
// export async function getNightclubs() {
//   return await getEntries<Nightclub>("nightclubs");
// }
// export async function getHotels() {
//   return await getEntries<Hotel>("restaurants");
// }
// export async function getAccommodations() {
//   return await getEntries<Accommodation>("bars");
// }
// export async function getCompany() {
//   return await getEntries<Company>("nightclubs");
// }
// export async function getAssociation() {
//   return await getEntries<Association>("nightclubs");
// }
// export async function getOrganisation() {
//   return await getEntries<Organisation>("nightclubs");
// }
// export async function getEvents() {
//   return await getEntries<Event>("nightclubs");
// }
