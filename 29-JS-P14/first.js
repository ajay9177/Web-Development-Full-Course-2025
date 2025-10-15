const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming";
newElement.id = "second";
// console.log(newElement);

//select element
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali aa rahi hai";
newElement2.id = "third";
// newElement2.className = "diwali";
// newElement2.className += " Holi";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
// newElement2.classList.remove("diwali");

newElement2.style.backgroundColor = "brown";
newElement2.style.backgorundColor = "30px";
newElement2.setAttribute("hello","ji");

element.before(newElement2);

console.log(newElement2.getAttribute("hello"));

//before after
// const list = document.createElement("li");
// list.textContent = "Milk";
// const list2 = document.createElement("li");
// list2.textContent = "Cake";

// const list3 = document.createElement("li");
// list3.textContent = "Halwa";

// const list4 = document.createElement("li");
// list4.textContent = "Paneer";

const unorderedElement = document.getElementById("listing");

// unorderedElement.append(list,list2);
// unorderedElement.prepend(list3);

// unorderedElement.children[1].after(list4);

const arr = ["Milk","Halwa","Paneer","Tofu","Tea"];
const fragment = document.createDocumentFragment();


for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorderedElement.append(fragment);

const s1 = document.getElementById("first");
s1.remove();

const month = document.getElementById("ten");

// console.log(month.children);
// console.log(month.childNodes);

const lister = document.createElement("li");
lister.textContent = "<h2>Help</h2>";

// lister.innerHTML = "<h2>Help</h2>";

month.prepend(lister);
// month.insertAdjacentElement("afterend",lister);

