import { useState, useEffect } from "react";
const localCache = {};

function useBreedList(animal) {
    console.log("provided animal", animal)
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");
    useEffect(() => {
        if (!animal) {
            setBreedList([])
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        }
        else {
            requestBreedList();
        }
    }, [animal])

    async function requestBreedList() {
        setBreedList([]);
        setStatus("loading");
        const res = await fetch(
            `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );
        const json = await res.json();
        localCache[animal] = json.breeds || [];
        setBreedList(localCache[animal]);
        setStatus("loaded");
    }

    console.log(breedList, status)
    console.log('localCache', localCache)
    return [breedList, status];
}

export default useBreedList