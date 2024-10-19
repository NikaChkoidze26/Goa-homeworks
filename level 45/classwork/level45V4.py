def count_letters(text):
    
    letters = [char for char in text if char.isalpha()]
    return len(letters)


text = "GOA IS THE BEST"
result = count_letters(text)


print("Ammount of letters:", result)