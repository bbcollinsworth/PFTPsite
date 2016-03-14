(function() {

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
   };

   changeItUp();

})();