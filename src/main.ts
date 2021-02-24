import { readFileSync } from 'fs';
import { exit, stdout } from 'process';
import * as readline from 'readline'

import {red} from 'chalk'

var stdin = readline.createInterface({
  input: process.stdin
});

const getSourceFilename = (args:Array<string>):string | null => {
    if(args.length > 0){
        return args[0]
    } else {
        return null
    }
}



// const code = readFileSync(`./` + process.argv[2], 'utf-8');

const getFileContent = (filename:string | null):string => {
    try {
        return readFileSync(filename, "utf-8")
    } catch(error) {
        
        console.log(red(`Cannot read ${filename}`))
        exit()
    }
}

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

export namespace Thulium {

    export interface ThuliumCells {
        cells : Array<any>,
        spec : Array<number>,
        memory : number,
        spec_index : number,
        index : Array<number>
        code : string
    }

    export const init = (): ThuliumCells => {
        // Create the thulium cpu
        const thuliumCpu:ThuliumCells = {
            cells : _2DArray(),
            spec : Array(5),
            memory : 0,
            spec_index : 0,
            index : new Array(0, 0),
            code : ""
        }


        return thuliumCpu
    }

    export const parse = (data: ThuliumCells): Array<any> => {
        const filename:string | null = getSourceFilename(process.argv.slice(
            2, process.argv.length
        ))
        data.code = getFileContent(
            filename
        )
        let commands: string[] = data.code.split("\r\n")
        return [data, commands];
    }

    export const run = (): void => {
        let parsedContent = parse(init())

        let thu = parsedContent[0];
        let parsed = parsedContent[1];

        console.log("interpreting")

        // console.log(thu, parsed)
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
                    var a = ""
                    stdin.question("", function(answer: any) {
                        a = answer;
                        stdin.close();
                    });
                    if (a == null){ a = "0"; }
                    thu.cells[thu.index[0]][thu.index[1]] = a[1].charCodeAt(0) ? a != null: 0;
                    break;
                case "01111":
                    stdout.write(String(thu.cells[thu.index[0]][thu.index[1]]))
                    break;
                case "10000":
                    break;
                case "10001":
                    break;
                case "10010":
                    exit();

            }
        });

        exit()
    }

}

function main(): void {
    Thulium.run()
}

main();

