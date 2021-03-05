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