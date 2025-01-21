
# 1..WAP to print the nearest prime to the given number

num = int(input("Enter a number: "))
def isPrime(n):
    if n>1:
        for i in range(2,(n//2)+1):
            if n%i ==0:
                return False
        return True
    return False
if (isPrime(num)):
    print("It is Prime number")
else:
    lp,rp = num-1,num+1
    while True:
        if isPrime(lp):
            lp=lp
            break
        lp -=1
    while True:
        if isPrime(rp):
            rp=rp
            break
        rp+=1
if (rp-num) == (num-lp):
    print(lp,rp)
elif (rp-num) < (num-lp):
    print(rp)
else:
    print(lp)


# OUTPUT:--
# Enter a number: 18

# 17 19

# Enter a number: 25

# 23


#  WAP to print the sum of max and min prime in a given number...

num = input("Enter the digits here: ")
first=1
def is_prime(n):
    if n>1:
        for i in range(2,(n//2)+1):
            if n%i == 0:
                return False
        return True
    return False
for digit in num:
    if (is_prime(int(digit))):
        if(first == 1):
            minPrime,maxPrime = int(digit),int(digit)
            first= first +1
        else:
            if int(digit) > maxPrime:
                maxPrime = int(digit)
            if int(digit) < minPrime:
                minPrime = int(digit)
print(minPrime+maxPrime)


# OUTPUT:---
#             Enter the digits here: 1875
#                                     12
