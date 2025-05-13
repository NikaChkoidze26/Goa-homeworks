def count_letters(text):
    
    return sum(1 for char in text if char.isalpha())


text = "goa best!"
letter_count = count_letters(text)
print(f"quantity of the letters: {letter_count}")
