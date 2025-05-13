def age_category(age):
    if age < 0:
        return "You are not born"
    elif age <= 12:
        return "You are a kid."
    elif age <= 17:
        return "You are a teenager."
    elif age <= 64:
        return "You are an adult."
    else:
        return "You are elderly."


user_input = int(input("Enter your age: "))
result = age_category(user_input)


print(result)