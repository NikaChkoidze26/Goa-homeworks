#დაწერეთ პროგრამა სადაც შეამოწმეთ, სტუდენტმა ჩააბარა თუ არა ჩააბარა კურსი მათი გამოცდის ქულების მიხედვით. სთხოვეთ მომხმარებელს შეიყვანოს ქულები შუალედური გამოცდისთვის, დასკვნითი გამოცდისთვის და პროექტისთვის. დარწმუნდით, რომ მომხმარებელმა შეიყვანოს სწორი ქულები (პოზიტიური რიცხვები 0-დან 100-მდე) თითოეული კომპონენტისთვის.
#გამოიყენეთ შემდეგი შეფასების კრიტერიუმები: თუ საშუალო ქულა (20% შუალედური კურსისთვის, 40% საბოლოო და 40% პროექტისთვის) არის 70 ან მეტი, სტუდენტი გაივლის კურსს. თუ საშუალო ქულა 70-ზე დაბალია, სტუდენტი ვერ ახერხებს კურსის ჩაბარებას. აჩვენეთ მომხმარებლისთვის შეტყობინება, რომელშიც მითითებულია მისი გავლის/ჩავარდნის სტატუსი და გამოთვლილი საშუალო ქულა.



num1 = int(input("Enter your Mid-term exam score (1-20): "))
num2 = int(input("Enter your Final exam score (1-40): "))
num3 = int(input("Enter your project score (1-40): "))

Final_Score = num1 + num2 + num3 // 3

if Final_Score >= 70:
    print("You Passed!")

else:
    print("You FAILED!")