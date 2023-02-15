
let button=document.querySelectorAll('button');
let textbox=document.querySelector('.display');
button.forEach(function(bt){                                                                            
    bt.addEventListener('click',action);
});
function action(bt){
    const clickbtvalue=bt.target.value;
    if(clickbtvalue==="AC"){
            textbox.value=""; //cleare text box
    }else if(clickbtvalue==="="){
        if(textbox.value!==""){
        textbox.value=eval(textbox.value);
        }
    }else{
        textbox.value=textbox.value + clickbtvalue;
    }
}			
  

    
