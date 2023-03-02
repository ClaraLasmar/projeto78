var images = [ "https://storage.googleapis.com/pod_public/1300/93631.jpg","https://media.semprefamilia.com.br/semprefamilia/2016/04/bigstock-mother-i-love-you-so-much-in-89147255-30a51300.jpg" , "https://cdn4.vectorstock.com/i/1000x1000/01/38/gamer-boy-play-game-on-computer-silhouette-vector-27880138.jpg" ,        "https://img.elo7.com.br/product/zoom/309A4A2/camiseta-adulto-significado-de-pai-dicionario-1.jpg","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elo7.com.br%2Fcaneca-personalizada-mais-chegada-do-que-irma%2Fdp%2F12F032D&psig=AOvVaw3CO1Q8ElzMJahNGtflLm0G&ust=1677850564822000&source=images&cd=vfe&ved=0CBAQjRxqGAoTCNjNj8quvf0CFQAAAAAdAAAAABCdAQ"    ];
           
var names = ["","Mãe ", "Eu", "Pai","Irmã"];
          
var i = 0;
function update()

{
     i++;
     
     if(i >4 )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}