from os import strerror as strerr
import random
import sys

bfr = open(sys.argv[1], 'r')
ctn: list = [i for i in bfr.read()]
contents: list = []
r: list = []
for i in ctn:
    contents.append(int(i, 36))

data = bytearray(len(contents))

for d in range(len(contents)):
    d = random.randint(0, 32)
    r.append(d)

for i in range(len(data)):
    data[i] = contents[i] + r[i]
try:
    bfw = open(sys.argv[1], 'wb')
    bfw2 = open(sys.argv[1], 'a')
    bfw.write(data)
    bfw2.write("\n")
    for i in r:
        bfw2.write(str(i) + " ")
    bfw.close()
    bfr.close()
    bfw2.close()
except IOError as e:
    print("I/O error occurred:", strerr(e.errno))