console.log("Hello World");

const butn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

const factsList = document.querySelector(".facts-list");

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

factsList.innerHTML = "";

createFactsList(initialFacts);

function createFactsList(dataArray) {
  const listArr = initialFacts.map(
    (fact) => `<li class = "fact"> 
        
        <p>
        ${fact.text} 
                      <a
                        class="source"
                        href="${fact.source}"
                        target="_blank"
                        >(Source)</a
                      >
                    </p>
                    <span class="tag" style="background-color: #3b82f6"
                      >${fact.category}</span
                    ></li>`
  );
  console.log(listArr);

  const html = listArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

butn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    butn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    butn.textContent = "Share a fact";
  }
});