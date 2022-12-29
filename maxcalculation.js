var total_sales = [
    {year: 1959, sales: 220},
    {year: 1959, sales: 215},
    {year: 1959, sales: 123},
    {year: 1960, sales: 121},
    {year: 1960, sales: 122},
    {year: 1962, sales: 127},
    {year: 1963, sales: 122},
    {year: 1963, sales: 223},
    {year: 1963, sales: 320},
    {year: 1963, sales: 421}
]

var annual_sales = total_sales.reduce((res, value)=>{
    if (!res[value.year]) {
        res[value.year] = {biggestSale: 0, amount: 0}
    }
    res[value.year].amount+=value.sales
    res[value.year].biggestSale = Math.max(value.sales, res[value.year].biggestSale)

    return res

}, {});


console.log(annual_sales['1960'])