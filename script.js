const data = {
 math:[
  {name:"Ramanujan",details:"Indian math genius",achievements:["Number theory"],img:"raman.jpg"},
  {name:"Aryabhata",details:"Ancient mathematician",achievements:["Zero","π"],img:"arya.jpg"},
  {name:"Euclid",details:"Father of geometry",achievements:["Geometry"],img:"Euclid.jpg"},
  {name:"Gauss",details:"Prince of maths",achievements:["Statistics"],img:"https://upload.wikimedia.org/wikipedia/commons/9/9b/Carl_Friedrich_Gauss.jpg"},
 ],

 science:[
  {name:"A P J Abdul Kalam",details:"Missile Man",achievements:["ISRO"],img:"abdul.jpg"},
  {name:"Einstein",details:"Relativity",achievements:["Nobel"],img:"einstein.jpg"},
  {name:"Marie Curie",details:"Radioactivity",achievements:["2 Nobel"],img:"marie.jpg"},
  {name:"C V Raman",details:"Raman effect",achievements:["Nobel"],img:"cvraman.jpg"},
 ],

 tech:[
  {name:"Elon Musk",details:"Space innovator",achievements:["SpaceX"],img:"elon.jpg"},
  {name:"Bill Gates",details:"Microsoft",achievements:["Windows"],img:"bill.jpg"},
  {name:"Sundar Pichai",details:"Google CEO",achievements:["AI"],img:"sundar.jpg"},
  {name:"Mark Zuckerberg",details:"Meta founder",achievements:["Facebook"],img:"mark.jpg"},
  
 ],

 game:[
  {name:"Messi",details:"Football GOAT",achievements:["World Cup"],img:"messi.jpg"},
  {name:"Ronaldo",details:"Goal machine",achievements:["5 Ballon d'Or"],img:"ronaldo.jpg"},
  {name:"Virat Kohli",details:"Cricket king",achievements:["All formats"],img:"virat.jpg"},
  {name:"MS Dhoni",details:"Captain cool",achievements:["ICC trophies"],img:"dhoni.jpg"}
 ],

 robotic:[
  {name:"Boston Dynamics",details:"Advanced robots",achievements:["Spot"],img:"boston.jpg"},
  {name:"Sophia",details:"AI humanoid",achievements:["AI speech"],img:"sophia.jpg"},
  {name:"ASIMO",details:"Honda robot",achievements:["Walking"],img:"asimo.jpg"},
  {name:"Tesla Bot",details:"AI robot",achievements:["Automation"],img:"tesla.jpg"}  
 ],

 history:[
  {name:"Gandhi",details:"Father of Nation",achievements:["Non-violence"],img:"gandhi.jpg"},
  {name:"Subhash Bose",details:"INA leader",achievements:["Azad Hind"],img:"subhash.jpg"},
  {name:"Nelson Mandela",details:"Freedom fighter",achievements:["Anti-apartheid"],img:"nelson.jpg"},
  {name:"Abraham Lincoln",details:"US President",achievements:["Abolition"],img:"abiraham.jpg"},

 ]
};

function showHeroes(category){
    const content=document.getElementById("content");
    content.style.display="block";

    content.innerHTML=`
      <div class="grid">
        ${data[category].map(h=>`
        <div class="card">
          <img src="${h.img}">
          <h2>${h.name}</h2>
          <p>${h.details}</p>
          <ul>${h.achievements.map(a=>`<li>${a}</li>`).join("")}</ul>
        </div>`).join("")}
      </div>`;
}