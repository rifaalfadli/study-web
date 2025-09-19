// Make a function to get page data for page 2, leave default to 1 when it is empty
function getPageData(page = 1) {
  // default page = 1 if not provided
  return {
    page: page,
    data: `This is page ${page} data`
  };
}

console.log(getPageData());   
console.log(getPageData(2));    
