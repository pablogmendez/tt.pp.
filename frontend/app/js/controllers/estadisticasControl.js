miAppAngular.controller("LineCtrl", function ($scope) {

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
  $scope.labels_barchart = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series_barchart = ['Series A', 'Series B'];

  $scope.data_barchart = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  // Radar chart
  $scope.labels_radarchart =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  $scope.data_radarchart = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];

  // Doughnut chart
  $scope.labels_doughnutchart = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data_doughnutchart = [300, 500, 100];

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
    $scope.labels_dynamicchart = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data_dynamicchart = [300, 500, 100, 40, 120];
    $scope.type_dynamicchart = 'polarArea';

    $scope.toggle = function () {
      $scope.type_dynamicchart = $scope.type_dynamicchart === 'polarArea' ?
        'pie' : 'polarArea';
    };
});
              
