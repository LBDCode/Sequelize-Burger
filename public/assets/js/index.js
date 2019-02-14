$(function() {

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 430) {
        $("#stickyNav").addClass('sticky');
    }
    else {
        $("#stickyNav").removeClass('sticky');
    }
  });

    $(".change-status").on("click", function(e) {
        var burgID = $(this).data("id");
        var devoured = {
            id: burgID,
            devoured: true
        }

        $.ajax("/api/burgers/", {
            type: "PUT",
            data: devoured
        }).then(function() {
            console.log("Ate burger " + burgID);
            location.reload();
        });

    });


    $(".new-burger").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          name: $("#burger").val().trim(),
        };
    
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(function() {
          location.reload();
        });
      });
    


});


