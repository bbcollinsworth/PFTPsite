(function() {

  var makeForm = function(tag, pic) {
    $('#signup-container').one('submit', function() {
      var inputEmail = encodeURIComponent($('#signup-field').val());
      var baseURL = 'https://docs.google.com/forms/d/1_VKPGtjca8RbKaJ_RZG5Ixs_ry7_REER_tKB7poYrw8/formResponse?';
      var emailEntry = 'entry.924917837';
      var tagEntry = 'entry.646248454';
      var picEntry = 'entry.1114145375';
      var submitRef = '&submit=Submit';
      var submitURL = (baseURL + emailEntry + "=" + inputEmail + "&" + tagEntry + "=" + tag + "&" + picEntry + "=" + pic + submitRef);
      // var submitURL = (baseURL + inputEmail + submitRef);
      console.log(submitURL);
      $(this)[0].action = submitURL;
      $('#signup-field').addClass('active').val('');

      var renderThanks = function() {
        var hide = function(element) {
          $(element).css({
            'display': 'none'
          });
        }
        hide('#signup-container');

        $('#intro-text').html('<h2 class="thankYou">Thanks!</h2><p>We\'ll keep you posted about the beta launch.</p>');
        //hide('p');
      };

      renderThanks();
      //alert('Thank you for signing up to be a beta tester! We\'ll be in touch shortly.');
    });
  };

  var taglines = [{
    'h': "History lives on your doorstep.",
    't': "Discover stories of people from the past through monthly packages from another place and time."
  }, {

    'h': "Solve their stories.",
    't': "Discover the lives of people from the past through monthly packages from another place and time."

  }];

  var bgs = [
    "past-pack",
    "old-photos",
    "rome",
    "pirates",
    "reading",
    "inca",
    "box",
    "civil-war"
  ];

  Array.prototype.randomPick = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

  //   $('#signup-button').on('click', function() {

  //     var renderThanks = function(){
  //     var hide = function(element){
  //       $(element).css({
  //       'display': 'none'
  //     });
  //     }
  //     hide('#signup-container');

  //     $('#intro-text').html('<h2>Thanks!</h2>');
  //     //hide('p');
  // };
  //   });

  var changeItUp = function() {

    var pickedTag = taglines.randomPick();
    var pickedPic = bgs.randomPick();
    $("#intro-text").find('h2').text(pickedTag.h);
    $("#tagline-body").text(pickedTag.t);

    $("#background").addClass(pickedPic);

    console.log("Tagline set to: " + pickedTag);
    console.log("BG set to: " + pickedPic);

    makeForm(pickedTag.h, pickedPic);
  };

  //$(document).ready(function() {
  changeItUp();
  //});

})();