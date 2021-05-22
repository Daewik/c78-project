var images=["father.jpg","mother.jpg","grandfather.jpg","grandmother.png","Me.jpg","Little brother.jpg"];    
var names=['Family Book','Father','Mother','Grandfather','grandmother','Me','Little Brother'];

var i=0;
var n=0;

function Update()
{
   if(i==6)
   {
       i++;
   }
   document.getElementById('i1').src=images[i];


   if(n==6)
   {
    n++;
   }
document.getElementById('name').src=names[n];

}