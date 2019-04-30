def repeat(x):
    def word(a):
        return a*x
    return word

r1 = repeat(2)
print(r1('hello'))
r2 = repeat(2)
print(r2("he"))
print(repeat('cool')(3))
