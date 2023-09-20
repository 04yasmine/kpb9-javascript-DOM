document.getElementById("miniContainerContentSatu").style.display="none";
document.getElementById("miniContainerContentDua").style.display="none";


let a;
function showHide()
{
    if(a==1)
    {
        document.getElementById("miniContainerContentSatu").style.backgroundColor="#F5F5F5";
        document.getElementById("miniContainerContentSatu").style.display="block";
        return a=0;
    }
    else
    {
        document.getElementById("miniContainerContentSatu").style.display="none";
        return a=1;
    }
}




function tampilHilang()
{
    if(a==1)
    {
        
        document.getElementById("gambar").src="/images/arrow-up.png";
        document.getElementById("miniContainerContentDua").style.backgroundColor="#F5F5F5"
        document.getElementById("miniContainerContentDua").style.display="block";
        return a=0;
    }
    else
    {
        document.getElementById("gambar").src="/images/arrow-down.png";
        document.getElementById("miniContainerContentDua").style.display="none";
        return a=1;
    }
}



        
