async function getEntries(entity: string)   {
    return await fetch("http://localhost:8055/items" + entity)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Something went wrong on API server!");
        }
    })
    .then((response) => {
        console.debug(response);
        // …
    })
    .catch((error) => {
        console.error(error);
    });
} 

export async function getData()    {
    const r = await getEntries("restaurant");
    const e = await getEntries("event");
    return  {
        restaurants: r,
        events: e,

    }
}