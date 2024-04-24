setTimeout(() => {
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        if (scrollPosition >= 100) {
          document.getElementById('miniHeader').style.display = 'block';
        } else {
          document.getElementById('miniHeader').style.display = 'none';
        }
      });
}, 1000);
