import "./App.css";
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="App__videos">
        <Video likes={111} messages={222} shares={333} name="Paulo" description="Brecker o goleiro" music="Música épica" url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"/>
        <Video likes={152} messages={278} shares={145} name="Pedro" description="Bird olhando para câmera" music="Clap Your Hands" url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"/>
        <Video likes={258} messages={183} shares={253} name="Maria" description="Frajola pegando pulseira" music="Música orquestrada" url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"/>
        <Video likes={84} messages={15} shares={20} name="Gustavo" description="Brecker o goleiro" music="Clap Your Hands" url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"/>
      </div>
    </div>
  );
}

export default App;
