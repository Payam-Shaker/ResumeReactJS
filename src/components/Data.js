import Utbildningimg from '../images/utbildning.png'
import Erfarenhetimg from '../images/erfarenhet.png'
import Sprakimg from '../images/sprak.png'
import Fritidimg from '../images/fritid.png'


const menus = [
    {
      id: 1,
      title: 'OM JAG',
      info:
        'Efter några års erfarenhet inom en annan bransch (restaurang) är jag på väg att bli systemutvecklare med fokus på .NET och SQL. Jag har ett brinnande intresse för webbutveckling och problemlösning med C#. Jag är en stark teammedlem och duktig på effektivt samarbete. Mitt mål är att få de kunskaperna som ett proffs äger. Jag letar efter nya utmaningar.',
    },
    {
      id: 2,
      title: 'Vad jag har läst...',
      info: <img src={Utbildningimg} class="img-fluid" alt="Responsive image"/>,  
        
    },
    {
      id: 3,
      title: 'Vad jag har jobbat med...',
      info: <img src={Erfarenhetimg} class="img-fluid" alt="Responsive image"/>, 
    },
    {
      id: 4,
      title: 'Jag pratar på...',
      info: <img src={Sprakimg} class="img-fluid" alt="Responsive image"/>, 
    },
    {
      id: 5,
      title: '...och i min fritid?',
      info: <img src={Fritidimg} class="img-fluid" alt="Responsive image"/>,
    },
  ]
  export default menus;