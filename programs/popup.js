const openBtns = document.querySelectorAll('#openLesson');
const closeBtn = document.getElementById('closeBtn');
const popupOverlay = document.getElementById('popupOverlay');
  
// Open popup
openBtns.forEach(openBtn => {
  openBtn.addEventListener('click', () => {
    const programData = openBtn.getAttribute('program');
    const lessonData = openBtn.getAttribute('lesson');

    if (programData === "ampinstruct") 
      ampInstructClassData(lessonData);
    else if (programData === "chemtuition") 
      chemTuitionClassData(lessonData);
    else if (programData === "formforge")
      formForgeClassData(lessonData);
    else if (programData === "programmingdev")
      programmingDevClassData(lessonData);

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

function ampInstructClassData(lessonData) {
  if (lessonData === "1") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Introduction to electronics </h2>
    <p> 
      Students will make a simple LED circuit where they need to make a switch toggle an LED. Batteries will be provided at the end to make sure they can power the circuit without the risk of the batteries short-circuiting.
    </p>
    `;
  } else if (lessonData === "2") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Ohm's Law and Flow of Energy </h2>
    <p>
      The funnels will be used to show how electricity flows through wires. A common analogy for visualizing how electricity flows is the pipe analogy. The pipe analogy is flawed, but it is very useful for visualization and comprehension still, and the flaws will be pointed out.
    </p>
    `;
  } else if (lessonData === "3") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Circuit Drawing </h2>
    <p>
      Equivalent resistance questions will be provided that the students will have to draw and solve.
    </p>
    `;
  } else if (lessonData === "4") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Kirchoff's Law and Resistor Color Codes </h2>
    <p>
      Students will have to color in various resistor colors and do problems calculating the resistance based on the resistor color codes. There will also be problems provided about Kirchhoff's Law.  
    </p>
    `;
  } else if (lessonData === "5") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Diodes</h2>
    <p> 
      Students will make an LED circuit with a diode and be told to put it in two different directions. Some of the circuits will not turn on, as the diodes will act as a sort of “buffer.” This will be explained to the students after the fact, as their LEDs will turn on after their diodes are flipped.
    </p>
    `;
  } else if (lessonData === "6") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Capacitors </h2>
    <p> 
      Students will see how capacitors work by detaching power from a capacitor to watch an LED dim out. This will be a demonstration at the start of the class showing students how capacitors hold onto power. At the end of class, whoever calculates the closest time that the capacitor takes to run out of power wins a prize.
    </p>
    `;
  } else if (lessonData === "7") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Circuit Diagram Translation </h2>
    <p> 
      The students will have to make circuit diagrams based on Fritzing diagrams. Fritzing diagrams are diagrams that mimic real-life circuits. They will also have to do the opposite, translating circuit diagrams to real-life circuits.
    </p>
    `;
  } else if (lessonData === "8") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Types of Capacitors and Resistors </h2>
    <p> 
      Students will present their findings at the end of class. I will be there to assist them with any questions while they are researching. I will show them some demos and videos about the various capacitors and resistors.
    </p>
    `;
  } else if (lessonData === "9") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> PWM and Microcontrollers </h2>
    <p> 
      I will blink the flashlight like a PWM output. The students will then raise their arms, showing how much "power" the PWM output has. There will also be videos shown for the applications of PWM.
    </p>
    `;
  } else if (lessonData === "10") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Electronic Applications for an Arduino </h2>
    <p> 
      I will be showcasing an Arduino Uno controlling things using PWM. The students will be able to write some programs on my laptop too by coming up with their own program earlier during class.
    </p>
    `;
  }
}

function chemTuitionClassData(lessonData) {
  if (lessonData === "1") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Introduction to Chemistry </h2>
    <p>
    Students will be given laminated periodic tables to observe and discuss. They will then play a game in which the instructor asks them to locate a specific element or group using the periodic table as a guide. The students will also be allowed to examine the periodic table and ask any questions they have about it to the instructor.
    </p>
    `;
  } else if (lessonData === "2"){
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Stoichiometry </h2>
    <p>  
      Students will be given a fixed amount of each reactant (calcium chloride and sodium carbonate) and asked to predict which one will “run out” first based on the balanced equation, without doing mole/mass calculations. They'll then mix the reactants and observe the precipitate form, confirming their prediction. 
    </p>
    `;
  } else if (lessonData === "3") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Redox Reactions </h2>
    <p>  
      Students will set up three pieces of steel wool: one in salt water, one in plain water, one dry. They will guess which will rust fastest before starting. The experiment will then sit until next class, when they will observe the rust on each piece of steel wool. At the end, they compare what actually happened to their guess.
    </p>
    `;
  } else if (lessonData === "4") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Acids/Bases </h2>
    <p> 
      Students will first mix vinegar with water, then baking soda with water, and will be asked whether they expect each to be acidic or basic; then they will use the indicator to test each. Then students will be told to mix the two to see the reaction.
    </p>
    `;
  } else if (lessonData === "5") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Bonding </h2>
    <p> 
      Students will use washers as atoms and magnets as electrons to simulate ionic and covalent bonds.
    </p>
    `;
  } else if (lessonData === "6") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Molecular Geometries </h2>
    <p> 
      Students use the bonding kit to build several molecules, then compare their models to predict each molecule's shape based on lone pairs and bonding pairs. 
    </p>
    `;
  } else if (lessonData === "7") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Intermolecular Forces </h2>
    <p> 
      Students predict how many drops of water, alcohol, and dish soap will fit on a penny before spilling over, then test each one and count. Afterward, they compare their guesses to the results and talk about why water holds together more than the others while dish soap breaks that surface tension. 
    </p>
    `;
  } else if (lessonData === "8") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Solubility </h2>
    <p> 
      Students will be told to mix salt and sand individually with water to show the effects of solubility. Then students will be given a mystery powder (chalk), and they will have to decide if it is soluble or insoluble in water given their observations. 
    </p>
    `;
  } else if (lessonData === "9") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Gas Laws </h2>
    <p> 
      Students will place a balloon on top of a plastic water bottle, covering it fully. They will then put the bottle in warm water and observe how the size of the balloon changes. Then the students will put the same bottle into a bowl with ice in it to see how the balloon shrinks in size.
</p>
    `;
  } else if (lessonData === "10") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Thermodynamics </h2>
    <p> 
      Students will measure the temperature of the distilled water in their cup. They will then add baking soda and vinegar to the water and observe how the temperature of the mixture increases.
    </p>
    `;
  }
}

function formForgeClassData(lessonData) {
  if (lessonData === "1") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Onshape Basics and Sketches Introduction </h2>
    <p>  
      Students will use their Chromebooks or personal computers to create an Onshape account, learn how to navigate the website, create a new document, and learn basic sketches.
    </p>
    `;
  } else if (lessonData === "2"){
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Sketches and Constraints </h2>
    <p>  
      Students will use their Chromebooks or personal computers to learn how to constrain a sketch and also use some new tools.
    </p>
    `;
  } else if (lessonData === "3") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Part Studios and Assembly Basics </h2>
    <p>
      Students will use their Chromebooks or personal computers to turn sketches into their first 3D parts and learn assembly basics.
    </p>
    `;
  } else if (lessonData === "4") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Drawer Project </h2>
    <p> 
      In this lesson, students will use their skills from the past three lessons to create a Cmodel AD of a drawer using fastened, fix, sliders, part studio skills, and sketch-making skills.
    </p>
    `;
  } else if (lessonData === "5") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> 3D Printer Use </h2>
    <p> 
      Today, students will learn from a slideshow and demo (the room teacher), showing them how to get a CAD file from Onshape to print on the Bambu Lab A1 Mini and learn all about the printer itself. After this lesson (Lesson 6 => Lesson 10), a 3D-printed fidget or toy will start printing at the start of the lesson, and a raffle will be done at the end to decide who keeps the 3DP(s).
    </p>
    `;
  } else if (lessonData === "6") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> 3D Printable Parts </h2>
    <p> 
      Students will use their Chromebook or personal computer to learn how to CAD 3D printable parts that can fit together. In the last 30 minutes, students will work together in groups of 3-5 to design a 3D printable container with a hinge to be 3D printed.
    </p>
    `;
  } else if (lessonData === "7") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Dimensioning </h2>
    <p> 
      Students will create a mechanical part in Onshape using precise dimensions and generate a technical drawing of their design. They will include the necessary measurements and views so that another person could understand and reproduce the part.
    </p>
    `;
  } else if (lessonData === "8") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Design Iteration and Prototyping </h2>
    <p> 
      Students will design and 3D-print a prototype of a functional object. After testing their prototype, they will identify areas for improvement, modify their Onshape models, and print an updated version. Students will compare their original and revised designs and explain how their changes improved the final result.
    </p>
    `;
  } else if (lessonData === "9") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Project Part 1 </h2>
    <p> 
      Students will independently design an original object or mechanical system in Onshape, applying the skills they have learned throughout the course. They will create the necessary parts and assemblies, establish accurate dimensions, and prepare their designs for 3D printing.
    </p>
    `;
  } else if (lessonData === "10") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Project Part 2 </h2>
    <p> 
      Students will 3D-print and test their final projects, making any necessary adjustments to their CAD models. They will present their finished designs to the class, demonstrating their functionality and explaining their design process, challenges, and improvements.
    </p>
    `;
  }
}

function programmingDevClassData(lessonData) {
  if (lessonData === "1") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Introduction into Sphero Minis </h2>
    <p> 
      The instructor will give time for the groups to freely use the Sphero Edu Web App in the Block editor that is provided to explore for themselves on Chromebooks. The instructor will show the students the basic block coding structure. Then the group of students will have to get their Sphero Minis from the starting line to the finish line    </p>
    `;
  } else if (lessonData === "2") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Movement of Sphero Minis </h2>
    <p> 
      The instructor will show the students how to move a certain distance and turn. The students will be given a challenge to make the Sphero Mini draw a rectangle. Once all the groups have finished with the rectangles, the instructor will give them a new challenge to draw a star based on their gained knowledge of how they drew the rectangles.
    </p>
    `;
  } else if (lessonData === "3") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> LED Control and Variables </h2>
    <p> 
      The instructor will show the students how to implement wait commands and LED control commands into their Sphero Minis. The students will be given a challenge to make an LED light show and use their previous knowledge of movement to make it interesting. The instructor will show the students how to make variables and how to use them to control their Sphero Minis. The challenge for the students will be to make their Sphero Mini move in two similar obstacle courses but differ in length. After the students finish both obstacle courses, they will be told to do it in a faster time.
    </p>
    `;
  } else if (lessonData === "4") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Sensors, Inputs, and Conditional Logic </h2>
    <p> 
      The instructor will show the students the different sensors that the Sphero Mini has. The instructor will tell the students to make the Sphero Mini flash different lights when certain conditions are met. As well it should autocorrect the Sphero Mini so that the robot can not be unbalanced. The instructor will show the students how conditional statements work, then show an example with the Sphero Mini. The students will be presented with a challenge in order to get their Sphero Mini to hit a pair of walls and go back and forth. Once all the students get their code to work, they will use the knowledge of the collision method to hit all sides of a square
    </p>
    `;
  } else if (lessonData === "5") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Loops and Functions </h2>
    <p> 
      The instructor will show the students how to draw a rectangle without loops. Then the instructor shows the different loops and instructs the students to make a program that uses a loop in order to draw a rectangle with the least amount of code. Once all the students have finished drawing their rectangles, they will use this knowledge to draw a star using loops. The instructor will show the students the code to draw a rectangle with loops. Then the instructor shows the students how to make functions and how to pass in parameters. Given this knowledge, the students will be instructed to make a program that makes a shape based on the passed-in value of the function.
    </p>
    `;
  } else if (lessonData === "6") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Moving to Python </h2>
    <p> 
      The instructor will show the students the syntax, printing, variables, inputting from the console, functions, loops, and conditional logic. Then the instructor will have the students make a program where the program asks for a number from 0 to 100, stores the number in a variable, then uses conditional logic to determine the grade the user would get on a grade scale and prints the result. Once all the students have finished this activity, they would put the code into a function where the parameter is the grade number and return the grade letter. Once all the students finish this part of the program, they will build on this by putting the function in a loop, where the loop terminates when the user inputs “finish”.
    </p>
    `;
  } else if (lessonData === "7") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Binary and Decimal </h2>
    <p> 
      The instructor will explain binary and decimal. The instructor will provide a quick worksheet on converting binary and decimal numbers to understand the formula for converting them. The instructor will challenge the students individually to make a program that can convert a decimal number into a binary number and vice versa.
    </p>
    `;
  } else if (lessonData === "8") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Applying Python to Sphero Minis </h2>
    <p> 
      The instructor will show the students basic movements that they used previously in the block editor and how to translate them into Python code. The students will revisit their program that draws an n-gon shape with a function in block coding and convert it into Python code.
    </p>
    `;
  } else if (lessonData === "9") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Autonomous Movement </h2>
    <p> 
      The instructor will review the sensors and how to use them with logical conditions to have the robot do things based on its environment. The instructor will give the students a challenge to make a program where the Sphero Mini moves through a maze; however, the students are not allowed to measure the lengths of the walls in order to make the code predetermined. The students will need to implement a solution where the Sphero Mini uses its sensors in order to clear the maze.
    </p>
    `;
  } else if (lessonData === "10") {
    popupOverlay.querySelector('.popup-content').innerHTML = `
    <h2> Applied Challenge </h2>
    <p> 
      The instructor will provide an obstacle course, and the groups will compete for the fastest times
    </p>
    `;
  }
}