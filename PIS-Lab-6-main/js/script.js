"use strict";

function task_3() {
    document.querySelector(`.submitBtn`).addEventListener(`click`, () => {
                document.getElementById(`textArea`).value = ""
                let url = `https://api.github.com/repos/${document.querySelector(`.username`).value}/${document.querySelector(`.reposname`).value}/commits`;
        fetch(url).then((response) => 
        {
            if(!response.ok){
                document.getElementById(`textArea`).value = `${response.status} - ${response.statusText}`;
                throw new Error(response.message);
            }
            return response.json();
        }).then((data) => {
          data.forEach((e) => {
            document.getElementById(`textArea`).value += `• ${e[`commit`][`author`][`name`]}: ${e[`commit`][`message`]}\n`;
        })
        }).catch((Error) => {})
    })
}

task_3();