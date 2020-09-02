window.onload = function() {
  //get mine position
  var container = document.getElementById('container');
  var rowSize = 9, colSize= 9, noOfMines = 20;
  var minePosition = gerMinePosition(rowSize,colSize,noOfMines);

  for (var i = 0; i < rowSize; i++) {
    for (var j = 0; j < colSize; j++) {
	  var elem = document.createElement('div');
      container.appendChild(elem);
	  elem.className = 'myclass';
      elem.setAttribute('data-row', i);
      elem.setAttribute('data-col', j);
	  elem.addEventListener("click",(e) => {
	  console.log(minePosition);
	  var x = e.target.getAttribute('data-row');
	  var y = e.target.getAttribute('data-col');
	  var cellValue = "1"; 
	  minePosition.forEach(obj => {
		if(obj.x == x && obj.y == y){
			showAllBomb(minePosition);
		 }			
	  });
			e.target.innerHTML = cellValue;
	  });
      
    }
    var breaker = document.createElement('div');
    container.appendChild(breaker);
    breaker.className = 'clear';
  }
}

//Get Mine Random positions
 var gerMinePosition = function(rowSize,colSize,noOfMines){
	var position = [];
	for(i=0;i<noOfMines;i++){
	
			
			let x = Math.floor(Math.random()*10);
			let y = Math.floor(Math.random()*10);
			
				position.push({'x':x,'y':y});
		
	}
	return position;
  }
  
  
  var showAllBomb = function(position){
  var allCells = document.getElementsByClassName('myclass');
	Array.prototype.forEach.call(allCells, function (cell) {
      cell.removeEventListener("click",  function(){  });
	    var x = cell.getAttribute('data-row');
	    var y = cell.getAttribute('data-col');
		var cellValue = 1;
		position.forEach(obj => {
		if(obj.x == x && obj.y == y)
		 cellValue = '<img src="bomb.png" width="25" height="25" />';	
	  });
			cell.innerHTML = cellValue;
	  });
		document.getElementById("result").style.display = 'block';
  }