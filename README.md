# Thulium
 A simple esoteric programming language written in TypeScript in under 3 hours.

 I got the idea for this programming language from a repository I found called [Jellyscript](https://github.com/nguyenphuminh/Jellyscript) and decided to learn TypeScript by creating a version of it that's even more painful and weird. And I thought the best name for this language is something tht reflects the fact that it is devoid of all use. Thulium is the least useful element of the periodic table that is naturally occurring and that's the inspiration for the name.

 _**Before reading this please check out [Jellyscript](https://github.com/nguyenphuminh/Jellyscript). It's a great esolang and it will help you understand thulium 1 (version 2 is less esoteric as it is be much more high-level) better.**_

## Assets
 - 18 commands,
 - 5 special cells that update and do basic expressions,
 - 1000 by 1000 grid,
 - 1 permanent memory cell
 - High-level

## Syntax
 Thulium has 18 commands (numbered 0 - 17 or 00000 - 10001), each doing something simple and trivial but when combined, can actually have a decent function.

 - mov_right -- this command moves right in the grid
 - mov_left -- left in the grid
 - mov_up -- up (grid)
 - mov_down -- down (grid)
 - spec_right -- forward in special cells
 - spec_left -- backward in special cells
 - print -- prints the current cell to the console (with \n)
 - SP to M -- moves the current special cell value to the memory
 - M to C -- moves the memory to the current cell
 - C to M -- moves the current cell's value to the memory
 - add -- increases the current cell's value by 1
 - sub -- opposite of 1010
 - update -- updates the special cells
 - ascii_print -- prints the current cell's ascii value
 - input -- takes one byte as input and stores its ascii char code
 - print2 -- prints the current cell to the console (no \n)
 - cond_start -- same as brainf**k's '['
 - cond_end -- same as brainf**k's ']'

 Commands are written line by line, one command per line.

## Example program

 Addition (2+3)

    add
    add
    mov_right
    add
    add
    add
    mov_left
    update
    SP to M
    mov_right
    mov_right
    M to C
    print

## Download

### [1.0.0](https://github.com/JavaCode7/Thulium/tree/v1.0.0)

 [Linux](https://github.com/JavaCode7/Thulium/releases/download/v1.0.0/thulium-linux)

 [Windows](https://github.com/JavaCode7/Thulium/releases/download/v1.0.0/thulium-win.exe)

 [Macos](https://github.com/JavaCode7/Thulium/releases/download/v1.0.0/thulium-macos)

## Future Updates

 Thulium 3.0.0 will be a lot more like bf and will actually have a shell. I may also add shells to versions 2 and 1.