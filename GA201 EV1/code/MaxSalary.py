def maxSalary(emp):
    max = 0
    fObj = {}
    for i in range(0, len(emp)):
        obj = emp[i]
        if (obj["salary"] > max):
            max = obj["salary"]
            fObj = obj
    return fObj


emp = [{"name": "John", "salary": 10000, "desg": "dev"},
       {"name": "Lee", "salary": 20000, "desg": "dev"},
       {"name": "Emma", "salary": 15000, "desg": "dev"}]

print(maxSalary(emp))
