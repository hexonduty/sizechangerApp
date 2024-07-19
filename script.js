const result = document.getElementById('result');


result.addEventListener('click', function() {
    // `userText` ID'sine sahip input elemanının değerini al
    const userText = document.getElementById('userText');
    const text = document.getElementById('texts');
    const size= document.getElementById('size').value;

    // Eğer kullanıcı bir değer girdiyse, `texts`'in stilini ayarla
    if (size) {
        if(size >=50){
            text.innerHTML = "Büyük bir yazı boyutu girdiniz!!!"
        }
        else{
            text.style.fontSize = `${size}px`;
            text.innerHTML = userText.value;
        }
       
    } else {
        // Eğer değer girilmemişse varsayılan bir font boyutu ayarla
        text.style.fontSize = '16px'; // Varsayılan bir değer
    }
});
