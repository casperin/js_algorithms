# Helper fn to the user. The real "magic" happens in `radix_sort`
# :: int -> int -> string
radix_random = (count, numOfDigits) ->

    randomList = generateRandomList count, numOfDigits
    sortedList = radix_sort randomList, numOfDigits

    """
    Random: #{randomList.join ' '}
     Sorted: #{sortedList.join ' '}
    """

# Generates a list of `count` random numbers with at most `numOfDigits` number
# of digits in each integer.
# :: int -> int -> [int]
generateRandomList = (count, numOfDigits) ->
    list = []
    for _ in [0..count]
        list.push Math.floor Math.random() * Math.pow 10, numOfDigits
    list


# Main function.
#
# Takes a list of random numbers and returns a new sorted list.
#
# If you know the max number of digits that occurs in the list, then you can
# speed things up a bit by adding it as a second argument
#
# :: [int] -> (int ->) [int]
radix_sort = (list, numOfDigits) ->
    numOfDigits ?= Math.max(list...).toString().length-1
    for digit in [0..numOfDigits]
        buffer = [ [], [], [], [], [], [], [], [], [], [] ]
        buffer[getDigitAt digit, int].push int for int in list
        list = flatten buffer
    list

# Gets the digit at a certain position (counting from the back) in a number. If
# the number in the queried position does not exist, 0 will be returned instead.
# :: int -> int -> int
getDigitAt = (position, int) ->
    str = int.toString()
    +str.charAt str.length - position - 1

# Takes an array of arrays (the buffer) with numbers, and return a list of the
# numbers in the order that you'd expect.
# flatten([[1, 2, 3], [4, 5]])  ->  [1, 2, 3, 4, 5]
# :: [[int]] -> [int]
flatten = (buffer) ->
    list = []
    for array in buffer
        list.push int for int in array
    list

# Example for the user
console.log 'radix_random(20, 2)'
console.log radix_random(20, 2)

# Export the main function
window.radix_random = radix_random
window.radix_sort = radix_sort
