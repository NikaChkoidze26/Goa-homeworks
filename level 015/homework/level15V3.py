weight = input("Enter the weight of the item:")

height = input("Enter the height of the item:")

BMI = weight // height ** height

if BMI < 18.5:
    print("Underweight")

elif BMI > 30:
    print("Overweight")