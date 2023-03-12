var data =[];
function them() {
    var cb_id = document.getElementById("id").value
    var cb_hoten = document.getElementById("hoten").value
    var cb_tuoi = document.getElementById("tuoi").value
    var cb_diachi = document.getElementById("diachi").value


    var item = {
        Id : cb_id,
        name: cb_hoten,
        Age: cb_tuoi,
        Address: cb_diachi
    }

    let index = data.findIndex((c) => c.Id == item.Id)
    
    if( index >= 0 ){
        data.splice(index,1,item)
    }
    else {
        data.push(item)
    }
    render()
    clear()
    deleteItem()
    editItem()
}

function render ()
{
    table = `<tr>
    <th>Mã cán bộ</th>
    <th>Họ tên</th>
    <th>Tuổi</th>
    <th>Địa chỉ</th>
    <th class ="tuychon">Tuỳ chọn</th>
  </tr>`
  for(let i=0; i<data.length; i++)
  {
    table += `<tr>
    <th>${data[i].Id}</th>
    <th>${data[i].name}</th>
    <th>${data[i].Age}</th>
    <th>${data[i].Address}</th>
    <th> <button onclick = "deleteItem(${data[i].Id})" >Xoá </button>
        <button onclick = "editItem(${data[i].Id})" >Sửa </button> 
    </th>
   
  </tr>`
  }
  document.getElementById("render").innerHTML = table
}

function clear() {
    document.getElementById("id").value = ""
    document.getElementById("hoten").value = ""
    document.getElementById("tuoi").value = ""
    document.getElementById("diachi").value = ""
}
function deleteItem(x){
        for (let i = 0; i <data.length;i++){
            if (data[i].Id == x){
                data.splice(i,1)
             }
             render()
        }
}

function editItem(x){
    for (let i = 0; i < data.length;i++)
    {
        if (data[i].Id == x){
            document.getElementById("id").value = data[i].Id;
            document.getElementById("hoten").value = data[i].name;
            document.getElementById("tuoi").value = data[i].Age;
            document.getElementById("diachi").value = data[i].Address;
        }
        render()
    }
}


