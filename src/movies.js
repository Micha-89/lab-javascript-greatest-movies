// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {

    const directorsArr = movies.map((movie) => movie.director);

    return directorsArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    const filteredSpielbergMovies = movies.filter(function(movie){
        if (movie.director == "Steven Spielberg" && movie.genre.indexOf('Drama') !== -1) {
            return true;
        }
    })
    
    return filteredSpielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length < 1) {
        return 0;
    }

   const ratesArr = movies.map((movie) => movie.rate);

   const totalRates = ratesArr.reduce(function(arr,val){

    if (val !== '' && val !== undefined) {
      return arr + val;
    } else {
      return arr + 0;
    }

   },0);

   return Number((totalRates/movies.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    if (movies.length < 1) {
        return 0;
    }
    
  const dramaMovies = movies.filter( movie => movie.genre.indexOf('Drama') != -1);
  
  const ratesArr = dramaMovies.map((movie) => movie.rate);
  
  const totalRates = ratesArr.reduce(function(arr,val){

    if (val !== '' && val !== undefined) {
      return arr + val;
    } else {
      return arr + 0;
    }

  },0);

  if (dramaMovies.length < 1) {
       return 0;
  }

  return Number((totalRates/dramaMovies.length).toFixed(2))
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const sortedMovies = JSON.parse(JSON.stringify(movies.sort(function (a,b){
        if(a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        } else {
            return a.year - b.year;
        }
    })));

    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
 
    const alfSortedMovies = [...movies].sort(function (a,b){
        
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        
    });
 
    const first20 = alfSortedMovies.slice(0,20);
  
    const first20Titles = first20.map((movie) => movie.title );
    
    return first20Titles;
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
