const troubleshooting = {

    "Password reset": [
        "Get the picture of live view with the date and time",
        "Get the picture of info screen.",
        "Get the picture of device label.",
        "Reset the password using the device ID and date in the tool."
    ],

    "Device removal": [
        "Get the picture of proof of Purchase, or Invoice, or Lease Agreement.",
        "Share the pictures to SME or Teamlead with case number for removing device."
    ],

    "IP Camera Offline": [
        "Check whether the camera has power.",
        "Check the Ethernet cable connection at the camera.",
        "Check the Ethernet cable connection at the NVR/router/PoE switch.",
        "Check whether the camera appears in the NVR camera list.",
        "Check the camera network status.",
        "Restart the camera and network device.",
        "Check whether the camera comes back online.",
        "Reset the camera if the camera has the reset button."
    ],

    "Analog Camera Offline": [
        "Check whether the camera has power.",
        "Check the BNC/coaxial cable connection at the camera.",
        "Check the BNC/coaxial cable connection at the DVR.",
        "Check the camera power adapter.",
        "Restart the camera and DVR.",
        "Check whether video returns."
    ],

    "Camera No Video": [
        "Check whether the camera has power.",
        "Check the camera cable connection.",
        "Check the connection at the NVR/DVR.",
        "Check whether another camera works on the same channel.",
        "Check whether the camera appears in the device list.",
        "Restart the camera and recorder.",
        "Check whether video returns."
    ],

    "Camera Black Screen": [
        "Check whether the camera has power.",
        "Check the camera cable connection.",
        "Check the NVR/DVR video connection.",
        "Check whether the issue occurs during daytime and nighttime.",
        "Restart the camera.",
        "Check whether the camera image returns."
    ],

    "Camera Image Blurry": [
        "Check whether the camera lens is clean.",
        "Check whether the protective film has been removed.",
        "Check the camera focus.",
        "Check whether the issue occurs during daytime and nighttime.",
        "Restart the camera.",
        "Check whether the image quality improves."
    ],

    "Camera Image Flickering": [
        "Check the camera power connection.",
        "Check the camera cable connection.",
        "Check whether the cable is damaged.",
        "Check whether the flickering occurs during daytime or nighttime.",
        "Restart the camera.",
        "Check whether the flickering continues."
    ],

    "Night Vision Not Working": [
        "Check whether the camera has power.",
        "Check whether the issue occurs only at night.",
        "Check whether the IR LEDs are functioning.",
        "Check whether anything is blocking the camera lens.",
        "Check the camera night vision settings.",
        "Restart the camera.",
        "Check whether night vision is working."
    ],

    "Camera Audio Not Working": [
        "Check whether the camera supports audio.",
        "Check whether the microphone is enabled.",
        "Check the camera audio settings.",
        "Check the recorder audio settings.",
        "Check the device volume.",
        "Restart the camera and recorder.",
        "Check whether audio is working."
    ],

    "Camera Not Recording": [
        "Check whether the camera is online.",
        "Check whether the HDD is detected.",
        "Check the recording schedule.",
        "Check the recording mode.",
        "Check available HDD storage.",
        "Restart the recorder.",
        "Check whether new recordings are being created."
    ],

    "NVR/DVR Not Recording": [
        "Check whether the NVR/DVR is powered on.",
        "Check whether the cameras are online.",
        "Check whether the HDD is detected.",
        "Check the recording schedule.",
        "Check the recording settings.",
        "Check available storage.",
        "Check whether recording has resumed."
    ],

    "Playback Not Working": [
        "Check whether the system is currently recording.",
        "Check C symbol on the live view.",
        "Check the selected date and time.",
        "Check whether recordings exist for the selected period.",
        "Check the HDD status.",
        "Restart the NVR/DVR.",
        "Try playback again."
    ],

    "HDD Not Detected": [
        "Check the HDD status in the recorder settings.",
        "Power off the recorder.",
        "Check the HDD connections.",
        "Reconnect the HDD if required.",
        "Power the recorder back on.",
        "Check whether the HDD is detected."
    ],

    "Remote Viewing Not Working": [
        "Check whether the NVR/DVR is connected to the internet.",
        "Check the P2P Status - online.",
        "Check whether the device is online in the app.",
        "Restart the router and recorder.",
        "Ask the customer to remove and add device again."
    ],

    "Camera Not Connecting to Wi-Fi": [
        "Check whether the camera has power.",
        "Check whether the Wi-Fi network is available.",
        "Check the Wi-Fi signal strength.",
        "Verify the Wi-Fi password.",
        "Restart the camera and router.",
        "Try connecting the camera again.",
        "Check whether customer uses 2.4 GHz."
    ],

    "Device Offline in Lorex App": [
        "Check whether the camera or recorder has power.",
        "Check the internet connection.",
        "Check the network connection.",
        "Check the device status.",
        "Restart the network device.",
        "Restart the camera or recorder.",
        "Check whether the device becomes online."
    ],

    "Push Notifications Not Working": [
        "Check whether notifications are enabled in the app.",
        "Check whether notifications are enabled on the phone.",
        "Check motion detection settings.",
        "Check the notification schedule.",
        "Check the camera motion settings.",
        "Restart the app.",
        "Test notifications again."
    ],

    "Login/Password Issue": [
        "Confirm the username or email address.",
        "Confirm the password being entered.",
        "Check whether the account is locked.",
        "Try the password recovery option.",
        "Reset the password if required.",
        "Try logging in again."
    ],

    "NVR/DVR Not Powering On": [
        "Check the power adapter connection.",
        "Check the power outlet.",
        "Check whether the power adapter is damaged.",
        "Check the power connection at the recorder.",
        "Try another compatible power outlet.",
        "Power cycle the recorder.",
        "Check whether the recorder powers on."
    ],

    "No Input Signal": [
        "Check the HDMI connection on both monitor and recorder.",
        "Remove and reconnect the HDMI cable.",
        "Inform the customer to change the HDMI cable.",
        "Inform the customer to connect with a different monitor."
    ],

    "Date/Time Issue": [
        "Check the current date and time.",
        "Check the time zone.",
        "Check automatic time synchronization.",
        "Check the internet connection.",
        "Correct the date and time settings.",
        "Restart the recorder if required.",
        "Check whether the correct time is displayed."
    ]
};


const issueSelect = document.getElementById("issueSelect");
const troubleshootingSection = document.getElementById("troubleshooting");
const issueTitle = document.getElementById("issueTitle");
const stepsList = document.getElementById("stepsList");


Object.keys(troubleshooting).forEach(issue => {

    const option = document.createElement("option");

    option.value = issue;
    option.textContent = issue;

    issueSelect.appendChild(option);
});


issueSelect.addEventListener("change", function () {

    const selectedIssue = this.value;

    if (selectedIssue === "") {

        troubleshootingSection.classList.add("hidden");
        return;

    }

    issueTitle.textContent = "🛠️ Troubleshooting: " + selectedIssue;

    stepsList.innerHTML = "";

    troubleshooting[selectedIssue].forEach(step => {

        const li = document.createElement("li");

        li.textContent = step;

        stepsList.appendChild(li);

    });

    troubleshootingSection.classList.remove("hidden");

});