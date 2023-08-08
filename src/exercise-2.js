const getTheExactNumber = (numbers) => {
  const getMultiplesOfThree = numbers.filter((numbers) => {
        return numbers%3 === 0;
    });
    return Math.max(...getMultiplesOfThree);
}

export default getTheExactNumber;