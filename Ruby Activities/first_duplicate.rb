# array = [2, 1, 3, 5, 3, 2]

# def first_duplicate(array)
#     if array.uniq.length == array.length
#         puts "-1"
#     else
#         print array.select!{ |x| array.count(x) > 1 } 
#     end
# end

# puts first_duplicate(array)

a = [2, 1, 3, 5, 3, 1]
b = [3, 1, 2, 1, 3, 2]
c = [2, 4, 3, 5, 1]

def first_duplicate(a)
    counts = []
    a.each do |value|
        if counts[value]
            return value
        end
        counts[value] = true
    end
    return -1
end

puts first_duplicate(a) # Output: 3
puts first_duplicate(b) # Output: 1
puts first_duplicate(c) # Output: -1

# def find_duplicate(arr)
#     new_arr = []
#     arr.each{ | value |
#         if new_arr.include?(value) 
#             return value
#         end
#         new_arr.append(value)
#     }
#     return -1
# end