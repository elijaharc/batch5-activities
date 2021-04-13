def letter_generator(int)
  return nil if int < 1
  letter = "A"
  (int-1).times do 
    letter = letter.next 
    end
  letter
end

  p letter_generator(1)
  p letter_generator(20)
  p letter_generator(1000)
  p letter_generator(26)
  p letter_generator(100)
  p letter_generator(0)