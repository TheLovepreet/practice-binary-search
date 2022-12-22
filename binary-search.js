function linearSearch (arr, target) {

  // Can you solve this in one line? 
  for(let i = 0 ;i < arr.length; i++){
    if(arr[i] == target){
      return i;
    }
  } 
  return -1;
};

function binarySearch(arr, target) {

  let lo = 0;
  let hi = arr.length-1;
  let mid = Math.floor((lo+hi)/2);

  while(arr[mid] !== target){
    if(lo > hi){
      return -1;
    }
    else{
      if(arr[mid] > target){
        hi = mid - 1;
        mid = Math.floor((lo+hi)/2); 
        }
        else{
          lo = mid + 1;
          mid  = Math.floor((lo+hi)/2);
        }
    }
  }
return mid;
  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]