const filterEntries = (filterObj, entriesArray) => {
  const filteredArray = [];

  if (!filterObj || Object.values(filterObj).every((v) => v === false)) {
    return entriesArray;
  }

  if (filterObj.videos) {
    filteredArray.push(
      ...entriesArray.filter(
        (e) => e.type === 'video' && !filteredArray.includes(e)
      )
    );
  }

  if (filterObj.blogs) {
    filteredArray.push(
      ...entriesArray.filter(
        (e) => e.type === 'blog' && !filteredArray.includes(e)
      )
    );
  }

 
  if (filterObj.courses) {
    filteredArray.push(
      ...entriesArray.filter(
        (e) => e.type === 'course' && !filteredArray.includes(e)
      )
    );
  }


  

  if (filterObj.others) {
    filteredArray.push(
      ...entriesArray.filter(
        (e) => e.type === 'other' && !filteredArray.includes(e)
      )
    );
  }

  if (filterObj.viewed) {
    filteredArray.push(
      ...entriesArray.filter(
        (e) => e.isViewed === true && !filteredArray.includes(e)
      )
    );
  }

  if (filterObj.starred) {
    filteredArray.push(
      ...entriesArray.filter(
        (e) => e.isStarred === true && !filteredArray.includes(e)
      )
    );
  }

  return filteredArray;
};

export default filterEntries;
