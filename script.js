// Example JavaScript to fetch data from APIs


function fetchNASAImageOfTheDay() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=Nas1LcAXSFQl7UOdwoP0YY9HVWAjdhb1FMujqsyq')
        .then(response => response.json())
        .then(data => {
            const nasaContent = document.getElementById('nasa-content');

            // Check if the media type is an image or video
            if (data.media_type === 'image') {
                nasaContent.innerHTML = `
                    <h3>${data.title}</h3>
                    <img src="${data.url}" alt="${data.title}">
                    <p>${data.explanation}</p>
                `;
            } else if (data.media_type === 'video') {
                // Check if the video is from YouTube
                if (data.url.includes('youtube.com')) {
                    nasaContent.innerHTML = `
                        <h3>${data.title}</h3>
                        <iframe width="560" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>
                        <p>${data.explanation}</p>
                    `;
                } else {
                    nasaContent.innerHTML = `
                        <h3>${data.title}</h3>
                        <p>${data.explanation}</p>
                        <p>Video type not supported for display.</p>
                    `;
                }
            } else {
                nasaContent.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.explanation}</p>
                    <p>Media type not supported for display.</p>
                `;
            }
        })
        .catch(error => console.error('Error fetching NASA APOD data:', error));
}

function fetchNASAEPICImagery() {
    const apiKey = 'Nas1LcAXSFQl7UOdwoP0YY9HVWAjdhb1FMujqsyq';

    fetch(`https://api.nasa.gov/EPIC/api/natural?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const epicContent = document.getElementById('epic-content');

            if (data.length > 0 && data[0].image) {
                const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${data[0].date.slice(0, 4)}/${data[0].date.slice(5, 7)}/${data[0].date.slice(8, 10)}/png/${data[0].image}.png`;

                epicContent.innerHTML = `
                    <h3>EPIC Image of the Day</h3>
                    <img class="epic-image" src="${imageUrl}" alt="EPIC Image">
                    <p>Date: ${data[0].date}</p>
                    <!-- Add more relevant information -->
                `;
            } else {
                epicContent.innerHTML = `
                    <h3>No NASA EPIC imagery data available.</h3>
                `;
            }
        })
        .catch(error => console.error('Error fetching NASA EPIC imagery data:', error));
}

// Example: Fetch NASA Image and Video Library data on page load

// Example JavaScript to fetch data from NASA Mars Rover Photos API

function fetchMarsRoverPhotos() {
    // Replace 'YOUR_API_KEY' with your actual NASA API key
    const apiKey = 'KTSpX3WEGTreOX3DMXvREa9YQg0z2oiWNRhSfwpB';
    
    // Specify the Mars Rover name (e.g., 'Curiosity', 'Opportunity', 'Spirit')
    const roverName = 'Curiosity';

    // Use the NASA Mars Rover Photos API endpoint
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const marsRoverContent = document.getElementById('mars-rover-content');

            if (data.photos.length > 0) {
                // Display the first photo from the response
                const photo = data.photos[0];
                marsRoverContent.innerHTML = `
                    <h3>${photo.rover.name} Rover Photo</h3>
                    <img src="${photo.img_src}" alt="Mars Rover Photo">
                    <p>Date: ${photo.earth_date}</p>
                    <!-- Include other relevant information -->
                `;
            } else {
                marsRoverContent.innerHTML = `
                    <h3>No Mars Rover photos available for the specified sol.</h3>
                `;
            }
        })
        .catch(error => console.error('Error fetching Mars Rover photos:', error));
}

// Example: Fetch Mars Rover Photos on page load

