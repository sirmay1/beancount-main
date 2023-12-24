// Keeping your key in a variable is generally good practice
// so it's easy to change and immune to typos
const localStorageKey = 'preferences'

function addNew() {
  // Build an object containing all the prefernces for the current user
  var preferences = {
    a: 'A',
    b: 'B',
    c: 'C',
  }
  // Load the existing data
  var existingData = load()
  // Push the new users data to the data
  existingData.push(preferences)
  // Save the data
  save(existingData)
}

function load() {
  // Get the saved data from local storage
  var existing = localStorage.getItem(localStorageKey)
  if (existing) {
    // If the data exists, parse it back into an array
    existing = JSON.parse(existing)
  } else {
    // If this is the first time, create an empty array
    existing = []
  }
  // Return the array with any previous data included
  return existing
}

function save(data) {
  // Save data to local storage, converting the JS array to a string first
  localStorage.setItem(localStorageKey, JSON.stringify(data))
}

// Adding events to the example buttons
document.getElementById("example1").onclick = addNew
document.getElementById("example2").onclick = function() {
  var currentSave = load()
  console.log(currentSave)
}
