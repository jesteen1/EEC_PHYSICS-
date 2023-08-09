const load={
    washingmachine:2,
    Ironbox:2,
    water_heater:3
}
var data_insert=document.getElementById("data_insert");
var units=document.getElementById("units");
var hours=document.getElementById("hours");
var days=document.getElementById("days");
var result_output=document.getElementById("output")
var rs=document.getElementById("rs")
function triger(){

    if(data_insert.value=="washing_machine"){
    units.value=load.washingmachine;
    }
   else if(data_insert.value=="water_heater"){
        units.value=load.Ironbox;
        }
      else if(data_insert.value=="Ironbox"){
            units.value=load.water_heater;
            }
            else if (data_insert.value=="other"){
                units.value=""
            }
}
function result(){
    if(units.value==""){
        alert("please enter the units ")
    }
    else{
        if(hours.value==""){
            alert("please enter the hours ")
        }
        else{
            if(days.value==""){
                alert("please enter the days ")
            }
            else{
                var EEC=units.value*hours.value*days.value*3;
                   result_output.innerText=EEC;
                   rs.classList.remove("hidden")
                   rs.classList.add("block")
            }
        }

    }

}