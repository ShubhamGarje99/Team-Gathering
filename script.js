document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
   
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  
  const teamData = [
    {
      portfolio: "GATHERING SECRETARY",
      name: "Yadnesh Shashtri",
      linkedin: "https://www.linkedin.com/in/yadnesh-shastri-a74795197/?originalSubdomain=in",
      Contact: "9146385925",
      personImage: "img/Yadnesh Shastri.webp"
    },
    {
      portfolio: "GYMKHANA SECRETARY",
      name: "Abhishek Mane",
      linkedin: "https://www.linkedin.com/in/abhishek-mane-1b4638250/",
      Contact: "",
      personImage: "img/Relive.png"
    },
    {
      portfolio: "GATHERING AUDITOR",
      name: "Samir Umak",
      linkedin: "https://www.linkedin.com/in/samir-umak-02421a246/",
      Contact: "",
      personImage: "img/Samir Umak.webp"
    },
    {
      portfolio: "REFRESHMENT SECRETARY",
      name: "Abhijeet Wabhchaure",
      linkedin: "https://www.linkedin.com/in/abhijeet-waghchaure-40298622b/",
      Contact: "",
      personImage: "img/Relive.png"
    },
    {
      portfolio: "SPORTS SECRETARY",
      name: "Sanjay Gheji",
      linkedin: "www.linkedin.com/in/ sanjay-gheji-238147261",
      Contact: "7499575023",
      personImage: "img/SANJAY GHEJI.webp"
    },
    {
      portfolio: "DRAMA SECRETARY",
      name: "Aniket Dhait",
      linkedin: "https://www.linkedin.com/in/aniket-dhait-915296231/",
      Contact: "",
      personImage: "img/Relive.png"
    },
    {
      portfolio: "VARIETY SECRETARY",
      name: "Tanishq Ghadge",
      linkedin: "https://www.linkedin.com/in/tanishq-ghadge-332468216/",
      Contact: "8766942945",
      personImage: "img/Tanishq Ghadge.webp"
    },
    {
      portfolio: "Show-Flow Manager",
      name: "Rohan Oak",
      linkedin: "https://www.linkedin.com/in/rohan-oak-996314216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "9552746447",
      personImage: "img/Rohan Oak.webp"
    },
    {
      portfolio: "PG REPRESENTATIVE",
      name: "Prashant Joshi",
      linkedin: "https://www.linkedin.com/in/prashant-joshi-96255326a/",
      Contact: "",
      personImage: "img/Relive.png"
    },
    
    {
      portfolio: "PUBLICITY TEAM",
      name: "Krutika Soni",
      linkedin: "https://www.linkedin.com/in/krutika-soni-75ab4b251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "9421570848",
      personImage: "img/Krutika_Soni.webp"
    },
    {
      portfolio: "PUBLICITY TEAM",
      name: "Siddhant Sawale ",
      linkedin: "https://www.linkedin.com/in/siddhant-sawale-26166527a",
      Contact: "7447777154",
      personImage: "img/Siddhant Sawale.webp"
    },
    
    {
      portfolio: "ACCOUNTS & AUDIT",
      name: "Prathamesh Golhar",
      linkedin: "https://www.linkedin.com/in/prathmesh-golhar-873210261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "9370957635",
      personImage: "img/Prathmesh Golhar.webp"
    },
    {
      portfolio: "ACCOUNTS & AUDIT",
      name: "Rohan Patil ",
      linkedin: "https://www.linkedin.com/in/rohan-patil-vr99",
      Contact: "7821044069",
      personImage: "img/Rohan-Patil.webp"
    },
    {
      portfolio: "DOCUMENTATION TEAM",
      name: "Laksh Chajed",
      linkedin: "http://www.linkedin.com/in/laksh-chajed-a181392a8",
      Contact: "7270068007",
      personImage: "img/Laksh Chajed.webp"
    },
    {
      portfolio: "MEDIA TEAM",
      name: "Avadhoot Deshpande",
      linkedin: "https://www.linkedin.com/in/avadhoot-deshpande-383bb125a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "8530170470",
      personImage: "img/Avadhoot Deshpande.webp"
    },
    {
      portfolio: "MEDIA TEAM",
      name: "Sudhanshu Mote",
      linkedin: "https://www.linkedin.com/in/",
      Contact: "8329410097",
      personImage: "img/Sudhanshu-Mote.webp"
    },
    {
      portfolio: "PHOTOGRAPHY & VIDEOGRAPHY TEAM",
      name: "Yash Rasekar",
      linkedin: "https://linkedin.com/in/",
      Contact: "9021172218",
      personImage: "img/Yash Rasekar.webp"
    },
    {
      portfolio: "DESIGN TEAM",
      name: "Shreyash Kirpane",
      linkedin: "https://www.linkedin.com/in/shreyash-kirpane-4030a5248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "7972392561",
      personImage: "img/Shreyash Kirpane.webp"
    },
    {
      portfolio: "DESIGN TEAM",
      name: "Shivam Kakde",
      linkedin: "https://www.linkedin.com/in/shivam-kakde-758b81271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "7666609451",
      personImage: "img/SHIVAM KAKDE.webp"
    },
    {
      portfolio: "PURCHASE TEAM",
      name: "Yash Mandave",
      linkedin: "https://www.linkedin.com/in/yash-mandave-30aa572a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "9763169422",
      personImage: "img/Yash Mandave.webp"
    },
    {
      portfolio: "PURCHASE TEAM",
      name: "Yash Wakode",
      linkedin: "https://www.linkedin.com/in/yash-wakode-031058256/?originalSubdomain=in",
      Contact: "8378907011",
      personImage: "img/Yash Wakode.webp"
    },
    {
      portfolio: "ESM TEAM",
      name: "Tushar Bankar",
      linkedin: "https://www.linkedin.com/in/tushar-bankar-910423262",
      Contact: "8767666761",
      personImage: "img/Tushar_Bankar.webp"
    },
    {
      portfolio: "ESM TEAM",
      name: "Sachin Pawar",
      linkedin: "https://linkedin.com/in/jane-smith",
      Contact: "",
      personImage: "img/Relive.png"
    },
    {
      portfolio: "CAMPUS AND DECORATION TEAM",
      name: "Siddharth Dahibhate",
      linkedin: "https://www.linkedin.com/in/siddharth-dahibhate-0a2875259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "7773932970",
      personImage: "img/Siddharth Dahibhate.webp"
    },
    {
      portfolio: "CAMPUS AND DECORATION TEAM",
      name: "Snehal Kulkarni ",
      linkedin: "https://linkedin.com/in",
      Contact: "8805899580",
      personImage: "img/Snehal Kulkarni.webp"
    },
    {
      portfolio: "CHAMPIONSHIP TEAM",
      name: "Aditya Kulkarni",
      linkedin: "https://www.linkedin.com/in/aditya-kulkarni-91881b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "7796579977",
      personImage: "img/Aditya Kulkarni.webp"
    },
    {
      portfolio: "CHAMPIONSHIP TEAM",
      name: "Rajnandan Patil",
      linkedin: "https://www.linkedin.com/in/rajnandan-patil-4a48a1277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "9356868916",
      personImage: "img/Rajnandan-Patil.webp"
    },
    {
      portfolio: "INFRASTRUCTURE TEAM",
      name: "Krushna Deshmukh",
      linkedin: "https://www.linkedin.com/in/krushna-ashok-deshmukh-910129282/",
      Contact: "8180061699",
      personImage: "img/Krushna Deshmukh.webp"
    },
    {
      portfolio: "INFRASTRUCTURE TEAM",
      name: "Sachin Korde",
      linkedin: "https://www.linkedin.com/in/sachin-korde-74286120b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "8455073913",
      personImage: "img/Relive.png"
    },
    {
      portfolio: "CROWD AND SAFETY TEAM",
      name: "Tanmay Raut",
      linkedin: "https://www.linkedin.com/in/tanmay-raut-851191275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "8421520202",
      personImage: "img/Tanmay Raut.webp"
    },
    {
      portfolio: "CROWD AND SAFETY TEAM",
      name: "Aryan Bindroo",
      linkedin: "https://www.linkedin.com/in/aryan-kumar-bindroo-4366b530b/",
      Contact: "7006752072",
      personImage: "img/Aryan Suri.webp"
    },
    {
      portfolio: "CROWD AND SAFETY TEAM",
      name: "Sachin Digambar Chavan",
      linkedin: "https://www.linkedin.com/in/",
      Contact: "8767080584",
      personImage: "img/Sachin-Chavan.webp"
    },
    {
      portfolio: "CROWD AND SAFETY TEAM",
      name: "Adesh Mundhe",
      linkedin: "https://www.linkedin.com/in/adesh-mundhe-m989898",
      Contact: "9028929511",
      personImage: "img/Adesh-Mundhe.webp"
    },
    {
      portfolio: "WEB TEAM",
      name: "Anshul Shelokar",
      linkedin: "https://www.linkedin.com/in/anshul-shelokar-b902a7250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "7822892747",
      personImage: "img/Anshul Shelokar.webp"
    },
    {
      portfolio: "WEB TEAM",
      name: "Prajwal Thakare",
      linkedin: "https://www.linkedin.com/in/prajwalthakare9922?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Contact: "9529467912",
      personImage: "img/Prajwal Thakare.webp"
    },
    

    
  ];

  const teamGrid = document.querySelector('.team-grid');

  teamData.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('team-card');

    card.innerHTML = `
      <img src="${member.personImage}" alt="${member.name}" class="person-img">
      <div class="card-content">
        <h3>${member.portfolio}</h3>
        <p>${member.name}</p>
        <div class="social-links">
          <a href="${member.linkedin}" target="_blank" class="linkedin">LinkedIn</a>
          <a href="${member.Contact}" target="_blank" class="Contact">Contact</a>
        </div>
      </div>
    `;

    teamGrid.appendChild(card);
  });

  // Add functionality for the Contact button
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('Contact')) {
      // Prevent the browser from navigating to the "href" value
      event.preventDefault();
  
      // Get the Contact number from the button's `href` attribute
      const ContactNumber = event.target.getAttribute('href');
  
      // Copy the number to the clipboard
      navigator.clipboard.writeText(ContactNumber).then(() => {
        alert(`Contact number ${ContactNumber} copied to clipboard!`);
      }).catch(() => {
        alert("Failed to copy the Contact number. Please try again!");
      });
    }
  });
});
