
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]


numbers.append(100)


numbers.append(0, 5)


numbers.insert(30)


numbers.sort()


numbers.reverse()


index_50 = numbers.index(50)
print("Index of 50:", index_50)

count_20 = numbers.count(20)
print("Count of 20:", count_20)


print("Final list:", numbers)