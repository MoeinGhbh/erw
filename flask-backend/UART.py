import serial


# port = serial.Serial(
#     port='/dev/ttyAMA0',
#     baudrate=9600,
#     parity=serial.PARITY_NONE,
#     stopbits=serial.STOPBITS_ONE,
#     bytesize=serial.EIGHTBITS,
#     timeout=1)


# class UART(port):
class UART():
    # def sendtoBoard(zoneId, group, itemId, status, Code):
    def sendtoBoard(status, Code):
        # print(str(zoneId) + group + str(itemId) + str(status) + str(Code))
        print("on-off: " + str(status) + "number of item: " + str(Code))

        # status  1   on
        # status  0   off

        # groupID = 0
        # if group == 'Lamp':
        #     groupID = 1
        # if group == 'Socket':
        #     groupID = 2
        # if group == 'Curtain':
        #     groupID = 3
        # if group == 'Aircondition':
        #     groupID = 4

        # Convert Code of items/equipment to binary and shift to left on time
        # and or by status
        # now this signal ready to send on RS232(UART Protocol)

        bin(Code)
        print(bin(Code))
        print(bin(status))
        Signal = Code << 1 | status
        print(Signal)

        # port.write(Signal)
