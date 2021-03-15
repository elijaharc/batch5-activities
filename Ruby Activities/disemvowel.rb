def disemvowl(string)
    vowels = 'aeiou'
    string.chars.select { |char| !vowels.include?(char.downcase) }.join
end

puts disemvowl('This website is for losers LOL!')

# def disemboweled_trolls(str)
#     puts str.tr 'aeiouAEIOU',''
# end

# disemboweled_trolls("troll comment jibberish!!! ")