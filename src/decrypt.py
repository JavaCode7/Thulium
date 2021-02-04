import sys
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