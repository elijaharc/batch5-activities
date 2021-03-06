# Activity:
# 1. Create a dictionary (hash) with 10 city names, where the city name (key) will be a string, and the area code would be the value.
# 2. Display the city names to the user for cities which are available in the dictionary
# 3. Get input from the user on the city name
# 4. Display area code based on user's city choice
# 5. Loop - keep the program running and prompt the user for new city names to lookup
# 6. Complete the two methods to lookup city names and to find area code based on city names

dial_book = {
  "newyork" => "212",
  "newbrunswick" => "732",
  "edison" => "908",
  "plainsboro" => "609",
  "sanfrancisco" => "301",
  "miami" => "305",
  "paloalto" => "650",
  "evanston" => "847",
  "orlando" => "407",
  "lancaster" => "717"
}

# Get city names from the hash
def get_city_names(hash)
    puts
    puts "Here are the cities in the dictionary:"
    puts
    puts hash.keys
end

puts get_city_names(dial_book)

# # Get area code based on given hash and key
def get_area_code(dial_book, input)
    puts "The area code of #{input} is: #{dial_book[input]}"
end

# # Execution flow
loop do
    puts "Please select a city: (type 'exit' or 'end' to close program)"
    input = gets.chomp
    if input == "exit" || input == "end"
        puts
        puts "Thank you for your time!"
        break
    else
        puts
        puts get_area_code(dial_book, input)  
    end               
end
