module PortableDevice
    def battery_level
        @battery_level    
    end

    def battery_level=(battery_level = 10)
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

# this should be removed
# class ElectronicDevice
#     attr_accessor :battery_level

#     def initialize
#       self.battery_level = 0
#     end

#     def charge
#       self.battery_level += 1
#     end

#     def boot
#       puts "Booting device..."
#     end
# end