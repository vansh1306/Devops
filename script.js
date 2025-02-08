let selectedBuildings = []; // To store selected building coordinates

// Coordinates of buildings on the map
const buildings = {
    'gate': { x: 10, y: 10 },
    'admin-office': { x: 150, y: 10 },
    'hubble': { x: 150, y: 80 },
    'block1': { x: 280, y: 80 },
    'library': { x: 400, y: 150 },
    'block2': { x: 500, y: 200 },
    'block3': { x: 300, y: 350 },
    'block4': { x: 500, y: 350 },
    'gandhi-chowk': { x: 360, y: 260 },
    'block5': { x: 250, y: 450 },
    'design-block': { x: 600, y: 100 },
    'food-court': { x: 350, y: 400 },
    'mac-gym': { x: 650, y: 450 },
    'block9': { x: 700, y: 150 },
    'block10': { x: 700, y: 250 },
    'block11': { x: 700, y: 350 },
    'ground-block': { x: 350, y: 500 },
    'tulips': { x: 900, y: 450 },
    'block12': { x: 900, y: 550 },
    'old-amphitheater': { x: 1100, y: 200 },
    'new-amphitheater': { x: 1100, y: 350 }
};

// Function to update dropdowns when a building is clicked
function selectBlock(blockId) {
    const presentLocationDropdown = document.getElementById("present-location");
    const finalDestinationDropdown = document.getElementById("final-destination");

    if (!presentLocationDropdown.value) {
        presentLocationDropdown.value = blockId;
        highlightBuilding(blockId);
    } else if (!finalDestinationDropdown.value && presentLocationDropdown.value !== blockId) {
        finalDestinationDropdown.value = blockId;
        highlightBuilding(blockId);
    } else {
        alert("Both locations are already selected! Reset to choose again.");
    }
}

// Function to highlight the selected building
function highlightBuilding(building) {
    const element = document.querySelector(`.building.${building}`);
    if (element) {
        element.classList.add('highlight');
        setTimeout(() => element.classList.remove('highlight'), 600); // Remove highlight after animation
    }
}

// Function to calculate Euclidean distance between two points
function calculateDistance(location1, location2) {
    const dx = location2.x - location1.x;
    const dy = location2.y - location1.y;
    return Math.sqrt(dx * dx + dy * dy).toFixed(2);
}

// Reset function to clear the selected locations and reset dropdowns
function resetSelection() {
    selectedBuildings = [];
    document.getElementById("present-location").value = '';
    document.getElementById("final-destination").value = '';
    document.getElementById("distance").innerHTML = "Please select both locations to calculate the distance.";
}

// Event listeners for dropdowns to highlight buildings when a selection is made
document.getElementById("present-location").addEventListener("change", function () {
    const selectedLocation = this.value;
    if (selectedLocation) {
        highlightBuilding(selectedLocation);
    }
});

document.getElementById("final-destination").addEventListener("change", function () {
    const selectedLocation = this.value;
    if (selectedLocation) {
        highlightBuilding(selectedLocation);
    }
});

// Event listener for "Find Shortest Path" button
document.getElementById("find-path-btn").addEventListener("click", function () {
    const presentLocation = document.getElementById("present-location").value;
    const finalDestination = document.getElementById("final-destination").value;

    if (presentLocation && finalDestination) {
        const location1 = { ...buildings[presentLocation], building: presentLocation };
        const location2 = { ...buildings[finalDestination], building: finalDestination };
        const distance = calculateDistance(location1, location2);

        // Display the distance only on button click
        document.getElementById("distance").innerHTML = `Distance between ${location1.building} and ${location2.building}: ${distance} units`;
    } else {
        // Prompt the user if locations are not selected
        document.getElementById("distance").innerHTML = "Please select both locations to calculate the distance.";
    }
});
// document.getElementById('pathForm').addEventListener('submit', function(event) {
//    event.preventDefault();
//    const start = document.getElementById('start').value;
//    const end = document.getElementById('end').value;

//    fetch(`/api/navigation/shortest-path?start=${start}&end=${end}`)
//        .then(response => {
//            if (!response.ok) {
//                throw new Error('Network response was not ok');
//            }
//            return response.json();
//        })
//        .then(data => {
//            document.getElementById('result').innerText = `Calculated Path: ${data.path}`;
//        })
//        .catch(error => {
//            console.error('Error:', error);
//            document.getElementById('result').innerText = 'Error calculating path.';
//        });
// });

['gate', 'admin-office', 10],
    ['gate', 'hubble', 15],
    ['gate', 'food-court', 20],
    ['admin-office', 'old-amphitheater', 15],
    ['admin-office', 'block1', 10],
    ['admin-office', 'hubble', 10],
    ['admin-office', 'mac-gym', 20],


    // Event listener for "Find Shortest Path" button
//document.getElementById("find-path-btn").addEventListener("click", function () {
//    const presentLocation = document.getElementById("present-location").value;
//    const finalDestination = document.getElementById("final-destination").value;
//
//    if (presentLocation && finalDestination) {
//        const location1 = { ...buildings[presentLocation], building: presentLocation };
//        const location2 = { ...buildings[finalDestination], building: finalDestination };
//        const distance = calculateDistance(location1, location2);
//
//        // Display the distance only on button click
//        document.getElementById("distance").innerHTML = `Distance between ${location1.building} and ${location2.building}: ${distance} units`;
//    } else {
//        // Prompt the user if locations are not selected
//        document.getElementById("distance").innerHTML = "Please select both locations to calculate the distance.";
//    }
//});