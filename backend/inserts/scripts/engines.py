import random
import string 

for i in range(100):
    engineid = str(random.randint(10000, 99999))
    engine_type = ''.join(random.choices(["electric", "diesel", "coal", "steam"], k=1))
    
    print("INSERT into engine values(" + engineid + ", \'" + engine_type + "\');")

#INSERT into engine values(16789, 'electric');