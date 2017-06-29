describe('Normalizer', function() {
    it("accepts data", function () {
    });

    it("does not accept incomplete  data", function () {
        var json = '{"PersonalIdentifier": 2111858}';
        var testNormalize = function() {
            normalizeData(json)
        }

        expect(testNormalize).toThrowError("Data incomplete");
    });
});