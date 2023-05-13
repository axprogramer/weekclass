function tableSearchEngB(){
    let input, filter, table, tr, td, textValue;
    input = document.getElementById("showMyMonths");
    filter = input.value.toUpperCase();
    table = document.getElementById("myNewInput");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++){
       
        td = tr[i].getElementsByTagName("td")[5];

        if(td){
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}
function tableSearch(){
    let input, filter, table, tr, td, textValue;
    input = document.getElementById("showMyMonths");
    filter = input.value.toUpperCase();
    table = document.getElementById("myNewInput");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++){
       
        td = tr[i].getElementsByTagName("td")[5];

        if(td){
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}
