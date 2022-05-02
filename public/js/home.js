//<-- -->*/
function handleCreateClick(){
    $.ajax({
      url: "/create",
      type: "POST",
      data: {identifier:$("#identifier").val(),content:$("#content").val()},
      success: function(data){
          if (data.error)
            alert("bad create");
          else{
            let tab = '';
            let br = '<br>';
            $("#output").append(br);
            $("#output").append($("#identifier").val()+":"); //to id the code
            $("#output").append(br);
            let text = data.content;
            for(let i=0;i<text.length;i++){
              if(text.substr(i,i+1) == '{' || text.substr(i,i+1) == '}'){
                //var temptxt = txt1.slice(, 3) + "bar" + txt1.slice(3);
              }
            }
            $("#output").append(data.content); //new code returned
          }
        } ,
      dataType: "json"
    });
return false;
}

function handleReadClick(){
    $.ajax({
      url: "/read",
      type: "GET",
      data: {identifier:$("#identifier").val()},
      success: function(data){
          if (data.error){
            alert("bad read");
          } else {
            $("#output").append('hello div');
          }
        } ,
      dataType: "json"
    });
return false;
}

function handleUpdateClick(){
    $.ajax({
      url: "/update",
      type: "PUT",
      data: {identifier:$("#identifier").val(),name:$("#name").val()},
      success: function(data){
          if (data.error)
            alert("bad update");
          else
            alert("good update");
        } ,
      dataType: "json"
    });
return false;
}

function handleDeleteClick(){
    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data){
          if (data.error)
            alert("bad delete");
          else
            alert("good delete");
        } ,
      dataType: "json"
    });
return false;
}

$(document).ready(function(){
  $("#create").click(handleCreateClick);
  $("#read").click(handleReadClick);
  $("#update").click(handleUpdateClick);
  $("#delete").click(handleDeleteClick);

});
