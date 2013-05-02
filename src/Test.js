var Soduko = require('./Soduko_Solution');

/*
	A collection of data used in the tests
*/
var TestData = {
	/*
		Represents a correctly solved 
		Soduko-board. Copied from 
		http://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png
	*/
	 correctBoard : [
		5,3,4,6,7,8,9,1,2,
		6,7,2,1,9,5,3,4,8,
		1,9,8,3,4,2,5,6,7,
		8,5,9,7,6,1,4,2,3,
		4,2,6,8,5,3,7,9,1,
		7,1,3,9,2,4,8,5,6,
		9,6,1,5,3,7,2,8,4,
		2,8,7,4,1,9,6,3,5,
		3,4,5,2,8,6,1,7,9
	],

	/*
		Represents a board that contains an error
	*/
	incorrectBoard : [
		5,3,4,6,7,8,9,1,2,
		6,7,2,1,9,5,2,4,8,
		1,9,8,3,4,2,5,6,7,
		8,5,9,7,6,1,4,2,3,
		4,2,6,8,5,3,7,9,1,
		7,1,3,9,2,4,8,5,6,
		9,6,1,5,3,7,2,8,4,
		2,8,7,4,1,9,6,3,5,
		3,4,5,2,8,6,1,7,9
	]
};

module.exports = {
	

	testRows : function(test) {
		var soduko = new Soduko(TestData.correctBoard);
		test.deepEqual(soduko.row(0), 	[ 5, 3, 4, 6, 7, 8, 9, 1, 2 ]);
		test.deepEqual(soduko.row(1), 	[ 6, 7, 2, 1, 9, 5, 3, 4, 8 ]);
		test.deepEqual(soduko.row(2), 	[ 1, 9, 8, 3, 4, 2, 5, 6, 7 ]);
		test.deepEqual(soduko.row(3), 	[ 8, 5, 9, 7, 6, 1, 4, 2, 3 ]);
		test.deepEqual(soduko.row(4), 	[ 4, 2, 6, 8, 5, 3, 7, 9, 1 ]);
		test.deepEqual(soduko.row(5), 	[ 7, 1, 3, 9, 2, 4, 8, 5, 6 ]);
		test.deepEqual(soduko.row(6), 	[ 9, 6, 1, 5, 3, 7, 2, 8, 4 ]);
		test.deepEqual(soduko.row(7), 	[ 2, 8, 7, 4, 1, 9, 6, 3, 5 ]);
		test.deepEqual(soduko.row(8), 	[ 3, 4, 5, 2, 8, 6, 1, 7, 9 ]);
		test.done();
	},

	testColumns : function(test) {
		var soduko = new Soduko(TestData.correctBoard);
		test.deepEqual(soduko.column(0), 	[ 5, 6, 1, 8, 4, 7, 9, 2, 3 ]);
		test.deepEqual(soduko.column(1), 	[ 3, 7, 9, 5, 2, 1, 6, 8, 4 ]);
		test.deepEqual(soduko.column(2), 	[ 4, 2, 8, 9, 6, 3, 1, 7, 5 ]);
		test.deepEqual(soduko.column(3), 	[ 6, 1, 3, 7, 8, 9, 5, 4, 2 ]);
		test.deepEqual(soduko.column(4), 	[ 7, 9, 4, 6, 5, 2, 3, 1, 8 ]);
		test.deepEqual(soduko.column(5), 	[ 8, 5, 2, 1, 3, 4, 7, 9, 6 ]);
		test.deepEqual(soduko.column(6), 	[ 9, 3, 5, 4, 7, 8, 2, 6, 1 ]);
		test.deepEqual(soduko.column(7), 	[ 1, 4, 6, 2, 9, 5, 8, 3, 7 ]);
		test.deepEqual(soduko.column(8), 	[ 2, 8, 7, 3, 1, 6, 4, 5, 9 ]);
		test.done();
	},

	testBlocks : function(test) {
		var soduko = new Soduko(TestData.correctBoard);
		test.deepEqual(soduko.block(0), 	[ 5, 3, 4, 6, 7, 2, 1, 9, 8 ]);
		test.deepEqual(soduko.block(1), 	[ 6, 7, 8, 1, 9, 5, 3, 4, 2 ]);
		test.deepEqual(soduko.block(2), 	[ 9, 1, 2, 3, 4, 8, 5, 6, 7 ]);
		test.deepEqual(soduko.block(3), 	[ 8, 5, 9, 4, 2, 6, 7, 1, 3 ]);
		test.deepEqual(soduko.block(4), 	[ 7, 6, 1, 8, 5, 3, 9, 2, 4 ]);
		test.deepEqual(soduko.block(5), 	[ 4, 2, 3, 7, 9, 1, 8, 5, 6 ]);
		test.deepEqual(soduko.block(6), 	[ 9, 6, 1, 2, 8, 7, 3, 4, 5 ]);
		test.deepEqual(soduko.block(7), 	[ 5, 3, 7, 4, 1, 9, 2, 8, 6 ]);
		test.deepEqual(soduko.block(8), 	[ 2, 8, 4, 6, 3, 5, 1, 7, 9 ]);
		test.done();
	},

	testVictory : function(test) {
		var soduko = new Soduko(TestData.correctBoard);
		test.ok(soduko.victory());
		
		var incurrectSoduko = new Soduko(TestData.incorrectBoard);
		test.ok(!incurrectSoduko.victory());
		
		test.done();
	},

};

