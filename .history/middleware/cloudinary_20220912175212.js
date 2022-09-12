const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

function showUploadWidget() { cloudinary.openUploadWidget({    cloudName: "livscloud",    uploadPreset: "kcqdnwsm",    sources: [        "local",        "url",        "camera",        "image_search",        "google_drive",        "facebook",        "dropbox",        "instagram",        "shutterstock",        "getty",        "istock",        "unsplash"    ],    googleApiKey: "<image_search_google_api_key>",    showAdvancedOptions: true,    cropping: true,    multiple: false,    defaultSource: "local",    styles: {        palette: {            window: "#10173a",            sourceBg: "#20304b",            windowBorder: "#7171D0",            tabIcon: "#79F7FF",            inactiveTabIcon: "#8E9FBF",            menuIcons: "#CCE8FF",            link: "#72F1FF",            action: "#5333FF",            inProgress: "#00ffcc",            complete: "#33ff00",            error: "#cc3333",            textDark: "#000000",            textLight: "#ffffff"        },        fonts: {            default: null,            "'IBM Plex Sans', sans-serif": {                url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",                active: true            }        }    }}, (err, info) => {   if (!err) {         console.log("Upload Widget event - ", info);   }  }); }

module.exports = cloudinary;
