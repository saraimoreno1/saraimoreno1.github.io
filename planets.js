function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  // ========== Sound Setup ==========
  const clickSound = new Audio("sounds/click.mp3"); 
  
  const planetInfo = {
    Earth: {
      description: "1. Earth is our home planet and the only one known to support life.",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGh8ZW58MHx8MHx8fDA%3D"
    },
    Saturn: {
      description: "Saturn is famous for its beautiful ring system.",
      image: "https://plus.unsplash.com/premium_photo-1680078670686-6fc2a610cc52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2F0dXJufGVufDB8fDB8fHww"
    },
    Neptune: {
      description: "Neptune is a windy, icy planet farthest from the Sun.",
      image: "https://plus.unsplash.com/premium_photo-1717687637766-9d29a68c019d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmVwdHVuZSUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    Jupiter: {
      description: "Jupiter is the largest planet in the solar system.",
      image: "https://plus.unsplash.com/premium_photo-1719104087061-6f73947c4c43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anVwaXRlciUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    Mercury: {
      description: "Mercury is the closest planet to the Sun.",
      image: "https://media.istockphoto.com/id/499771042/photo/mercury-in-colour.jpg?s=612x612&w=0&k=20&c=1BerGIwehIUaWi7YfD6e_-TM8oFbFPvUwhTZ04O3e-Q="
    },
    Venus: {
      description: "Venus is the hottest planet due to its thick atmosphere.",
      image: "https://media.istockphoto.com/id/1009152604/photo/jupiter-planet-black-background.jpg?s=612x612&w=0&k=20&c=swKgPmnheJiMX_gC4wpI6Szu8j3_76_2JMTv8la_VgY="
    },
    Uranus: {
      description: "Uranus rotates on its side and has a bluish color.",
      image: "https://plus.unsplash.com/premium_photo-1717687637655-b8482e7023ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVyYW51cyUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    Mars: {
      description: "Mars is known as the Red Planet and may have once had water.",
      image: "https://media.istockphoto.com/id/647269852/photo/planet-mars.jpg?s=612x612&w=0&k=20&c=QG3rqHjFoO59LY_MNSyE2CxCPfgtUUKEdNpgebZtgRI="
    }
  };
  
  // ========== Update Display ==========
  function updatePlanetDisplay(planetName) {
    const infoBox = document.getElementById("Information");
    const overlay = document.getElementById("popupOverlay");
    const data = planetInfo[planetName];
  
    if (data) {
      infoBox.innerHTML = `
        <button id="closePopup" aria-label="Close popup">&times;</button>
        <h3>${planetName}</h3>
        <img src="${data.image}" alt="${planetName}">
        <p>${data.description}</p>
      `;
  
      // Show popup and overlay
      infoBox.style.display = 'block';
      overlay.style.display = 'block';
    }
  
    // Play sound
    clickSound.currentTime = 0;
    clickSound.play();
  }
  
  // Close popup when close button or overlay is clicked
  document.body.addEventListener('click', function(e) {
    const infoBox = document.getElementById("Information");
    const overlay = document.getElementById("popupOverlay");
  
    if (e.target.id === 'closePopup' || e.target.id === 'popupOverlay') {
      infoBox.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
  
  
  
  document.getElementById("planetForm").addEventListener("change", function (event) {
    const selectedPlanet = event.target.value;
    updatePlanetDisplay(selectedPlanet);
  });
  
  document.querySelectorAll('.sidenav a[data-planet]').forEach(link => {
    link.addEventListener('click', function () {
      const planet = this.getAttribute('data-planet');
  
      // Check corresponding radio button
      const radio = document.querySelector(`input[type="radio"][value="${planet}"]`);
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
      }
  
      closeNav();
    });
  });
  
