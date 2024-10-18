// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-4viZ0SJcKW-vRwjDOZtXjhLhXPWXnDw",
    authDomain: "sensoremulator.firebaseapp.com",
    databaseURL: "https://sensoremulator-default-rtdb.firebaseio.com",
    projectId: "sensoremulator",
    storageBucket: "sensoremulator.appspot.com",
    messagingSenderId: "410626311115",
    appId: "1:410626311115:web:24c25cd8ef9e62b62bec4e",
    measurementId: "G-QESD44RL09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the SensorData node
const sensorDataRef = ref(database, 'SensorData');

// Function to fetch and display data
onValue(sensorDataRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Update latitude and longitude in the table
        document.getElementById('latitude').textContent = data.location.latitude;
        document.getElementById('longitude').textContent = data.location.longitude;
        
        // Update sensor X, Y, Z in the table
        document.getElementById('sensorX').textContent = data.sensor.x;
        document.getElementById('sensorY').textContent = data.sensor.y;
        document.getElementById('sensorZ').textContent = data.sensor.z;
    } else {
        // Display a message if no data is available
        document.getElementById('latitude').textContent = "No data";
        document.getElementById('longitude').textContent = "No data";
        document.getElementById('sensorX').textContent = "No data";
        document.getElementById('sensorY').textContent = "No data";
        document.getElementById('sensorZ').textContent = "No data";
    }
});
