document.addEventListener('DOMContentLoaded', () => {
    // Reveal all sections and make the body scrollable
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'block';
    });

    // Enable scrolling
    document.body.style.overflow = 'auto';
});


$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();
      
      $.ajax({
        url: $(this).attr('action'),
        method: $(this).attr('method'),
        data: $(this).serialize(),
        success: function(response) {
          alert('Form submitted successfully!');
          $('#contactModal').modal('hide');
          $('#contactForm')[0].reset();
        },
        error: function(error) {
          alert('An error occurred. Please try again.');
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const projectImage = document.getElementById('project-img');
    const projectInfos = document.querySelectorAll('.project-info .info');

    projectInfos.forEach(info => {
        info.addEventListener('click', () => {
            const imgSrc = info.getAttribute('data-img');
            projectImage.setAttribute('src', imgSrc);
        });
    });
});

$(document).ready(function(){
    $('#servicesCarousel').carousel({
      interval: false // Disable built-in interval
    });

    // Custom function to continuously cycle through slides
    function cycleCarousel() {
      $('#servicesCarousel').carousel('next');
      setTimeout(cycleCarousel, 2000); // Adjust the delay between transitions as needed
    }

    // Start cycling through slides
    cycleCarousel();
  });