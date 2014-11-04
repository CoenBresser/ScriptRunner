'use strict';

function arr_delete(item) {
  for(var i = this.length; i--;) {
    if(this[i] === item) {
      this.splice(i, 1);
    }
  }
}
if (typeof Array.prototype.delete === 'undefined') {
  Array.prototype.delete = arr_delete;
}
function arr_append_if_not_in(item) {
  if (this.indexOf(item) < 0) {
    this.push(item);
  }
}
if (typeof Array.prototype.appendIfNotIn === 'undefined') {
  Array.prototype.appendIfNotIn = arr_append_if_not_in;
}
function str_starts_with(string) {
  return this.slice(0, string.length) == string;
}
if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = str_starts_with;
}
function str_ends_with(string) {
  return this.slice(-string.length) == string;
}
if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = str_ends_with;
}

// Extension of the string prototype
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

var scripts = {
  'Aajk2': { 'id': 'Aajk2', 'name': 'Test lights off', commands: [
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/1/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/7/state', 'body': '{"on": false}' }
  ]},
  'TstLgtsOn': { 'id': 'TstLgtsOn', 'name': 'Test lights on', commands: [
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/1/state', 'body': '{"on": true}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/7/state', 'body': '{"on": true}' }
  ]},
  'TstLgtsOff': { 'id': 'TstLgtsOff', 'name': 'Bedroom on', commands: [
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/3/state', 'body': '{"on": true}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/5/state', 'body': '{"on": true}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/6/state', 'body': '{"on": true}' }
  ]},
  'BdrmOff': { 'id': 'BdrmOff', 'name': 'Bedroom off', commands: [
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/3/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/5/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/6/state', 'body': '{"on": false}' }
  ]},
  'LvngOn': { 'id': 'LvngOn', 'name': 'Living on', commands: [
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/1/state', 'body': '{"on": true}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/2/state', 'body': '{"on": true}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/4/state', 'body': '{"on": true}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/7/state', 'body': '{"on": true}' }
  ]},
  'LvngOff': { 'id': 'LvngOff', 'name': 'Living off', commands: [
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/1/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/2/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/4/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/7/state', 'body': '{"on": false}' }/*,
    {'method': 'post', 'url': 'http://192.168.50.20/MainZone/index.put.asp', 'body': '"cmd0":"PutZone_OnOff/OFF","cmd1":"aspMainZone_WebUpdateStatus/"' }*/
  ]},
  'LlOff': { 'id': 'LlOff', 'name': 'All off', commands: [
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/1/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/2/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/3/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/4/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/5/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/6/state', 'body': '{"on": false}' },
    {'method': 'put', 'url': 'http://192.168.50.102/api/newdeveloper/lights/7/state', 'body': '{"on": false}' }
  ]}
  
};

/* Admin controllers */
angular.module('scriptRunnerApp.controllers', []).
  controller('HeadController', function($scope, $routeParams) {
    $scope.pageName = function() {
      if ($routeParams.scriptId) {
        var scr = scripts[$routeParams.scriptId];
        return scr.name;
      } else {
        return 'ScriptRunner';
      }
    }
  }).
  controller('WelcomeController', function($scope, $location) {
    console.debug('Welcome!');
    $scope.scripts = scripts;
    $scope.go = function (scriptId) {
      $location.path('/' + scriptId);
    }
  }).
  controller('ExecutionController', function($scope, $routeParams, $http) {
    $scope.scriptId = $routeParams.scriptId;
    $scope.state = 'initializing';
    
    // Get the command
    var scr = scripts[$routeParams.scriptId];
    $scope.scriptId = scr.name;
    $scope.pageName = "SR - " + scr.name;
    
    $scope.state = 'running';
    angular.forEach(scr.commands, function(cmd, key) {
      $http({method: cmd.method, url: cmd.url, data: cmd.body}).
        success(function(data, status) {
          // Check the data: [{"error":{"type":6,"address":"/lights/1/on","description":"parameter, on, not available"}}]
          $scope.state = 'success';
        }).
        error(function(data, status) {
          $scope.state = 'failed';
        });
    });
  });
