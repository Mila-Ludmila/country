console.log('hi');

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belgium",
  "Belize",
  "Benin",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Bulgaria",
  "Burkina Faso",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Cuba",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Ecuador",
  "Egypt",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Equatorial Guinea",
  "El Salvador",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Holy See",
  "India",
  "Indonesia",
  "Iran",
  "	Iraq",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Litva",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Norway",
  "Niger",
  "Nigeria",
  "North Korea",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Tunisia",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "United Arab Emirates",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const country = document.getElementById("country");
const hintList = document.getElementById("hint-list");
const hintUl = document.getElementById("hint-ul");

country.addEventListener("input", () => {
  const input = country.value.trim().toLowerCase();
  const filter = countryList.filter(hint =>
      hint.toLowerCase().startsWith(input)
  ).slice(0, 10);

  hintUl.innerHTML = '';

  filter.forEach(hint => {
    const li = document.createElement("li");
    li.textContent = hint;
    li.addEventListener("click", () => {
        country.value = hint;
        hintList.style.display = "none";
    });
    hintUl.appendChild(li);
});

if (filter.length > 0) {
  hintList.style.display = "block";
} else {
  hintList.style.display = "none";
}
});

document.addEventListener("click", (e) => {
  if (e.target !== country) {
      hintList.style.display = "none";
  }
});

hintList.addEventListener("click", (e) => {
  e.stopPropagation();
});
