

def f_single(n):
    freq = 0
    words= []
    arr = []
    stuff = []
    book= open('if.txt', 'r')
    b = book.readlines()
    for x in range(len(b)):
        a = b[x].split(' ')
        words.append(a)
    for x in words:
        for y in x:
            arr.append(y)
    for x in arr:
        if x not in stuff:
            stuff.append({x,1})
        else stuff[x] +=1
    return stuff


print(f_single(3))
