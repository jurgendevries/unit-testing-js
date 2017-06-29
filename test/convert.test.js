describe( "volume converter", function () {
    it("converts litres to gallons", function () {
        expect(convert(3, "liters", "gallons")).toEqual(0.79);
    });

    it("converts gallons to cups", function () {
        expect(convert(2, "gallons", "cups")).toEqual(32);
    });

    it("throws an error when passed an unknown from-unit", function () {
        var testFn = function () {
            convert(1, "dollar", "yens");
        }
        expect(testFn).toThrow(new Error("unrecognized from-unit"));
    });

    it("throws an error when passed an unknown to-unit", function () {
        var testFn = function () {
            convert(1, "cm", "furlongs");
        }
        expect(testFn).toThrow(new Error("unrecognized to-unit"));
    });
});