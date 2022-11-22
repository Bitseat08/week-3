/*function lastminusfirst (x) {
    return x[x.length - 1] - x[0]; }
    let age = [3, 9, 23, 64, 67, 2, 8, 28, 93]; 
    console.log(lastminusfirst(age));
    *//////////////////////////
    
    /*function lastminusfirst (x) {
    return x[x.length - 1] - x[0]; }
    let age = [ 3, 9, 23, 64, 67, 2, 8, 28, 93, 89]; console.log(lastminusfirst(age));
    *///////////////////////////
   
   /* function findaverage(x) {
    var sum = 0;
    var i;
    for(i=0 ; i< x.length; i=i+1) {
    sum = sum + x[i]; }
    return ave = sum / x.length ; }
    let age = [ 3, 9, 23, 64, 2, 8, 28, 93]; //console.log(findaverage(age));
    console.log(findaverage(age));
     */////////////////////////

      /*function findaveofnumofcharacters(x) {
    for
    {
    } {
    console.log(x); }

    (let i=0; i<x.length; i=i+1) x[i] = x[i].length ;
    var sum
    for (var i=0; i<x.length; i=i+1) //x.length remains
    {
    sum = sum + x[i];
    } {
    console.log ("average is:" + sum/x.length); }
    
    
     [ 3, 5, 3, 5, 4, 3 ]
    *///////////////////////////////

     /*function findaveofnumofcharacters(x) {
    for
    {
    } {
    console.log(x); }
    (let i=0; i<x.length; i=i+1) x[i] = x[i].length ;
    var sum
    for (var i=0; i<x.length; i=i+1) //x.length remains
    {
    sum = sum + x[i];
    } {
    console.log ("average is:" + sum/x.length); }
   *//////////////////////////////
    
   /*for any array x, the last element is accessed by indexing x[x.length – 1]. 4. for any array x, the first element is accessed by indexing x[0].
      function nameLength(x) {
    for(i=0; i<x.length; i++) {
    x[i] =x[i].length; }
    console.log (x) }
    let names =["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; nameLength(names);
    
    *////////////////////////////
    
      /* function sumnameLength(x) {
    for(i=0; i<x.length; i++) {
    x[i] =x[i].length; }
    console.log (x)
    var sum =0 for(i=0;i<x.length; i++) {
    sum = sum + x[i]; }
    console.log (sum)
    }
    let names =["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; sumnameLength(names);
*//////////////////////////////////

      /* function wordandn(word, n) {
    var newword = word.repeat(n);
    console.log ([newword]) }
    wordandn("hello",4)
   *////////////////////////////////////
     
       /*function firstnamelastname(f,l) {
    console.log (f ,'', l) }
    firstnamelastname("Bitseat", "Mulushewa" )
    *////////////////////////////////////////

    /*function firstnamelastname(f,l) {
    console.log (f ,'', l) }
    firstnamelastname("Bitseat", "Mulushewa" )
*////////////////////////////////

   /* var sum=0
    for (i=0; i>x.length ; i++); {
    sum = sum + x[i];
    }
    console.log("the averageis", sum / x.length) }
    let numbers= [ 27,28,53,42]; average(numbers)
     
     *//////////////////////////////////////////

    /* function average (x,y) {
    var sum1 = 0
    for (i=0; i<x.length ; i++) {
    sum1= sum1 + x[i]; }
    var sum2 = 0
    for(i=0; i<y.length ; i++) {
    sum2 = sum2 + y[i]; }
    console.log(sum1/x.length > sum2/y.length ); }
    let numbers= [27,28,53,42]; let ages = [14, 24,82 ]; average(numbers, ages)
     *//////////////////////////

      /*function willBuyDrink (weather, money)
    {
    if ( weather == "isHotOutside" && money > 10.50) {
    console.log (true); }
    else
    {
     
     console.log (false); }
    }
    willBuyDrink("isHotOutsid", 12)
    *//////////////////////////////
     // the following algorithm will take the income of husband and wife and
     //calculating thier tax return separatly and as well as joint

    /*function taxReturn (w,h1,h2) // one income from wife and two income from husbsnd {
    var rate // based on the tax bracket of 2022 const wtw = 0; //wtw = wife's tax withholding var wtr; // wtr= wife's estimeted tax return if (w<=55000)
    {
    rate = 0.12*w ; // assumes head of household wtr = wtw - rate ;
    }
    else
    {
    rate + 0.22 * w ; wtr = wtw-rate ;
    }
    console.log("wife's tax return is:",wtr);
    var h1w = 0.28*h1; //h1w = husband's withholding from income 1 const h2w = 0 ;
     let htw = h1w + let h = h1 + h2 if (h <= 90000) {
    rate = 0.22
    else
    {
        rate = 0.24*h;
    htr = htw-rate; }
    console.log("husband's total return is:",htr);
    }
                * h;
    htr=htw - rate ;
    h2w //htw = husband's total withholding ;
    
    var jtr; // jtr =joint tax return
    let ttw= wtw + htw ; //ttw = total tax withholdings let ti = w + h; // ti = total income
    if (ti <= 180000) {
    rate = 0.22 * ti;
    jtr= ttw-rate; }
    else
    {
    rate = 0.24*ti;
    jtr = ttw - rate; }
    console.log( "else if jointly filing the total return is:",jtr); }
    taxReturn (50000,87000,20000);
    */