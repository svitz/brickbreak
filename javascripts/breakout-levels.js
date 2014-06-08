;Quintus.BreakoutLevels = function(Q) {
  var au = 6; // gold
  var m = 5; // metallic
	var b = 4; // red
	var r = 3; // blue
	var o = 2; // orange
	var g = 1; // green
	var X = 0; // null

  Q.assets['level1'] = [
    [g,o,g,o,g,o,g,o,g],
    [X,o,g,o,g,o,g,o,X],
    [g,g,g,g,g,g,g,g,g],
    [X,X,X,b,b,b,X,X,X],
    [X,X,b,r,b,r,b,X,X]
  ];

  Q.assets['level2'] = [
    [X,X,r,o,r,o,r,X,X],
    [g,X,b,b,b,b,b,X,g],
    [g,g,g,g,g,g,g,g,g],
    [X,X,X,b,b,b,X,X,X],
    [b,o,o,X,X,X,o,o,b],
    [X,X,b,b,b,b,b,X,X],
    [X,X,r,o,r,o,r,X,X],
    [g,X,b,b,b,b,b,X,g],
    [g,g,g,g,g,g,g,g,g]
  ];
  
  Q.assets['level3'] = [
    [b,X,b,X,b,X,b,X,b],
    [X,o,X,o,X,o,X,o,X],
    [r,X,r,X,r,X,r,X,r],
    [X,g,X,g,X,g,X,g,X],
    [r,X,r,X,r,X,r,X,r],
    [X,o,X,o,X,o,X,o,X],
    [r,X,r,X,r,X,r,X,r],
    [X,g,X,g,X,g,X,g,X]
  ];

  Q.assets['level4'] = [
    [X,b,b,b,b,b,b,b,b],
    [b,X,b,b,b,b,b,b,b],
    [r,r,X,r,r,r,r,r,r],
    [r,r,r,X,r,r,r,r,r],
    [b,b,b,b,X,b,b,b,b],
    [b,b,b,b,b,X,b,b,b],
    [r,r,r,r,r,r,X,r,r],
    [r,r,r,r,r,r,r,X,r]
  ];

  Q.assets['level5'] = [
    [m,b,b,b,b,b,b,b,b],
    [b,m,b,b,b,b,b,b,b],
    [r,r,m,r,r,r,r,r,r],
    [r,r,r,m,r,r,r,r,r],
    [b,b,b,b,m,b,b,b,b],
    [b,b,b,b,b,m,b,b,b],
    [r,r,r,r,r,r,m,r,r],
    [r,r,r,r,r,r,r,m,r]
  ];

  Q.assets['level6'] = [
    [au,b,b,b,b,b,b,b,b],
    [b,au,b,b,b,b,b,b,b],
    [r,r,au,r,r,r,r,r,r],
    [r,r,r,au,r,r,r,r,r],
    [b,b,b,b,au,b,b,b,b],
    [b,b,b,b,b,au,b,b,b],
    [r,r,r,r,r,r,au,r,r],
    [r,r,r,r,r,r,r,au,r]
  ];


};
