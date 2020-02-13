<script>
let side1, side2, side3;

side1 = parseInt(prompt("Please enter the dimensions for triangle: \nSide 1:\n"));
side2 = parseInt(prompt("Side 2"));
side3 = parseInt(prompt("Side 3"));

if(side1 <= 0 || side2 <= 0 || side3 <= 0)
{
	alert("This is not a valid triangle.");
}

else if(side1 == side2 && side1 == side3 && side2 == side3)
{
	alert("This triangle is an Equilateral triangle because all the sides are equal to each other");
}

else if(side1 == side2 || side1 == side3 || side2 == side3)
{
	alert("This triangle is an Isosceles triangle because two sides are equal to each other.");
}

else if(side1 != side2 && side1 != side3 && side2 != side3)
{
	alert("This triangle is a Scalene triangle because all the sides are not equal to each other.");
}
</script>