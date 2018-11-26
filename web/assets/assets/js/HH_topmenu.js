function HH_topMenu()
{
    var x = document.getElementById("topNav");
    if (x.className === "nav")
    {
        x.className += " responsive";
    }
    else if (x.className === "nav_border")
    {
        x.className += " responsive";
    }
        else
    {
        x.className = "nav";
    }
}
