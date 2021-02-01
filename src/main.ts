import { readFileSync } from 'fs';

const code = readFileSync(`./` + process.argv[2], 'utf-8');

function _2DArray(): any[] {
    let arr = new Array(1000);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(1000);
        for (let j = 0; j< arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

function init(): any[] {
    // Create the thulium cpu
    let cells: any[] = _2DArray()
    let spec: number[] = Array(5);
    let memory: number = 0;
    let spec_index: number = 0;
    let index: number[] = [0, 0];

    return [cells, spec, memory, spec_index, index]
}

function parse(data: any[]): any {
    var thu = {
        cells: data[0],
        spec: data[1],
        memory: data[2],
        spec_index: data[3],
        index: data[4],
        code: code
    }
    let commands: string[] = thu.code.split("\r\n");
    return [thu, commands];
}

function run(): void {
    let thu = parse(init())[0];
    let parsed = parse(init())[1];
    parsed.forEach((element: any) => {
        switch (element) {

            case "0000":
                thu.index[0] ++;
                break;
            case "0001":
                thu.index[0] --;
                break;
            case "0010":
                thu.index[1] --;
                break;
            case "0011":
                thu.index[1] ++;
                break;
            case "0100":
                thu.spec_index ++;
                break;
            case "0101":
                thu.spec_index --;
                break;
            case "0110":
                console.log(thu.cells[thu.index[0]][thu.index[1]]);
                break;
            case "0111":
                thu.memory = thu.spec[thu.spec_index];
                break;
            case "1000":
                thu.cells[thu.index[0]][thu.index[1]] = thu.memory;
                break;
            case "1001":
                thu.memory = thu.cells[thu.index[0]][thu.index[1]];
                break;
            case "1010":
                thu.cells[thu.index[0]][thu.index[1]] ++;
                break;
            case "1011":
                thu.cells[thu.index[0]][thu.index[1]] --;
                break;
            case "1100":
                thu.spec[0] = thu.cells[thu.index[0]][thu.index[1]] + thu.cells[thu.index[0] + 1][thu.index[1]];
                thu.spec[1] = thu.cells[thu.index[0]][thu.index[1]] - thu.cells[thu.index[0] + 1][thu.index[1]];
                thu.spec[2] = thu.cells[thu.index[0]][thu.index[1]] * thu.cells[thu.index[0] + 1][thu.index[1]];
                thu.spec[3] = thu.cells[thu.index[0]][thu.index[1]] / thu.cells[thu.index[0] + 1][thu.index[1]];
                thu.spec[4] = thu.cells[thu.index[0]][thu.index[1]] ** thu.cells[thu.index[0] + 1][thu.index[1]];
                break;

        }        
    });
}

function main(): void {
    run();
}

main();