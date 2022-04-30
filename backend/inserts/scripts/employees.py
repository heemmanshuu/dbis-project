import random
import string 

for i in range(200):
    empl_id = str(random.randint(1, 999999))
    empl_name = ''.join(random.choices(string.ascii_lowercase + " ", k=23))
    age = str(random.randint(21, 65))
    profession = ''.join(random.choices(["pilot", "station master", "playboi", "janitor", "peon"], k=1))
    salary = str(random.randint(3000, 80000))
    
    print("INSERT into employee values(" + empl_id + ", \'" + empl_name + "\', " + age + ", \'" + profession + "\', " + salary + ");")

#INSERT into employee values(1, 'subba rao', 38, 'pilot', 40000);