from enum import Enum

# TODO: flask routing
from flask import Flask
app = Flask(__name__)

class LivingArea(Enum):
    ''' area : avg miles per stop '''
    rural    = 4 # TODO: define more encompassing nums
    suburban = 2
    urban    = 1

    def __str__(self):
        return f'For a(n) {self.name} community, Amazon drives an average of {self.value} mile(s) per stop.'
    
CO2kgPerMileDriven = .32888 # kg of carbon emissions per 1 mile by Amazon Car :  https://www.cars-data.com/en/mercedes-benz-sprinter/co2-emissions 
pricePerCO2kg = .01 # $ to offset 1kg : https://www.mercycorps.org/blog/how-much-offset-your-carbon

@app.route("/")
def predictCO2OffsetPrice(livingArea : Enum, numProducts : int):
    return pricePerCO2kg*CO2kgPerMileDriven*livingArea.value*numProducts

if __name__ == '__main__':
    print(predictCO2OffsetPrice(LivingArea.urban, 2))