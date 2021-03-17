def name_formatter(list_of_names)
    string = ''
    list_of_names.each_with_index do |value,index|
        if index < list_of_names.length - 2
            string += value[:name] + ", "
        elsif index == list_of_names.length - 1
            string += value[:name]
        elsif index == list_of_names.length - 2
            string += value[:name] + " & "
        end
    end
    return string
end

p name_formatter([{name: 'Elijah'},{name: 'Jose'},{name: 'Arcedera'}])
p name_formatter([{name: 'Elijah'},{name: 'Jose'}])
p name_formatter([{name: 'Elijah'}])
p name_formatter([]) 