const uniqueNumbers = (sampleArray) => {
    let uniqueElements = new Set(sampleArray);
    for(let element of uniqueElements.values()){
        console.log(element);
    }
}

export default uniqueNumbers;