<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Cosmic Hub</title>
</head>
<body>

<?php include('header.php'); ?>

<main>
    <section>
        <h1>Welcome to Cosmic Hub</h1>
        <p>Explore the wonders of the cosmos with information from NASA.</p>
    </section>

    <section id="nasa-section">
        <h2>NASA Exploration</h2>
        <div id="nasa-content"></div>
        <button type="button" onclick="fetchNASAImageOfTheDay()">Load NASA Data</button>
    </section>

    <section id="epic-section">
        <h2>NASA EPIC Imagery</h2>
        <div id="epic-content"></div>
        <button type="button" onclick="fetchNASAEPICImagery()">Load EPIC Imagery</button>
    </section>

    <section id="mars-rover-section">
        <h2>Mars Rover Photos</h2>
        <div id="mars-rover-content"></div>
        <button type="button" onclick="fetchMarsRoverPhotos()">Load Mars Rover Photos</button>
    </section>

</main>

<script src="script.js"></script>
<?php include('footer.php'); ?>

</body>
</html>
