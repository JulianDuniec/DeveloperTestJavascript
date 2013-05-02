module.exports = function(board){
	var me = this;

	/*
		Gets a row from the soduko-board from the
		supplied, zero-based index
	*/
	me.row = function(index) {
		//TODO: Implement
		return [];
	};

	/*
		Gets a column from the soduko-board from the
		supplied, zero-based index
	*/
	me.column = function(index) {
		//TODO: Implement
		return [];
	};
	
	/*
		Gets a block from the soduko-board from the
		supplied, zero-based index
		http://en.wikipedia.org/wiki/Sudoku
	*/
	me.block = function(index) {
		//TODO: Implement
		return [];
	};

	/*
		Ensures that each column, each row, and each of 
		the nine 3×3 sub-grids that compose the grid 
		(also called "boxes", "blocks", "regions", or "sub-squares") 
		contains all of the digits from 1 to 9.
	*/
	me.victory = function() {
		//TODO: Implement
	};

	return me;
};