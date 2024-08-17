function createRow(container, studentName, samples) {
  const row = document.createElement("div");
  row.classList.add("display-row");
  container.appendChild(row);
  const rowLabel = document.createElement("div");
  rowLabel.innerHTML = studentName;
  rowLabel.classList.add("display-rowLabel");
  row.appendChild(rowLabel);
  for (let sample of samples) {
    const { id, label,student_id } = sample;
    const imgCon = document.createElement("div");
    imgCon.id = "sample_" + id;
    imgCon.classList.add("imgcon");
    const samLabel = document.createElement("div");
    samLabel.innerHTML = label;
    imgCon.appendChild(samLabel);
    const img = document.createElement("img");
    img.src = "/media/dataset/img/" + id + ".png";
    img.classList.add("display-thumb");
    if(utils.flaggedUsers.includes(student_id)){
        img.classList.add("blur");
    }
    imgCon.appendChild(img);
    row.appendChild(imgCon);
  }
}
