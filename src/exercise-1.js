const getCommonItems = (array1, array2) => {
    return array1.reduce((commonItems, item) => {
        if(array2.includes(item)){
            commonItems.push(item);
        };
        return commonItems;
    }, []);
};

export default getCommonItems;
