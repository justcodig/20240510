// Create

const boradItem = {
    id: 1,
    title: "제목",
    content: "내용",
    like: 0,
    view: 0
}

class BoradItem {
    constructor(id, title, content, like, view) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.like = like;
        this.view = view;
    }
}

// Create
const item = [new BoradItem(1, "제목", "내용11111111111111111111111111111111111111111111", 0, 0), new BoradItem(2, "제목", "내용", 0, 0), new BoradItem(3, "제목", "내용", 0, 0)];
/* 
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul> 
*/
//read
function render() {
    document.querySelector(".list").innerHTML = `
    <ul>
        <li>번호</li>
        <li>제목</li>
        <li>내용</li>
        <li>좋아요</li>
        <li>삭제</li>
    </ul>
    `
    for (let i = 0; i < item.length; i++) {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const li5 = document.createElement("li");
        const div = document.createElement("div");
        ul.append(li, li2, li3, li4, li5);
        li.innerHTML = item[i].id;
        li2.innerHTML = item[i].title;
        li3.append(div)
        li3.onclick = (e) => {
            console.log(e.target)
            e.target.innerHTML = "";
            const input = document.createElement("input");
            input.style.width = "80px"
            input.onkeydown = function (e) {
                console.log(e.keyCode)
                if (e.keyCode === 13) {
                    item[i].content = e.target.value;
                    render();
                }
            }
            e.target.append(input);
        }
        div.innerHTML = item[i].content;
        li4.innerHTML = item[i].like;
        li5.innerHTML = "X";
        li5.onclick = () => {
            item.splice(i, 1);
            render();
        }

        // 화면에 출력
        document.querySelector(".list").append(ul)
    }
}
render()
// read

// update
// 수정

// delete
// 삭제