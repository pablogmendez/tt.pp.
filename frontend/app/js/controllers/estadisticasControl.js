miAppAngular.controller("LineCtrl", function ($scope, $http, gameService, userService, configuracionGlobal) {

  $scope.labels_doughnutchart = [];
  $scope.data_doughnutchart = [];
  //$http.get(configuracionGlobal.api_url + "stat/gamescount/" + userService.data.user + "/all")
  $http.get(configuracionGlobal.api_url + "stat/gamescount/" + "pablo"+ "/all")
  .success(function (response) {
      console.log(response);
    for (i = 0; i < response.length; i++) {
      $scope.labels_doughnutchart.push(response[i]._id);
      $scope.data_doughnutchart.push(response[i].count);
    } 
  })
  .error(function (response) {
    console.log(response);
  });

  // Line chart
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

  // Bar chart
  $scope.labels_barchart = ['Formas y Colores', 'Asociaformas', 'IDObjetos', 'CompletaFrases', 'MueveImagenes', 'MundoDeEmociones'];
  $scope.series_barchart = ['Series A'];

  $scope.data_barchart = [];
  $http.get(configuracionGlobal.api_url + "stat/statcount/" + "pablo"+ "/score")
  .success(function (response) {
      console.log(response);
    for (i = 0; i < response.length; i++) {
      $scope.labels_doughnutchart.push(response[i]._id);
      $scope.data_barchart.push(response[i].total);
    } 
  })
  .error(function (response) {
    console.log(response);
  });

  // Radar chart
  $scope.labels_radarchart =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  $scope.data_radarchart = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];

  // Bubble chart
    $scope.series_bubblechart = ['Series A', 'Series B'];

    $scope.data_bubblechart = [
      [{
        x: 40,
        y: 10,
        r: 20
      }],
      [{
        x: 10,
        y: 40,
        r: 50
      }]
    ];


  // Dynamic chart
    $scope.labels_dynamicchart = [];
    $scope.data_dynamicchart = [];
    $scope.type_dynamicchart = 'polarArea';

    $http.get(configuracionGlobal.api_url + "stat/gamescount/" + "pablo"+ "/all")
    .success(function (response) {
        console.log(response);
      for (i = 0; i < response.length; i++) {
        $scope.labels_dynamicchart.push(response[i]._id);
        $scope.data_dynamicchart.push(response[i].count);
      } 
    })
    .error(function (response) {
      console.log(response);
    });

    $scope.toggle = function () {
      $scope.type_dynamicchart = $scope.type_dynamicchart === 'polarArea' ?
        'pie' : 'polarArea';
    };

    $scope.updateDinamicChart = function (filter) {
      $scope.labels_doughnutchart = [];
      $scope.data_doughnutchart = [];
        //$http.get(configuracionGlobal.api_url + "stat/gamescount/" + userService.data.user + "/all")
        $http.get(configuracionGlobal.api_url + "stat/gamescount/" + "pablo"+ "/" + filter)
        .success(function (response) {
            console.log(response);
            for (i = 0; i < response.length; i++) {
              $scope.labels_dynamicchart.push(response[i]._id);
              $scope.data_dynamicchart.push(response[i].count);
            } 
        })
        .error(function (response) {
          console.log(response);
        });
    }

    $scope.updateDoughnutChart = function (filter) {
      $scope.labels_doughnutchart = [];
      $scope.data_doughnutchart = [];
        //$http.get(configuracionGlobal.api_url + "stat/gamescount/" + userService.data.user + "/all")
        $http.get(configuracionGlobal.api_url + "stat/gamescount/" + "pablo"+ "/" + filter)
        .success(function (response) {
            console.log(response);
          for (i = 0; i < response.length; i++) {
            $scope.labels_doughnutchart.push(response[i]._id);
            $scope.data_doughnutchart.push(response[i].count);
          } 
        })
        .error(function (response) {
          console.log(response);
        });
    }

    $scope.updateBarChart = function (filter) {
      $scope.data_barchart = [];
      $http.get(configuracionGlobal.api_url + "stat/statcount/" + "pablo"+ "/" + filter)
      .success(function (response) {
          console.log(response);
        for (i = 0; i < response.length; i++) {
          if(filter == "stars" || filter == "time") {
            $scope.data_barchart.push(response[i].total/response[i].count);
          } else {
            $scope.data_barchart.push(response[i].total);
          }
        } 
      })
      .error(function (response) {
        console.log(response);
      });
    }
});
              
