function filterApiData(apiData, mandatoryKeys) {
  // apiData=[{},{},..]
  //mandatoryKeys=[key1,key2,...]
  //return Array with the Objects that passed the test

  let result = apiData.filter((entry) => {
    //Object.keys(entry) //[key1,key2,..]

    return mandatoryKeys.every((currentKey) =>
      Object.keys(entry).includes(currentKey)
    );
  });

  return result;
}
