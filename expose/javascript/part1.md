# Lab 4 Part 1
1. values added: 20
2. final result: 20
3. values added: 20
4. There is an error because the result variable is only in the scope of the if statement block.
5. There is an error because the function is trying to modify the result variable after setting it to 0.
6. There is an error because the result variable is const and only in the scope of the if statement block.

# Lab 4 Part 2
1. The console will log 3. This is the value of i when the line runs and i is in the scope of the whole function.
2. The console will log 150. This is the value of discountedPrice when the line runs and discountPrice is in the scope of the whole function.
3. The console will log 150. This is the value of finalPrice when the line runs and finalPrice is in the scope of the whole function.
4. The function returns a list of the discounted prices: [50, 100, 150]
5. The code will cause an error because i is declared using the let keyword. This means that it is only in the scope of the for loop.
6. The code will cause an error because discountedPrice is declared using the let keyword. This means that it is only in the scope of the for loop.
7. The console will log 150. This is the value of finalPrice when the line runs and finalPrice is in the scope of the whole function because it is declared using the let keyword at the beginning of the function block.
8. The function returns a list of the discounted prices: [50, 100, 150]
9. The code will cause an error because i is declared using the let keyword. This means that it is only in the scope of the for loop.
10. The console will log 3. This is because length is declared using the const keyword at the beginning of the function, so the whole function can access it. Also, the program doesn't attempt to change length after that, so there is no error thrown.
11. The function returns a list of the discounted prices: [50, 100, 150]. It is fine to add items to a list, but you can't reassign it if it is declared using the const keyword.