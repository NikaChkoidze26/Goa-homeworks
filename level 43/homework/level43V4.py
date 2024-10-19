def count_items(item_list, item):
    return item_list.count(item)


my_list = ['apple', 'banana', 'apple', 'orange']
result = count_items(my_list, 'apple')
print(result)  