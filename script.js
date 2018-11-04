 $("#carousel").carousel()
 
 $('.dropdown-toggle').click(function(){
  $(this).toggleClass('.clicked');
});


(function(){
 var type= document.getElementById('services');
 var which_service ={
  design:'Design',
  construction:'Construction';
  maintenance:'Maintenance
 };
 //when user changes the type select box
 addEvent(type,'change', function(){
  if(this.value === 'choose'){
   model.innerHTML = '<option>Please choose a type first</option';
   return;
   
  }
 })
})