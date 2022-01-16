import { Card, createStyles, makeStyles } from "@material-ui/core";
import axios, { AxiosError, AxiosResponse } from "axios";
import React, { FC, useEffect, useState } from "react";
import { FormData } from "../interface";
import PostForm from "./PostForm";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            margin: theme.spacing(5),
            padding: theme.spacing(3),
        },
    })
);

const PostEdit: FC = () => {
    const classes = useStyles();
    const { id } = useParams<{ id: string }>();
    const [editData, setEditData] = useState({ name: "", content: "" });

    useEffect(() => {
        getEditData();
    }, []);

    const getEditData = () => {
        axios
            .post("/api/edit", {
                id: id,
            })
            .then((res: AxiosResponse) => {
                setEditData(res.data);
            })
            .catch((err: AxiosError) => console.log(err));
    };

    const updatePost = () => {
        if (editData == { name: "", content: "" }) {
            return;
        }
        axios
            .post("/api/update", {
                id: id,
                name: editData.name,
                content: editData.content,
            })
            .then((res: AxiosResponse) => {
                setEditData(res.data);
            })
            .catch((err: AxiosError) => console.log(err));
    };

    const inputChange = (e: any) => {
        const key: keyof FormData = e.target.name;
        const value: string = e.target.value;
        editData[key] = value;
        console.log(editData);
        let data = Object.assign({}, editData);
        setEditData(data);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h1>タスク編集</h1>
                        <Card className={classes.card}>
                            <PostForm
                                data={editData}
                                inputChange={inputChange}
                                btnFunc={updatePost}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostEdit;
