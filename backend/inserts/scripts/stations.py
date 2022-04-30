import random
import string 

for i in range(100):
    stcode = ''.join(random.choices(string.ascii_uppercase , k=4))
    stname = ''.join(random.choices(string.ascii_lowercase + " " , k=23))
    stname = ''.join(random.choices(["\'"+stname+"\'", "null"], k=1))
    place = ''.join(random.choices(string.ascii_uppercase , k=1) + random.choices(string.ascii_lowercase , k=23))
    platforms = str(random.randint(1, 12))
    
    print("INSERT into station values('" + stcode + "\', " + stname + ", \'" + place + "\', " + platforms + ");")
#INSERT into station values('VSKP', null, 'Visakhapatnam', 8);