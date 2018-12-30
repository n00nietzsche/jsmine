document.querySelector('#exec').addEventListener('click', function() {
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    console.log(hor, ver, mine);  

    var candidates = Array(hor * ver)
        .fill()
        .map(function (ele, index) {
            return index + 1; // 리턴하는 게 배열 값으로 들어간다~
        });

    console.log(candidates);
    var shuffle = [];


    var dataset = [];
    var tbody = document.querySelector('#table tbody');
    for (var i=0; i<ver; i+=1){
        var arr = [];
        dataset.push(arr);
        var tr = document.createElement('tr');
        for (var j=0; j<hor; j+=1){
            arr.push(1)
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    console.log(dataset);
});