def nb_year(p0, percent, aug, p):
    per  = percent / 100
    count = 0 
    while p0 < p:
        count +=1
        p0 = int(p0+ (p0 * per + aug))
    return count 