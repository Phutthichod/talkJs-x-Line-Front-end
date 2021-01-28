import Talk from "talkjs";
import { useEffect, createRef } from 'react'
import { useRouter } from 'next/router'
const users = {
    1: {
        id: "856596",
        name: "คุณ พุทธิโชติ",
        email: "phutthichod@gmail.com",
        photoUrl: "https://profile.line-scdn.net/0hIR9AIz1NFn0EOD8g0jJpKjh9GBBzFhA1fAoKGyk5QUUqDFJ7MQ4OSHE-Th8pDwMraF5RTiE-Gk8s",
        welcomeMessage: "Hey there! How are you? :-)",
        role: "buyer"
    },
    2: {
        id: "123456",
        name: "คุณ วุฒิชัย",
        email: "phutthichod@gmail.com",
        photoUrl: "https://profile.line-scdn.net/0hKZPPmaGJFHVtKT3-0QtrIlFsGhgaBxI9FRtfQxx9HhEQHlcmAhhSFBwtThUTEAElBR9eEUAvHUIQ",
        welcomeMessage: "Hey there! How are you? :-)",
        role: "buyer"
    }
}
export default function Home(props) {

    const route = useRouter()
    const { id } = route.query
    const talkjsContainer = createRef();
    useEffect(() => {
        // const currentUser = props.currentUser;
        Talk.ready.then(() => {

            var me = new Talk.User(users[id]);
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



    }, [route])
    return (
        <div style={{ height: "440px" }} ref={talkjsContainer}></div>
    )
}
