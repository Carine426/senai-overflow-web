import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GitsIcon, Main, Post } from "./styles";
 
function Home(){
    return (
        <>
        <Header/>
           
        <Main>
            <nav>
               Profile
            </nav>
            <FeedContainer>
                <PostCard/>
                </FeedContainer>
                
                <aside>

                </aside>
            </Main>
        </>
    );
}

function PostCard(){
    return (
        <Post>
        <header>
             <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
             <div>
                 <strong>
                      Por fulano de tal
                 </strong>
                 <p>
                     em 18/08/2021 as 8:23
                 </p>
             </div>
             <GitsIcon/>

        </header>
        <main>
            <div>
                <h1> Titulo</h1>
                <p>Descrição da postagem bla bla bla</p>
            </div>
          <img src="https://images4.alphacoders.com/680/thumb-1920-680459.jpg"/>
          <section>
              <p>Front-end</p>
              <p>CSS</p>
              <p>JS</p>
          </section>
        </main>
        <footer>
            <h2>Comentários</h2>
      <Coments/>

      
              </footer>
          </Post>
    );
}
 
export default Home;
    
    
  
  

