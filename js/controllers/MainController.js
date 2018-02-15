app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sales';
  $scope.promo = 'Promoted';
  $scope.products = [
    {
      name: 'The Lord of The Rings The Fellowship of The Ring',
      price: 7.7,
      pubdate: new Date('1954', '07', '29'),
      cover: 'img/LOTR-the-fellowship-of-the-ring.jpg',
      likes: 0,
      dislikes: 0,
      summary: 'Mou aresoun'
    },
    {
      name: 'The Lord of The Rings The Two Towers',
      price: 7.2,
      pubdate: new Date('1954', '04', '11'),
      cover: 'img/LOTR-the-two-towers.jpg',
      likes: 0,
      dislikes: 0,
      summary: 'Mou aresoun'
    },
    {
      name: 'The Lord of The Rings The Return of The King',
      price: 6.2,
      pubdate: new Date('1955', '10', '20'),
      cover: 'img/LOTR-the-return-of-the-king.jpg',
      likes: 0,
      dislikes: 0,
      summary: 'Mou aresoun'
    },
    {
      name: 'Harry Potter and The Chamber of Secrets',
      price: 5,
      pubdate: new Date('1998', '07', '02'),
      cover: 'img/HarryPotter.jpg',
      likes: 0,
      dislikes: 0,
      summary: 'Mou aresoun'
    }
  ]
  
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };

}]);