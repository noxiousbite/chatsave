// Define a function to get a random item from a table
async function getRandomItem(tableId) {
  // Get the records from the table
  const records = await notion.databases.query({ database_id: tableId });
  // Get a random record from the table
  const randomIndex = Math.floor(Math.random() * records.results.length);
  return records.results[randomIndex];
}

// Define a function to generate a random activity and food
async function generateRandomActivityAndFood() {
  // Set up variables for the tables and columns
  const tableA_activities_id = "0ca392e2b54b4dad997cc01cc32af946?v";
  const tableA_foods_id = "b394c083180b4e75906f5d88ca9bce1b?v";
  const tableB_activities_id = "616bd1c12fb44200a609077da838127d?v";
  const tableB_foods_id = "700053bfd18048caa3860c5f3cbed3be?v";
  // Randomly select a table and a column for the activity
  const activityTableId = Math.random() < 0.5 ? tableA_activities_id : tableB_activities_id;
  // Randomly select a table and a column for the food
  const foodTableId = Math.random() < 0.5 ? tableA_foods_id : tableB_foods_id;
  // Get a random activity and food from their respective tables
  const randomActivity = await getRandomItem(activityTableId);
  const randomFood = await getRandomItem(foodTableId);
  // Display the results in the HTML element with ID "result"
  document.getElementById("result").innerHTML = `You should do "${randomActivity.properties.Activity.title[0].text.content}" and eat "${randomFood.properties.Food.title[0].text.content}".`;
}

// Add an event listener to the button to generate a random activity and food
document.getElementById("generate-button").addEventListener("click", generateRandomActivityAndFood);
