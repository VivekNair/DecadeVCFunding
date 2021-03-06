function(key, values) {
  var result = { total_amount : 0, number_funding_rounds : 0 }
  values.forEach(function(val) {
    if (typeof(val.total_amount) == 'number') {  
      result.total_amount += val.total_amount;
    }
    if (val.number_funding_rounds) {
      result.number_funding_rounds += val.number_funding_rounds;
    }
  });
  return result;
}
