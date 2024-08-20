const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const rehabCenters = [
    {
        name: "Healing House Psychiatric Clinic,Drug Detoxification and Rehabilitation Centre",
        rating: "4.9",
        address: "House 230, near Holy Family Hospital, Block E Satellite Town, Rawalpindi, Punjab",
        number: "0337 4806917",
        website: "http://www.healinghouse.com.pk/",
    },
    {
        name: "Unique Rehabilitation Center",
        rating: "4.9",
        address: "82 School Rd, Dhok Jumma Rawalpindi, Punjab 46000",
        number: "0334 1251254",
        website: "https://uniquerehabcenter.com/",
    },
    {
        name: "Riphah Rehabilitation Center - Riphah International University, Potohar Tower.",
        rating: "3.6",
        address: "Westridge 1, Rawalpindi, Punjab 46000",
        number: "0320 7864999",
        website: "https://riphah.edu.pk/",
    },
    {
        name: "Najjat Trust",
        rating: "4.3",
        address: "J3C7+PM4، P-330, Janglat Road, Banni, Rawalpindi, Punjab 46000",
        number: "(051) 5542000",
        website: "http://najjat.org/",
    },
    {
        name: "WADA CLINIC",
        rating: "4.0",
        address: "E, House E, 49/5 Block, opposite holy family hospital, Satellite Town, Rawalpindi, 46300",
        number: "0333 5433822",
        website: "http://wadaclinic.blogspot.com/",
    },
    {
        name: "Devotion Rehab Center",
        rating: "4.9",
        address: "House No.405-A, Sir Syed Ave، near filter plant، Gulrez Phase-5 Phase 4 Gulrez Housing Scheme, Rawalpindi, Punjab 43600",
        number: "0336 9200006",
        website: "http://devotionrehab.com/",
    },
    {
        name: "Benazir Bhutto Hospital (Rehabilitation Center)",
        rating: "3.7",
        address: "Murree Rd, near Chandni Chowk, Chah Sultan Rawalpindi, Punjab 23000",
        number: "(051) 9290301",
        website: "http://bbh.org.pk/#",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#rehabTable tbody");

    rehabCenters.forEach(center => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = center.name;
        nameCell.className = "Name";
        row.appendChild(nameCell);

        const ratingCell = document.createElement("td");
        ratingCell.textContent = center.rating;
        row.appendChild(ratingCell);

        const addressCell = document.createElement("td");
        addressCell.textContent = center.address;
        row.appendChild(addressCell);

        const numberCell = document.createElement("td");
        numberCell.textContent = center.number;
        row.appendChild(numberCell);

        const websiteCell = document.createElement("td");
        const websiteLink = document.createElement("a");
        websiteLink.href = center.website;
        websiteLink.textContent = "Visit Website";
        websiteCell.appendChild(websiteLink);
        row.appendChild(websiteCell);

        tableBody.appendChild(row);
    });

    
});

