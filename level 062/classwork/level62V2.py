def even_nums(arr,num):
    list = [5, 3, 7, 2, 9, 8, 4, 6, 1]
    for i in arr:
        if i % 2 == 0:
            list.append(i)

    return list[-num:]