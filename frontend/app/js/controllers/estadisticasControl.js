miAppAngular.controller("LineCtrl", function ($scope, $http, gameService, userService, configuracionGlobal) {

  $scope.labels_doughnutchart = [];
  $scope.data_doughnutchart = [];
  //$http.get(configuracionGlobal.api_url + "stat/gamescount/" + userService.data.user + "/all")
  // $http.get(configuracionGlobal.api_url + "stat/gamescount/" + "pablo"+ "/all")
  // .success(function (response) {
  //     console.log(response);
  //   for (i = 0; i < response.length; i++) {
  //     $scope.labels_doughnutchart.push(response[i]._id);
  //     $scope.data_doughnutchart.push(response[i].count);
  //   } 
  // })
  // .error(function (response) {
  //   console.log(response);
  // });


  // Line chart
//  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
//  $scope.series = ['Series A', 'Series B'];
//  $scope.data = [
//    [65, 59, 80, 81, 56, 55, 40],
//    [28, 48, 40, 19, 86, 27, 90]
//  ];
$scope.labels = [];
$scope.series = [];
  $scope.data = [
    [],
    []
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

  $scope.games = ["colorama", "asociaformas", "idobjetos", "mueveimagenes", "mundodeemociones", "completafrases"];
  $scope.attr = ["score", "winLevels", "loseLevels", "abandonLevels", "time", "stars"];
  $scope.dibujar = function() {
    $http.get(configuracionGlobal.api_url + "stat/gameattr/" + "pablo"+ "/" + $scope.selectedGame)
    .success(function (response) {
        $scope.series.push($scope.selectedAttr1);
        $scope.series.push($scope.selectedAttr2);

      for (i = 0; i < response.length; i++) {
        $scope.labels.push(response[i].stat.timestamp);
        $scope.data[0].push(response[i].stat[$scope.selectedAttr1]);
        $scope.data[1].push(response[i].stat[$scope.selectedAttr2]);
      } 
      console.log($scope.data);
    })
    .error(function (response) {
      console.log(response);
    });  
  };

  // Bar chart
  $scope.labels_barchart = [];
  $scope.series_barchart = [];

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

    $scope.partidas = ["totales", "abandonadas", "finalizadas"];
    $scope.graphics = ["Doughnut", "Torta"];

    $scope.toggle = function () {
      $scope.type_dynamicchart = $scope.type_dynamicchart === 'polarArea' ?
        'pie' : 'polarArea';
    };

    $scope.retriveInstance = function () {
      $scope.labels_doughnutchart = [];
      $scope.data_doughnutchart = [];
      var filter;
      if($scope.selectedInstance == "totales") {
        filter = "all";
      } else if ($scope.selectedInstance == "abandonadas") {
        filter = "started";
      } else {
        filter = "finished";
      }
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

    $scope.caracteristicas = ["Puntaje Total", "Niveles Ganados", "Niveles Perdidos", "Niveles Abandonados", "Tiempo Promedio", "Estrellas Promedio"];
    $scope.graphics2 = ["Burbujas", "Barras"];

    $scope.updateBarChart = function (filter) {
      $scope.labels_barchart = ['Formas y Colores', 'Asociaformas', 'IDObjetos', 'CompletaFrases', 'MueveImagenes', 'MundoDeEmociones'];
      $scope.series_barchart = ['Series A'];
      $scope.data_barchart = [];
      var filter;
      if($scope.selectedChar == "Puntaje Total") {
        filter = "score";
      } else if ($scope.selectedChar == "Niveles Ganados") {
        filter = "winLevels";
      } else if ($scope.selectedChar == "Niveles Perdidos") {
        filter = "loseLevels";
      } else if ($scope.selectedChar == "Niveles Abandonados") {
        filter = "abandonLevels";
      } else if ($scope.selectedChar == "Tiempo Promedio") {
        filter = "time";
      } else {
        filter = "stars";
      }
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
              
