const chatrooms = {
  1: "roomA",
  2: "roomB",
  3: "roomC",
  4: "roomD",
  5: "roomE",
  6: "roomF",
  7: "roomG",
  8: "roomH",
  9: "roomI",
  10: "roomJ",
  // 11: "roomK",
  // 12: "roomL",
  // 12: "roomM",
  // 13: "roomN",
  // 14: "roomO",
  // 15: "roomP",
  // 16: "roomQ",
};

const step = 3; //1ページの表示数
let total_Pages = Math.floor(Object.keys(chatrooms).length / step) + 1; //総ページ数
let current_Page = 1; //現在のページ

//ページネーション
const make_Pagenation = (total_Pages) => {
  const pagenation_Ul = document.getElementById("pagination");
  //ulを空に
  pagenation_Ul.innerHTML = "";
  //pagenationの要素作成
  for (let num = 1; num <= total_Pages; num++) {
    const pagination_Li = document.createElement("li");
    pagination_Li.textContent = num;
    pagination_Li.addEventListener("click", () => {
      make_Chatroom_List(num, step);
    });
    pagenation_Ul.appendChild(pagination_Li);
  }
};

//現在表示されてるページの背景塗りつぶし

//チャットルームリストを表示
const make_Chatroom_List = (page, step) => {
  const first_Room = (page - 1) * step + 1; //現在のページの最初のルーム
  const end_Room = page * step; //現在のページの最後のルーム
  const room_Ul = document.getElementById("roomlist");
  console.log("a");
  //ulを空に
  room_Ul.innerHTML = "";
  for (chatroom in chatrooms) {
    if (first_Room <= chatroom && chatroom <= end_Room) {
      const room_Li = document.createElement("li");
      room_Ul.appendChild(room_Li);
      const room_Anchor = document.createElement("a");
      room_Anchor.href = "detail.html";
      room_Anchor.textContent = chatrooms[chatroom];
      room_Li.appendChild(room_Anchor);
    }
  }
};

//ページネーションの次へと前えへ機能
document.getElementById("next").addEventListener("click", () => {
  if (current_Page >= total_Pages) return;
  current_Page += 1;
  make_Chatroom_List(current_Page, step);
});

document.getElementById("prev").addEventListener("click", () => {
  if (current_Page === 1) return;
  current_Page -= 1;
  make_Chatroom_List(current_Page, step);
});

//ページをロードした時
window.onload = () => {
  make_Pagenation(total_Pages);
  make_Chatroom_List(current_Page, step);
};
