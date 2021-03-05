# Note: Avoid using .min and .sort method

# Find the smallest integer in the array
# Given an array of integers your solution should find the smallest integer.
# For example:
# Given [34, 15, 88, 2] your solution will return 2
# Given [34, -345, -1, 100] your solution will return -345
# You can assume, for the purpose of this challenge, that the supplied array will not be empty.

def is_smallest_int(arr)
    smallest = arr[0]

    arr.each do |num|
        if num < smallest
            smallest = num
        end
    end

   puts smallest
end

array = [0, 30, -1, 40, -3]
is_smallest_int(array)

###################################################

# arr1 = [34, 15, 88, 2]
# arr2 = [34, -345, -1, 100]


# def find_min(arr)
#     min = arr[0]
#     arr.each{|x|
#         min = min < x ? min : x
#     }
#     return min
# end

# puts find_min(arr1)
# puts find_min(arr2)
