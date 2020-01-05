$("input:last").click(function(){
    $.post("/ajax" ,$('from').serialize(),function(res){
        result = res.reverse().map((val)=>{return JSON.stringify(val)+"<br>"})
        $("#result").empty().append($("<div></div>").html(result))
    })
})