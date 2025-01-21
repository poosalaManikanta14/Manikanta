num=int(input("Enter a number: "))
a,b=0,1
i=1
while a<=num:
    c=a+b
    a=b
    b=c
print(a,b-a)
res = "It is fib num" if b-a == num else b-a if (num-(b-a)<a-num) else a
print(res)



# OUTPUT:-- Enter a number: 14
#                           21 13
#                             13