function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}

function addKeyAndValue(arr, key, val) {
    arr.forEach(function(val) {
        val[key] = value;
    })
    return arr;
}
// similar to my issues with reduce and objects, don't understand the val[key] = key thing. like is val[key] the value or the key and why does it appear only one of the key/value is being set?

function vowelCount(str) {
    let splitArr = str.split("")
    let obj = {};
    const vowels = 'aeiou';

    splitArr.forEach(function(val) {
        let lowerCasedLetter = val.toLowerCase();
        if(vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    })

}
//.split method automatically turns things into array?

//map

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
        return val * idx;
    });
}
// Would not adding idx as an argument to the callback and doing return val * arr[i]; work? If not, why not? 

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    }); 
}

function extractFullName(arr) {
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
}

//filter

function filterByValue(arr, key) {
    arr.filter(function(val) {
        return val[key] !== undefined;
    });
}
// Why does return val[key] return the whole object and not just the key?

function find(arr, searchVal) {
    return arr.filter(function(val) {
        return val === searchVal;
    })[0];
}
// Does the [0] handle returning undefined if the searchVal isn't present in the array?

function findInObj(arr, key, searchVal) {
    return arr.filter(function(val) {
        return val[key] === searchVal;
    })[0];
}

function removeVowels(str) {
    const vowels = 'aeiou';
    return str
        .toLowerCase()
        .split("")
        .filter(function(val) {
            return vowels.indexOf(val) !== -1;
        })
        .join("");
}
// Does .join turn from an array back into a string?

function doubleOddNumbers(arr) {
    return arr
        .filter(function(val) {
            return val % 2 !== 0;
        })    
        .map(function(val) {
            return val * 2;
        });   
}
// I notice with this one it does return arr on its own line and then the filter and map stuff indented below, whereas the others except for the string one right before do return arr.filter(function) on one line. Is there a particular reason for that or does either work?