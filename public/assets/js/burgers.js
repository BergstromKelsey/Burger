
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
          location.reload();
        }
      );
    });


    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurg = {
        burger_name: $("#ca").val().trim(),
        devoured:0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg

      }).then(
        function() {
          console.log("created burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
     });

    
  });
 
