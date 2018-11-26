function HHheadMenu()
{
    var x = document.getElementById("HHheadNav");
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
