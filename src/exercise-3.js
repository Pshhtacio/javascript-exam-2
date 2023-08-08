const getNumberType = (number) => {
  if(number > 0){
    return number % 2 === 0? 'even number': 'odd number';
  }
  return null;
};

export default getNumberType;
