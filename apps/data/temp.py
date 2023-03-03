import csv
import jsonpickle

# Define a class to hold the data
class Data:
    def __init__(self, category3, title, unit, emissionFactor, uncertainty):
        self.category3 = category3
        self.title = title
        self.unit = unit
        self.emissionFactor = emissionFactor
        self.uncertainty = uncertainty

# Read the CSV file
with open('WinnipegData.csv') as csvfile:
    reader = csv.reader(csvfile)
    next(reader)  # skip header row
    data_list = []
    for row in reader:
        # Create a Data object for each row
        data = Data(row[0], row[1], row[2], row[3], row[4])
        data_list.append(data)
        
# Serialize the data object to JSON
json_data = jsonpickle.encode(data_list)

# Write the serialized JSON data to a file
with open('data.txt', 'w') as outfile:
    outfile.write(json_data)
