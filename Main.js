/**
 * Created by long on 2/22/2017.
 */

function toggleDiv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
    closeOtherDiv(id);
}

function closeOtherDiv(id){
    if(id!="contact")
    {
        document.getElementById('contact').style.display = "none";
    }
    if(id!="aboutme")
    {
        document.getElementById('aboutme').style.display = "none";
    }
    if(id!="etc")
    {
        document.getElementById('etc').style.display = "none";
    }
    if(id!="projects")
    {
        document.getElementById('projects').style.display = "none";
    }
    if(id!="resume")
    {
        document.getElementById('resume').style.display = "none";
    }
}
