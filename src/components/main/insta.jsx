
// // Getting data from Instagram API, you don't have one? Let's take a look there https://www.instagram.com/developer/



// function getInstagramData() {
//     const userid = '2470076526';
//     const secret = '2470076526.b706cbe.eaa4e8a8c88b4a91ac2b73bc2ef2add2';
//     const limit  = '6';
//     const url = 'https://api.instagram.com/v1/users/'+userid+'/media/recent/?access_token='+secret+'&count='+limit+'&callback=?';
//     return axios.get(url).then(response => response.data);
//   }
  
//   // This structure or method also can be used with other API's for example Blog with Ghost
//   class Gallery extends React.Component {
//     constructor() {
//       super()
//       this.state = { ig: [] };
//     }
//     getInstagram() {
//       getInstagramData().then((ig) => {
//         this.setState({ ig: ig.data });
//       });
//     }
//     componentDidMount() {
//       this.getInstagram();
//     }
//     render() {
//       const { ig }  = this.state;
//       return (
//         <section id="gallery" className="p-0">
//           <div className="container-fluid p-0">
//             <div className="row no-gutters">
//             { ig.map((item, index) => (
//               <div className="col-lg-4 col-sm-6" key={index}>
//                 <div className="gallery-box">
//                   <img className="img-fluid" src={item.images.standard_resolution.url} alt={item.caption.text} />
//                   <div className="gallery-box-caption">
//                     <div className="gallery-box-caption-content">
//                       <div className="text-faded">
//                         {item.caption.text}  
//                         <hr/>
//                         <span>{item.likes.count} likes {item.comments.count} comments </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Gallery />,
//     document.getElementById('app')
//   );
  