let nested_obj = {
    a: 1,
    b: 2,
    c: {
        ca: 'c1',
        cb: 'c2',
        cc: {
            ccc: 'aa',
            ccb: 'ab'
        }
    }
};

let nested_obj2 = {
    a: 1,
    b: function() {
        console.log('hit b function');
    },
    c: {
        ca: 'c1',
        cb: 'c2',
        cc: {
            ccc: 'aa',
            ccb: 'ab'
        }
    }
};

let arrNestedObj = {
    a: 1, 
    b: [
        {
            b: 1
        }, {
            b: 2
        }, {
            b: 3
        }
    ],
    c: {
        c: 1,
        b: 2
    }
};


function findDeepValue(obj, properties) {
    let temp_obj = JSON.parse(JSON.stringify(obj));
    for (let i = 0; i < properties.length; i++) {
        if (temp_obj[properties[i]]) {
            temp_obj = temp_obj[properties[i]];
        } else { 
          return null;
        }
    }
    return temp_obj;
}

/** 
console.log(findDeepValue(nested_obj, ['a']));
console.log(findDeepValue(nested_obj, ['b']));
console.log(findDeepValue(nested_obj, ['c', 'ca']));
console.log(findDeepValue(nested_obj, ['c', 'cc', 'ccc']));
console.log(findDeepValue(nested_obj, ['c', 'cc', 'ccc', 'd']));
console.log(findDeepValue(nested_obj, ['b', 'cc', 'ccc']));
console.log(findDeepValue(nested_obj, ['c', 'cc', 'ccb']));
console.log(findDeepValue(nested_obj2, ['b', 'cc', 'ccb']));
console.log(findDeepValue(nested_obj2, ['b'])); 
console.log(findDeepValue(arrNestedObj, ['c','c']));
console.log(findDeepValue(arrNestedObj, ['c','b']));
console.log(findDeepValue(arrNestedObj, ['b','b']));
*/