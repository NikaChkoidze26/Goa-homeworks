def simple_calculator():
    action = int(input("Choose between addition(1), deduction(2), multiplication(3), division(4): "))

    num1 = int(input("Enter the 1st number: "))
    
    num2 = int(input("Enter the 2nd number: "))

    if action == 1:
        print(num1 + num2)

    elif action == 2:
        print(num1 - num2)

    elif action == 3:
        print(num1 ** num2)

    elif action == 4:
        print(num1 // num2)

    elif action == 4 and num2 == 0:
        print("You can't divide by 0!")

    