let c0621h1 = ['quân', 'thảo', 'hoàn', 'ý', 'sơn', 'huy'];

function lopc0621h1() {
    let content = '';
    for (let j = 0; j < c0621h1.length; j++) {
        let i = j + 1;
        console.log(j)
        content += '<tr>' + '<td>' + i + '</td>' + '<td>' + c0621h1[j] + '<button onclick="xoa()">delete</button>'+'<button onclick="edit()">edit</button>'+'</td>'+'</tr>'
        console.log(content)
        // document.getElementById('han').innerHTML = bang;

    }
    console.log('content -->', content)
    document.getElementById('intr').innerHTML = content;
}

lopc0621h1();

function add() {
    let add = document.getElementById('value').value;
    c0621h1.push(add);
    document.getElementById('value').value;
    lopc0621h1()
}
function xoa(xoa){
    c0621h1.splice(xoa,1);
    lopc0621h1();
}
function edit(sua){
   let newadd = prompt('moi ban sua' ,c0621h1[sua]);
        c0621h1[sua]=newadd;
    lopc0621h1();
}