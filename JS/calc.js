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
		equal.value = equal.value.toString().slice(0,-1);
	}
let isNegative = false;
	function toggleSign(){
		const display=document.getElementById('display');
		if(display.value !== '' && display.value !== 'Error')
		{
			if (isNegative) {
				display.value = display.value.substring(1);
			}
			else{
				display.value = '-' + display.value;
			}
			isNegative = !isNegative;
		}
	}
	function calculatePercentage()
	{
		const display = document.getElementById('display');
		const currentValue = parseFloat(display.value);
		if(!isNaN(currentValue)){
			display.value = currentValue / 100;
		}
	}
