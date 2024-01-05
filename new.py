a = 216
b = (a - 100) * 5
c = 500
n = (c + (a - 200)*10)

if a == 100 or a < 100 :
  print("no bill")
elif a > 100 and a < 200:
  print(b)
elif a > 200:
  print(n)
else:
  print("your bill is not created")