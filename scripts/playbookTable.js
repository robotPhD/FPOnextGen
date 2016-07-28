
var x,xmlhttp,xmlDoc
//TODO put back in when requesting from server.
//xmlhttp = new XMLHttpRequest();
//xmlhttp.open("GET", "samplePlaybook.xml", false);
//xmlhttp.send();
//TODO remove when requesting from server.
var xmlString="<?xml version='1.0' encoding='iso-8859-1'?><data><num>25</num><row><PlayID>1347051643597</PlayID><PlayString></PlayString><PlayName>Goal Line 3</PlayName><Playbook>Uncategorized</Playbook><ImageLocation></ImageLocation><CreatedBy>admin</CreatedBy><CreateDate>2012-09-07 17:00:43</CreateDate><UpdateDate>2015-07-29 20:18:20</UpdateDate></row><row><PlayID>1346958604355</PlayID><PlayString></PlayString><PlayName>Mesh</PlayName><Playbook>Uncategorized</Playbook><ImageLocation></ImageLocation><CreatedBy>admin</CreatedBy><CreateDate>2012-09-06 15:10:04</CreateDate><UpdateDate>2012-09-07 00:02:40</UpdateDate></row><row><PlayID>1346875016440</PlayID><PlayString></PlayString><PlayName>Sweep right</PlayName><Playbook>Uncategorized</Playbook><ImageLocation></ImageLocation><CreatedBy>admin</CreatedBy><CreateDate>2012-09-05 15:56:56</CreateDate><UpdateDate>2014-09-05 23:47:46</UpdateDate></row><row><PlayID>1346874532152</PlayID><PlayString></PlayString><PlayName>PA%20Deep%20Corner</PlayName><Playbook>Uncategorized</Playbook><ImageLocation></ImageLocation><CreatedBy>admin</CreatedBy><CreateDate>2012-09-05 15:48:52</CreateDate><UpdateDate>2015-06-13 10:40:54</UpdateDate></row><row><PlayID>1346855826803</PlayID><PlayString></PlayString><PlayName>Goal Line</PlayName><Playbook>Uncategorized</Playbook><ImageLocation></ImageLocation><CreatedBy>admin</CreatedBy><CreateDate>2012-09-05 10:37:06</CreateDate><UpdateDate>2012-09-05 10:47:47</UpdateDate></row><row><PlayID>1346855384220</PlayID><PlayString></PlayString><PlayName>Up and out Test</PlayName><Playbook>Uncategorized</Playbook><ImageLocation></ImageLocation><CreatedBy>admin</CreatedBy><CreateDate>2012-09-05 10:29:44</CreateDate><UpdateDate>2015-07-25 22:05:17</UpdateDate></row></data>";




//TODO remove when requesting from server.
xmlDoc =new window.DOMParser().parseFromString(xmlString, "text/xml")
//TODO put back in when requesting from server.
//xmlDoc = xmlhttp.responseXML;
playList = xmlDoc.getElementsByTagName("row");
table="<table id='playTable'><thead><tr><th>Play Name</th><th>Date Created</th></tr></thead><tbody>";
for (i = 0; i <playList.length; i++) {
  table += "<tr onclick='displayPlayInfo(" + i + ")'><td>";
  table += unescape(playList[i].getElementsByTagName("PlayName")[0].childNodes[0].nodeValue);
  table += "</td><td>";
  table += unescape(playList[i].getElementsByTagName("UpdateDate")[0].childNodes[0].nodeValue);
  table += "</td></tr>";
}
table += "</tbody></table>";
document.getElementById("playTableDiv").innerHTML = table; //put table into HTML doc


//TODO add select extension https://datatables.net/extensions/select/
$('#playTable').DataTable({
  "searching":false,
  "lengthChange":false,
  "select":true

});


function displayPlayInfo(i) {
  document.getElementById("playDisplay").innerHTML =
  "Play: " +
  playList[i].getElementsByTagName("PlayName")[0].childNodes[0].nodeValue +
  "<br>Description: " +
  playList[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue +
  "<br>Update Date: " +
  playList[i].getElementsByTagName("UpdateDate")[0].childNodes[0].nodeValue;
}
