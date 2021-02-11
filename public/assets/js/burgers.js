
$(function() {
    $(".addburg").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newBurg");
  
      var newBurgSnack = {
        devour: newBurger
      };
    
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgSnack
      }).then(
        function() {
          console.log("changed burger to", newBurg);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurg = {
        burger_name: $("#ca").val().trim(),
        devoured:0
        // devoured: $("[burger_name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg




      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
     });
 });
