def average_of_list(num_list):
    if not num_list:
        return 0
    total = sum(num_list)
    return total / len(num_list)

numbers = [10, 20, 30, 40, 50]
average = average_of_list(numbers)
print(average)
