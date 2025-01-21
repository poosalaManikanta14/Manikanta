
# WAP to print the sum of non-fib numbers as per the input..

# num = int(input("Enter a number: "))
# a,b,count,nonFibNum=0,1,0,0
# while count!=num:
#     for i in range(a+1,b):
#         count+=1
#         nonFibNum+=i
#         if count==num:
#             break
#     a,b=b,a+b
# print(nonFibNum)

# OUTPUT:--Enter a number: 3
#                         17


# WAP to convert the decimal to binary----


num=int(input("Enter a number: "))
bin1=""
while num>0:
    rem=num%2
    bin1= str(rem)+bin1
    num=num//2
print(bin1)


# output:---
#             Enter a number: 5
#                             101

