function HHfootMenu()
{
    var x = document.getElementById("HHfootNav");
    if (x.className === "nav")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "nav";
    }
}
