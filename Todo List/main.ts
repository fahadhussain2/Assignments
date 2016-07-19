function additem() {
    var item=(<HTMLInputElement>document.getElementById("data")).value;
    if (item.length==0) {
        alert("please enter an item");
    }
    else{
        
    
    (<HTMLInputElement>document.getElementById("data")).value=null;
    var newpar=document.createElement("p");
    newpar.setAttribute("id","dynpara");
    var node=document.createTextNode(item);
    newpar.appendChild(node);
    document.getElementById("Added_items").appendChild(newpar);
    
    var removetask=document.createElement('input');
    removetask.setAttribute('type','button');
    removetask.setAttribute("value","Delete");
    removetask.setAttribute("id","deletetask");
    removetask.addEventListener('click', function(e) {
        newpar.parentNode.removeChild(newpar);
    },false);
           
     newpar.appendChild(removetask);
    
}

}