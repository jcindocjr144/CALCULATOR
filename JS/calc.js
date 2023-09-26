function expo(event) {
    var a = document.getElementById("display").value;
    var multiply = '';
                        
    for (i = 1; i < 2; i++) {
            multiply += Math.pow(a,2);
    }
    document.getElementById("equal").innerHTML = multiply;
    //document.getElementById("form1").onSubmit
    return 0;
}
	function ac()
	{
		display.value = '';
		document.getElementById("equal").innerHTML = '0';
	}
	function del()
	{
		display.value = display.value.toString().slice(0,-1);
	}
