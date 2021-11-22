import { makeStyles, Theme, createStyles, Modal } from "@material-ui/core";
import { Dispatch, useState } from "react";
import { IVideo } from "../../interfaces/IVideo";

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

interface IModalVideoProps {
    open: boolean, 
    setOpen: Dispatch<boolean>, 
    video: IVideo
}

const ModalVideo = (props: IModalVideoProps) => {
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
