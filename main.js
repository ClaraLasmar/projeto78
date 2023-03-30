var images = [ "https://storage.googleapis.com/pod_public/1300/93631.jpg",
"https://media.semprefamilia.com.br/semprefamilia/2016/04/bigstock-mother-i-love-you-so-much-in-89147255-30a51300.jpg" ,
 "https://media.istockphoto.com/id/601156574/vector/vector-silhouette-of-a-woman-with-a-wedding-hairstyle.jpg?s=612x612&w=0&k=20&c=kNNUm_NqbyFugjgy2gOTFpSepINg0v0GLLEvQdbMcCc=",
        "https://img.elo7.com.br/product/zoom/309A4A2/camiseta-adulto-significado-de-pai-dicionario-1.jpg",
    "https://media.istockphoto.com/id/601156574/vector/vector-silhouette-of-a-woman-with-a-wedding-hairstyle.jpg?s=612x612&w=0&k=20&c=kNNUm_NqbyFugjgy2gOTFpSepINg0v0GLLEvQdbMcCc="
    ];
           
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