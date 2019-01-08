// Code your solution here:


function driversWithRevenueOver (drivers, amount) {
    let result = drivers.filter ((el)=>{
        return el.revenue > amount;
    });
        return result;
}

function driverNamesWithRevenueOver (drivers, amount) {
    let result = drivers.filter((el) => {
        return el.revenue > amount;
    }).map((el)=>{return el.name})
        return result;
}

// console.log(driverNamesWithRevenueOver([
//     { name: 'Sally', revenue: 400 },
//     { name: 'Annette', revenue: 200 }
// ], 199));

function exactMatch(drivers, obj) {
    let newArr = drivers.filter((el) => {
        for (let key in obj) {
            if (obj[key] === el[key]) {
                return true;
            }
        }
    })
    return newArr;
}


function exactMatchToList(drivers, obj) {

    let newArr = drivers.filter((el) => {
        //iterate over the condition in the for loop
        for (let key in obj) {
            if (obj[key] === el[key]) {
                return true;
            }
        }
    })

    onlyNames = newArr.map((el) => {
        return el.name
    });
    return onlyNames;
}