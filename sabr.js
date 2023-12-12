var toggle = document.getElementById('switch');
toggle.onclick = function() {
  
 this.style.cursor='none';
      this.style.color='#bef'; 
           document.getElementById('lights').className = 'animate';
document.getElementById('switch').className = 'animate';
	document.getElementById('trav').style.color='#ccf';


};
