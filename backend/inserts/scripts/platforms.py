import random
import string 

for i in range(100):
    stcode = ''.join(random.choices(string.ascii_uppercase , k=4))
    pfno = str(random.randint(1, 17))
    pfstatus = str(random.randint(0, 1))
    
    print("INSERT into pf_avbl values(\'" + stcode + "\', " + pfno + ", " + pfstatus + ");")

# can set pfno to autoincrement?

#INSERT into pf_avbl values('VSKP', 1, 1);