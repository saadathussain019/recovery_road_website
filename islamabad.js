const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});



const rehabCenters = [
    {
        name: "Islamabad Rehab and Caring Center",
        rating: "4.9",
        address: "Main Double Road, Opposite IDC, near PSO Petrol Pump, Soan Gardens Block E Islamabad, Islamabad Capital Territory 44000",
        number: "0333 6954507",
        website: "https://islamabadrehab.com/",
    },
    {
        name: "The New Life Rehab & Psychiatric Center Islamabad",
        rating: "4.7",
        address: "House 107, Street 22, Main PWD Rd, near SSL School, Phase 2 Pakistan Town, Islamabad, 44000",
        number: "0333 7749772",
        website: "https://www.thenewlife.com.pk/",
    },
    {
        name: "IRC Islamabad Rehab Clinic",
        rating: "4.6",
        address: "110 Qasim Avenue, Bani Gala, Green, Islamabad Capital Territory 44000",
        number: "0305 9053335",
        website: "https://ircl.pk/",
    },
    {
        name: "IRC Islamabad Rehab CliniLifeline Rehab Best Rehab Center in Islamabad | Addiction Treatment Center",
        rating: "4.5",
        address: "398 Lane No. 1, Lake View Lanes Barakahu, Bani Gala, Islamabad, Islamabad Capital Territory 44000",
        number: "0313 0000051",
        website: "https://lifelinerehabs.com/",
    },
    {
        name: "Serenity Place Rehab Center Islamabad-SPI",
        rating: "5.0",
        address: "House 11, 786 St Zaib-Un-Nisa St, Bani Gala, Islamabad, Islamabad Capital Territory 44000",
        number: "0318 5196938",
        website: "https://serenityrehab.pk/",
    },
    {
        name: "Healing Door Rehabilitation Center Islamabad, Pakistan",
        rating: "4.9",
        address: "Main Jinnah Rd, opposite Meezan Bank, Bani Gala, Islamabad, Islamabad Capital Territory 46500",
        number: "0314 9922547",
        website: "https://healingdoorrehab.com/",
    },
    {
        name: "HRC Hayat Rehab Clinic Islamabad",
        rating: "4.8",
        address: "Bilal St, Bani Gala, Islamabad, Islamabad Capital Territory",
        number: "0331 5500090",
        website: "https://hrci.pk/",
    },
    {
        name: "Psychaffinity | Rehabilitation Center | Top Rehab center in Islamabad - Pakistan",
        rating: "4.8",
        address: "House No. 1, Kiyani Street Lakhwal, Bani Gala, Islamabad, 44000",
        number: "0302 5437982",
        website: "https://psychaffinity.com/",
    }, 
    {
        name: "Umeed E Shifa Rehabilitation Centre",
        rating: "4.6",
        address: "House No 1, Durrani street, Main Jinnah Rd, Bani Gala",
        number: "0336 5603498",
        website: "https://www.umeedeshifa.com/",
    },
    {
        name: "The Sunrise Healing Drug rehabilitation and psychiatric treatment center",
        rating: "5.0",
        address: "House # 948 Street c9, Block C Police Foundation, Islamabad, 46000",
        number: "0318 7681580",
        website: "https://thesunrise.pk/",
    },
    {
        name: "Sunny Trust - Addiction Treatment and Rehabilitation Center in Islamabad Pakistan",
        rating: "4.9",
        address: "opposite United Bank Ltd, Barakahu, Islamabad, Islamabad Capital Territory 44000",
        number: "0301 8666434",
        website: "https://sunnytrust.org/",
    },
    {
        name: "New Hope Rehab and Caring Center",
        rating: "4.9",
        address: "House # 275 Street No. 2, Block A Police Foundation, Islamabad, Rawalpindi, Punjab 45710",
        number: "0312 7493940",
        website: "https://newhoperehabcenter.com/",
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
