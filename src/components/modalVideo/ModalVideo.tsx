import { makeStyles, Theme, createStyles, Modal } from "@material-ui/core";
import { Dispatch, useCallback, useContext, useState } from "react";
import { API_KEY } from "../../api/config";
import { theMovieDbApi } from "../../api/theMovieDb";
import LanguageContext from "../../context/LanguageContext";
import { ILanguageContext } from "../../interfaces/ILanguageContext";

function getModalStyle() {  
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: "95%",
      maxWidth: "560px",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5]
    },
  }),
);

interface IVideo{
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: true,
    published_at: string,
    id: string
}

const ModalVideo = (props: { open: boolean, setOpen: Dispatch<boolean>, video: IVideo}) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    
    const { open, setOpen, video } = props
    const srcVideo = `https://www.youtube.com/embed/${video.key}`

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div style={modalStyle} className={classes.paper}>
                <iframe 
                    src={srcVideo}
                    title='video'
                    width="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    height="315"
                />
            </div>
      </Modal>
    )
}

export default ModalVideo
