
const custom=()=>{

    var image_moving= document.getElementById("image_moving");
    let number=400;
    var btn= document.querySelectorAll("#btn");
    var list=0
    // btn[list].classList.add('bg-green-500')
    setInterval(() => {
        // btn[list].classList.add('bg-green-500');
      
       console.log(number);
        image_moving.style.marginLeft="-"+ number+"px";
        number=number+400;
       
    //   list=list+1
      
        console.log("list"+list);
       
      
        
        console.log("added +" +number);
       
    
        if(number==1600){
            number=0;
         console.log("changed"+number);
         list=0;
    
           
        }
      
        console.log("finallist"+list);
       
    }, 3000);
}
export default custom;

