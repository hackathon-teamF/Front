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

const show_Page = () => {
  //ページネーションの表示
  const step = 3; //1ページの表示数
  let total_Pages = Math.floor(Object.keys(chatrooms).length / step) + 1; //総ページ数

  //ページネーションの部分に数字を表示させる
  const make_Pagenatio = () => {
    const pagenation_Ul = document.getElementById("pagination");
    pagenation_Ul.innerHTML = "";
    for (let num = 1; num <= total_Pages; num++) {
      const pagination_Li = document.createElement("li");
      const pagination_Anchor = document.createElement("a");
      pagination_Anchor.href = "#";
      pagination_Anchor.textContent = num;
      pagination_Li.appendChild(pagination_Anchor);
      pagenation_Ul.appendChild(pagination_Li);
    }
  };

  let current_Page = 1; //現在のページ

  //チャットルームリストを表示
  const make_Chatroom_List = (current_Page, step) => {
    const first_Room = (current_Page - 1) * step + 1; //現在のページの最初のルーム
    const end_Room = current_Page * step; //現在のページの最後のルーム
    const room_Ul = document.getElementById("roomlist");
    room_Ul.innerHTML = "";
    for (chatroom in chatrooms) {
      if (first_Room <= chatroom && chatroom <= end_Room) {
        const room_Li = document.createElement("li");
        room_Ul.appendChild(room_Li);
        const room_Anchor = document.createElement("a");
        room_Anchor.href = "#";
        room_Anchor.textContent = chatrooms[chatroom];
        room_Li.appendChild(room_Anchor);
      }
    }
    make_Pagenatio(step);
  };
  make_Chatroom_List(current_Page, step);

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
};

//ページをロードした時
window.onload = () => {
  show_Page();
};
