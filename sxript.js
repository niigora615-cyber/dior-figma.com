function subscribe(){
  const email = document.getElementById('email').value;
  if(!email.includes('@email.com')){
    alert('неверный  email ?');
    return;
  }
  alert('Спасибо! Подписка оформлена 🚀');
  document.getElementById('email').value='';
}

function footerSubscribe(){
  const email = document.getElementById('footerEmail').value;
  if(!email || !email.includes('@gmail.com')){
    alert('неверный gmail');
    return;
  }
  alert('Вы успешно подписались 🚀');
  document.getElementById('footerEmail').value='';
}

const creators = [
  {name:'Keepitreal', img:'img/Artist Avatar.png'},
  {name:'DigiLab', img:'img/Artist Avatar (1).png'},
  {name:'GravityOne', img:'img/Artist Avatar (2).png'},
  {name:'Juanie', img:'img/Artist Avatar (3).png'},
  {name:'BlueWhale', img:'img/Artist Avatar (4).png'},
  {name:'Mr Fox', img:'img/Avatar.png'},
  {name:'Shroomie', img:'img/Artist Avatar (5).png'},
  {name:'Robotica', img:'img/Artist Avatar (6).png'},
  {name:'RustyRobot', img:'img/Avatar (3).png'},
  {name:'Animakid', img:'img/Artist Avatar (7).png'},
  {name:'Dotgu', img:'img/Avatar (2).png'},
  {name:'Ghibleer', img:'img/Artist Avatar (6).png'},
];

const grid = document.getElementById('creatorsGrid');

creators.forEach((c,i)=>{
  grid.innerHTML += `
    <div class="creator">
      <span class="rank">${i+1}</span>
      <img src="${c.img}" alt="">
      <h4>${c.name}</h4>
      <p>Total Sales: 34.53 ETH</p>
    </div>
  `;
});