import { readFileSync } from "fs";
import { instructionsInput, cratesInput, cratesColumnsInput } from "./input.js";

type instructionsType = {
    amount: number,
    from: number,
    to: number
}

const instructions: string[] = instructionsInput.split("\n");
const crates: string[] = cratesInput.split("\n");
console.log(crates[0]);
const numberOfStacks: number = Math.max(...cratesColumnsInput.split("").map(el => Number(el)));

const structuredInstructions: instructionsType[] = instructions.map(el => {
    const numbers = el.match(/\d+/g)?.map(Number) ?? [];
    return {
        amount: numbers[0],
        from: numbers[1] - 1,
        to: numbers[2] - 1
    };
});

const organizeCrates = (crates: string[], stackAmount: number): string[][] => {
    const suppliesPerCrate: string[][] = crates.map(el => {
        let splitString: string[] = [];
        for(let i = 0; i < el.length; i += 4) {
            if(el[i] === "[") {
               splitString.push(el.substring(i, i + 3));
            } else{
                splitString.push("");
            }
            
        }
        return splitString;
    
    });
    const cratesColumns: string[][] = Array.from({ length: stackAmount }, () => []);

    for (let line of suppliesPerCrate) {
        for (let [index, supply] of line.entries()) {
            if (!!supply) {
                let match = supply.match(/\[(.*?)\]/);
                if (match) {
                    cratesColumns[index].push(match[1]);
                }
            }
        }
    }

    return cratesColumns;
}

const cratesPerColumn: string[][] = organizeCrates(crates, numberOfStacks);

const performInstructions = (columnsOfCrates: string[][], instructions: instructionsType[]) => {
    const rearrangedColumns = structuredClone(columnsOfCrates);
    
    for (const instruction of instructions) {
        const removedItems = rearrangedColumns[instruction.from].splice(0, instruction.amount);
        // Part 1
        /* rearrangedColumns[instruction.to] = [...removedItems.reverse(), ...rearrangedColumns[instruction.to]]; */
        // Part 2
        rearrangedColumns[instruction.to] = [...removedItems, ...rearrangedColumns[instruction.to]];
    }

    return rearrangedColumns;
}

const columnsAfterInstructions: string[][] = performInstructions(cratesPerColumn, structuredInstructions);

const topCrates: string = columnsAfterInstructions.map(el => el[0]).join("");

console.log(topCrates)