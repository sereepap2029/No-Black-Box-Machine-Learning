async function datagen() {
    let resp = await axios({
      method: "post",
      url: "/api/datagen",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      data: {},
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