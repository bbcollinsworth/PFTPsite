(function() {

var makeForm = function(tag, pic) {
  $('#signup-container').one('submit',function(){
        var inputEmail = encodeURIComponent($('#signup-field').val());
        var baseURL = 'https://docs.google.com/forms/d/1_VKPGtjca8RbKaJ_RZG5Ixs_ry7_REER_tKB7poYrw8/formResponse?';
        var emailEntry = 'entry.924917837'
        var tagEntry = 'entry.646248454';
        var picEntry = 'entry.1114145375';
        var submitRef = '&submit=Submit';
        var submitURL = (baseURL + emailEntry + "=" + inputEmail + "&" + tagEntry + "=" + tag + "&" + picEntry + "=" + pic + submitRef);
        // var submitURL = (baseURL + inputEmail + submitRef);
        console.log(submitURL);
        $(this)[0].action=submitURL;
        $('#signup-field').addClass('active').val('');
        alert('Thank you for signing up to be a beta tester! We\'ll be in touch shortly.');
    });
};

   var taglines = [
      "History lives on your doorstep.",
      "History: This time it's personal.",
      "Solve their stories."
   ];

   var bgs = [
      "past-pack",
      "old-photos",
      "rome",
      "pirates",
      "reading"
   ];

   Array.prototype.randomPick = function() {
      return this[Math.floor(Math.random() * this.length)];
   };

   var changeItUp = function() {

      var pickedTag = taglines.randomPick();
      var pickedPic = bgs.randomPick();
      $("#intro-text").find('h2').text(pickedTag);
      $("#background").addClass(pickedPic);

      console.log("Tagline set to: " + pickedTag);
      console.log("BG set to: " + pickedPic);

      makeForm(pickedTag, pickedPic);
   };

   changeItUp();

})();