def calculate_average(numbers):
    if not numbers:
        return 0  
    
    total = sum(numbers)
    average = total / len(numbers)
    return average

# Example usage
numbers_list = [1, 2, 3, 4, 5]
average_value = calculate_average(numbers_list)

print(f"The average is: {average_value}")
