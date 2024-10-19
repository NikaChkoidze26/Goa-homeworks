def reverse_list(items):
    reversed_list = []
    for item in items:
        reversed_list.insert(0, item)
    return reversed_list



# მაგალითი
my_list = [5, 9, 1, 2, 3, 4, 5, 6, 7]
result = reverse_list(my_list)
print(result)  
