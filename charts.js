// Social Media Data
const socialMediaLabels = ['Instagram', 'TikTok', 'YouTube', 'Facebook', 'Snapchat', 'Twitter (X)', 'LinkedIn'];
const socialMediaData = [850, 780, 900, 600, 550, 450, 300];

// Social Media Chart - Horizontal Bar Chart
new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: socialMediaLabels,
    datasets: [{
      label: 'Users (in millions)',
      data: socialMediaData,
      backgroundColor: '#36A2EB'
    }]
  },
  options: {
    indexAxis: 'y', // Horizontal bar chart
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Social Media Usage - Horizontal Bar Chart (by Sarai Moreno)',
        font: { size: 18 }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          font: { size: 14 } // Adjust font size for readability
        }
      },
      y: {
        ticks: {
          font: { size: 14 }, // Adjust font size for readability
          padding: 10 // Add padding to avoid overlap
        }
      }
    },
    layout: {
      padding: { top: 20, bottom: 20 } // Add space around the chart
    }
  }
});

// Makeup Data
const makeupLabels = ['Fenty Beauty', 'Maybelline', 'MAC', 'Rare Beauty', 'NARS', 'Too Faced', 'e.l.f.'];
const makeupData = [700, 680, 650, 620, 580, 550, 500];

// Doughnut Chart - Makeup Brands
new Chart(document.getElementById('makeupChart'), {
  type: 'doughnut',
  data: {
    labels: makeupLabels,
    datasets: [{
      data: makeupData,
      backgroundColor: [
        '#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#9966FF', '#C9CBCF'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Most Used Makeup Brands - Doughnut Chart (by Sarai Moreno)',
        font: { size: 16 }
      }
    }
  }
});

