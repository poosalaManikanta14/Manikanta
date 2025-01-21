

# QUE:1:--
# THE USER PRINT STRIN AND SUBSTRING .YOU HAVE TO PRINT THE NO.OF TIMES THE SUBSTRING OCCURS I THE GIVEN STRING.
# STRING TRANSVERSAL WILL TAKE PLACE FROM LEFT TO RIGHT,NOY FROM RIGHT TO LEFT..




# QUE:2--
#  WAP TO PRINT THE COUNT OF PERFECRT NUMBERS IN THE RANGE OF 1 TO 100

num= int(input("Enter a number: "))
def perfect(num):
    sum1=0
    for i in range(1,(num//2)+1):
        if num%i==0:
            sum1+=i
    return (sum1==num)
for i in range(1,num+1):
    if(perfect(i)):
        print(i)



# OUTPUT:- Enter a number: 100
#                          6
#                          28