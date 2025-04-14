def find_next_square(sq):
    root = (sq)
    if root * root == sq:
        return (root + 1) ** 2
    return -1
