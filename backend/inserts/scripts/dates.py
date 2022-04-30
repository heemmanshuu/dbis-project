import random 

for i in range(100):
    date = str(random.randint(1, 9))
    date = ''.join(random.choices(["0"+date, str(random.randint(10, 31))], k=1))
    month = str(random.randint(1, 9))
    month = ''.join(random.choices(["0"+month, "10", "11", "12"], k=1))
    day = ''.join(random.choices(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] , k=1))
    print("INSERT into date values(date " + "\'2022-"+month+"-"+date+"\', \'" + day + "\');")

#INSERT into date values(date '2022-04-03', 'Sun');