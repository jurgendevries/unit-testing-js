describe('Normalizer', function() {
    it("accepts data", function () {
    });

    // make a failing test for this and let them fix it.
    it("does not accept incomplete  data", function () {
        // Invoke the unit being tested as necessary
        var json = '{"PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);

        expect(normalizeData).toThrowError("Data incomplete");
    });
});