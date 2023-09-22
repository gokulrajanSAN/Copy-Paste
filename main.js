const saveForm = document.getElementById("form");
const notesListDiv = document.getElementById("notesListDiv");
const mark = document.getElementById("markID");

/*
saveForm.addEventListener(("submit"), (e) => {
    e.preventDefault();
    let form = new FormData(e.target)
    let title = [...form][0][1];
    let text = [...form][1][1]
    saveFun(title, text);
    saveForm.reset();
});

function saveFun(title, text) {
    const newList = document.createElement("details");
    const newListTitle = document.createElement("summary");
    const newListText = document.createElement("p");

    newListText.innerText = text;
    newListTitle.innerText = title;

    newList.classList.add("listItems");

    newList.appendChild(newListTitle);
    newList.appendChild(newListText);

    notesListDiv.appendChild(newList);
}
*/
// function selectText(params) {
//     const inbut = document.getElementById("textArea");
//     inbut.focus();
//     inbut.select();
// }

mark.addEventListener(("click"), (e) => {
    e.preventDefault();
    const inbut = document.getElementById("textArea");
    const inbutValue = inbut.value;

    const start = inbut.selectionStart;
    console.log(start);

    const end = inbut.selectionEnd
    console.log(end);

    inbut.focus();

    console.log(inbutValue.substring(start, end));

});
