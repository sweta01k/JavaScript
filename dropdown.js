function hourFun(){
    var hours = document.getElementById("hour");
    const now = new Date();
    const currantHours = now.getHours();

    document.getElementById("min").innerHTML="";
    document.getElementById("hour").innerHTML="";
    console.log(hours);
    for (var hours = currantHours; hours <= 23; hours++){
        document.getElementById("hour").innerHTML += ("<option>"+hours+"</option>");
    }
}
var startMin;

function minFun(){
    var mins = document.getElementById("min");
    var hour = document.getElementById("hour");
    const now = new Date();
    const currantHours = now.getHours();
    const currantMinutes = now.getMinutes();


    // console.log(startMin);
    // console.log(hour.value);
    // console.log(currantHours);

    if (hour.value == currantHours){
        startMin = currantMinutes;
        console.log("in if",startMin);
    }
    else if (hour.value != currantHours){
        startMin = 0;
    }
    // else{
    //     "";
    // }

    document.getElementById("min").innerHTML="";
    for (var mins = startMin; mins <= 59; mins++){
        document.getElementById("min").innerHTML += ("<option>"+mins+"</option>");
    }
}