import random 
import string 

pnr = str(random.randint(1, 9999))
trainno = str(random.randint(10000, 99999))

date = str(random.randint(1, 9))
date = ''.join(random.choices(["0"+date, str(random.randint(10, 31))], k=1))
month = str(random.randint(1, 9))
month = ''.join(random.choices(["0"+month, "10", "11", "12"], k=1))

coachid = str(random.randint(100, 999))
berthno = str(random.randint(1, 65))
berthtype = ''.join(random.choices(["lower", "upper", "middle", "seater", "side lower", "side upper"] , k=1))
price = str(random.randint(10, 3000))
ticketcat = ''.join(random.choices(["general", "tatkal", "VIP"] , k=1))

print("INSERT into booking values(" + pnr + ", " + trainno + ", date \'" + "2022-"+month+"-"+date + "\', " + coachid + ", " + berthno + ", \'" + berthtype + "\', " + price + ", \'" + ticketcat + "\');")

# select trainno and coachid that actually exist
# INSERT into booking values(1, 18519, date '2022-04-04', 590, 34, 'seater', 50, 'general');
