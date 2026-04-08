async function getResult() {
    let name = document.getElementById("name").value.toLowerCase().trim();

    let id=document.querySelector("#id").value.trim();
    console.log("your search id is",id);

    console.log("name",name)
    let response = await fetch("data.csv");
    let data = await response.text();
    console.log("data",data)
    
     
    

    let rows = data.split("\n").slice(1);
    console.log("array change data",rows)

    let found = false;

    rows.forEach(row => {
        if (!row.trim()) return;
        let cols = row.split(",");
        console.log(cols);

        let ids=cols[0].trim();
        console.log("cols[0] is ",ids);
        let studentName = cols[1].toLowerCase().trim();
        console.log("studentname",studentName);

        if (studentName === name && ids===id) {
            document.getElementById("result").innerHTML =
                `Id: ${cols[0]} <br>
                 Name: ${cols[1]} <br>
                 Maths: ${cols[2]}`;
            found = true;
        }
      
       
    });

    if (!found) {
        document.getElementById("result").innerText = "Student not found ❌";
    }
    
}









// async function getResult() {
//     let name = document.getElementById("name").value.toLowerCase().trim();
//     let id = document.querySelector("#id").value.trim();

//     let response = await fetch("data.csv");
//     let data = await response.text();

//     let rows = data.split("\n").slice(1);

//     let found = false;

//     rows.forEach(row => {
//         if (!row.trim()) return; // ✅ skip empty rows

//         let cols = row.split(",");

//         let ids = cols[0].trim();
//         let studentName = cols[1].toLowerCase().trim();

//         if (studentName === name && ids === id) {
//             document.getElementById("result").innerHTML =
//                 `ID: ${cols[0]} <br>
//                  Name: ${cols[1]} <br>
//                  Marks: ${cols[2]}`;
//             found = true;
//         }
//     });

//     if (!found) {
//         document.getElementById("result").innerText = "Student not found ❌";
//     }
// }