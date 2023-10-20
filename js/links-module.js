import data from "../jsons/links.json" assert {type: 'json'};

var container = document.querySelector('.container');

for (var i in data) {
    var name = i;
    var link = data[i]['url'];
    var type = data[i]['type'];

    var elContDiv = document.createElement('div');
    elContDiv.className = 'el-cont';

    var nameParagraph = document.createElement('p');
    nameParagraph.className = 'el-item';
    nameParagraph.textContent = name;

    var typeLink = document.createElement('a');
    typeLink.className = 'type';
    typeLink.href = link;
    typeLink.target = '_blank';
    typeLink.textContent = type;

    elContDiv.appendChild(nameParagraph);
    elContDiv.appendChild(typeLink);

    container.appendChild(elContDiv);
}
