function display(string) {
    alert(string);
}

function bgCol()
{
    var bgColour = document.getElementById("body").style.backgroundColor;
    var fgColour = document.getElementById("body").style.color;

    if (bgColour == "white") {
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("body").style.color = "white";
    } else {
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("body").style.color = "black";

    }

    //alert("bgCol called");
}
