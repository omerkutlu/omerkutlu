var aColor;
var bColor;

 // $(document).ready(function() 
// {
	//var textColors = ['#A13206','#3E7522','#224A75','#453D34','#313D22','#5E05ED','#548781','#57316E','#96932F','#005f70','#1d3d10', '#a37000', '#961302', '#4a0b85', '#18264d', '#3a4004', '#49394a', '#4d590d', '#3b2201'];
	//aColor = textColors[Math.floor(Math.random() * textColors.length)];
	
	//var bgColors = ['#E8D1D1','#E8E1D1','#DFE8D1','#D1E8DB','#D1E1E8','#D1D4E8','#E2D1E8','#C5CCAB','#CCA6F5','#C9B5AD', '#f0efdf', '#fffd73', '#e6dbbc', '#daniel', '#vaskad', '#f9ffd1', '#d4d4d4', '#d9d9ca', '#fcfc81', '#ded6b6', '#cef2f2', '#e6dae1', '#jeffry'];
	//bColor = bgColors[Math.floor(Math.random() * bgColors.length)];
	
	//var aColor = get_dark_color();
	//var bColor = get_light_color();
	
//	bColor = randomColor({ luminosity: 'light' });
//	aColor = randomColor({ luminosity: 'dark' });
	
//	$('body').css({"color": aColor});
//	$('#index').css({"color": aColor});
//	$('#index a').css({"color": aColor});
//	$('#exhibit a').css({"color": aColor});
//	$('body').css({"background-color": bColor});
//	$('#index').css({"background-color": bColor});
// });

var repeat = 41;
var loop = 0;
var tmp = Array();

var manifesto = ['Alternative', 'Anti-Establishment', 'Archetypal', 'Bohemian', 'Collaborative', 'Committed', 'Conceptual', 'Connected', 'Constant', 'Default', 'Democratic', 'Functional', 'Happy', 'Idiosyncratic', 'Independent', 'Irregular', 'Grassroots', 'Long-Term', 'Maverick', 'Modernist', 'Minimalist', 'Networked', 'Non-Conformist', 'Original', 'Organised', 'Pioneering', 'Punk', 'Pragmatic', 'Progressive', 'Radical', 'Reductive', 'Revolutionary', 'Self-Sufficient', 'Seminal', 'Social', 'Ubiquitous', 'Unapologetic', 'Unorthodox', 'Universal', 'Utilitarian', 'Zen'];

function shout()
{
	for (var i = 0; i < manifesto.length; i++)
	{
		$('#exhibit .container').append("<span id='manifesto-" + i + "' class='manifesto' style='color: transparent;'>" + manifesto[i] + "</span> ");
	}
	
	for (var x = 0; x < manifesto.length; x++)
	{
		tmp[x] = x;
	}
	
	tmp.sort( randOrd );
	show_random();
}

function randOrd()
{
	return (Math.round(Math.random())-0.5); 
}

function show_random()
{
    if (repeat > loop) 
    {
    	$('span#manifesto-' + tmp[loop]).css('color', '#bbb');
    	loop++;
        setTimeout(show_random, 300);
    }
}

function shout2()
{
	var manifesto = ['Alternative', 'Anti-Establishment', 'Archetypal', 'Bohemian', 'Collaborative', 'Committed', 'Conceptual', 'Connected', 'Constant', 'Default', 'Democratic', 'Functional', 'Happy', 'Idiosyncratic', 'Independent', 'Irregular', 'Grassroots', 'Long-Term', 'Maverick', 'Modernist', 'Minimalist', 'Networked', 'Non-Conformist', 'Original', 'Organised', 'Pioneering', 'Punk', 'Pragmatic', 'Progressive', 'Radical', 'Reductive', 'Revolutionary', 'Self-Sufficient', 'Seminal', 'Social', 'Ubiquitous', 'Unapologetic', 'Unorthodox', 'Universal', 'Utilitarian', 'Zen'];
	
    if (repeat > loop) 
    {
    	$('#exhibit .container').append("<span id='manifesto-" + manifesto[loop] + "' class='manifesto'>" + manifesto[loop] + "</span> ");
    	loop++;
        setTimeout(shout, (400 - (loop * 10)));
    }
}

function make_shout()
{
	//return false;

	$(document).ready(function() 
	{
		shout();
	});
}

function get_dark_color()
{
	return 'rgb(' + (Math.floor((256-229)*Math.random()) + 75) + 
	',' + (Math.floor((256-229)*Math.random()) + 75) + 
	',' + (Math.floor((256-229)*Math.random()) + 75) + ')';
}

function get_light_color()
{
	return 'rgb(' + (Math.floor((256-229)*Math.random()) + 200) + 
	',' + (Math.floor((256-229)*Math.random()) + 200) + 
	',' + (Math.floor((256-229)*Math.random()) + 200) + ')';
}

function get_last_visit(c_name)
{
	if (document.cookie.length > 0)
	{
		var visited = document.cookie.indexOf(c_name + "=")

		if (visited != -1)
		{ 
			visited = visited + c_name.length + 1 
			var c_end = document.cookie.indexOf(";", visited)
			
			if (c_end == -1) c_end = document.cookie.length
			//return unescape(document.cookie.substring(visited, c_end))
			return true;
		} 
	}

	return false;
}

function set_last_visit(c_name, value, expiredays)
{
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) +
	((expiredays==null) ? "" : ";expires=" + exdate.toGMTString()) + '; path=/';
}


// if no cookie it's a unique
// need a jquery.ajax call

function color_index(state)
{
	if (state == 'over')
	{
		$('#index').css('background-color', '#fff20d');
		$('span#index_id').css('color', 'black');
	}
	else
	{
		$('#index').css('background-color', '');
		$('span#index_id').css('color', aColor);
	}
}

function color_exhibit(state)
{
	if (state == 'over')
	{
		$('#index').css('background-color', bColor);
		$('body').css('background-color', '#fff20d');
		$('span#exhibit_id').css('color', 'black');
	}
	else
	{
		$('#index').css('background-color', '');
		$('body').css('background-color', bColor);
		$('span#exhibit_id').css('color', aColor);
	}
}


