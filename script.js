var rows = document.querySelectorAll('.row')

var pyramid = document.querySelectorAll(".block")
function getRandomValue(){
  return Math.random();
}

//assign values to each sphere
function valueAssignment(){
  for(var i = 0; i <pyramid.length;i++){
    var value = getRandomValue()*1000
    pyramid[i].setAttribute("value", value)
    pyramid[i].innerText = value.toString().substring(0, 3).replace(/\./g, "");
  }
}

function removeLeastClass(){
  leastClass = document.querySelectorAll('.least')
  document.querySelectorAll(".least").forEach(x => x.classList.remove('least'))
}

//loop through rows and add active class to lowest value
function findCheapestPath(){
  removeLeastClass()
  for(var i = 0; i < rows.length; i++){
    var least = rows[i].children[0]
    for(var j = 0; j < rows[i].children.length; j++){
      var current  = rows[i].children[j]
      if(current.getAttribute("value") < least.getAttribute("value")){
        least = current
      }
    }
    least.classList.add("least")
  }
}

function allTogetherNow(){
  valueAssignment();
  findCheapestPath();
}
allTogetherNow()
