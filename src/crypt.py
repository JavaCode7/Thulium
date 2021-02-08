from os import strerror as strerr
import random
import sys
import numpy

bfr = open(sys.argv[1], 'r')
ctn: list = [i for i in bfr.read()]
contents: list = []
r: list = []
for i in ctn:
    contents.append(int(i, 36))

data = bytearray(len(contents))

for d in range(len(contents)):
    d = numpy.base_repr(random.randint(0, 35), 36)
    r.append(d)

for i in range(len(data)):
    data[i] = contents[i] + int(str(r[i]), 36)
try:
    bfw = open(sys.argv[1], 'wb')
    bfw2 = open(sys.argv[1], 'a')
    bfw.write(data)
    bfw2.write("\n")
    for i in r:
        bfw2.write(str(i))
    bfw.close()
    bfr.close()
    bfw2.close()
except IOError as e:
    print("I/O error occurred:", strerr(e.errno))
bfr = open(sys.argv[1], "rb")
data: list = list(bfr.read())
bin_data: list = data[:int(len(data)/2) - 1]
num_data: list = data[int(len(data)/2):]
to_bin: list = []
del num_data[0]
for i in range(len(bin_data)):
    a: str = format( bin_data[i] - int ( chr ( num_data[i] ) , 36 ), "b")
    to_bin.append(str ("0" * (5 - len(a)) + a))
bfw = open(sys.argv[1], "w")
bfw.write('\n'.join(to_bin))
bfr.close()
bfw.close()