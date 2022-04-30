import random 
import string

for i in range(100):
    trainid = str(random.randint(10000, 99999))
    trainname = ''.join(random.choices(string.ascii_uppercase + " ", k=7))
    station1 = ''.join(random.choices(string.ascii_uppercase , k=4))
    station2 = ''.join(random.choices(string.ascii_uppercase , k=4))
    traintype = ''.join(random.choices(string.ascii_lowercase , k=7))
    print("INSERT into train values(" + trainid + ", \'" + trainname + "\', \'" + station1 + "\', \'" + station2 + "\', \'" + traintype + "\');")

# need to choose from existing stations

#INSERT into train values(18519, ' LTT SPL', 'VSKP', 'LTT', 'special');