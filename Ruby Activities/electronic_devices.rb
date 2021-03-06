module PortableDevice
    def battery_level
        @battery_level    
    end

    def battery_level=(battery_level)
        @battery_level = battery_level
    end

    def check_cell_signal
        puts "Searching cell site..."
    end

    def charge
        self.battery_level += 1
    end

    def boot
        puts "Booting device..."
    end
end

module ComputeDevice
    def boot
        puts "Booting device..."
    end
end

class Laptop
    include PortableDevice
end

class Phone
    include PortableDevice
end

class Computer
    include ComputeDevice
end

iphone = Phone.new
iphone.battery_level = 20
puts iphone.battery_level
iphone.charge
puts iphone.battery_level
iphone.charge
puts iphone.battery_level
iphone.check_cell_signal
puts iphone.battery_level

macbook_pro = Computer.new
macbook_pro.boot