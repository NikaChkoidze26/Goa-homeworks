def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total


my_numbers = [5, 7, 1, 2, 3, 5, 1, 0, 9]
result = sum_of_list(my_numbers)
print(result) 
