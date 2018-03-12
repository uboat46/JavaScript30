    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    var res = inventors.filter(inventor => {
      return (1500 <= inventor.year && inventor.year < 1600);
    })

    document.writeln("Inventors who were born in the 1500´s <br>============================<br>");
    res.forEach(inventor => {
      document.writeln(inventor.first + " " +  inventor.last + " born in, " + inventor.year + "<br>");
    })
    document.writeln("<hr><hr>")

    //=======================================================================================================
    //=======================================================================================================
    //=======================================================================================================

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    res = inventors.map(inventor => {
      return inventor.first + " " + inventor.last;
    })

    document.writeln("Inventors first and last name <br>============================<br>");
    res.forEach((inventor, index) => {
      document.writeln((index + 1) + ".- " + inventor + "<br>");
    })
    document.writeln("<hr><hr>")

    //=======================================================================================================
    //=======================================================================================================
    //=======================================================================================================

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    res = inventors.sort((a, b) => {
      return b.year - a.year;
    })

    document.writeln("Inventors sorted by birthdate (oldest to youngest) <br>============================<br>");
    res.forEach((inventor, index) => {
      document.writeln((index + 1) + ".- " + inventor.first + " " + inventor.last + " - " + inventor.year + "<br>");
    })
    document.writeln("<hr><hr>")

    //=======================================================================================================
    //=======================================================================================================
    //=======================================================================================================

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    res = inventors.reduce((total, inventor, index) => {
      return total + (inventor.passed - inventor.year);
    }, 0)

    document.writeln("Inventor´s total life years <br>============================<br>");
    document.writeln("Total life years = " + res);
    document.writeln("<hr><hr>")
    //=======================================================================================================
    //=======================================================================================================
    //=======================================================================================================

    // 5. Sort the inventors by years lived
    res = inventors.map(inventor => {
      return {name: (inventor.first + " " + inventor.last),
              years: (inventor.passed - inventor.year)}
    }).sort((a, b) =>{
      return b.years - a.years;
    })

    document.writeln("Inventors sorted by years lived <br>============================<br>");
    res.forEach((inventor, index) => {
      document.writeln((index + 1) + ".- " + inventor.name +  " who lived " + inventor.years + " years<br>");
    })
    document.writeln("<hr><hr>")
    //=======================================================================================================
    //=======================================================================================================
    //=======================================================================================================

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    //=======================================================================================================
    //=======================================================================================================
    //=======================================================================================================

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    res = people.map(person =>{
      var name = person.split(',');
      return {first: name[0].trim(), last: name[1].trim()}
    }).sort((a ,b) => {
      return a.last.toLowerCase() > b.last.toLowerCase() ? 1 : -1;
    })

    document.writeln("People sorted alphabetically by last name <br>============================<br>");
    res.forEach((person, index) => {
      document.writeln(`${(index + 1)}.- ${person.first} ${person.last}<br>`);
    })
    document.writeln("<hr><hr>")
    //=======================================================================================================
    //=======================================================================================================
    //=======================================================================================================

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    res = data.reduce((total, obj) => {
      total[obj] != undefined ? (total[obj]++) : (total[obj] = 0);
      return total;      
    }, [])
    
    document.writeln("Sum of instances <br>============================<br>");
    for(obj in res){
      document.writeln(`${obj} = ${res[obj]} <br>`)
    }
    document.writeln("<hr><hr>")
