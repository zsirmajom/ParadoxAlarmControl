function M$(d){mainframe.formframe.document.getElementById(d);}function cmtop(cl,tx,op,wi){return"<table border='0' cellpadding='0' cellspacing='0' width='"+wi+"'><tr style='background: url("+cl+"_back.png)'><td width='30px'><img src='"+cl+"_TL.png' alt=''></td><td class='f12 far ac b' style='color:"+op+"'>"+tx+"</td><td align='right' width='30px'><img src='"+cl+"_TR.png' alt=''></td></tr></table>";}function cmbot(wi){return"<table border='0' cellpadding='0' cellspacing='0' width='"+wi+"'><tr style='background: url(bott_back.png)'><td width='20px'><img src='bott_BL.png' alt=''></td><td>&nbsp</td><td width='20px'><img src='bott_BR.png' alt=''></td></tr><tr><td class='he4'></td></tr></table>";}function customalert(text,cmd,frame){var sre,d,dtxt,w,title;if(frame==1){d=top.mainframe.formframe.document;dtxt="top.mainframe.formframe.document";w=490;title=top.mainframe.ln_system[5];}else{d=top.document;dtxt="top.document";w=width;title=top.ln_system[5];}if(d.getElementById("CUSTOMALERT")){return;}var mObj=d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));mObj.id="CUSTOMALERT";sre="<div id=\"modalContainer\" class='modalContainer' style=\"height: 100%;display:block\"><div id=\"alertBox\" class='alertBox' style=\"left: "+((w-320)/2)+"px;top: "+((screen.height-500)/2)+"px;\"><h1 class='alertBox_h1'>"+title+"</h1><p class='alertBox_p'>";sre+=text;sre+="</p><center><a id=\"closeBtn\" class='alertBox_closeBtn' href=\"#\" onclick=\""+dtxt+".getElementsByTagName('body')[0].removeChild("+dtxt+".getElementById('CUSTOMALERT'));"+cmd+"\">Ok</a></center></div></div>";mObj.innerHTML=sre;d.getElementById("closeBtn").focus();}function keeplowbyte(svalue){var sre,short_val,ctemp;sre="";for(i=0;i<svalue.length;i++){short_val=svalue.charCodeAt(i);short_val%=256;ctemp=String.fromCharCode(short_val);sre+=ctemp;}return sre;}