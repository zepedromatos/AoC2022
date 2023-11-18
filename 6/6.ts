import { input } from "./input.js";

const inputCharacters: string[] = input.split("");
// Part 1
/* const markersLength: number = 4; */
// Part 2
const markersLength: number = 14;

for(let i = 0; i < inputCharacters.length - markersLength + 1; i++) {
    const subArray: string[] = inputCharacters.slice(i, i + markersLength);
    const uniqueSet: Set<string> = new Set(subArray);

    if(uniqueSet.size === subArray.length) {
        console.log("Found the marker: ", i + markersLength);
        break;
    }
}

