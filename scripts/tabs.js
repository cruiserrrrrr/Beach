
let count = 1

function tab(n)
{   count = n
    if(count==1)
    {
        document.getElementById('tab1').style.display='block';
        document.getElementById('tab2').style.display='none';
        document.getElementById('nav0').className='nav_selected';
        document.getElementById('nav1').className='nav';
    }
    else
    {
        document.getElementById('tab2').style.display='block';
        document.getElementById('tab1').style.display='none';
        document.getElementById('nav1').className='nav_selected';
        document.getElementById('nav0').className='nav';
    }
}


function r_tab(m)
{
    var n=m.parentNode.getElementsByTagName('li');
    var t=m.parentNode.parentNode.getElementsByTagName('div');
    for(var i=0;i<n.length; i++)
    {
        
        n[i].className=m==n[i]?'current':'';
        t[i].style.display=m==n[i]?'block':'none';
        
    }
}