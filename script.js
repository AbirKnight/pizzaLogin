let title = document.getElementById('main_heading');
let nameitem="Wellcome To Pizzahut";
let index=1;
const typeWritter=()=>{
    let new_title=nameitem.slice(0,index);
    title.innerText=new_title;
    index>nameitem.length ? index=1:index++;
    setTimeout(() => {
        typeWritter()
    }, 100);
}
typeWritter();