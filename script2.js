// ================== CHAPTER DATA ==================
let chapters = [
    {
        name: "Relations and Functions",
        link: "ch.pdf"
    },
    {
        name: "Matrices",
        link: "notes2.pdf"
    },
    {
        name: "Determinants",
        link: "notes3.pdf"
    },
    {
        name: "Continuity and Differentiability",
        link: "notes4.pdf"
    }
];


// ================== SELECT ELEMENTS ==================
let notesBtn = document.querySelector(".notes");
let notesSection = document.querySelector(".notes-section");


// ================== EVENT LISTENER ==================
notesBtn.addEventListener("click", showNotes);


// ================== SHOW NOTES FUNCTION ==================
function showNotes() {

    // Clear previous content
    notesSection.innerHTML = "";

    // Loop through chapters
    chapters.forEach((chapter) => {

        let div = document.createElement("div");
        div.classList.add("chapter-card");

        div.innerHTML = `
            <h3>${chapter.name}</h3>
            <button class="view-btn">View</button>
        `;

        // Button click event (important 🔥)
        let btn = div.querySelector(".view-btn");
        btn.addEventListener("click", () => {
            openNote(chapter.link);
        });

        notesSection.appendChild(div);
    });
}


// ================== OPEN NOTE FUNCTION ==================
function openNote(link) {

    notesSection.innerHTML = `
        <button id="backBtn">⬅ Back</button>
        <iframe src="${link}" width="100%" height="500px"></iframe>
    `;

    // Back button event
    let backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", showNotes);
}