$(document).ready(function() {

    $('#toggleDarkMode').click(function() {

        $('html').attr('data-bs-theme', function(_, value) {
            return value === 'dark' ? null : 'dark';
        });
    });
});

$(document).ready(function () {
    // Add animation to each flashcard with a delay
    $(".flashcard").each(function (index) {
        $(this).addClass("fadeInUp").css("animation-delay", index * 0.5 + "s");
    });
});

$(document).ready(function() {
    $('.card').hover(
      function(){
        $(this).animate({
          marginTop: "-=1%",
        }, 200);
      },
      function(){
        $(this).animate({
          marginTop: "0%",
        }, 200);
      }
    );
  });

  $(document).ready(function() {
    $(".flashcard").click(function() {
        $(this).toggleClass("flipped");
    });
});



$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".flashcard-container").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

function playModeChangeSound() {

    var audio = document.getElementById("modeChangeSound");


    if (audio && typeof audio.play === 'function') {
        // Play the sound
        audio.play();
    }
}

$(document).ready(function () {

    function filterCards(searchQuery) {

        searchQuery = searchQuery.toLowerCase();


        $('.card').each(function () {
            var cardTitle = $(this).find('.card-title').text().toLowerCase();
            var cardText = $(this).find('.card-text').text().toLowerCase();


            if (cardTitle.includes(searchQuery) || cardText.includes(searchQuery)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

   
    $('#searchForm').submit(function (e) {
        e.preventDefault(); 


        var searchQuery = $('#searchInput').val();

     
        filterCards(searchQuery);
    });
});



document.getElementById("contactForm").addEventListener("submit", function (event) {
    // You can add your form submission logic here
    alert("Form submitted!");
    event.preventDefault(); // Prevents the default form submission
  });


  $(document).ready(function() {
    $(".container p").each(function(index) {
        $(this).delay(500 * index).slideDown(1000);
    });
});