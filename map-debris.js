function orbitalPeriod(arr) {

  const GM = 398600.4418;

  const earthRadius = 6367.4447;

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    let body = arr[i].name;

    let avgAlt = arr[i].avgAlt;

    let a = earthRadius + avgAlt;

    let timePeriod = Math.round((2 * Math.PI) * (Math.sqrt(a ** 3 / GM)));

    let newArrObj = { name: body, orbitalPeriod: timePeriod };

    newArr.push(newArrObj);

  }

  return newArr;

}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// Challenge Completed