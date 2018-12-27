    window.onscroll = function() {scrollHead()};
    var offsetHeight;

    function scrollHead()
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        {
            document.getElementById("HHheadNav").className = "nav_scroll";
            document.getElementById("Head").className = "head_scroll";
            document.getElementById("logo").className = "logo_scroll";
            document.getElementById("headerline").className = "headerline_scroll";
        }
        else
        {
            document.getElementById("HHheadNav").className = "nav";
            document.getElementById("Head").className = "head";
            document.getElementById("logo").className = "logo";
            document.getElementById("headerline").className = "headerline";
        }
    }
