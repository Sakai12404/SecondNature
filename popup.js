const openBtns = document.querySelectorAll('#openLesson');
const closeBtn = document.getElementById('closeBtn');
const popupOverlay = document.getElementById('popupOverlay');
  
// Open popup
openBtns.forEach(openBtn => {
  openBtn.addEventListener('click', () => {
    const LessonData = openBtn.getAttribute("data");
    if (LessonData == "Introduction into Sphero Minis") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Introduction into Sphero Minis </h2>
      <p> Students in a group of 4-5 will be given a Sphero Mini in order to share. The instructor will give time for the groups to freely use the Sphero Edu Web App in the Block editor that is provided to explore for themselves on Chromebooks. The instructor will show the students the basic block coding structure. Then the group of students will have to get their Sphero Minis from the starting line to the finish line. </p>
      `;
    } else if (LessonData == "Movement of Sphero Minis") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Movement of Sphero Minis </h2>
      <p> brief details</p>;
      `;
    } else if (LessonData == "LED Control and Variables") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> LED Control and Variables </h2>
      <p> brief details</p>
      `;
    } else if (LessonData == "Sensors, Inputs, and Conditional Logic") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Sensors, Inputs, and Conditional Logic </h2>
      <p> brief details </p>
      `;
    } else if (LessonData == "Loops and Functions") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Loops and Functions </h2>
      <p> brief details </p>
      `;
    } else if (LessonData == "Moving to Python") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Moving to Python </h2>
      <p> brief details </p>
      `;
    } else if (LessonData == "Binary and Decimal") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Binary and Decimal </h2>
      <p> brief details </p>
      `;
    } else if (LessonData == "Applying Python to Sphero Minis") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Applying Python to Sphero Minis </h2>
      <p> brief details </p>
      `;
    } else if (LessonData == "Autonomous Movement") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Autonomous Movement </h2>
      <p> brief details </p>
      `;
    } else if (LessonData == "Applied Challenge") {
      popupOverlay.querySelector('.popup-content').innerHTML = `
      <h2> Applied Challenge </h2>
      <p> brief details </p>
      `;
    }
    popupOverlay.classList.add('active');
  });
});

// Close popup via button
closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});

// Close popup if user clicks anywhere outside the white box
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});
