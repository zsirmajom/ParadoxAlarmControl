var allarea_exp=0;var tblidmenu=new Array(0,0,0,0,0,0,0,0);var tblpa=new Array(0,0,0,0,0,0,0,0);var tbltog=new Array(0,0,0,0,0,0,0,0);var tbl_presentinalarm=new Array(0,0,0,0,0,0,0,0);var pos_scrolltop=0;var manyarea;var tog_mnu=-1;var live_tblu,live_tblz,live_stayd;var tmp_trouble="-1";var tmp_alarme="-1";var subar,subval,subrequest=0;var email_currentitem=0;var lostcom;var email_dspalert="";function IsNumeric(sTx){var ValC="0123456789";var IsN=true;var Ch;for(i=0;i<sTx.length&&IsN==true;i++){Ch=sTx.charAt(i);if(ValC.indexOf(Ch)==-1){IsN=false;}}return IsN;}function refresh_info(){setTimeout("top.mainframe.infoframe.location.href='info.html';",500);}function SendCnf(){var add="",smt,email;email=mainframe.formframe.document.getElementById("EMAIL_LIST").selectedIndex;add=mainframe.formframe.document.getElementById("em").value;smt=mainframe.formframe.document.getElementById("SMTP").value;if(smt==""){email_dspalert=top.mainframe.ln_sts[0];}else if(add!=""){email_dspalert=top.mainframe.ln_sts[1]+" "+add;}}function refresh_config(){setTimeout("mainframe.formframe.location.href='config.html';",500);}function st_init(){tmp_trouble="-1";tmp_alarme="-1";}function st_affdata_al(data){var sre;sre="";sre+=cmtop("red",mainframe.ln_sts[2],"#FFFFFF","250px");sre+=stal(mainframe.ln_sts[3],"l_alarm.png",data);sre+=cmbot("250px");return sre;}function st_affdata_tr(data){var sre;sre="";sre+=cmtop("blue",mainframe.ln_sts[4],"#FFFFFF","100%");sre+=sttr(mainframe.ln_sts[5],"l_trouble.png",data);sre+=cmbot("100%");return sre;}function sttr(tit,icon,data){var sre,id;sre="<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='1' bgcolor='#C8CFD2'></td><td><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td class='he4'></td></tr><tr class='f8 far'><td width='10px'></td><td width='35px' rowspan=3><IMG src='"+icon+"' alt=''></td></tr>";for(i=0;i<data.length;i++){id=parseInt(data[i]);sre+="<tr class='f8 far'><td colspan=2></td><td>"+mainframe.tbl_troublename[id]+"</td></tr>";}sre+="</table></td><td width='1' bgcolor='#C8CFD2'></td></tr></table>";return sre;}function stal(tit,icon,data){var sre,id;sre="<table border='0' cellpadding='0' cellspacing='0' width='250px'><tr><td width='1' bgcolor='#C8CFD2'></td><td><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td class='he4'></td></tr><tr class='f8 far'><td width='10px'></td><td width='35px' rowspan=3><IMG src='"+icon+"' alt=''></td></tr>";for(i=0;i<data.length;i++){id=parseInt(data[i]);sre+="<tr class='f8 far'><td colspan=2></td><td>"+mainframe.ln_system[1]+" "+(id+1)+" - <div class='bidi' style='display:inline'>"+mainframe.tbl_areanam[id]+"</div></td></tr>";}sre+="</table></td><td width='1' bgcolor='#C8CFD2'></td></tr></table>";return sre;}function st_affdata(snam,tblu,stayd){var sre,nbarea;nbarea=0;for(i=0;i<tblu.length;i++){if(tblu[i]!=0){nbarea++;}}if(nbarea>1){manyarea=1;}else{manyarea=0;}sre="<div id='conteneurmenu' style='display:none'>";sre+=cmtop("gray",mainframe.ln_sts[6],"#000000","100%");sre+=st_const(snam,tblu);sre+=cmbot("100%");sre+="</div>";return sre;}function st_affallzonealarm(){var i;for(i=0;i<tblpa.length;i++){tbltog[i]=!tbltog[i];st_affd(i+1);}st_refreshexpend(0);}function st_refreshexpend(posi){var i;for(i=0;i<tbltog.length;i++){if(tblpa[i]==1){if(tbltog[i]==1){mainframe.formframe.document.getElementById("EXP"+(i+1)).innerHTML=st_br(i,mainframe.ln_sts[7],"fl_haut");}else{mainframe.formframe.document.getElementById("EXP"+(i+1)).innerHTML=st_br(i,mainframe.ln_sts[8],"fl_bas");}}}if(manyarea){if(allarea_exp==1){mainframe.formframe.document.getElementById("EXP0").innerHTML=st_bra(mainframe.ln_sts[9],"fl_haut");}else{mainframe.formframe.document.getElementById("EXP0").innerHTML=st_bra(mainframe.ln_sts[10],"fl_bas");}}if(posi==1){top.positionne_sousmenu();}}function st_affzonealarm(area){if(tbl_presentinalarm[area-1]==1){mainframe.formframe.document.getElementById("ZS"+area).innerHTML=st_affzonestatus(area,1);}}function st_const(snam,tblu){var sre,i,writehr,nbmnu;nbmnu=1;subrequest=0;sre="<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='1' bgcolor='#C8CFD2'></td><td><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr class='f8 far cb2'><td width='10px'></td><td>"+mainframe.ln_sts[11]+"</td><td align='right'>"+mainframe.ln_sts[12]+"</td><td width='20px'></td></tr></table><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td class='he4'></td></tr>";writehr=0;if(manyarea){sre+="<tr><td class='he4'></td></tr><tr class='f8 far'><td width='10px'></td><td width='15px' rowspan=2></td><td colspan=2 valign='bottom'><b><div style='overflow:hidden;white-space:nowrap;width:300px;'>"+snam+" - "+mainframe.ln_system[0]+"</div></b></td><td align='right' valign='middle' rowspan='2'>";sre+=st_addbtnmnu(99,nbmnu,99,0);sre+="</td><td width='10px'></td></tr><tr class='f8 far'><td></td><td width='20%'></td><td valign='top'><div id='EXP0'></div></td><td align='right' valign='middle'></td><td width='10px'></td></tr><tr><td class='he4'></td></tr><tr><td colspan=7><HR size='2' noshade width='100%' color='#BBC7D5'></td></tr>";nbmnu++;}sre+="</table>";for(i=0;i<tblu.length;i++){if(tblu[i]!=0){tblidmenu[i]=nbmnu;if(writehr){sre+="<tr><td colspan=8><HR size='1' noshade width='90%' color='#BBC7D5'></td></tr></table>";}tblpa[i]=1;writehr=1;sre+="<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='5px'></td><td><table id='border_"+i+"' cellpadding='0' cellspacing='0' width='100%'><tr height='22px' class='f8 far'><td width='5px'></td><td width='15px' rowspan=2></td><td colspan=4 width='"+screen.width+"px' valign='bottom'><img src='stayd.png' alt='' id='st_stayd"+i+"' style='display:none'>"+mainframe.ln_system[1]+" "+(i+1)+" - "+"<div class='bidi' style='display:inline'>"+mainframe.tbl_areanam[i]+"</div></td><td rowspan=2 align='right' valign='middle'>";sre+=st_addbtnmnu(tblu[i],nbmnu,i,1);sre+="</td><td width='15px'></td></tr><tr class='f8 far' valign='top'><td colspan=2></td><td width='20%'><div id='st_st"+i+"'>";sre+=st_affpartition(i,tblu[i],tblidmenu[i],1);sre+="</div></td><td><div id='EXP"+(i+1)+"'></div></td></tr><tr><td colspan=8><div id='ZS"+(i+1)+"'></div></tr><tr><td class='he4'></td></tr></table><td width='5px'></td></td></tr>";nbmnu++;}}sre+="</table></td><td width='1' bgcolor='#C8CFD2'></td></tr></table>";return sre;}function st_addbtnmnu(status,id,area,mode){var sre,MG,evo220;MG=0;evo220=0;sre="<div id='st_bt"+area+"'>";sre+=st_affpartition(area,status,id,2);sre+="</div><ul id='ssmenu"+id+"' class='ssmenu' onmouseover='top.AnnulerCacher();' onmouseout='top.CacherDelai();' onfocus='top.AnnulerCacher();' onblur='top.CacherDelai();'>";if((mainframe.ProductID&0xF0)!=0){MG=1;}if((MG==0)&&(mainframe.ProductVer>=232)){evo220=1;}if(mode==0){sre+=st_li(area,'r',mainframe.ln_sts[13]);if(!MG){sre+=st_li(area,'f',mainframe.ln_sts[24]);}sre+=st_li(area,'s',mainframe.ln_sts[25]);if(!MG&&!evo220){sre+=st_li(area,'i',mainframe.ln_sts[26]);}else{sre+=st_li(area,'p',mainframe.ln_sts[27]);}if(mainframe.ArmOnly!='1'){sre+="<li><img src='lookxphr.gif' class='hr' alt='' /></li>";sre+=st_li(area,'d',mainframe.ln_sts[16]);}}if(mode==1){sre+=st_li(area,'r',mainframe.ln_sts[23]);if(!MG){sre+=st_li(area,'f',mainframe.ln_sts[24]);}sre+=st_li(area,'s',mainframe.ln_sts[25]);if(!MG&&!evo220){sre+=st_li(area,'i',mainframe.ln_sts[26]);}else{sre+=st_li(area,'p',mainframe.ln_sts[27]);}if(mainframe.ArmOnly!='1'){sre+="<li><img src='lookxphr.gif' class='hr' alt='' /></li>";sre+=st_li(area,'d',mainframe.ln_sts[17]);}}sre+="</ul>";return sre;}function st_affd(area){var i;if(area==0){if(allarea_exp==1){for(i=0;i<tblpa.length;i++){tbltog[i]=1;}allarea_exp=0;}else{for(i=0;i<tblpa.length;i++){tbltog[i]=0;}allarea_exp=1;}for(i=0;i<tblpa.length;i++){st_affd(i+1);}}else if(tblpa[area-1]==1){if(tbltog[area-1]==0){mainframe.formframe.document.getElementById("ZS"+area).innerHTML=st_affzonestatus(area,0);tbltog[area-1]=1;}else{mainframe.formframe.document.getElementById("ZS"+area).innerHTML="";st_affzonealarm(area);tbltog[area-1]=0;}}}function st_affzonestatus(area,onal){var sre,i,cpt,numero,classe,varea;sre="<table border='0' cellpadding='0' cellspacing='0' width='100%' align='center'><tr><td class='he4'></td></tr>";cpt=0;varea=(Math.pow(2,(area-1)));for(i=0;i<live_tblz.length;i++){if((varea&mainframe.tbl_zone[i*2])==varea){if(cpt==0){if(live_tblu[area-1]==3){sre+="<tr><td width=10px></td>";}else{sre+="<tr><td width=20px></td>";}cpt++;}if((onal==0)||(onal==1&&live_tblz[i]==2)){switch(live_tblz[i]){case 0:classe="sc";break;case 1:classe="so";break;case 2:classe="sb";break;case 3:classe="sct";break;case 4:classe="sot";break;case 5:classe="scm";break;case 6:classe="som";break;case 7:classe="sby";break;default:break;}if(i<9){numero="0"+(i+1);}else{numero=(i+1);}sre+="<td class='f8 far ac b sz "+classe+"'>"+numero+"</td><td class='f8 far' width='120px'><div class='bidi' style='overflow:hidden;white-space:nowrap;width:110px;'>&nbsp "+mainframe.tbl_zone[(i*2)+1]+"<div></td>";cpt++;if(cpt>3){sre+="</tr><tr class='he4'><td></td></tr>";cpt=0;}}}}if(cpt>0){while(cpt<4){sre+="<td class='f8 far ac b sz sh'></td><td width='120px'></td>";cpt++;}sre+="</tr>";}sre+="</table>";return sre;}function st_affpartition(area,status,id,mode){var re1,re2,re3,valstatus;buttype="arm";addstyle="style='color:#FF0000'";tbl_presentinalarm[area]=0;switch(status){case 99:buttype="allarea";addstyle="";break;case 1:valstatus=mainframe.ln_sts[18];buttype="disarm";addstyle="";break;case 2:valstatus=mainframe.ln_sts[15];break;case 3:valstatus="<b>"+mainframe.ln_sts[2]+"</b>";buttype="inalarm";tbl_presentinalarm[area]=1;break;case 4:valstatus=mainframe.ln_sts[19];break;case 5:valstatus=mainframe.ln_sts[20];break;case 6:valstatus=mainframe.ln_sts[21];addstyle="style='color:#CE7109'";break;case 7:valstatus=mainframe.ln_sts[22];addstyle="style='color:#CE7109'";break;case 8:valstatus=mainframe.ln_sts[28];buttype="disarm";addstyle="";break;case 9:valstatus=mainframe.ln_sts[29];buttype="disarm";addstyle="";break;case 10:valstatus=mainframe.ln_sts[30];break;default:break;}re1="<span "+addstyle+">"+valstatus+"</span>";re2="<img id='menu"+id+"' name='but"+id+"' src='"+buttype+"2.png' style='border-width:0px;' onclick=\"top.positionne_sousmenu();if(top.tog_mnu=="+id+"){top.CacherMenus(0);}else{top.MontrerMenu('ssmenu"+id+"');top.tog_mnu="+id+";}\" onmousedown=\"top.roll('but"+id+"', '"+buttype+"1.png');\" onmouseup=\"top.roll('but"+id+"', '"+buttype+"2.png');\" onmouseout=\"top.CacherDelai();top.roll('but"+id+"', '"+buttype+"2.png');\" onmouseover=\"top.AnnulerCacher();\"\>";if(live_stayd=='1'){re3="block";}else{re3="none";}if(mode==0){mainframe.formframe.document.getElementById('st_st'+area).innerHTML=re1;mainframe.formframe.document.getElementById('st_bt'+area).innerHTML=re2;mainframe.formframe.document.getElementById('st_stayd'+area).style.display=re3;return 0;}else if(mode==1){return re1;}else{return re2;}}function savedata(tblu,tblz,stayd){live_tblu=tblu;live_tblz=tblz;live_stayd=stayd;}function updatedata(tblu,tblz,stayd){var i,j;var tbl1=new Array();var tbl2=new Array();var tbl3=new Array();var tbl_ref=new Array();var varea;var refresh=0;if(stayd!=live_stayd){i=0;j=0;for(i=0,j=0;i<tblu.length;i++){if(tblu[i]!=0){tbl1[j++]=i;}}}i=0;j=0;for(i=0,j=0;i<tblu.length;i++){if(tblu[i]!=live_tblu[i]){tbl1[j++]=i;tbl_ref[i]=1;}else{tbl_ref[i]=0;}}i=0;j=0;for(i=0,j=0;i<tblz.length;i++){if(tblz[i]!=live_tblz[i]){tbl2[j++]=mainframe.tbl_zone[(i*2)];}}i=0;for(i=0;i<tbl2.length;i++){for(j=0;j<tblu.length;j++){if(tbltog[j]==1||tbl_presentinalarm[j]==1){varea=(Math.pow(2,(j)));if((varea&tbl2[i])==varea){tbl_ref[j]=1;}}}}savedata(tblu,tblz,stayd);i=0;for(i=0;i<tbl1.length;i++){mainframe.formframe.document.getElementById('border_'+tbl1[i]).style.border="2px solid white";top.st_affpartition(tbl1[i],tblu[tbl1[i]],tblidmenu[tbl1[i]],0);}i=0;for(i=0;i<tbl_ref.length;i++){if(tbl_ref[i]==1){tbltog[i]=!tbltog[i];st_affd(i+1);refresh=1;}}if(refresh){st_refreshexpend(0);}}function updatedata_al(new_data){if(mainframe.infoframe!=undefined){if(mainframe.infoframe.document.getElementById('INALARM')!=null){if(new_data!=tmp_alarme){if(new_data!=""){mainframe.infoframe.document.getElementById('INALARM').innerHTML=top.st_affdata_al(new_data);mainframe.infoframe.document.getElementById('INALARM').style.display="block";}else{mainframe.infoframe.document.getElementById('INALARM').style.display="none";}tmp_alarme=new_data;}}}}function updatedata_tr(new_data){if(new_data!=tmp_trouble){if(new_data!=""){mainframe.formframe.document.getElementById('DT').innerHTML=top.st_affdata_tr(new_data);mainframe.formframe.document.getElementById('DT').style.display="block";}else{mainframe.formframe.document.getElementById('DT').style.display="none";}tmp_trouble=new_data;}}function setsubmit(ar,val){subrequest=1;if(ar<9){ar="0"+ar;}subar=ar;subval=val;if(liveframe.document.statuslive){makesubmit();}}function makesubmit(){subrequest=0;liveframe.document.statuslive.area.value=subar;liveframe.document.statuslive.value.value=subval;liveframe.document.statuslive.submit();}function afflostcom(){var sre;var_d=top.document;sre="<html><head><style type='text/css'>body{background-color: #FFFFFF;height:100%}</style><title>"+top.mainframe.ln_system[3]+"</title></head><body><p style='FONT-SIZE: 12pt;FONT-FAMILY:Arial' Align='center'><br><br>"+top.mainframe.ln_system[4]+"<br>"+top.mainframe.ln_system[6]+"</p></body></html>";_d.open();_d.write(sre);_d.close();}function st_br(i,nm,img){return"<A class='f8 far c1 tn' href='javascript:top.st_affd("+(i+1)+");top.st_refreshexpend(1);'>"+nm+" </a><img src='"+img+".png' alt='' onclick='javascript:top.st_affd("+(i+1)+");top.st_refreshexpend(1);'>";}function st_bra(nm,img){return"<A class='f8 far c1 tn' href='javascript:top.st_affd(0);top.st_refreshexpend(1);'>"+nm+" </a><img src='"+img+".png' alt='' onclick='javascript:top.st_affd(0);top.st_refreshexpend(1);'>";}function st_li(area,id,name){return"<li><a href=\"javascript:top.setsubmit('"+area+"','"+id+"');\"><img src='lookxpvide.gif' align='absmiddle' alt=''/>"+name+"</a></li>";}