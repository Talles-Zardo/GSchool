let image = document.getElementById('image')
let counter = 2;
function swap(){
    if (counter%2 == 0){
        image.src = 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg'
        counter++;
        return;
    } else{
        image.src = 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg'
        counter++;
    }
   
}