import random

for i in range(100):
    trcompid = str(random.randint(10000, 99999))
    empl_id = str(random.randint(1, 999999))

    print ("INSERT into tr_emp values(" + trcompid + ", " + empl_id + ");")

# choose from existing trcompid s

# INSERT into tr_emp values(1, 1);