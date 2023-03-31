import React from "react";
import "./videoFooter.css";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@guscassiano</h3>
                <p>Descrição do Video</p>
                <div className="videoFooter__music">
                    <AudiotrackIcon className="vdeoFooter__icon"/>
                    <div className="videoFooterMusic__text">
                        <p>Título da musica</p>
                    </div>
                </div>
            </div>
            <img className="videoFooter___records" alt="Imagem de um vinil girando" src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"/>
        </div>
    );
}

export default VideoFooter;
