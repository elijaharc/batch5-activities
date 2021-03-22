def find_uniq(arr)
    arr.find_all do | num | arr.count(num) == 1
    end
end

arr1 = [1, 1, 1, 2, 1, 1]
arr2 = [0, 0, 0.55, 0, 0]

puts find_uniq(arr1)
puts find_uniq(arr2)