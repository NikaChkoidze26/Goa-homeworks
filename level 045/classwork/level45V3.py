age = int(input("Enter your age: "))

if age < 18:
    print("You are a kid.")
elif 18 <= age <= 64:
    print("You are an adult.")
else:
    print("You are an old person.")
