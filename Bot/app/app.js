(function() {

    "use strict";
  
    const responses = [
        "Salam)",
        "Bele de sen?",
        "Haa)",
        "Hecne uzanmiwam sen?",
        "Haa)",
        "Bawqa ne var ne yox?)",
        "Yaxwi olasiz)",
        "Xowuna gelir iwleme prinsipi?)",
        "Bidene ne yaz hele",
        "Caaart)",
        "Yaxwi gedirem",
        "Zaman lazimdi tekmillewdirecem ozumu",
        "Gozlerim yumulur, gedim yatim",
        "Gecen xeyre Allaha emanet maci",
        "He de yaxwi"
    ];
  
    const submit = document.querySelector(".chat-submit");
    const chatBox = document.querySelector(".chat-box");
    const chatInput = document.querySelector(".chat-input");
  
    // const aiThinking = false;
  
    function chatTemplate(aiOrPerson) {
      return (
        `
          <div class="ai-person-container">
            <div class="${aiOrPerson.class}">
              <p class="txt">${aiOrPerson.text}</p>
            </div>
            <span class="${aiOrPerson.class}-date">${aiOrPerson.date}</span>
          </div>
        `
      );
    }
    
    

    submit.addEventListener("click", function(e) {
      appendChatBox(true);
      

    // setTimeout(function(){
    //     let person=document.querySelector(".txt");
    //      if(person.innerHTML=="Neynisen"){
    //         alert("uzanmiwam sen?");
    //      }
    //      person.innerHTML="";
    // },2000);
    });
  
    document.addEventListener("keypress", function(e) {
      if (e.keyCode == "13") {
        appendChatBox(true);
      }
    })
  
    function appendChatBox(fromPerson) {
      const date = new Date()
      if (!fromPerson){
        date.setSeconds(date.getSeconds() + 2)
      }
      if (fromPerson && !chatInput.value.trim()) {
        return;
      }
      const timestamp = date.toLocaleTimeString()
      const newChatDiv = chatTemplate({
        class: fromPerson ? "person" : "ai",
        text: fromPerson ? chatInput.value.trim() : aiResponse(),
        date: timestamp
      });
      if (!fromPerson) {
        // make it so it only responds once to multiple fast sentences
        setTimeout(function() {
          chatBox.innerHTML += newChatDiv;
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 2000)
      } else {
        chatBox.innerHTML += newChatDiv;
        chatBox.scrollTop = chatBox.scrollHeight;
      }
      if (fromPerson) {
        chatInput.value = "";
        appendChatBox(false);
      }
    }
    let num=0;
    function aiResponse() {
        const responseIndex = getRandomInt();
        if(num==16){
            Swal.fire('Getdi brat getdi')
            setTimeout(function(){
                location.reload()
            },2000)
        }
        const response = responses[responseIndex];
        return response;
      }
    
      function getRandomInt() {
        return num++;
      }
  
  }())