const burro = new Image();
burro.src = "./img/burro.jpg";
const gallina = new Image();
gallina.src = "./img/gallina.jpg";
let cont = 0;
let cont2 = 0;
function anim(){

    ctx.font = 'bold 20px Arial';
    ctx.lineWidth = 10;

    ctx.strokeStyle = 'white'; // Contorno negro
    ctx.fillStyle = 'black'; 
    
    ctx.drawImage(burro,cont,200,100,100);
    ctx.fillText("Weles", cont, 320)
    ctx.drawImage(gallina, 300,200,200,100);
    ctx.fillText("Gallinas", 300, 320)
    if(cont <150)
        cont+=2;
    
    else{
        cont2++;
        if(cont2 < 100)
            ctx.fillText("Hola Weles Pequeños", 300,200)
        else if(cont2 <200)
            ctx.fillText("Hola Gallina", 150,200)
        else if(cont2 <350)
            ctx.fillText("Te amo pequeños y aquí están también tus hijitos gallinitas", 300,200)
        else if(cont2 <400)
            ctx.fillText("También Te amo y están bonitos", 150,200)
        


    }

    
}