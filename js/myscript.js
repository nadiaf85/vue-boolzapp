let app = new Vue ({
    el: "#miapp",
    data: {
        search: '',
        chatInputBottom: '',
        contatore: 0, 
        correnteArrow: null,
        user: {
            name: 'Nome utente',
            avatar: ''
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'https://www.pngarts.com/files/3/Avatar-Transparent-Image.png',
                visible: true,
                messagges: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],

            },
            {
                name: 'Fabio',
                avatar: 'https://icon-library.com/images/icon-avatars/icon-avatars-20.jpg',
                visible: true,
                messagges: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],

            },
            {
                name: 'Samuele',
                avatar: 'https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png',
                visible: true,
                messagges: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],

            },
            {
                name: 'Luisa',
                avatar: 'https://www.levibio.it/wp-content/uploads/2019/03/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg',
                visible: true,
                messagges: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],

            }, 
        ]
    },
    updated: function(){
        this.scroll()
    },
    methods: {
        messageSend: function(){
            this.contacts[this.contatore].messagges.push({
                    text: this.chatInputBottom,
                    status: 'sent'
            })
                this.chatInputBottom = '';
                status: 'received'
                setTimeout(this.messageAnswer,1000)
                console.log()
        },
        selectChat: function(newIndex){
            this.contatore = newIndex;
            this.correnteArrow=null
        },
        isCurrent: function(index){
            if(index == this.contatore){
                return "active";
            }
            return "";
        },
        messaggesChat:function(index){
            if(this.contacts[this.contatore].messagges[index].status == 'received'){
                return 'messages_user_left'
            }else{
                return 'messages_user_right'
            }
        },
        messageAnswer: function(){
            this.contacts[this.contatore].messagges.push({
                    date: dayjs ().format ("DD/MM/YYYY HH:mm:ss"),
                    text: 'ok',
                    status: 'received'
            })
        },
        getVisible: function(index){
            if(this.contacts[index].visible ==true){
                return 'active'
            }else{
                return 'notActive'
            }
        },
        filterName: function(){
            for(i = 0; i<this.contacts.length; i++){
                if(this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())){
                    this.contacts[i].visible = true;
                }else{
                    this.contacts[i].visible = false;
                }
            }
        },
        arrowDownMenu: function(index){
            if(this.correnteArrow == index){
                this.correnteArrow = null
            }else{
                this.correnteArrow=index
            }
        },
        scroll: function(){
            const chat = document.querySelector('.messagges')
            chat.scrollTop = chat.scrollHeight;
            console.log(chat.scrollTop)
        },
        deleteMessage: function(index){
            this.contacts[this.contatore].messagges.splice(index,1);
        }
    }
})


