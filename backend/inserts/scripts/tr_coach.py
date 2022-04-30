import random
import string 

for i in range(100):
    trcompid = str(random.randint(10000, 99999))
    coachid = str(random.randint(100, 999))

    date = str(random.randint(1, 9))
    date = ''.join(random.choices(["0"+date, str(random.randint(10, 31))], k=1))
    month = str(random.randint(1, 9))
    month = ''.join(random.choices(["0"+month, "10", "11", "12"], k=1))

    print("insert into tr_coach values( getId(" + trcompid + ", \'" + "2022-"+month+"-"+date+ "\'), " + coachid + ", " + str(random.randint(1, 14)) + ");")

# set coach_no to auto increment?
# insert into tr_coach values( getId(18519, '2022-04-04'), 588, 1);