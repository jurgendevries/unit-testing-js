function fix (num) {
    return parseFloat( num.toFixed(2) );
}

function convert(number, fromUnit, toUnit) {
    var conversions = {
            distance : {
                meters : 1,
                cm     : 0.01,
                feet   : 0.3048,
                inches : 0.0254,
                yards  : 0.9144
            },
            volume : {
                liters : 1,
                gallons: 3.785411784,
                cups   : 0.236588236 
            }
        },
        betweenUnit = false,
        type, unit;

    for (type in conversions) {
        unit = conversions[type].hasOwnProperty(fromUnit) ? conversions[type][fromUnit] : undefined;
        if (unit) {
            betweenUnit = number * unit * 1000;
        }
    }

    if (betweenUnit) {
        for (type in conversions) {
            unit = conversions[type].hasOwnProperty(fromUnit) ? conversions[type][toUnit] : undefined;
            if (unit) {
                return fix(betweenUnit / (unit));
            }
        }
        throw new Error("unrecognized to-unit");
    } else {
        throw new Error("unrecognized from-unit");
    }  
}

