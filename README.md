# Thulium
 A simple esoteric programming language written in TypeScript in under 3 hours.

 I got the idea for this programming language fom a repository I found called [Jellyscript](https://github.com/nguyenphuminh/Jellyscript) and decided to learn TypeScript by creating a version of it that's even more painful and weird. And I thought the best name for this language is something tht reflects the fact that it is devoid of all use. Thulium is the least useful element of the periodic table that is naturally occurring and that's the inspiration for the name.

 **Before reading this please check out [Jellyscript](https://github.com/nguyenphuminh/Jellyscript). It's a great esolang and it will help you understand thulium 1 (version 2 is less esoteric as it is much more high-level) better.**

## Assets
 - 13 commands,
 - 5 special cells that update and do basic expressions,
 - 1000 by 1000 grid,
 - 1 permanent memory cell

## Syntax
 Thulium has 13 commands (numbered 0 - 12 or 0000 - 1100), each doing something simple and useless but when combined, can actually have a decent function.

 - 0000 -- this command moves right in the grid
 - 0001 -- left in the grid
 - 0010 -- up (grid)
 - 0011 -- down (grid)
 - 0100 -- forward in special cells
 - 0101 -- backward in special cells
 - 0110 -- prints the current cell to the console
 - 0111 -- moves the current special cell value to the memory
 - 1000 -- moves the memory to the current cell
 - 1001 -- moves the current cell's value to the memory
 - 1010 -- increases the current cell's value by 1
 - 1011 -- opposite of 1010
 - 1100 -- updates the special cells

 Commands are written line by line, one command per line.

## Example program

 Addition (2+3)

    1010
    1010
    0000
    1010
    1010
    1010
    1100
    0001
    1100
    0111
    1000
    0110

## Download

### [1.0.0](https://github.com/JavaCode7/Thulium/tree/v1.0.0)

 [Linux](https://github.com/JavaCode7/Thulium/releases/download/v1.0.0/thulium-linux)

 [Windows](https://github.com/JavaCode7/Thulium/releases/download/v1.0.0/thulium-win.exe)

 [Macos](https://github.com/JavaCode7/Thulium/releases/download/v1.0.0/thulium-macos)

## Future Updates

 A high-level version of thulium is coming soon (after version 2.0.0 when it comes) and i may upload a js version to npm.
