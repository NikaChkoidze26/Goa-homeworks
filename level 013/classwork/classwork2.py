steps = int(input("Please enter your steps:"))
Active_minutes = int(input("Please enter your active minutes:"))

if steps > 10000:
    print(True)

if Active_minutes > 30:
    print(True)

else:
    print(False)