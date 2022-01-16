import { Button, createStyles, makeStyles, TextField } from "@material-ui/core";
import React, { FC } from "react";
import { FormData } from "../interface";

const useStyles = makeStyles((theme) =>
    createStyles({
        textArea: {
            marginRight: theme.spacing(2),
        },
    })
);

type Props = {
    data: FormData;
    inputChange: any;
    btnFunc: any;
};

const PostForm: FC<Props> = ({ data, inputChange, btnFunc }) => {
    const classes = useStyles();

    return (
        <form>
            <TextField
                id="name"
                label="タスク名"
                variant="outlined"
                className={classes.textArea}
                name="name"
                value={data.name}
                onChange={inputChange}
            />

            <TextField
                id="content"
                label="内容"
                variant="outlined"
                className={classes.textArea}
                name="content"
                value={data.content}
                onChange={inputChange}
            />
            <Button
                color="primary"
                variant="contained"
                href="/"
                onClick={btnFunc}
            >
                登録
            </Button>
        </form>
    );
};

export default PostForm;
