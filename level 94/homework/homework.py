def open_or_senior(data):
    output = []
    for age in data:
        if age >= 55 and handicap > 7: #type: ignore
            output.append("senior")
        else:
            output.append(open)
        return output