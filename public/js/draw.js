const draw = {};
draw.path = (ctx, path, color = "black") => {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(...path[0]);
  for (var i = 1; i < path.length; i++) {
    ctx.lineTo(...path[i]);
  }
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
};
draw.paths = (ctx, paths, color = "black") => {
  for (const path of paths) {
    draw.path(ctx, path, color);
  }
};

async function save(dataIns) {
  console.log(dataIns);
  let resp = await axios({
    method: "post",
    url: "/api/save",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    data: dataIns,
  }).catch(function (error) {
    console.log(error.toJSON());
    Swal.fire({
      icon: "error",
      title: "เพิ่มข้อมูล Error",
      text: "ajax ERROR",
    });
  });
  if (resp.data.status == "success") {
    Swal.fire({
      icon: "success",
      title: "เพิ่มข้อมูลสำเร็จ",
      text: resp.data["msg"],
    }).then((result) => {
      //window.open("/", "_self");
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "เพิ่มข้อมูล Error",
      text: resp.data["msg"],
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = draw;
}
