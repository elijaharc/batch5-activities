def century_from_year(year)
    if (year % 100 == 0)
        return year / 100
    else
        return (year - (year % 100))/100 + 1
    end
end

puts century_from_year(1705)
puts century_from_year(1900)
puts century_from_year(1601)
puts century_from_year(2000)

# ONE LINER:
# year % 100 == 0 ? year / 100 : (year - (year % 100)) / 100 + 1
