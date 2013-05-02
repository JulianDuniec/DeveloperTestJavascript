module.exports = function(board){
	var me = this;

	me.row = function(index) {
		var res = [];
		var start = index * 9;
		var length = start + 9;
		for(var i = start; i<length;i++) {
			res.push(board[i]);
		}
		return res;
	};

	me.column = function(index) {
		var res = [];
		var start = index;
		var length = start + 81;
		for(var i = start; i<length; i += 9) {
			res.push(board[i]);
		}
		return res;
	};

	me.block = function(index) {
		var res = [];
		var rowOffset = Math.floor( index / 3 ) * 27;
		var columnOffset = ( index % 3 ) * 3;
		var baseOffset = rowOffset + columnOffset;
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				var currentRowAndColumnOffset = i * 9 + j;
				var index = currentRowAndColumnOffset + baseOffset;
				res.push(board[index]);
			}
		}
		return res;
	};

	me.arraysEqual = function(a,b) { 
		if(a.length != b.length) return false;
		for (var i = a.length - 1; i >= 0; i--) {
			if(a[i] != b[i])
				return false;
		};
		return true;
	}

	//Returns true if the collection contains the numbers
	//1-9, has length 9
	me.validCollection = function(collection) {
		collection.sort();
		return me.arraysEqual(collection, [1,2,3,4,5,6,7,8,9]);
	};

	me.victory = function() {
		for(var i = 0; i < 9; i++) {
			if(
				 	!me.validCollection(me.block(i))
				|| 	!me.validCollection(me.column(i))
				|| 	!me.validCollection(me.row(i))
				)
				return false;
		}
		return true;
	};

	return me;
};