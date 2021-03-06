def first_duplicate(string)
    arr = string.split("")
    arr.uniq.each {|letter| 
    index = arr.each_index.select{ | i | arr[i] == letter }
        if index.length == 1
            return letter
        end
    }
    return "_"
end

s = "abacabad"
a = "abcdabcd"
puts first_duplicate(s)
puts first_duplicate(a)

# def first_nonrepeating_letter(str) 
# str.each_char do |chr|
#     return chr if str.downcase.count(chr.downcase) < 2
#   end
#   "_"
# end

# puts first_nonrepeating_letter("ddjjrrvv")
# puts first_nonrepeating_letter("ddjrrv")

# def first_non_repeating_letter(string)
#     string.chars.find { |character| string.downcase.count(character.downcase) == 1 } || "_" 
# end