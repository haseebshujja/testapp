/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
	
        alert("alert");
        app.receivedEvent('deviceready');
		
		 
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {

      
        var request;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.open('GET', 'http://hubapiv2.azurewebsites.net/api/device?HubId=hub1');
       
            
        request.onreadystatechange = function () {
          
            if ((request.readyState === 4) && (request.status === 200)) {
                    
                var items = JSON.parse(request.responseText);
                var count = 0;
                var temp;
                var tbl = document.getElementById('sensorTable');

                var tableBody = tbl.childNodes[1];
                for (var key in items) {
                    temp = items[key];

                    for (var index in temp) {


                        var row = document.createElement('tr');
                        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);

                        // Add some text to the new cells:
                        cell1.innerHTML = index;
                        cell2.innerHTML = temp[index].Id;
                        cell3.innerHTML = temp[index].Location;
                        cell4.innerHTML = temp[index].DeviceState;


                        tableBody.insertRow(row);
                        count += 1;

                    }

                }
                tableBody.deleteRow(1);
                    


            }

        }
        request.send();
    
    }
	
};
//function myFunction() {
            
//            var request;
//            if (window.XMLHttpRequest) {
//                request = new XMLHttpRequest();
//            } else {
//                request = new ActiveXObject("Microsoft.XMLHTTP");
//            }
//            request.open('GET', 'http://hubapiv2.azurewebsites.net/api/device?HubId=hub1');
//           // request.timeout = 5000;
            
//            request.onreadystatechange = function () {
//               // alert(request.status);
//                if ((request.readyState === 4) && (request.status === 200)) {
                    
//                    var items = JSON.parse(request.responseText);
//                    var count = 0;
//                    var temp;
//                    var tbl = document.getElementById('sensorTable');

//                    var tableBody = tbl.childNodes[1];
//                    for (var key in items) {
//                        temp = items[key];

//                        for (var index in temp) {


//                            var row = document.createElement('tr');
//                            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
//                            var cell1 = row.insertCell(0);
//                            var cell2 = row.insertCell(1);
//                            var cell3 = row.insertCell(2);
//                            var cell4 = row.insertCell(3);

//                            // Add some text to the new cells:
//                            cell1.innerHTML = index;
//                            cell2.innerHTML = temp[index].Id;
//                            cell3.innerHTML = temp[index].Location;
//                            cell4.innerHTML = temp[index].DeviceState;


//                            tableBody.insertRow(row);
//                            count += 1;

//                        }

//                    }
//                    tableBody.deleteRow(1);
                    


//                }

//            }
//            request.send();
//        };
