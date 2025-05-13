def open_or_senior(data, handicap):
    output = []
    for age in data:
        if age >= 55 and handicap > 7: 
            output.append("senior")
        else:
            output.append(open)
        return output