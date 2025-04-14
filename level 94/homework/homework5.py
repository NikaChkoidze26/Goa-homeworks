def printer_error(s):
    error_count = 0
    total = len(s)

    for letter in s:
        if letter < 'a' or letter > 'm':
            error_count += 1

    return str(error_count) + "/" + str(total)
