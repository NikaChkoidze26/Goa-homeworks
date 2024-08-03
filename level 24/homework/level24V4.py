age = int(input("Enter your age: "))

expirience = int(input("Enter how many years you've been driving: "))


if age > 18 and expirience > 1:
    print('You get the license!')

elif age < 18:
    print("You don't get the license!")

elif age > 18 and expirience < 1:
    print("You don't get the license!")
    