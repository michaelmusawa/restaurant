
import mandaziImage from './mandazi.jpeg';
import ugaliImage from './ugali.jpeg';
import chapatiImage from './chapati.jpeg';

export default function menu () {
        
    const mandaziContainer = document.createElement('div');
    mandaziContainer.classList.add("mandazi_container");
    const mandazi_img_container = document.createElement('div');
    mandazi_img_container.classList.add("mandazi_img_container");
    const mandazi_desc_container = document.createElement('div');

    const mandazi = document.createElement('img');
    mandazi.src = mandaziImage;
    mandazi.alt = 'Mandazi Image';
    mandazi_img_container.appendChild(mandazi);

    const mandaziCaption = document.createElement('p');
    mandaziCaption.innerText = 'Khs.30';
    mandazi_img_container.appendChild(mandaziCaption);

    const head_mandazi = document.createElement ('h4');
    head_mandazi.innerText='Mandazi ';
    mandazi_desc_container.appendChild(head_mandazi);

    const desc_mandazi = document.createElement('p');
    desc_mandazi.innerText ='Are you ready to tantalize your taste buds with a delicious and aromatic East African delicacy? Look no further than the mouth-watering mandazi! These delectable fried bread treats are a staple in the cuisine of Kenya, Tanzania, and Uganda, and for good reason. Made from a rich and flavorful dough, mandazi are often described as a cross between a donut and a muffin, with a texture that is both light and fluffy, yet satisfyingly chewy.' ;
    mandazi_desc_container.appendChild(desc_mandazi);

    mandaziContainer.appendChild(mandazi_img_container);
    mandaziContainer.appendChild(mandazi_desc_container);

    const chapatiContainer = document.createElement('div');
    chapatiContainer.classList.add("chapati_container");
    const chapati_img_container = document.createElement('div');
    chapati_img_container.classList.add("chapati_img_container");
    const chapati_desc_container = document.createElement('div');

    const chapati = document.createElement('img');
    chapati.src = chapatiImage;
    chapati.alt = 'chapati Image';
    chapati_img_container.appendChild(chapati);

    const chapatiCaption = document.createElement('p');
    chapatiCaption.innerText = 'Khs.50';
    chapati_img_container.appendChild(chapatiCaption);

    const head_chapati = document.createElement ('h4');
    head_chapati.innerText='chapati ';
    chapati_desc_container.appendChild(head_chapati);

    const desc_chapati = document.createElement('p');
    desc_chapati.innerText ='Get ready to savor the heavenly taste of Chapati, a delectable flatbread that is popular in many regions of East Africa, South Asia, and the Caribbean.This versatile bread is made from a simple combination of flour, water, oil, and salt, but its unique texture and flavor will leave you craving for more.' ;
    chapati_desc_container.appendChild(desc_chapati);

    chapatiContainer.appendChild(chapati_img_container);
    chapatiContainer.appendChild(chapati_desc_container);

    const ugaliContainer = document.createElement('div');
    ugaliContainer.classList.add("ugali_container");
    const ugali_img_container = document.createElement('div');
    ugali_img_container.classList.add("ugali_img_container");
    const ugali_desc_container = document.createElement('div');

    const ugali = document.createElement('img');
    ugali.src = ugaliImage;
    ugali.alt = 'ugali Image';
    ugali_img_container.appendChild(ugali);

    const ugaliCaption = document.createElement('p');
    ugaliCaption.innerText = 'Khs.100';
    ugali_img_container.appendChild(ugaliCaption);

    const head_ugali = document.createElement ('h4');
    head_ugali.innerText='ugali ';
    ugali_desc_container.appendChild(head_ugali);

    const desc_ugali = document.createElement('p');
    desc_ugali.innerText ='Get ready to indulge in the ultimate comfort food with Ugali, a traditional dish that is a staple in many East African households. Made from a simple combination of water and maize flour, Ugali is a hearty, filling dish that is sure to satisfy your cravings for something warm and comforting.' ;
    ugali_desc_container.appendChild(desc_ugali);

    ugaliContainer.appendChild(ugali_img_container);
    ugaliContainer.appendChild(ugali_desc_container);


    document.body.appendChild(mandaziContainer);
    document.body.appendChild(chapatiContainer);
    document.body.appendChild(ugaliContainer);



}