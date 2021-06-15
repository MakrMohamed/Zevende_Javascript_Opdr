const paintWall = function (whichWall, wallColor) {
    console.log(whichWall + " has been painted " + wallColor);
};
const wall1 = "The north wall";
const wall2 = "The south-east wall";

paintWall("green");
paintWall("blue");

paintWall(wall1, "orange");
paintWall(wall2, "grey");