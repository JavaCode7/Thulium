import { readFileSync } from 'fs';

const code = readFileSync(`./` + process.argv[2], 'utf-8');

function _2DArray(): Array<any> {
    let arr = new Array(1000);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(1000);
        for (let j = 0; j< arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

function init(): Array<any> {
    // Create the thulium cpu
    let cells: Array<any> = _2DArray()
    let spec: Array<number> = Array(5);
    let memory: number = 0;
    let spec_index: number = 0;
    let index: number = 0;

    return [cells, spec, memory, spec_index, index]
}

function thulium(data: Array<any>): void{
    var thu = {
        cells: data[0],
        spec: data[1],
        memory: data[2],
        spec_index: data[3],
        index: data[4],
        code: code
    }
    let commands: Array<string> = thu.code.split("\r\n");
    console.log(commands);
}

function main(): void {
    thulium(init())
}

main()