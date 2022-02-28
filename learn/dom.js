
//    const links = document.querySelectorAll('a');
//    console.log(links);



//     const p = document.createElement('p');
// p.innerHTML = 'Hello world';
// document.body.append(p);

// document.body.style.background = 'palegoldenrod';
// p.style.color = red;

// p.addEventListener('click',()=>console.log('clicked'))

const divs = document.getElementsByTagName('div');
console.log(divs);

const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = '<strong> this ia a new post</strong>';

document.body.prepend(newPost);

document.body.addEventListener('click',event =>{
    if(!event.target.closest('.post')) return;
})