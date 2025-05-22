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
      description: "Earth is our home planet and the only one known to support life.",
      image: "images/earth.jpg"
    },
    Saturn: {
      description: "Saturn is famous for its beautiful ring system.",
      image: "images/saturn.jpg"
    },
    Neptune: {
      description: "Neptune is a windy, icy planet farthest from the Sun.",
      image: "images/neptune.jpg"
    },
    Jupiter: {
      description: "Jupiter is the largest planet in the solar system.",
      image: "images/jupiter.jpg"
    },
    Mercury: {
      description: "Mercury is the closest planet to the Sun.",
      image: "images/mercury.jpg"
    },
    Venus: {
      description: "Venus is the hottest planet due to its thick atmosphere.",
      image: "images/venus.jpg"
    },
    Uranus: {
      description: "Uranus rotates on its side and has a bluish color.",
      image: "images/uranus.jpg"
    },
    Mars: {
      description: "Mars is known as the Red Planet and may have once had water.",
      image: "images/mars.jpg"
    }
  };
  
  // ========== Update Display ==========
  function updatePlanetDisplay(planetName) {
    const infoBox = document.getElementById("Information");
    const gallery = document.getElementById("Gallery");
    const data = planetInfo[planetName];
  
    if (data) {
      infoBox.innerHTML = `
        <h3>${planetName}</h3>
        <p>${data.description}</p>
      `;
      gallery.innerHTML = `
        <img src="${data.image}" alt="${planetName}">
      `;
    }
  
    // Play sound
    clickSound.currentTime = 0;
    clickSound.play();
  }
  
  // ========== Radio Button Event ==========
  document.getElementById("planetForm").addEventListener("change", function (event) {
    const selectedPlanet = event.target.value;
    updatePlanetDisplay(selectedPlanet);
  });
  
  // ========== Sidebar Link Clicks ==========
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
  