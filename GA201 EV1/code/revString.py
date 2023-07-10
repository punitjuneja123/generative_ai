# reverse string
str="Python is fun"

i=len(str)-1
rev=""
while(i>=0):
    rev+=str[i]
    i-=1

print(rev)
