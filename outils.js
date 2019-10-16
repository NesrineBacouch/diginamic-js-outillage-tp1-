

    exports.numbers = function () {
		 var tab=[];
     for(var i=1; i<=100; i++){
		tab.push(i);
	 }
		return tab;
    };

 
  exports.even = function () {
	  var tab=[];
     for(var i=1; i<=100; i++){
		 if(i%2)
			tab.push(i);
	 }
		return tab;
    };

    exports.odd = function () {
		var tab=[];
     for(var i=1; i<=100; i++){
		 if(i%2 !== 0)
			tab.push(i);
	 }
		return tab;
    };


