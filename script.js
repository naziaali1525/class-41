function print(){
    let bodyEl = document.querySelector("body");
    let minNum = parseInt(document.querySelector("#min").value);
    let maxNum = parseInt(document.querySelector("#max").value);

    for (let i = minNum; i <=maxNum; i++ ) {
       bodyEl.innerHTML = bodyEl.innerHTML +  "<p>" + i + "</p>";

        console.log(bodyEl.innerHTML);
        
    }
}

