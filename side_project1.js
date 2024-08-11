// function add_queue(selected_time) {
//     let user_name = document.getElementById("name").innerText
//     let queue = selected_time.querySelector(".queue")
//     if (!queue) { //비어있다면 큐 생성, 이름 집어넣기
//         let new_queue = document.createElement("p")
//         new_queue.className = "queue"
//         new_queue.textContent = user_name
//         selected_time.appendChild(new_queue)

//         //버튼 하단에 마진을 동적을 증가
//         selected_time.style.marginBottom = "30px";
//     }
//     else if (user_name in selected_time) { //있다면 이름 삭제
//         alert("hi")
//         }ㄴ
    
//     //user_name.innerHTML='hi'
//     //user_name.id=""
//     selected_time.appendChild(user_name)
// }

function add_queue(selected_time) {
    let user_name = document.getElementById("name").innerText;
    let queue = selected_time.querySelector(".queue");

    if (!queue) { // 비어있다면 큐 생성, 이름 집어넣기
        let new_queue = document.createElement("p");
        new_queue.className = "queue";
        new_queue.textContent = user_name;
        selected_time.appendChild(new_queue);

        // 버튼 하단에 마진을 동적으로 증가
        selected_time.style.marginBottom = "30px";
    } else {
        let queue_names = queue.textContent.split(', ');

        if (queue_names.includes(user_name)) { // 이름이 있다면 삭제
            queue_names = queue_names.filter(name => name !== user_name);
            
            if (queue_names.length === 0) {
                // 모든 이름이 삭제되었으면 큐 요소 제거
                selected_time.removeChild(queue);
                // 버튼 하단에 마진을 원래대로 복원
                selected_time.style.marginBottom = "6px";
            } else {
                // 이름이 남아있으면 큐의 텍스트 업데이트
                queue.textContent = queue_names.join(', ');
            }
        } else {
            alert("The name is not in the queue.");
        }
    }
}
