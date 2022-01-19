let app = new Vue ({
    el: "#miapp",
    data: {
        chatInput: "",
        activeIndex: 0, 
        user: {
            name: 'Nome utente',
            avatar: ''
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'https://icon-library.com/images/icon-avatars/icon-avatars-16.jpg',
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
                avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-14.jpg',
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
                avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg',
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
    methods: {
        addMessage: function(){
            this.contacts[this.activeIndex].messages.push({
                    date: "",
                    text: this.chatInput,
                    status: 'sent'
            })
        },
        selectChat: function(newIndex){
            this.activeIndex = newIndex;
        },
        isCorrente: function(index){
            if(index == this.activeIndex){
                return "active";
            }
            return "";
        },
    }
    
})
