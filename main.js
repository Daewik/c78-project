var images=["father.jpg","mother.jpg","grandfather.jpg","grandmother.png","Me.jpg","Little brother.jpg"];    
var names=['Father','Mother','Grandfather','grandmother','Me','Little Brother'];

var i=0;

function Update()
{

  
  if(i==6)
  {
      i=0;
  }
  document.getElementById('i1').src=images[i];
  document.getElementById('name').innerHTML=names[i];
  i++;
}