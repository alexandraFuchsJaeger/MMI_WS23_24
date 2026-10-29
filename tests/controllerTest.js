const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelcius()", function(){
    tempFahrenheit = 90;
    expectedCelsius = 32.22;
    it("should convert fahrenheit to celsius", function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(tempFahrenheit)*100)/100).to.equal(expectedCelsius);
    });


});