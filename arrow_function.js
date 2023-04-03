const inventory = [

    {type: "machine", value: 5000},


    {type: "machine", value: 650},


    {type: "duck", value: 10},


    {type: "furniture", value: 1200},


    {type: "machine", value: 77}


]

let totalMachineValue = () => {
    let newArray = [];
    inventory.filter((item) => {
        if (item.type === 'machine') newArray.push(item);
    });
    console.log(newArray.map((item) => {
        return item.value;
    }).reduce((previousValue, currentValue) => previousValue + currentValue));
}

totalMachineValue();