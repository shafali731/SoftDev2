def repeat(x):
    def word(a):
        return a*x
    return word

r1 = repeat(2)
print(r1('hello'))
r2 = repeat(2)
print(r2("he"))
print(repeat('cool')(3))



def make_counter():
    x= 0
    def adder():
        nonlocal x
        x+=1
        return x
    return adder
ctr1 = make_counter()

ctr2 = make_counter()
print(ctr1())
print(ctr1())
print(ctr2())
print(ctr1())
print(ctr2())
