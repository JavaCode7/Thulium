import { readFileSync } from 'fs';
import { stdout } from 'process';

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

            case "00000":
                thu.index[0] ++;
                break;
            case "00001":
                thu.index[0] --;
                break;
            case "00010":
                thu.index[1] --;
                break;
            case "00011":
                thu.index[1] ++;
                break;
            case "00100":
                thu.spec_index ++;
                break;
            case "00101":
                thu.spec_index --;
                break;
            case "00110":
                console.log(thu.cells[thu.index[0]][thu.index[1]]);
                break;
            case "00111":
                thu.memory = thu.spec[thu.spec_index];
                break;
            case "01000":
                thu.cells[thu.index[0]][thu.index[1]] = thu.memory;
                break;
            case "01001":
                thu.memory = thu.cells[thu.index[0]][thu.index[1]];
                break;
            case "01010":
                thu.cells[thu.index[0]][thu.index[1]] ++;
                break;
            case "01011":
                thu.cells[thu.index[0]][thu.index[1]] --;
                break;
            case "01100":
                thu.spec[0] = thu.cells[thu.index[0]][thu.index[1]] + thu.cells[thu.index[0] + 1][thu.index[1]];
                thu.spec[1] = thu.cells[thu.index[0]][thu.index[1]] - thu.cells[thu.index[0] + 1][thu.index[1]];
                thu.spec[2] = thu.cells[thu.index[0]][thu.index[1]] * thu.cells[thu.index[0] + 1][thu.index[1]];
                thu.spec[3] = thu.cells[thu.index[0]][thu.index[1]] / thu.cells[thu.index[0] + 1][thu.index[1]];
                thu.spec[4] = thu.cells[thu.index[0]][thu.index[1]] ** thu.cells[thu.index[0] + 1][thu.index[1]];
                break;
            case "01101":
                stdout.write(String.fromCharCode(thu.cells[thu.index[0]][thu.index[1]]));
                break;
            case "01110":
                let a = prompt();
                if (a == null){ a = "0"; }
                thu.cells[thu.index[0]][thu.index[1]] = a[1].charCodeAt(0) ? a != null: 0;
                break;
            case "01111":
                stdout.write(thu.cells[thu.index[0]][thu.index[1]])
                break;
            case "10000":
                break;
            case "10001":
                break;

        }        
    });
}

function main(): void {
    run();
}

main();