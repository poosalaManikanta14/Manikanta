
# Problem Statement: Given an array of integers, rotating array of elements by k elements left :

num = input().split()
k = int (input())
for i in range (k):
    x = num[-1]
    for j in range (len(num)-2,-1,-1):
        num[j+1]=num[j]
    num[0]=x
print(" ".join(num))

# OUTPUT:--
#          3 7 8 9 10 11
#          3
#          9 10 11 3 7 8