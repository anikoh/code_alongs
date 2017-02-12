
//
// Write a function which accepts 2 arguments:
//  an array and and a number
//  It returns a nested array of groups, the original array split into groups of
//  the size of the number

//
// either I can remove elements from the original array in the for loop, and add
// the remainder as an array to the nested array at the end
// or get the remainder and loop through that as well
//
//




// I can assign values to grouped[0][j], but not grouped[1][j]. Is there a way to
// specify the length of a nested array before it has a value, or is that not
// a good way to try to go about this?
//
// var groupBy = function(list, counter){
//
// var nestedGroups= [[]];
//
//
// var groups= (list.length)/counter;
// var remainder = (list.length)%counter;
//
// for(var i=0; i< groups; i++){
// //  var tempArray = [];
//   for(var j=0; j< counter; j++){
//     // add each element to a new array
//     nestedGroups[i][j]= list[i+j];
//     }
//   //add the group array to the nested array
//   //grouped[i]=tempArray;
//   }
// // add the remainder as a new element to the end of the nested array
// return(nestedGroups);
// }
//



// works, but it puts an empty array at the start
//

var groupBy = function(list, counter){

var grouped= [[]];


var groupCounter= (list.length)/counter;
var remainder = (list.length)%counter;

for(var i=0; i< groupCounter; i++){
  var tempArray = [];
  for(var j=0; j< counter; j++){
    // add each element to a new array
      if (list[j+(i*counter)]){
        tempArray.push(list[j+(i*counter)]);
      }
    }
  //add the group array to the nested array
  grouped.push(tempArray);
  }
// add the remainder as a new element to the end of the nested array
return(grouped);
}
