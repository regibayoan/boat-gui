import io
import pyqrcode
from base64 import b64encode
import eel

eel.init('web')

@eel.expose
def set_waypoint(data1,data2,data3,data4,data5,data6):
    # Send data to Raspberry Pi
    return 1


eel.start('gui.html', size=(1000, 800))

