from os import strerror as strerr
import sys

bfr = open(sys.argv[1], 'r')
ctn: list = [i for i in bfr.read()]
contents: list = []
for i in ctn:
    contents.append(int(i, 16))

data = bytearray(len(contents))

for i in range(len(data)):
    data[i] = contents[i]
try:
    bfw = open(sys.argv[1], 'wb')
    bfw.write(data)
    bfw.close()
    bfr.close()
except IOError as e:
    print("I/O error occurred:", strerr(e.errno))