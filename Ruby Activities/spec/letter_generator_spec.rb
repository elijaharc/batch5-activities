require './letter_generator.rb'

describe "letter_generator" do
  context "when int is 0" do
    it "should return ''" do
      expect(letter_generator(0)).to eq ''
    end
  end
  context "when int is 1" do
    it "should return 'A'" do
      expect(letter_generator(1)).to eq 'A'
    end
  end
  context "when int is 20" do
    it "should return 'T'" do
      expect(letter_generator(20)).to eq 'T'
    end
  end
  context "when int is 1000" do
    it "should return 'ALL'" do
      expect(letter_generator(1000)).to eq 'ALL'
    end
  end
  context "when int is 26" do
    it "should return 'Z'" do
      expect(letter_generator(26)).to eq 'Z'
    end
  end
  context "when int is 100" do
    it "should return 'CV'" do
      expect(letter_generator(100)).to eq 'CV'
    end
  end
  
end