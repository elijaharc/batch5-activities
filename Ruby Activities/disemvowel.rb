def disemvowl(string)
    vowels = 'aeiou'
    string.chars.select { |char| !vowels.include?(char.downcase) }.join
end

puts disemvowl('This website is for losers LOL!')