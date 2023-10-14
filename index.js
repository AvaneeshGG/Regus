const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
  ];

  let currentIndex = 0;

  function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackgroundImage, 10000);

let blockCount = 0;
let lid = 0;

function abtnclk() {
    if (blockCount <=3) {
    const newBlock = document.createElement('form');
    newBlock.className = 'block';
    lid++
    newBlock.id = 'list' + lid;
    newBlock.action = 'text.php';
    newBlock.method = 'post';
    const blockContainer = document.getElementById('blockContainer');
    blockContainer.appendChild(newBlock);
    blockCount++;
    
    const div = document.createElement('div');
        div.className = 'bar';
        
        const ul = document.createElement('ul');
        ul.style.fontFamily = 'SegoeFluent';
        
        const close = document.createElement('li');
        close.style.fontFamily = 'SegoeFluent';
        close.innerHTML = '&#xE8BB';
        
        const min = document.createElement('li');
        min.style.fontFamily = 'SegoeFluent';
        min.innerHTML = '&#xE921';
        
        ul.appendChild(close);
        ul.appendChild(min);
        
        div.appendChild(ul);
        
        newBlock.appendChild(div);

    const newField = document.createElement('input');
    newField.type='text';
    newField.id='titlefld' + lid;
    newField.name='titlefld' + lid;
    newField.className='ltbox';
    newField.placeholder = 'Enter title: ';
    newBlock.appendChild(newField);  
    }

    setTimeout(() => {
        document.getElementById('list' + lid).style.opacity = '1';
        document.getElementById('list' + lid).style.transition = 'opacity 0.4s ease';
    }, 10);
   
}