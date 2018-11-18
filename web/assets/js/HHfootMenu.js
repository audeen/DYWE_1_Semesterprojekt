function HHfootMenu()
{
    var x = document.getElementById("HHfootNav");
    if (x.className === "nav")
    {
        x.className += " responsive_foot";
    }
    else
    {
        x.className = "nav";
    }
}
