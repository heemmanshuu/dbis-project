import random
import string 

for i in range(100):
    trcompid = str(random.randint(10000, 99999))
    date = str(random.randint(1, 9))
    date = ''.join(random.choices(["0"+date, str(random.randint(10, 31))], k=1))
    month = str(random.randint(1, 9))
    month = ''.join(random.choices(["0"+month, "10", "11", "12"], k=1))
    
    total_coaches = str(random.randint(1, 10))
    engineid = str(random.randint(10000, 99999))
    total_stations = str(random.randint(2, 50))
    
    print("INSERT into tr_comp (tr_no, date, total_coaches, engine_id, total_stations) values(" + trcompid + ", date \'" +  "2022-"+month+"-"+date + "\', " + total_coaches + ", " + engineid + ", " + total_stations + ");")

# dates deleted so chill
# select engine_id that actually exists
# select trainno (traincomp_id here) that actuslly exists 

#INSERT into tr_comp (tr_no, date, total_coaches, engine_id, total_stations) values(18519, date '2022-04-04', 5, 16789, 12);