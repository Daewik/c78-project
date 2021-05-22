var images=["father.jpg","mother.jpg","grandfather.jpg","grandmother.png","Me.jpg","Little brother.jpg"];    
var names=['Family Book','Father','Mother','Grandfather','grandmother','Me','Little Brother'];

var i=0;

function Update()
{
  i++;
  var number_of_family=6;
  if(i>number_of_family)
  {
      i=0;
  }
  var name= names[i];
  var image= images[i];
  document.getElementById('i1').src=image;
  document.getElementById('name').innerHTML=names;
}