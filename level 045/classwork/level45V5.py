def check_number(num):
    if num > 0:
        return "The number is positive."
    elif num < 0:
        return "The number is negative."
    else:
        return "The number is 0."


user_input = float(input("Plaese enter the number: "))
result = check_number(user_input)

print(result)