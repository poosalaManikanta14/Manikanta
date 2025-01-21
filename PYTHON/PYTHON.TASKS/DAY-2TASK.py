# 1) Problem Statement: You are given an integer. Your task is to replace 
# all the zeros in the integer with ones and all the ones with zeroes.
 

num=input("ENTER YOUR NUMBER HERE...!")
emp=""
for i in num:
    if i == '0':
        emp+="1"
    elif i== '1':
        emp+='0'
    else:
        emp+=i
        
print(emp)


# OUTPUT:-enter your number....10120130
# 01021031


#  2)Problem Statement: Check if the number is a Harshad(or Niven) number or not.

num=input("ENTER YOUR NUMBER HERE...!")
sum1=0
for i in num:
    sum1+=int(i)
if int(num) % int(sum1) == 0:
    print("YES, IT IS AN HARSHAD NUMBER")
else:
    print("NO, IT IS NOT AN HARSHAD NUMBER")


    # OUTPUT:-156 Yes it is a Harshad number.








