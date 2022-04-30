import random
import string 

for i in range(1000):
    coachid = str(random.randint(100, 999))
    totalseats = str(random.randint(40, 90))
    coach_model = ''.join(random.choices(["f1", "f2", "f3", "f4"] , k=1))
    coach_type = ''.join(random.choices(["1A", "2A", "3A", "1B", "2B", "3B", "1C", "2C", "3C"], k=1))

    print("INSERT into coach values(" + coachid + ", " + totalseats + ", \'" + coach_model + "\', \'" + coach_type + "\');")


#INSERT into coach values(588, 72, 'f1', '2S');