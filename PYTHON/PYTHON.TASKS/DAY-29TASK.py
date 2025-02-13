# 1:- WAP TO PRINT REVERSE OF A PYRAMID TRIANGLE:-

rows = int(input("Enter rows: "))
for i in range(rows,-1,-1):
    for s in range(rows-i):
        print(" ",end="")
    for j in range(1,i+1):
        print("*",end=" ")
    print()


# OUTPUT:-
# Enter rows: 10
# * * * * * * * * * * 
#  * * * * * * * * * 
#   * * * * * * * * 
#    * * * * * * * 
#     * * * * * * 
#      * * * * * 
#       * * * * 
#        * * * 
#         * * 
#          * 


# 2:-WAP TO PRINT NUMBER DECRESING ORDER:-
rows = int(input("Enter rows: "))
for i in range(rows,-1,-1):
    for j in range(1,i+1):
        print(j,end=" ")
    print()

"""
OUTPUT:-

Enter rows: 10

1 2 3 4 5 6 7 8 9 10 
1 2 3 4 5 6 7 8 9 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 
1 2 3 4 5 6 
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 

"""

#3:- WAP TO PRINT TRIANGLE WITH STARTINNG NUMBER:-
rows = int(input("Enter rows: "))
for i in range(1, rows+1):
    for s in range(rows-i):
        print(" ",end="")
    for j in range(1,i+1):
        print(j,end=" ")
    print()

# OUTPUT:-
# Enter rows: 10
#          1 
#         1 2 
#        1 2 3 
#       1 2 3 4 
#      1 2 3 4 5 
#     1 2 3 4 5 6 
#    1 2 3 4 5 6 7 
#   1 2 3 4 5 6 7 8 
#  1 2 3 4 5 6 7 8 9 
# 1 2 3 4 5 6 7 8 9 10 



