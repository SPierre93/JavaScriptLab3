<script>
let day, month, year, month_30days;

year = prompt("All responses must be in numerical form (including the month eg. 1 for January or 12 for December). \nPlease enter a year:\n");
month = prompt("Please enter a month:");
day = prompt("Please enter a day:");

month_30days = month == 4 || month == 6 || month == 9 || month == 11;

if(day <= 0 || day > 31 || month <= 0 || month > 12 || month == 2 && day > 29 || month == 2 && day >= 29 && !(year%4 == 0) || month_30days && day > 30)
{
    alert("Invalid date");
}

else
{
	alert("Valid date");
}
</script>