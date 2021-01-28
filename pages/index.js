import Talk from "talkjs";
import { useEffect, createRef } from 'react'
export default function Home(props) {

  const talkjsContainer = createRef();
  useEffect(() => {
    // const currentUser = props.currentUser;
    Talk.ready.then(() => {

      var me = new Talk.User({
        id: "1",
        name: "คุณ วุฒิชัย",
        email: "phutthichod@gmail.com",
        // photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey there! How are you? :-)",
        role: "buyer"
      });
      window.talkSession = new Talk.Session({
        appId: "tVCvWnQp",
        me: me
      });
      var other = new Talk.User({
        id: "654321",
        name: "ช่างสิน",
        email: "phutthichod@gmail.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?",
        role: "installer",
        custom: {
          lineUserId: "Ud8c0916bc67de1c985a22a8f77120efc",
        },
      });

      var conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
      conversation.setParticipant(me);
      conversation.setParticipant(other);
      var inbox = window.talkSession.createInbox({ selected: conversation });
      inbox.mount(talkjsContainer.current);

    })



  }, [])
  return (
    <div style={{ height: "440px" }} ref={talkjsContainer}></div>
  )
}
