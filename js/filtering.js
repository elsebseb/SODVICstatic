
$(document).ready(function() {

    $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    percentPosition: true,
    masonry: {
      columnWidth: 10,
       "gutter": 20
     }
   });
});
// page 3 functions code

  var FYisOn = false;
  var MisOn = false;
  var IndisOn = false;
  var CCisOn = false;
  var PGisOn = false
  var v1 = v1 == 0 ? 1 : 0; // formula to get 0 or 1 numbers
  var v2 = v2 == 0 ? 1 : 0; // formula to get 0 or 1 numbers
  var v3 = v3 == 0 ? 1 : 0; // formula to get 0 or 1 numbers
  var v4 = v4 == 0 ? 1 : 0; // formula to get 0 or 1 numbers
  var v5 = v5 == 0 ? 1 : 0; // formula to get 0 or 1 numbers


  FyBtn = function(){
    if(FYisOn === true){
      $("#fy_img").attr('src', '\img/SoD_FirstYearIcon_Optimised.svg');
    }
    if(FYisOn === false){
      $("#fy_img").attr('src', '\img/SoD_FirstYearIcon_Inactive_Optimised.svg');
    }
  }
  mediaBtn = function(){
    if(MisOn === true){
        $("#media_img").attr('src', '\img/SoD_MediaIcon_Optimised.svg');
    }
    if(MisOn === false){
        $("#media_img").attr('src', '\img/SoD_MediaIcon_Inactive_Optimised.svg');
    }
  }
  indBtn = function(){
    if(IndisOn === true){
      $("#industrial_img").attr('src', '\img/SoD_IndustrialIcon_Optimised.svg');
    }
    if(IndisOn === false){
      $("#industrial_img").attr('src', '\img/SoD_IndustrialIcon_Inactive_Optimised.svg');
    }
  }
  ccBtn = function(){
    if(CCisOn === true){
      $("#cc_img").attr('src', '\img/SoD_CultureContextIcon_Optimised.svg');
    }
    if(CCisOn === false){
      $("#cc_img").attr('src', '\img/SoD_CultureContextIcon_Inactive_Optimised.svg');
    }
  }
  pgBtn = function(){
    if(PGisOn === true){
      $("#postgrad_img").attr('src', '\img/SoD_PostGradIcon_Optimised.svg');
    }
    if(PGisOn === false){
      $("#postgrad_img").attr('src', '\img/SoD_PostGradIcon_Inactive_Optimised.svg');
    }
  }
  filtering = function(){
    if(v1==0 && v2==0 && v3==0 && v4==0 && v5==0){// none selected
          $('.grid').isotope({ filter: '*' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "All Departments" );
    }
    if(v1==1 && v2==0 && v3==0 && v4==0 && v5==0){// first year only
          $('.grid').isotope({ filter: '.fy' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design" );
    }
    if(v1==1 && v2==1 && v3==0 && v4==0 && v5==0){// first year and media selected
          $('.grid').isotope({ filter: '.fy, .media' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span> and <span class='mediaTxt'>Media Design</span>" );
    }
    if(v1==0 && v2==1 && v3==0 && v4==0 && v5==0){// media only
          $('.grid').isotope({ filter: '.media' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='mediaTxt'>Media Design</span>" );
    }
    if(v1==0 && v2==0 && v3==1 && v4==0 && v5==0){// industrial only
          $('.grid').isotope({ filter: '.ind' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='indTxt'>Industrial Design</span>" );
    }
    if(v1==1 && v2==0 && v3==1 && v4==0 && v5==0){//industrial, fy
          $('.grid').isotope({ filter: '.fy, .ind' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span> and <span class='indTxt'>Industrial Design</span>" );
    }
    if(v1==0 && v2==1 && v3==1 && v4==0 && v5==0){// media, industrial
          $('.grid').isotope({ filter: '.media, .ind' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='mediaTxt'>Media Design</span> and <span class='indTxt'>Industrial Design</span>" );
    }
    if(v1==1 && v2==1 && v3==1 && v4==0 && v5==0){// first year, media and industrial
          $('.grid').isotope({ filter: '.ind, .fy, .media' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='mediaTxt'>Media Design</span> and <span class='indTxt'>Industrial Design</span>" );
    }
    if(v1==0 && v2==0 && v3==0 && v4==1 && v5==0){// cultrue and context only
          $('.grid').isotope({ filter: '.cc' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='ccTxt'>Culture and Context</span>" );
    }
    if(v1==1 && v2==0 && v3==0 && v4==1 && v5==0){
          $('.grid').isotope({ filter: '.fy, .cc' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span> and <span class='ccTxt'>Culture and Context</span>" );
    }
    if(v1==0 && v2==1 && v3==0 && v4==1 && v5==0){
          $('.grid').isotope({ filter: '.media, .cc' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='mediaTxt'>Media Design</span> and <span class='ccTxt'>Culture and Context</span>" );
    }
    if(v1==0 && v2==0 && v3==1 && v4==1 && v5==0){
          $('.grid').isotope({ filter: '.ind, .cc' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='indTxt'>Industrial Design</span> and <span class='ccTxt'>Culture and Context</span>" );
    }
    if(v1==1 && v2==1 && v3==0 && v4==1 && v5==0){
          $('.grid').isotope({ filter: '.fy, .media, .cc' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='mediaTxt'>Media Design</span> and <span class='ccTxt'>Culture and Context</span>" );
    }
    if(v1==0 && v2==1 && v3==1 && v4==1 && v5==0){
          $('.grid').isotope({ filter: '.media, .ind, .cc' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='mediaTxt'>Media Design</span>, <span class='indTxt'>Industrial Design</span> and <span class='ccTxt'>Culture and Context</span>" );
    }
    if(v1==1 && v2==0 && v3==1 && v4==1 && v5==0){
          $('.grid').isotope({ filter: '.fy, .ind, .cc' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='indTxt'>Industrial Design</span> and <span class='ccTxt'>Culture and Context</span>" );
    }
    if(v1==1 && v2==1 && v3==1 && v4==1 && v5==0){
          $('.grid').isotope({ filter: '.fy, .media, .ind, .cc' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='mediaTxt'>Media Design</span>, <span class='indTxt'>Industrial Design</span> and <span class='ccTxt'>Culture and Context</span>" );
    }
    if(v1==0 && v2==0 && v3==0 && v4==0 && v5==1){
          $('.grid').isotope({ filter: '.pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==1 && v2==0 && v3==0 && v4==0 && v5==1){
          $('.grid').isotope({ filter: '.fy, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==0 && v2==1 && v3==0 && v4==0 && v5==1){
          $('.grid').isotope({ filter: '.media, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='mediaTxt'>Media Design</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==0 && v2==0 && v3==1 && v4==0 && v5==1){
          $('.grid').isotope({ filter: '.ind, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='indTxt'>Industrial Design</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==0 && v2==0 && v3==0 && v4==1 && v5==1){
          $('.grid').isotope({ filter: '.cc, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='ccTxt'>Culture and Context</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==1 && v2==1 && v3==0 && v4==0 && v5==1){
          $('.grid').isotope({ filter: '.fy, .media, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='mediaTxt'>Media Design</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==1 && v2==0 && v3==1 && v4==0 && v5==1){
          $('.grid').isotope({ filter: '.fy, .ind, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='indTxt'>Industrial Design</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==1 && v2==0 && v3==0 && v4==1 && v5==1){
          $('.grid').isotope({ filter: '.fy, .cc, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='ccTxt'>Culture and Context</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==0 && v2==1 && v3==1 && v4==0 && v5==1){
          $('.grid').isotope({ filter: '.media, .ind, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='mediaTxt'>Media Design</span>, <span class='indTxt'>Industrial Design</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==0 && v2==1 && v3==0 && v4==1 && v5==1){
          $('.grid').isotope({ filter: '.media, .cc, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='mediaTxt'>Media Design</span>, <span class='ccTxt'>Culture and Context</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==0 && v2==0 && v3==1 && v4==1 && v5==1){
          $('.grid').isotope({ filter: '.ind, .cc, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='indTxt'>Industrial Design</span>, <span class='ccTxt'>Culture and Context</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==1 && v2==1 && v3==1 && v4==0 && v5==1){
          $('.grid').isotope({ filter: '.fy, .media, .ind, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='mediaTxt'>Media Design</span>, <span class='indTxt'>Industrial Design</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==1 && v2==1 && v3==0 && v4==1 && v5==1){
          $('.grid').isotope({ filter: '.fy, .media, .cc, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='mediaTxt'>Media Design</span>, <span class='ccTxt'>Culture and Context</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==1 && v2==0 && v3==1 && v4==1 && v5==1){
          $('.grid').isotope({ filter: '.fy, .ind, .cc, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='fyTxt'>First Year Design</span>, <span class='indTxt'>Industrial Design</span>, <span class='ccTxt'>Culture and Context</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==0 && v2==1 && v3==1 && v4==1 && v5==1){
          $('.grid').isotope({ filter: '.media, .ind, .cc, .pg' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "<span class='mediaTxt'>First Year Design</span>, <span class='indTxt'>Industrial Design</span>, <span class='ccTxt'>Culture and Context</span> and <span class='pgTxt'>Post Graduate</span>" );
    }
    if(v1==1 && v2==1 && v3==1 && v4==1 && v5==1){
          $('.grid').isotope({ filter: '*' });
          $( "#breadcrumbs" ).empty();
          $( "#breadcrumbs" ).append( "All Departments" );
    }
  }

// filter .department items
$( ".firstYear" ).click(function() {
    v1 = v1 == 0 ? 1 : 0; // each time user clicks it toggles lights on and off
    if(v1 === 1){
      FYisOn = true;
    }
    else{
      FYisOn = false;;
    }
    FyBtn();
    filtering();
   });

$( ".mediaa" ).click(function() {
  v2 = v2 == 0 ? 1 : 0; // each time user clicks it toggles lights on and off
  if(v2 === 1){
    MisOn = true;
  }
  else{
    MisOn = false;
  }
  mediaBtn();
  filtering();
});
$( ".industrial" ).click(function() {
  v3 = v3 == 0 ? 1 : 0; // each time user clicks it toggles lights on and off
  if(v3 === 1){
    IndisOn = true;
    console.log('hello');
  }
  else{
    IndisOn = false;
    console.log('nah');
  }
  indBtn();
  filtering();
});
$( ".culture" ).click(function() {
  v4 = v4 == 0 ? 1 : 0; // each time user clicks it toggles lights on and off
  if(v4 === 1){
    CCisOn = true;
  }
  else{
    CCisOn = false;
  }
  ccBtn();
  filtering();
});
$( ".postgrad" ).click(function() {
  v5 = v5 == 0 ? 1 : 0; // each time user clicks it toggles lights on and off
  if(v5 === 1){
    PGisOn = true;
  }
  else{
    PGisOn = false;
  }
  pgBtn();
  filtering();
});
$( ".reset" ).click(function() {
  v1 = 0;
  v2 = 0;
  v3 = 0;
  v4 = 0;
  v5 = 0;
  FYisOn = false;
  MisOn = false;
  IndisOn = false;
  CCisOn = false;
  PGisOn = false;
  $("#fy_img").attr('src', '\img/SoD_FirstYearIcon_Inactive_Optimised.svg');
  $("#media_img").attr('src', '\img/SoD_MediaIcon_Inactive_Optimised.svg');
  $("#industrial_img").attr('src', '\img/SoD_IndustrialIcon_Inactive_Optimised.svg');
  $("#cc_img").attr('src', '\img/SoD_CultureContextIcon_Inactive_Optimised.svg');
  $("#postgrad_img").attr('src', '\img/SoD_PostGradIcon_Inactive_Optimised.svg');
  $( "#breadcrumbs" ).empty();
  $( "#breadcrumbs" ).append( "All Departments" );
  $('.grid').isotope({ filter: '*' });
});
/**
 * Do the clicking stuff
 *
 */

(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();


// $( ".industrial" ).click(function() {
//   $('.grid').isotope({ filter: '.ind' });
// });
// $( ".culture" ).click(function() {
//   $('.grid').isotope({ filter: '.cc' });
// });
// $( ".reset" ).click(function() {
//   $('.grid').isotope({ filter: '*' });
// });
// filter functions
