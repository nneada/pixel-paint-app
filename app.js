let currentPaintColor = "black"; // initial paint color is black
let painting = false; // turn off paint brush

const gridWidthPixels = 120; // number of pixels across grid width
const gridHeightPixels = 70; // number of pixels across grid height
const pixelWidth = 4; // pixel width
const pixelHeight = 4; // pixel height
const pixelBorder = 2; // pixel border size

const gridWidth = (pixelWidth + pixelBorder) * gridWidthPixels; // calculated grid width in px
const gridHeight = (pixelHeight + pixelBorder) * gridHeightPixels; // calculated grid height in px
const totalPixels = gridWidthPixels * gridHeightPixels; // estimate all the pixels for the grid

// put all the names of the tools into an array
const toolBox = [
  "red",
  "yellow",
  "blue",
  "green",
  "lime",
  "black",
  "white",
  "convertImage",
];

// function to create the title bar container
function createTitleContainer() {
  // creating the element tag
  const titleContainer = document.createElement("div");
  // styling the title bar
  titleContainer.style.width = `${gridWidth}px`; //specifying the width
  titleContainer.style.height = "40px"; //specifying the height
  titleContainer.style.backgroundColor = "#88001b"; //adding background color
  titleContainer.style.border = "2px solid #88001b"; // adding the border style
  titleContainer.classList.add("title-container"); // adding class to the element
  // style to accomodate all the elements that will be added to the title container
  titleContainer.style.display = "flex";
  titleContainer.style.flexWrap = "wrap";
  // adding the title bar container to the html document
  document.body.appendChild(titleContainer);
}

// function to create the title, paint and color notification bars
function createTitleTexts() {
  const titleBar = document.createElement("div"); // creating the element tag
  // styling the title bar
  titleBar.style.width = `${0.5 * gridWidth}px`; //specifying the width
  titleBar.style.color = "white"; //adding text color
  titleBar.style.fontSize = "24px"; //adding font size
  titleBar.style.margin = "10px"; //adding margin
  titleBar.textContent = "Pixel Paint App"; // add the text to the title bar
  titleBar.classList.add("title-bar"); // adding class to the title bar element

  const notificationBar = document.createElement("div"); //create notification bar
  // styling the notification bar
  notificationBar.style.color = "yellow"; //adding text color
  notificationBar.style.fontSize = "18px"; //adding font size
  notificationBar.style.margin = "10px"; //adding margin
  notificationBar.textContent = "Paint Brush [OFF]"; // add the text to the notification bar
  notificationBar.classList.add("notification-bar"); // adding class to the notification bar element

  const colorBar = document.createElement("div"); //create color bar
  // styling the color bar
  colorBar.style.color = "orange"; //adding text color
  colorBar.style.fontSize = "18px"; //adding font size
  colorBar.style.margin = "10px"; //adding margin
  colorBar.textContent = `Color [${currentPaintColor}]`; // add the text to the color bar
  colorBar.classList.add("color-bar"); // adding class to the color bar element

  // adding the title, paint and color notification bars to the title bar container
  getTitleContainer.appendChild(titleBar);
  getTitleContainer.appendChild(notificationBar);
  getTitleContainer.appendChild(colorBar);
}

// function to the create grid container
function createGridContainer() {
  // creating the element tag
  const gridContainer = document.createElement("div");
  // styling the grid
  gridContainer.style.width = gridWidth; //specifying the width
  gridContainer.style.height = gridHeight; //specifying the height
  gridContainer.style.backgroundColor = "white"; //adding background color
  gridContainer.style.border = "2px solid #88001b"; // adding the border style
  gridContainer.style.position = "relative"; // specifying the position of the grid
  gridContainer.setAttribute("id", "grid"); // adding id to the div element
  // style to accomodate all the pixels that will be added to the grid
  gridContainer.style.display = "flex";
  gridContainer.style.flexWrap = "wrap";
  //   adding the grid to the html document
  document.body.appendChild(gridContainer);
}

// function to create all the grid pixels
function createPixels() {
  // loop through the total pixels to add each pixel to the grid
  for (let i = 0; i < totalPixels; i++) {
    // creating the element tag
    const pixel = document.createElement("div");
    // styling the pixel
    pixel.style.width = pixelWidth; //specifying the width
    pixel.style.height = pixelHeight; //specifying the height
    pixel.style.backgroundColor = "white"; //adding background color
    pixel.style.border = "1px solid white"; // adding the border style
    pixel.setAttribute("id", `pixel__${i}`); // adding id to the div element
    pixel.classList.add("pixel"); // adding a class to the div element
    // appending each pixel to the grid
    grid.appendChild(pixel);
  } // end of this loop
}

// function to create tool bar
function createToolBar() {
  // creating the element tag
  const toolBar = document.createElement("div");
  // styling the tool bar
  toolBar.style.width = `${gridWidth}px`; //specifying the width
  toolBar.style.height = "50px"; //specifying the height
  toolBar.style.backgroundColor = "#88001b"; //adding background color
  toolBar.style.fontSize = "14px"; //adding font size
  toolBar.style.textAlign = "center"; // center the text
  toolBar.style.border = "2px solid #88001b"; // adding the border style
  toolBar.style.position = "relative"; // specifying position
  toolBar.classList.add("tool-bar"); // adding class to the tool element
  // style to accomodate all the tool buttons that will be added to this tool bar
  toolBar.style.display = "flex";
  toolBar.style.flexWrap = "wrap";
  // adding the tool bar to the html document
  document.body.appendChild(toolBar);
}

// function to create the tool buttons
function createToolBarButtons() {
  // loop over this array to create each tool button
  toolBox.forEach((buttonName) => {
    // intantiate the common task outside the logical statements
    const createBtn = document.createElement("button"); // create the element tag
    createBtn.setAttribute("id", `${buttonName}`); // give an id to the button element
    createBtn.style.width = "70px"; // specify the width of the button
    createBtn.style.height = "40px"; // specify the height of the button
    createBtn.style.margin = "1px"; // set margin around each tool button

    if (buttonName === "convertImage") {
      createBtn.textContent = "Convert to image"; // specify a unique text for this button
      createBtn.style.color = "#88001b"; // specify a unique font color for this button
    } else {
      // specify a unique background color for buttons here
      // note that the buttonName is also a color, alright
      createBtn.style.backgroundColor = buttonName;
      // add a class to the button element, here convertImage button is not a color
      // so it won't get a color class
      createBtn.classList.add("color");
      if (buttonName === "white") {
        createBtn.textContent = `Eraser`; // specify a unique text for this button
        createBtn.style.color = "black"; // specify a unique font color for this button
      } else if (buttonName === "yellow" || buttonName === "lime") {
        createBtn.textContent = buttonName; // specify a unique text for this button
        createBtn.style.color = "black"; // specify a unique font color for this button
      } else {
        createBtn.textContent = buttonName; // specify a unique text for this button
        createBtn.style.color = "white"; // specify a unique font color for this button
      }
    }
    getToolBar.appendChild(createBtn); // append each button to the tool bar
  }); // end of this loop
}

// function to create the info bar
function createInfoBar() {
  const infoBar = document.createElement("div"); // creating the element tag
  // styling the info bar
  infoBar.style.width = `${gridWidth}px`; //specifying the width
  infoBar.style.height = `66px`; //specifying the width
  infoBar.style.backgroundColor = "#88001b"; //adding background color
  infoBar.style.color = "white"; //adding text color
  infoBar.style.fontSize = "16px"; //adding font size
  infoBar.style.textAlign = "center"; // text align
  infoBar.style.border = "2px solid #88001b"; // adding the border style
  infoBar.style.position = "relative"; // specifying position
  infoBar.classList.add("info-bar"); // adding class to the info bar
  // adding the info bar to the html document
  document.body.appendChild(infoBar);
}

// function to create the info text
function createInfoText() {
  const infoText = document.createElement("div"); // creating the element tag
  infoText.classList.add("info-bar"); // adding class to the element
  infoText.style.backgroundColor = "indigo"; // text align
  infoText.style.padding = "2px"; // text align
  infoText.textContent = `Double-click or Single-click within canvas to turn \n
  paint brush on/off respectively. Click on buttons to select paint tools. \n 
  Also, a download appears after converting art into image for download.`;

  const copyRight = document.createElement("div"); // creating the element tag
  copyRight.classList.add("copyright-bar"); // adding class to the element
  copyRight.style.textAlign = "center"; // text align
  copyRight.style.backgroundColor = "#88001b"; // text align
  copyRight.style.padding = "4px"; // text align
  copyRight.textContent = `Copyright © 2024 Emmanuel Asare`; // adding the text for the info bar

  getInfoBar.appendChild(infoText); // appending the info text to the info bar
  getInfoBar.appendChild(copyRight); // appending the copy right to the info bar
}

function convertPaintingToImage() {
  // Create a new canvas element
  const canvas = document.createElement("canvas");

  // Set canvas dimensions to match the div
  canvas.width = getGrid.offsetWidth;
  canvas.height = getGrid.offsetHeight;

  // Draw the div content onto the canvas
  html2canvas(getGrid).then(function (canvas) {
    // Convert canvas to image
    const img = new Image(); // get image data from the html2canvas conversion
    img.src = canvas.toDataURL("image/png"); // specify the type of image file

    createDownloadLink(img); // create the download button
    const getDownloadLink = document.querySelector("#getImg"); // get download button
    if (getDownloadLink) {
      // if getDownloadBtn exists, listen for click event to download generated image
      getDownloadLink.addEventListener("click", () => {
        getDownloadLink.remove();
        // removing the download button element as soon as download button is clicked
      });
    }
  });
}

// function to create image download button
function createDownloadLink(img) {
  createDownloadLink = document.createElement("a"); // create the link element tag
  createDownloadLink.setAttribute("id", `getImg`); // add an id
  // add the image name and a download attribute
  createDownloadLink.setAttribute("download", `saved_image_.png`);
  createDownloadLink.textContent = "Download image"; // specify the text for this download link
  createDownloadLink.style.backgroundColor = "khaki"; // add background color
  createDownloadLink.style.color = "#88001b"; // add text color
  createDownloadLink.style.fontSize = "16px"; // add font size
  createDownloadLink.style.fontWeight = "600"; // add font weight
  createDownloadLink.style.width = "120px"; // specify link width
  createDownloadLink.style.height = "32px"; // specify link height
  createDownloadLink.style.marginLeft = "10px"; // left spacing
  createDownloadLink.style.padding = "5px"; // give a spacing within the link element
  createDownloadLink.href = img.src; // attach the converted image data to this link
  getToolBar.appendChild(createDownloadLink); // append this link to the tool bar
}

// calling the functions and instantiating elements here
// the trick is when you create an html element,
// you call it for the next function to use it for its appendChild

createTitleContainer();
// get the title container element
const getTitleContainer = document.querySelector(".title-container");
createTitleTexts();
const getTitleBar = document.querySelector(".title-bar"); // get the title bar element
const getNotified = document.querySelector(".notification-bar"); // get the notification bar element
const getColorBar = document.querySelector(".color-bar"); // get the notification bar element
createGridContainer();
const getGrid = document.querySelector("#grid"); // get the grid element
createPixels();
const getPixels = document.querySelectorAll(".pixel"); // get all the pixel elements

createToolBar();
const getToolBar = document.querySelector(".tool-bar"); // get the tool bar element
createToolBarButtons();
const getColorBtns = document.querySelectorAll(".color");
const convertImageBtn = document.querySelector("#convertImage");
createInfoBar();
const getInfoBar = document.querySelector(".info-bar"); // get the title bar
createInfoText();

// listening for events within the grid
// loop over each color button in the tool bar
getColorBtns.forEach((colorBtnElement) => {
  // colorBtnElement represents a color button element retrieved at this instance
  colorBtnElement.addEventListener("click", () => {
    // the id stored the name of the color of the button
    currentPaintColor = colorBtnElement.getAttribute("id");
    getColorBar.textContent =
      currentPaintColor !== "white"
        ? `Color [${currentPaintColor}]` // for buttons with other color
        : (getColorBar.textContent = `[Eraser Selected]`); // button with the white color is the eraser
  });
});

getGrid.addEventListener("dblclick", () => {
  painting = true; // turn on paint brush on double click
  getNotified.textContent = "Paint Brush [ON]"; // update notification bar
});

getGrid.addEventListener("click", () => {
  painting = false; // turn off paint brush on single click
  getNotified.textContent = "Paint Brush [OFF]"; // update notification bar
});

convertImageBtn.addEventListener("click", convertPaintingToImage);
// convertPaintingToImage is the function for the specified job

// loop over each pixel in the grid
getPixels.forEach((pixelDivElement) => {
  // pixelDivElement represents a pixel element retrieved at this instance
  pixelDivElement.addEventListener("mouseover", () => {
    // listen to this pixel in the grid for when a cursor passes over it
    if (painting) {
      // if painting is on, then proceed to
      // change the pixel bg-color to the paint color
      pixelDivElement.style.backgroundColor = `${currentPaintColor}`;
      // and change the pixel border color to the paint color
      pixelDivElement.style.borderColor = `${currentPaintColor}`;
    }
  });
}); // end of loop
