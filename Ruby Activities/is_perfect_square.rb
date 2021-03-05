def get_square_root(number)
   low = 1
   high = number
   while low + 1 < high
      mid = (high + low)/2
      puts "high is: #{high}"
      if mid ** 2 <= number
         low = mid
         puts "low is: #{low}"
      else
         high = mid
         puts "high is: #{high}"
      end
   end
   return low
end
 
def is_perfect_square(x)
   if x == 0 
     puts "#{x} => #{true}"
     return true
   end
     result = false
     square = get_square_root(x)
     result = x == square * square
     puts "#{x} => #{result}"
     return result  
end
 
   is_perfect_square(-1)
   is_perfect_square(0)
   is_perfect_square(3)
   is_perfect_square(4)
   is_perfect_square(25)
   is_perfect_square(26)

   # puts get_square_root(3)

   # def is_square(x)
   #    (0..x).each do |ctr|
   #       return true if (ctr * ctr) == x 
   #    end

   #    false
   # end

   # def perfect_square?(n)
   #    i = 1
   #    if n == 0
   #      n = 1
   #    end
   #    while i * i < n
   #      i += 1
   #    end
   #    puts i * i == n
   #  end
    
   #  perfect_square?(36)