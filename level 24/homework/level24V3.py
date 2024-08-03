num1 = int(input("Enter your Mid-term exam score (1-20): "))
num2 = int(input("Enter your Final exam score (1-40): "))
num3 = int(input("Enter your project score (1-40): "))

Final_Score = num1 + num2 + num3 // 3

if Final_Score == 70:
    print("You Passed!")

elif Final_Score < 70:
    print("You Failed!")

else:
    print("You Passed!")