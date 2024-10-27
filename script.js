const input = document.getElementById("inputted");
const submit = document.getElementById("submitted");
const mode = document.getElementById("checked");

const switchMode = (val, type) => {
    const ascii = val.charCodeAt(0);
    return type ? ascii.toString(2).padStart(8, "0") : ascii;
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const value = input.value;
    const type = mode.checked;

    const result = Array.from(value).map(val => {
        return switchMode(val, type);
    }).join(", ");
    document.getElementById("input").innerHTML = value;
    document.getElementById("result").innerHTML = result;
});