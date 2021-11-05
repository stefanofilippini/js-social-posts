/* Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350 */

const posts = [
    {
        "nome_autore": 'Mattia Barbieri',
        "foto_profilo": 'https://picsum.photos/id/117/100/100',
        "data": '4 mesi fa',
        "post_text": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam alias numquam dolore porro, quisquam doloremque adipisci deleniti eaque cumque corporis eum ipsa tempore dolorum soluta repudiandae sequi quia in!',
        "img": 'https://picsum.photos/id/17/600/350',
        "like_num": 50,
    },
    {
        "nome_autore": 'Marco Chiesi',
        "foto_profilo": 'https://picsum.photos/id/112/100/100',
        "data": '4 mesi fa',
        "post_text": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam alias numquam dolore porro, quisquam doloremque adipisci deleniti eaque cumque corporis eum ipsa tempore dolorum soluta repudiandae sequi quia in!',
        "img": 'https://picsum.photos/id/28/600/350',
        "like_num": 2,
    },
    {
        "nome_autore": 'Luca Morellini',
        "foto_profilo": 'https://picsum.photos/id/32/100/100',
        "data": '4 mesi fa',
        "post_text": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam alias numquam dolore porro, quisquam doloremque adipisci deleniti eaque cumque corporis eum ipsa tempore dolorum soluta repudiandae sequi quia in!',
        "img": 'https://picsum.photos/id/41/600/350',
        "like_num": 34,
    },
    {
        "nome_autore": 'Marco Davoli',
        "foto_profilo": 'https://picsum.photos/id/56/100/100',
        "data": '4 mesi fa',
        "post_text": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam alias numquam dolore porro, quisquam doloremque adipisci deleniti eaque cumque corporis eum ipsa tempore dolorum soluta repudiandae sequi quia in!',
        "img": 'https://picsum.photos/id/53/600/350',
        "like_num": 17,
    },
    {
        "nome_autore": 'Mirko Marciano',
        "foto_profilo": 'https://picsum.photos/id/76/100/100',
        "data": '4 mesi fa',
        "post_text": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam alias numquam dolore porro, quisquam doloremque adipisci deleniti eaque cumque corporis eum ipsa tempore dolorum soluta repudiandae sequi quia in!',
        "img": 'https://picsum.photos/id/2/600/350',
        "like_num": 1000,
    },
    
]

const sectionTeam = document.querySelector('.posts-list')

for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
    createTeamsCards(posts[i])
}

function createTeamsCards(obj) {
    sectionTeam.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${obj.foto_profilo}" alt="${obj.nome_autore}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${obj.nome_autore}</div>
                        <div class="post-meta__time">${obj.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${obj.post_text}</div>
            <div class="post__image">
                <img src="${obj.img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${obj.like_num}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
}