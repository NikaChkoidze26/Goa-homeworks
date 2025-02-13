def ask_for_password(correct_password="1234"):
    while True:
        password = input("შეიყვანეთ პაროლი: ")
        if password == correct_password:
            print("პაროლი სწორია!")
            break
        else:
            print("არასწორი პაროლი.")